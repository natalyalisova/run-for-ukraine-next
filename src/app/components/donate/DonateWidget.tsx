'use client'
import React, { useState, useEffect, useRef } from 'react';
import DonateForm from './DonateWidgetForm';
import {wave } from '@/lib/axiosInstances';


interface DonateWidgetCampaign {
    slug: string,
    collected: number,
}

interface DonateWidgetTab {
    url: string,
    tab_id: string,
    paid: boolean,
}


export interface DonateWidgetProps {
    campaign: string;
    showCollections: boolean;
    targetCollections?: number;
}

function DonateWidget(props: DonateWidgetProps) {
    const [campaignData, setCampaignData] = useState({
        slug: props.campaign,
        collected: 0
    } as DonateWidgetCampaign);
    const [tab, setTab] = useState(undefined as DonateWidgetTab | undefined);
    const [trackConv, setTrackConv] = useState(true);
    const breakPoll = useRef(false);
    const today = new Date().toISOString().slice(0, 10);

    const openPaymentForm = (tabToOpen: DonateWidgetTab) => {
        setTimeout(() => {
            window.open(tabToOpen.url, "", "width=1024, height=768");
        })
    }

    const pollForPayment = (tabAsArgument?: DonateWidgetTab, counter = 1) => {
        wave.get(`/tab/${tabAsArgument?.tab_id}`).then(result => {
            if (!result.data.paid && counter <= 120) {
                if (!breakPoll.current) {
                    setTimeout(() => pollForPayment(tabAsArgument, counter + 1), 5000);
                } else {
                    breakPoll.current = false;
                }
            } else {
                setTab(result.data);
                if (props.showCollections) {
                    fetchCampaign();
                }
            }
        });
    }

    const onTabCreated = (tab: DonateWidgetTab) => {
        setTab(tab);
        localStorage.setItem(`tab-in-progress-${props.campaign}-${today}`, JSON.stringify(tab));
        // openPaymentForm(tab);
        pollForPayment(tab);
    }

    const handleDonationCancel = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setTab(undefined);
        breakPoll.current = true;
        setTrackConv(true);
    }

    const fetchCampaign = () => {
        wave.get(`/campaign/${props.campaign}`).then((result) => {
            setCampaignData(result.data.campaign);
        });
    }

    useEffect(() => {
        // Load Campaign details
        if (props.showCollections) {
            fetchCampaign();
        }

        // Check local storage for existing donation Tab
        const items = localStorage.getItem(`tab-in-progress-${props.campaign}-${today}`);
        if (items) {
            const parsedTab: DonateWidgetTab = JSON.parse(items)
            setTab(parsedTab);
            pollForPayment(parsedTab);
        }
    }, [])

    useEffect(() => {
        if (tab && tab.paid && trackConv) {
            fbq.event('Donate', {tabId: tab.tab_id, tabUrl: tab.url});
            gtag.event({action: 'donate', category: 'donations', label: 'Donation', value: 1});
            setTrackConv(false);
        }
    }, [tab])

    const handleClickDonation = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (tab) {
            openPaymentForm(tab);
        }
    }

    return (
        <div className="sfua-widget">
            {props.showCollections && !props.targetCollections ? (
                <p>Collected to date: <strong>${campaignData.collected / 100}</strong></p>
            ) : null}
            {props.targetCollections ? (
                <div className="sfua-widget-progress-container">
                    <div>
                        <p>Raised: <strong>${campaignData.collected / 100}</strong></p>
                        <p>Goal: <strong>${props.targetCollections}</strong></p>
                    </div>
                    <progress max={props.targetCollections} value={campaignData.collected / 100}></progress>
                </div>
            ) : null}
            {tab ? tab.paid ? (
                <div>
                    <p>Thank you for supporting Ukraine! <br />💙&nbsp;💛 <br /><a href="#" onClick={handleDonationCancel}>Click here to make another contribution</a></p>
                </div>
            ) : (
                <div>
                    <p>Processing <a href="#" onClick={handleClickDonation}>your donation</a> in another window. <br /><a href="#" onClick={handleDonationCancel}>Click here to cancel</a>.
                    </p>
                </div>
            ) : (
                <div>
                    <DonateForm campaign={props.campaign} onTabCreated={onTabCreated} />
                </div>
            )}
        </div>
    );
}

export default DonateWidget;
