"use client";
import React, { useEffect, useRef, useState } from "react";
import DonateForm from "./DonateWidgetForm";
import { wave } from "@/lib/axiosInstances";
import { Progress } from "@material-tailwind/react";

interface DonateWidgetCampaign {
  slug: string;
  collected: number;
}

interface DonateWidgetTab {
  url: string;
  tab_id: string;
  paid: boolean;
}

export interface DonateWidgetProps {
  campaign: string;
  showCollections: boolean;
  targetCollections?: number;
  donateType?: string;
  goalTranslation?: string;
  collectDateTranslation?: string;
  raisedTranslation?: string;
  thankYouTranslation?: string;
  anotherContributionTranslation?: string;
  processingTranslation?: string;
  yourDonationTranslation?: string;
  anotherWindowTranslation?: string;
  cancelTranslation?: string;
  selectAmountTranslation?: string;
  includeEmailTranslation: string;
  enterAmountTranslation?: string;
  emailOptionalTranslation?: string;
  fullNameOptionalTranslation?: string;
  addNoteTranslation: string;
  registerTranslation?: string;
  donateTranslation?: string;
}

function DonateWidget(props: DonateWidgetProps) {
  const [campaignData, setCampaignData] = useState({
    slug: props.campaign,
    collected: 0,
  } as DonateWidgetCampaign);
  const [tab, setTab] = useState(undefined as DonateWidgetTab | undefined);
  const [trackConv, setTrackConv] = useState(true);
  const breakPoll = useRef(false);
  const today = new Date().toISOString().slice(0, 10);

  const openPaymentForm = (tabToOpen: DonateWidgetTab) => {
    setTimeout(() => {
      window.open(tabToOpen.url, "", "width=1024, height=768");
    });
  };

  const pollForPayment = (tabAsArgument?: DonateWidgetTab, counter = 1) => {
    wave.get(`/tab/${tabAsArgument?.tab_id}`).then((result) => {
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
  };

  const onTabCreated = (tab: DonateWidgetTab) => {
    setTab(tab);
    localStorage.setItem(
      `tab-in-progress-${props.campaign}-${today}`,
      JSON.stringify(tab),
    );
    // openPaymentForm(tab);
    pollForPayment(tab);
  };

  const handleDonationCancel = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setTab(undefined);
    breakPoll.current = true;
    setTrackConv(true);
  };

  const fetchCampaign = () => {
    wave.get(`/campaign/${props.campaign}`).then((result) => {
      setCampaignData(result.data.campaign);
    });
  };

  useEffect(() => {
    // Load Campaign details
    if (props.showCollections) {
      fetchCampaign();
    }

    // Check local storage for existing donation Tab
    const items = localStorage.getItem(
      `tab-in-progress-${props.campaign}-${today}`,
    );
    if (items) {
      const parsedTab: DonateWidgetTab = JSON.parse(items);
      setTab(parsedTab);
      pollForPayment(parsedTab);
    }
  }, []);

  useEffect(() => {
    if (tab && tab.paid && trackConv) {
      fbq.event("Donate", { tabId: tab.tab_id, tabUrl: tab.url });
      gtag.event({
        action: "donate",
        category: "donations",
        label: "Donation",
        value: 1,
      });
      setTrackConv(false);
    }
  }, [tab]);

  const handleClickDonation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (tab) {
      openPaymentForm(tab);
    }
  };

  return (
    <div className="sfua-widget">
      {props.showCollections && !props.targetCollections ? (
        <>
          <h2 className="text-xl uppercase text-left">
            {props.collectDateTranslation}
          </h2>
          <h1 className="text-6xl font-semibold">
            ${campaignData.collected / 100}
          </h1>
        </>
      ) : null}
      {props.targetCollections ? (
        <div className="my-6">
          <h2 className="text-xl uppercase text-left">
            {props.goalTranslation ?? "Goal"}
          </h2>
          <h1 className="text-6xl font-semibold">
            CAD ${props.targetCollections}
          </h1>

          <div className="flex justify-between mt-3">
            <div className="text-left uppercase text-small">
              {props.raisedTranslation ?? "Raised"}
              <h2 className="text-xl font-semibold">
                ${campaignData.collected / 100}
              </h2>
            </div>
            <div className="text-right uppercase text-small">
              {props.goalTranslation ?? "Goal"}
              <h2 className="text-xl font-semibold">
                ${props.targetCollections}
              </h2>
            </div>
          </div>
          <Progress
            value={campaignData.collected / props.targetCollections}
            size="sm"
            color="blue"
            className="bg-gray-900/5 "
          />
        </div>
      ) : null}
      {tab ? (
        tab.paid ? (
          <div>
            <p>
              {props.thankYouTranslation ?? "Thank you for supporting Ukraine!"}{" "}
              <br />
              💙&nbsp;💛 <br />
              <a href="#" onClick={handleDonationCancel}>
                {props.anotherContributionTranslation}
              </a>
            </p>
          </div>
        ) : (
          <div>
            <p>
              {props.processingTranslation ?? "Processing"}
              <a href="#" onClick={handleClickDonation}>
                {props.yourDonationTranslation ?? "your donation"}
              </a>
              {props.anotherWindowTranslation ?? "in another window."} <br />
              <a
                href="#"
                onClick={handleDonationCancel}
                className="underline underline-offset-2 text-strong-azure"
              >
                {props.cancelTranslation ?? "Click here to cancel"}
              </a>
              .
            </p>
          </div>
        )
      ) : (
        <div>
          <DonateForm
            campaign={props.campaign}
            onTabCreated={onTabCreated}
            donateType={props.donateType}
            selectAmountTranslation={props.selectAmountTranslation}
            includeEmailTranslation={props.includeEmailTranslation}
            enterAmountTranslation={props.enterAmountTranslation}
            emailOptionalTranslation={props.emailOptionalTranslation}
            fullNameOptionalTranslation={props.fullNameOptionalTranslation}
            addNoteTranslation={props.addNoteTranslation}
            registerTranslation={props.registerTranslation}
            donateTranslation={props.donateTranslation}
          />
        </div>
      )}
    </div>
  );
}

export default DonateWidget;
