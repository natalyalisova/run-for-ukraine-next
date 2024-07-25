"use client";
import React from "react";
import TextGradient from "@/app/components/AnimatedTextGradient";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MuiTelInput } from "mui-tel-input";
import {
  Autocomplete,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { countries } from "@/app/constants/country-list";
import { useRouter } from "next/navigation";

export const RegistrationForRunTLVForm = () => {
  const [donation, setDonation] = React.useState("150");
  const [phone, setPhone] = React.useState("+972");

  const handleDonation = (event: SelectChangeEvent) => {
    setDonation(event.target.value as string);
  };

  // const handlePhone = (newValue: any) => {
  //   setPhone(newValue);
  // };
  // const handleDistance = (event: SelectChangeEvent) => {
  //   setDistance(event.target.value as string);
  // };

  const router = useRouter();

  const handleRegistration = () => {
    router.push("/independence-payment");
  };

  return (
    <>
      <main className="flex items-center p-6 flex-col">
        <div className="my-12 text-center max-w-screen-md">
          <TextGradient text={"Registration for an Online race"} />
          <div className="mt-4 h-1 w-64 bg-yellow-gold mx-auto mb-6"></div>
          <div className="md:mx-auto">
            <p className="text-small md:text-base">
              This race dedicated to the 33rd anniversary of Ukraine's
              independence
            </p>
            <form className="mt-12 mx-auto md:w-96">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="inputStyle rounded-md p-3"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="inputStyle rounded-md p-3"
              />
              {/*<FormControl fullWidth>*/}
              {/*  <InputLabel id="distance-select-label">Distance</InputLabel>*/}
              {/*  <Select*/}
              {/*    labelId="distance-select-label"*/}
              {/*    id="distance-select"*/}
              {/*    value={distance}*/}
              {/*    label="Distance"*/}
              {/*    onChange={handleDistance}*/}
              {/*  >*/}
              {/*    <MenuItem value={2}>2 km</MenuItem>*/}
              {/*    <MenuItem value={5}>5 km</MenuItem>*/}
              {/*    <MenuItem value={10}>10 km</MenuItem>*/}
              {/*    <MenuItem value={21}> 21.0975 km</MenuItem>*/}
              {/*    <MenuItem value={42}>42.195 km</MenuItem>*/}
              {/*  </Select>*/}
              {/*</FormControl>*/}

              <FormControl fullWidth className="mt-2">
                <InputLabel id="donation-select-label">
                  Donate from &#8372; 150
                </InputLabel>
                <Select
                  labelId="donation-select-label"
                  id="donation-simple-select"
                  value={donation}
                  label="Donation"
                  onChange={handleDonation}
                >
                  <MenuItem value={40}>&#8372; 150</MenuItem>
                  <MenuItem value={50}>&#8372; 300</MenuItem>
                  <MenuItem value={75}>&#8372; 500</MenuItem>
                  <MenuItem value={100}>&#8372; 1000</MenuItem>
                  <MenuItem value={100}>&#8372; 2000</MenuItem>
                </Select>
              </FormControl>

              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="inputStyle rounded-md p-3 mt-3"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="inputStyle rounded-md p-3"
              />
              <Autocomplete
                id="country-select-demo"
                sx={{ width: 300 }}
                options={countries}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <img
                      loading="lazy"
                      width="20"
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      alt=""
                    />
                    {option.label} ({option.code}) +{option.phone}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Choose a country"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                  />
                )}
              />
              {/*<MuiTelInput*/}
              {/*  value={phone}*/}
              {/*  onChange={handlePhone}*/}
              {/*  className="inputStyle rounded-md"*/}
              {/*/>*/}
              <button
                onClick={() => router.push("/independence-payment")}
                className="w-full mt-6 p-3 rounded-md bg-strong-azure text-yellow-gold hover:bg-blue-600 focus:outline-none"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};
