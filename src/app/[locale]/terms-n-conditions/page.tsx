import TextGradient from "@/app/components/AnimatedTextGradient";
import React from "react";

const TermsNConditions = () => {
  return (
    <div className="h-screen flex flex-col mt-12  max-w-screen-sm mx-auto">
      <h1 className="title-secondary">Terms and conditions </h1>
      <div className="mt-4 h-1 w-64 bg-yellow-gold mx-auto mb-6"></div>
      <p>
        Your privacy is important to us, and we are committed to protecting your
        personal information in accordance with the General Data Protection
        Regulation (GDPR).
      </p>
      <p className="mt-3">
        <span className="font-semibold">What Data We Collect:</span>
        <br />
        &#8226; Only your name amd email address to communicate with you.{" "}
      </p>
      <p className="mt-3">
        <span className="font-semibold">How We Use Your Data:</span>
        <br />
        &#8226; We use your data only for possibility co communicate with you
        and display it when you'll decide start a fundraising campaign.
      </p>
      <p className="mt-3">
        <span className="font-semibold">Data Sharing and Transfer:</span>
        <br />
        &#8226; We will not share your personal data with any other web services
        or applications. Your Rights: • You have the right to access, correct,
        delete, or transfer your data. • You can withdraw your consent at any
        time.
      </p>
    </div>
  );
};

export default TermsNConditions;
