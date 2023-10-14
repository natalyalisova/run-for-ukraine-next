"use client";
import React, { useEffect, useState } from "react";
import { wave } from "@/lib/axiosInstances";

interface DonateWidgetCampaign {
  slug: string;
  collected: number | null;
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
}

function DonateWidgetInfo(props: DonateWidgetProps) {
  const [campaignData, setCampaignData] = useState({
    slug: props.campaign,
    collected: null,
  } as DonateWidgetCampaign);

  const today = new Date().toISOString().slice(0, 10);

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
    }
  }, []);

  return (
    <div className="sfua-widget">
      <div className="flex flex-row self-center pb-1 items-center ">
        <p className="text-white text-2xl md:text-5xl">
          {campaignData.collected !== null ? campaignData.collected / 100 : "…"}
        </p>
        <p className="text-white  text-base md:text-lg opacity-50 ml-2">
          / {props.targetCollections} km
        </p>
      </div>
    </div>
  );
}

export default DonateWidgetInfo;
