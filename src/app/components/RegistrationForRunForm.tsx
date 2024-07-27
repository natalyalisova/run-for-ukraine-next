"use client";
import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabaseCliet";
import TextGradient from "@/app/components/AnimatedTextGradient";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const RegistrationForRunForm = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [donation, setDonation] = useState<string>("150");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");

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
      setMessage("Registration successful!");
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

            {error && <p>{error}</p>}
            {message && <p>{message}</p>}
            <p className="text-start font-bold mt-2">
              Be sure to add your email address in the payment comment in next
              step!
            </p>
            <button
              type="submit"
              className="w-full mt-6 p-3 rounded-md bg-strong-azure text-yellow-gold hover:bg-blue-600 focus:outline-none"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default RegistrationForRunForm;
