"use client";
import * as React from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useLocale } from "next-intl";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const locale = useLocale();
  // const t = useTranslations("NavBar");

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" className="bg-strong-azure p-1 md:p-4">
      <Container maxWidth="xl" className="">
        <Toolbar disableGutters>
          <Image
            src={"/images/Run-for-Ukraine-logo.png"}
            width={94}
            height={94}
            alt={"Run for Ukraine Logo"}
            className="hidden md:inline"
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "raleway",
              fontWeight: 700,
              letterSpacing: "",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            #RunForUkraine
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Image
            src={"/images/white-symbol.svg"}
            width={24}
            height={24}
            alt={"Run for Ukraine Logo"}
            className="inline md:hidden"
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "raleway",
              fontWeight: 700,
              letterSpacing: "",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            #RunForUkraine
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;

// import React from "react";
// import "flowbite";
// import { useLocale, useTranslations } from "next-intl";
// import { NavLinks } from "@/app/constants";
// import ResponsiveImage from "@/app/components/ResponsiveImage";
// import Link from "next/link";
//
// export default function Navbar() {
//   const locale = useLocale();
//   const t = useTranslations("NavBar");
//
//   return (
//     <nav className="bg-strong-azure fixed w-full z-40 top-0 left-0 ">
//       <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="/" className="flex items-center">
//           <ResponsiveImage
//             src={"/images/Run-for-Ukraine-logo.png"}
//             width={94}
//             height={94}
//             alt={"Run for Ukraine Logo"}
//           />
//           <span className="self-center text-2xl font-semibold whitespace-nowrap text-white hidden md:block ml-3">
//             #RunForUkraine
//           </span>
//         </a>
//         <div className="flex md:order-2 items-center ml-3 visible text-white underline underline-offset-2">
//           {locale === "ua" && <Link href="/en">EN</Link>}
//           {locale === "en" && <Link href="/ua">UA</Link>}
//           <button
//             data-collapse-toggle="navbar-sticky"
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-100 ml-3"
//             aria-controls="navbar-sticky"
//             aria-expanded="false"
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//         </div>
//         <div
//           className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//           id="navbar-sticky"
//         >
//           <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium uppercase  md:flex-row md:space-x-2 md:mt-0 md:border-0 ">
//             {NavLinks.map((link) => (
//               <li className="mb-4 lg:mb-0 lg:pr-2" key={link.key}>
//                 <Link
//                   href={link.href}
//                   className=" block py-2 pl-1  pr-4 text-white rounded md:bg-transparent md:text-white md:p-0  mt-4 lg:inline-block lg:mt-0 hover:text-cyan-100 mr-4"
//                   aria-current="page"
//                 >
//                   {t(link.text)}
//                 </Link>
//               </li>
//             ))}
//             {/*<li className="mb-4 lg:mb-0 lg:pr-2">*/}
//             {/*  <Link*/}
//             {/*    href="/login"*/}
//             {/*    className=" block py-2 pl-1  pr-4 text-white rounded md:bg-transparent md:text-white md:p-0  mt-4 lg:inline-block lg:mt-0 hover:text-cyan-100 mr-4"*/}
//             {/*    aria-current="page"*/}
//             {/*  >*/}
//             {/*    My account*/}
//             {/*  </Link>*/}
//             {/*</li>*/}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
