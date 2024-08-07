import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const RegistrationOnlineSuccessful = () => {
  return (
    <div className=" <flex flex-col max-w-screen-sm mx-auto my-20 md:mt-52 p-6">
      <h2 className="text-xl md:text-4xl font-semibold text-start">
        You have registered for the online race!
      </h2>
      <p className="mt-4 mb-2">
        We have received your registration request for the Independence Charity
        #RunForUkraine 2024. When we receive confirmation of your payment, we
        will contact you via the e-mail address you provided during
        registration.
      </p>

      <p className="mt-2 font-semibold">
        <FontAwesomeIcon
          icon={faCircleExclamation}
          style={{ color: "#0057b8" }}
          className="mr-4"
        />{" "}
        Please make sure to check your email for further instructions and
        updates as we get closer to the event date.
      </p>
      <p className="mt-2">
        <span className="font-semibold mr-2">Date:</span>🗓️ Run between 10th of
        Aug and 10th of Sep 2024
      </p>
      <p>
        <span className="font-semibold mr-2">Location:</span>📍 Run anywhere
      </p>
      <p className="mt-2">
        <span className="font-semibold mr-2">Distance:</span>🏃 Any distance
      </p>
      <p className="mt-2">
        If you have any questions, feel free to contact our support team at
        <a
          href="mailto:runforukraineil@gmail.com"
          className="text-strong-azure font-semibold ml-1"
        >
          runforukraineil@gmail.com
        </a>
        . We look forward to seeing you at the starting line!
      </p>
      <p className="my-4">Best regards, The #RunForUkraine Team</p>
      <div className="flex content-center justify-center">
        <Link
          href={"/"}
          className="mt-6 p-3 rounded-md bg-white outline outline-2 outline-strong-azure text-strong-azure font-semibold hover:bg-blue-50 focus:outline-none"
        >
          Go to main page
        </Link>
      </div>
    </div>
  );
};

export default RegistrationOnlineSuccessful;
