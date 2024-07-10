"use client";
import { UnderConstraction } from "../../components/UnderConstraction";
import TextGradient from "@/app/components/AnimatedTextGradient";
import React from "react";
import Button from "@/app/components/Button";
import Link from "next/link";

export default function PaymentIndependencePage() {
  const handleButtonClick = () => {
    window.open(
      "https://send.monobank.ua/jar/3o9J76qxHe",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <>
      <UnderConstraction />
      <div className="flex items-center p-6 flex-col ">
        <div className="justify-start py-3 max-w-md">
          <TextGradient text={"Pay for a race"} />
          <p className="my-6">
            If you want to support Ukraine, please contribute to our Monobank
            jar:
          </p>
          <div className="bg-amber-400 p-3 my-3 font-bold">
            <p className="text-xl"> Payment Form in Test Mode!</p>
            <p>
              Please note that our payment form is currently in test mode and is
              not yet active. We are working hard to ensure everything is set up
              correctly and securely for you. We appreciate your patience and
              understanding!
            </p>
          </div>
          <Link
            href={"/inndependence"}
            className="m-2 md:bg-transparent  md:p-0  mt-4 lg:inline-block lg:mt-0 text-strong-azure hover:text-cyan-500 mr-4 underline"
            aria-current="page"
          >
            &larr; Return to registration form
          </Link>
          <div className="b">
            <Button
              title={"Donate"}
              handleClick={handleButtonClick}
              isSubmitting={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}
