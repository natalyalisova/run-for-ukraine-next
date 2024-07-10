"use client";
import React, { useEffect } from "react";
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
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { countries } from "@/app/constants/country-list";

export const RegistrationForRunForm = () => {
  const [distance, setDistance] = React.useState("");
  const [donation, setDonation] = React.useState("40");
  const [phone, setPhone] = React.useState("+972");
  //
  // useEffect(() => {
  //   setDistance("");
  //   setDonation("");
  //   setPhone("+972");
  // }, []);
  //
  const handleDistance = (event: SelectChangeEvent) => {
    setDistance(event.target.value as string);
  };

  const handleDonation = (event: SelectChangeEvent) => {
    setDonation(event.target.value as string);
  };

  const handlePhone = (newValue: any) => {
    setPhone(newValue);
  };

  return (
    <>
      <main className="flex items-center p-6 flex-col">
        <div className="my-12 text-center max-w-screen-md">
          <TextGradient text={"Registration for a race"} />
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
              <FormControl fullWidth>
                <InputLabel id="distance-select-label">Distance</InputLabel>
                <Select
                  labelId="distance-select-label"
                  id="distance-select"
                  value={distance}
                  label="Distance"
                  onChange={handleDistance}
                >
                  <MenuItem value={2}>2 km</MenuItem>
                  <MenuItem value={5}>5 km</MenuItem>
                  <MenuItem value={10}>10 km</MenuItem>
                  <MenuItem value={21}> 21.0975 km</MenuItem>
                  <MenuItem value={42}>42.195 km</MenuItem>
                </Select>
              </FormControl>

              <div className="my-6 flex items-center justify-items-start ">
                <FormControlLabel control={<Checkbox />} label="" />
                <span>I'll run offline in Tel Aviv</span>
              </div>

              <FormControl fullWidth className="mt-2">
                <InputLabel id="donation-select-label">
                  Donation from $40
                </InputLabel>
                <Select
                  labelId="donation-select-label"
                  id="donation-simple-select"
                  value={donation}
                  label="Donation"
                  onChange={handleDonation}
                >
                  <MenuItem value={40}>$ 40</MenuItem>
                  <MenuItem value={50}>$ 50</MenuItem>
                  <MenuItem value={75}>$ 75</MenuItem>
                  <MenuItem value={100}>$ 100</MenuItem>
                  <MenuItem value={100}>$ 200</MenuItem>
                </Select>
              </FormControl>
              <p className="text-left px-2 py-3">
                Delivery details of the certificate at the end of the race:
              </p>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="inputStyle rounded-md p-3"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="inputStyle rounded-md p-3"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
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
              <MuiTelInput
                value={phone}
                onChange={handlePhone}
                className="inputStyle rounded-md"
              />
              <input
                type="number"
                name="zipcode"
                placeholder="Zip Code"
                className="inputStyle rounded-md p-3"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                className="inputStyle rounded-md p-3"
              />
              <button className="w-full mt-6 p-3 rounded-md bg-strong-azure text-yellow-gold hover:bg-blue-600 focus:outline-none">
                Register
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};
