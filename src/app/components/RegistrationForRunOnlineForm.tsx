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
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const RegistrationForRunOnlineForm = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [donation, setDonation] = useState<string>("150");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");

  const router = useRouter();
  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check for email duplication
    const { data: existingRegistration, error: fetchError } = await supabase
      .from("race_registrations_online")
      .select("email")
      .eq("email", email)
      .maybeSingle();

    if (fetchError) {
      setError(fetchError.message);
      return;
    }

    if (existingRegistration) {
      setError("This Email is already registered for the race");
      return;
    }

    const { error } = await supabase
      .from("race_registrations_online")
      .insert([{ email, name, donation: parseInt(donation) }]);

    if (error) setError(error.message);
    else {
      router.push("/registration-online-successful");
      window.open(
        "https://send.monobank.ua/jar/3o9J76qxHe",
        "_blank",
        "noopener,noreferrer",
      );
    }
  };

  return (
    <main className="flex items-center p-6 flex-col">
      <Link
        href={"/run-independence-2024"}
        className="underline underline-offset-4 text-strong-azure mr-auto"
      >
        <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#0057b8" }} />
        <span className="ml-2">Return</span>
      </Link>
      <div className="my-12 text-center max-w-screen-md">
        <TextGradient text={"Registration for an Online race"} />
        <div className="mt-4 h-1 w-64 bg-yellow-gold mx-auto mb-6"></div>
        <div className="md:mx-auto">
          <p className="text-small md:text-base">
            This race dedicated to the 33rd anniversary of Ukraine's
            independence
          </p>
          <form onSubmit={handleRegister} className="mt-12 mx-auto md:w-96">
            <div>
              <input
                type="text"
                value={name}
                name="name"
                placeholder="Name"
                className="inputStyle rounded-md p-3"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="email"
                value={email}
                name="email"
                placeholder="Email"
                className="inputStyle rounded-md p-3"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <FormControl fullWidth className="mt-2">
                <InputLabel id="donation-select-label">
                  Donate from &#8372; 150
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
            <div className="inline-flex items-start">
              <label
                className="relative flex items-center mt-1 p-2 rounded-full cursor-pointer"
                htmlFor="check"
              >
                <input
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id="check"
                  onChange={() => setIsChecked(!isChecked)}
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <p className="mt-px font-light text-black cursor-pointer select-none text-left pt-2 text-small md:text-base">
                By clicking 'Register' you agree to the Run For Ukraine{" "}
                <Link
                  href={"/terms-n-conditions"}
                  target="_blank"
                  className="text-gray-700 rounded underline-offset-1 underline md:bg-transparent hover:text-strong-azure mr-2"
                  aria-current="page"
                >
                  Terms and Conditions
                </Link>
                and
                <Link
                  href={"/cookies-privacy-policy"}
                  target="_blank"
                  className=" text-gray-700 underline underline-offset-1 rounded md:bg-transparent hover:text-strong-azure ml-1"
                  aria-current="page"
                >
                  Cookies & Privacy Policy
                </Link>
                .
              </p>
            </div>
            {error && <p>{error}</p>}
            {message && <p>{message}</p>}
            <p className="text-start font-bold mt-2">
              Be sure to add your email address in the payment comment in next
              step!
            </p>
            <button
              type="submit"
              disabled={!email || !name || !donation || !isChecked}
              className="w-full mt-6 p-3 rounded-md bg-strong-azure text-yellow-gold disabled:bg-neutral-400 disabled:text-white  hover:bg-blue-600 focus:outline-none"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default RegistrationForRunOnlineForm;
