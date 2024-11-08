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
  faCircleDollarToSlot,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import TermsNConditions from "@/app/components/TermsNConditions";
import { useTranslations } from "next-intl";
import Button from "@/app/components/Button";
import { TextField } from "@mui/material";

const RegistrationForYogaTLVForm = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [donation, setDonation] = useState<string>("770");
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
      .insert([{ email, name, date, donation: parseInt(donation) }]);

    if (error) setError(error.message);
    else {
      router.push("/registration-tlv-successful");
    }
  };

  const handleButtonClick = () => {
    const donationAmount = parseInt(donation);
    const monobankUrl = `https://send.monobank.ua/jar/3o9J76qxHe?amount=${donationAmount}`;
    window.open(monobankUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="flex items-center p-6 flex-col">
      <Link
        href={"/"}
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
        <TextGradient text={"Зареєструватися на заняття з йоги"} />
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
                type="text"
                value={phone}
                name="phone"
                placeholder={"050-xxx-xx-xx"}
                className="inputStyle rounded-md p-3"
                onChange={(e) => setPhone(e.target.value)}
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
            </div>
            <p className="text-start mb-2">
              Вкажіть чи є проблеми: з серцево-судинною системою, тиском,
              цукровий діабет, епілепсія, асма, заміна суглобу, вагітність,
              захворювання пов'язані із ШКТ. Чи є у вас інші медичні обмеження,
              операції або травми, які слід враховувати при фізичних
              навантаженнях ?
            </p>

            <TextField
              id="outlined-multiline-static"
              label="Additional information"
              multiline
              rows={4}
              className="inputStyle rounded-md md:w-96"
            />
            <div className="md:w-96">
              <FormControl fullWidth className="mb-6">
                <InputLabel id="date-select-label">Оберіть дату</InputLabel>
                <Select
                  labelId="date-select-label"
                  id="date-simple-select"
                  value={date}
                  label={t("date")}
                  onChange={(e) => setDate(e.target.value)}
                >
                  <MenuItem value={"17/11/2024"}>17/11/2024 </MenuItem>
                  <MenuItem value={"24/11/2024"}>24/11/2024</MenuItem>
                  <MenuItem value={"01/12/2024"}>01/12/2024</MenuItem>
                </Select>
              </FormControl>
            </div>

            <p className="text-start">{t("description-9")}</p>
            <div>
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
              <div className="text-center flex flex-row  items-center">
                <input
                  type="text"
                  value={donation}
                  name="donation"
                  placeholder={"770"}
                  className="inputStyle rounded-md p-3 md:w-96"
                  onChange={(e) => setDonation(e.target.value)}
                  required
                />
                <p className="mb-4 ml-4">&#8372; UAH</p>
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
              {t("description-11")}
            </p>
            <div className="md:w-96 mx-auto">
              <Button
                title={t("register")}
                handleClick={handleButtonClick}
                isSubmitting={true}
                rightIcon={faCircleDollarToSlot}
              />
            </div>

            <div className="md:w-96 mx-auto opacity-0">
              <button
                type="submit"
                disabled={!email || !name || !date || !donation || !isChecked}
                className="w-full p-3 rounded-md bg-strong-azure text-yellow-gold hover:bg-blue-600 disabled:bg-neutral-400 disabled:text-white focus:outline-none"
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

export default RegistrationForYogaTLVForm;
