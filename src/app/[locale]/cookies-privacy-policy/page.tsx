"use client";
import React from "react";

const CookiesPrivacyPolicy = () => {
  return (
    <div className="flex flex-col mt-20 md:mt-52 mb-24  max-w-screen-sm mx-auto p-6">
      <h1 className="title-secondary">Cookies Privacy Policy</h1>
      <div className="mt-4 h-1 w-64 bg-yellow-gold mx-auto mb-6"></div>
      <p>
        <span className="font-semibold">Personal Information:</span>
        <br />
        &#8226; We may collect and process the following personal information:
        Name, Email address, Contact information.
      </p>
      <p className="mt-3">
        <span className="font-semibold">What Data We Collect:</span>
        <br />
        &#8226; Cookies We use cookies and similar technologies to enhance user
        experience, analyze website traffic, and personalize content. By using
        our website, you agree to the use of cookies as described in this
        policy.
      </p>
      <p className="mt-3">
        <span className="font-semibold">How We Use Your Information:</span>
        <br />
        &#8226; We use the collected information for the following purposes:
        User registration and authentication Communication with users Providing
        and improving our services Analytics and research
      </p>
      <p className="mt-3">
        <span className="font-semibold">Third-Party Services:</span>
        <br />
        &#8226; We may use third-party services for authentication, analytics,
        and other purposes. These services may collect and process your
        information in accordance with their privacy policies.
      </p>
      <p className="mt-3">
        <span className="font-semibold">Security:</span>
        <br />
        &#8226; We take reasonable measures to protect your information.
        However, no method of transmission over the internet or electronic
        storage is completely secure. Therefore, we cannot guarantee absolute
        security.{" "}
      </p>
      <p className="mt-3">
        <span className="font-semibold">Your Choices:</span>
        <br />
        &#8226; Your Choices You have the right to: Access, correct, or delete
        your personal information Opt-out of certain data processing activities.
        Disable cookies through your browser settings.
      </p>
      <p className="mt-3">
        <span className="font-semibold">Children's Privacy:</span>
        <br />
        &#8226; Our services are not directed at individuals under the age of
        18. If you are a parent or guardian and believe your child has provided
        us with personal information, please contact us.
      </p>
      <p className="mt-3">
        <span className="font-semibold">Changes to This Policy:</span>
        <br />
        &#8226; We may update this policy periodically. We will notify you of
        any significant changes through our website or other communication
        channels.
      </p>
      <p className="mt-3">
        <span className="font-semibold">Contact Us:</span>
        <br />
        &#8226; If you have any questions or concerns about this policy, please
        contact us at{" "}
        <a
          href="mailto:yourmail@domain.com"
          className="underline underline-offset-1 rounded hover:text-strong-azure "
        >
          runforukraineil@gmail.com
        </a>
        .
      </p>
    </div>
  );
};

export default CookiesPrivacyPolicy;
