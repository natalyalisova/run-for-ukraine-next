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
import TermsNConditions from "@/app/components/TermsNConditions";
import { useTranslations } from "next-intl";

const RegistrationForRunTLVForm = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [distance, setDistance] = useState<string>("");
  const [donation, setDonation] = useState<string>("150");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");

  const t = useTranslations("RegistrationForRunTLVForm");

  const router = useRouter();
  const [existingRegistration, setExistingRegistration] =
    useState<boolean>(false);

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset error and existing registration status before new submission attempt
    setError(null);
    setExistingRegistration(false);

    // Check for email duplication
    const { data, error: fetchError } = await supabase
      .from("race_registrations_tlv")
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
    if (existingRegistration) {
      setError("This Email is already registered for the race");
      return;
    }

    const { error } = await supabase
      .from("race_registrations_tlv")
      .insert([{ email, name, distance, donation: parseInt(donation) }]);

    if (error) setError(error.message);
    else {
      const donationAmount = parseInt(donation);
      const monobankUrl = "https://send.monobank.ua/jar/3o9J76qxHe";

      router.push("/registration-tlv-successful");
      window.open(monobankUrl, "_blank", "noopener,noreferrer");
    }
  };

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
        <div className="mt-4 h-1 w-64 bg-yellow-gold mx-auto mb-6"></div>
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
            <span className="font-bold mx-1">#RunForUkraine </span>
            {t("description-4")}
          </p>
          <p className="mt-2">
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: "#0057b8" }}
              className="mr-4"
              width={25}
              height={25}
            />
            {t("description-5")} 🇺🇦, {t("description-6")} 💛💙{" "}
            {t("description-7")}
          </p>
          <p className="mt-2">
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: "#0057b8" }}
              className="mr-4"
              width={25}
              height={25}
            />
            {t("description-8")}
            <span className="font-bold mx-1">#RunForUkraine</span>
          </p>
          <form onSubmit={handleRegister} className="mt-12  max-w-3xl">
            <div className="md:w-96">
              <input
                type="text"
                value={name}
                name="name"
                placeholder={t("name")}
                className="inputStyle rounded-md p-3"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                value={email}
                name="email"
                placeholder={t("email")}
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
              <FormControl fullWidth className="mb-6">
                <InputLabel id="distance-select-label">Distance</InputLabel>
                <Select
                  labelId="distance-select-label"
                  id="distance-simple-select"
                  value={distance}
                  label={t("distance")}
                  onChange={(e) => setDistance(e.target.value)}
                >
                  <MenuItem value={3}>3 {t("km")}</MenuItem>
                  <MenuItem value={5}> 5 {t("km")}</MenuItem>
                </Select>
              </FormControl>
            </div>

            <p className="text-start">{t("description-9")}</p>
            <div className="md:w-96">
              <Link
                href={
                  "https://www.xe.com/currencyconverter/convert/?Amount=1&From=ILS&To=UAH"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-xl underline underline-offset-4 text-strong-azure"
              >
                &#8362; 1 &cong; &#8372; 11
              </Link>
              <FormControl fullWidth className="mt-6">
                <InputLabel id="donation-select-label">
                  {t("description-10")} &#8362; 100
                </InputLabel>
                <Select
                  labelId="donation-select-label"
                  id="donation-simple-select"
                  value={donation}
                  label="Donation"
                  onChange={(e) => setDonation(e.target.value)}
                >
                  <MenuItem value={1100}>&#8362; 100 (&#8372; 1100)</MenuItem>
                  <MenuItem value={2200}>&#8362; 200 (&#8372; 2200)</MenuItem>
                  <MenuItem value={3300}>&#8362; 300 (&#8372; 3300)</MenuItem>
                  <MenuItem value={5500}>&#8362; 500 (&#8372; 5500)</MenuItem>
                  <MenuItem value={11000}>
                    &#8362; 1000 (&#8372; 11000)
                  </MenuItem>
                </Select>
              </FormControl>
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
              {t("description-11")}
            </p>
            <div className="md:w-96 mx-auto">
              <button
                type="submit"
                disabled={
                  !email || !name || !distance || !donation || !isChecked
                }
                className="w-full mt-6 p-3 rounded-md bg-strong-azure text-yellow-gold hover:bg-blue-600 disabled:bg-neutral-400 disabled:text-white focus:outline-none"
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

export default RegistrationForRunTLVForm;
