"use client";
import React, { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabaseCliet";
import TextGradient from "@/app/components/AnimatedTextGradient";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronLeft,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import TermsNConditions from "@/app/components/TermsNConditions";

const RegistrationForRunOnlineForm = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [donation, setDonation] = useState<string>("150");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");

  const t = useTranslations("RegistrationForRunOnlineForm");

  const [existingRegistration, setExistingRegistration] =
    useState<boolean>(false);

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset error and existing registration status before new submission attempt
    setError(null);
    setExistingRegistration(false);

    // Check for email duplication
    const { data, error: fetchError } = await supabase
      .from("race_registrations_online")
      .select("email")
      .eq("email", email)
      .maybeSingle();

    if (fetchError) {
      setError(fetchError.message);
      return;
    }

    if (data) {
      setExistingRegistration(true);
      setError("This Email is already registered for the race");
      return;
    }

    const { error: insertError } = await supabase
      .from("race_registrations_online")
      .insert([{ email, name, donation: parseInt(donation) }]);

    if (insertError) {
      setError(insertError.message);
    } else {
      const donationAmount = parseInt(donation);
      const monobankUrl = `https://send.monobank.ua/jar/3o9J76qxHe?amount=${donationAmount}`;
      window.open(monobankUrl, "_blank", "noopener,noreferrer");
      router.push("/registration-online-successful");
    }
  };

  const router = useRouter();
  return (
    <main className="flex items-center p-6 flex-col">
      <Link
        href={"/run-independence-2024"}
        className="underline underline-offset-4 text-strong-azure mr-auto"
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          style={{ color: "#0057b8" }}
          width={25}
          height={25}
        />
        <span className="ml-2">{t("return")}</span>
      </Link>
      <div className="text-center max-w-screen-md mt-4">
        <TextGradient text={t("title")} />
        <div className="mt-2 md:mt-4 h-1 w-64 bg-yellow-gold mx-auto mb-6"></div>
        <div className="max-w-3xl text-start md:mx-auto text-small md:text-lg">
          <p className="mt-2">
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: "#0057b8" }}
              className="mr-4"
              width={25}
              height={25}
            />
            {t("description-1")}
          </p>
          <p className="mt-2">
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: "#0057b8" }}
              className="mr-4"
              width={25}
              height={25}
            />
            {t("description-2")}
          </p>
          <p className="mt-2">
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: "#0057b8" }}
              className="mr-4"
              width={25}
              height={25}
            />
            {t("description-3")}
            <Link
              href={
                "https://www.instagram.com/runforukraine?igsh=cjlxdTIxcGRjd3Nl"
              }
              target="_blank"
              className="underline underline-offset-2 text-strong-azure font-semibold mx-2"
            >
              @runforukraine
            </Link>
            {t("description-4")}{" "}
            <span className="font-bold text-xl">#RunForUkraine </span>
            {t("description-10")}
          </p>
          <form onSubmit={handleRegister} className="mt-12 mx-auto ">
            <div className="md:w-96">
              <input
                type="text"
                value={name}
                name="name"
                placeholder={t("description-5")}
                className="inputStyle rounded-md p-3"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                value={email}
                name="email"
                placeholder={t("description-6")}
                className={`mb-4 w-full bg-white text-black placeholder-gray-600 focus:outline-none focus:border-strong-azure focus:border-2 rounded-md p-3 ${
                  existingRegistration
                    ? "border-2 border-rose-600"
                    : "border border-gray-300"
                }`}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setExistingRegistration(false);
                  setError(null); // Reset error on email change
                }}
                required
              />
              {existingRegistration && (
                <p className="text-red-600 font-bold mb-4">
                  {t("existing-email")}
                </p>
              )}
            </div>
            <div>
              <div className="mb-2">
                <p className="text-start">{t("description-7")}</p>
                <Link
                  href={
                    "https://www.xe.com/currencyconverter/convert/?Amount=1&From=USD&To=UAH"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-xl underline underline-offset-4 text-strong-azure mb-2"
                >
                  &#36; 1 &cong; &#8372; 41
                </Link>
              </div>

              <div className="md:w-96 py-4">
                <FormControl fullWidth className="mt-2">
                  <InputLabel id="donation-select-label">
                    {t("description-8")} &#8372; 150
                  </InputLabel>
                  <Select
                    labelId="donation-select-label"
                    id="donation-simple-select"
                    value={donation}
                    label="Donation"
                    onChange={(e) => setDonation(e.target.value)}
                  >
                    <MenuItem value={150}>&#8372; 150</MenuItem>
                    <MenuItem value={300}>&#8372; 300</MenuItem>
                    <MenuItem value={500}>&#8372; 500</MenuItem>
                    <MenuItem value={1000}>&#8372; 1000</MenuItem>
                    <MenuItem value={2000}>&#8372; 2000</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <TermsNConditions
              isChecked={isChecked}
              setIsChecked={setIsChecked}
            />
            {error && <p>{error}</p>}
            {message && <p>{message}</p>}
            <p className="text-start font-bold mt-2 bg-yellow-gold p-6 rounded-md">
              <FontAwesomeIcon
                icon={faCircleExclamation}
                style={{ color: "#0057b8" }}
                className="mr-4"
              />
              {t("description-9")}
            </p>
            <div className="md:w-96 mx-auto">
              <button
                type="submit"
                disabled={!email || !name || !donation || !isChecked}
                className="w-full mt-6 p-3 rounded-md bg-strong-azure text-yellow-gold disabled:bg-neutral-400 disabled:text-white  hover:bg-blue-600 focus:outline-none"
              >
                {t("register")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default RegistrationForRunOnlineForm;
