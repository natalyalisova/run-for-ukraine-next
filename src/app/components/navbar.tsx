"use client";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { NavLinks } from "@/app/constants";
import { useState } from "react";
import * as React from "react";

const Navbar = ({ locale }: { locale: string }) => {
  // const locale = useLocale();
  const t = useTranslations("NavBarLinks");

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

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
          <Link href="/">
            <Image
              src={"/images/Run-for-Ukraine-logo.png"}
              width={94}
              height={94}
              alt={"Run for Ukraine Logo"}
              className="hidden md:inline"
            />
          </Link>
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
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    target="_blank"
                    href={"https://send.monobank.ua/jar/3o9J76qxHe"}
                  >
                    {t("donate")}
                  </Link>
                </Typography>
              </MenuItem>
              {NavLinks.map((link) => (
                <MenuItem key={link.key} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link href={`/${locale}${link.href}`}>{t(link.text)}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link href="/">
            <Image
              src={"/images/white-symbol.svg"}
              width={24}
              height={24}
              alt={"Run for Ukraine Logo"}
              className="inline md:hidden"
            />
          </Link>
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
            <Button
              key={"donate"}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link
                href={"https://send.monobank.ua/jar/3o9J76qxHe"}
                target="_blank"
              >
                {t("donate")}
              </Link>
            </Button>
            {NavLinks.map((link) => (
              <Button
                key={link.key}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link href={`/${locale}${link.href}`}>{t(link.text)}</Link>
              </Button>
            ))}
          </Box>
          <Box
            sx={{ flexGrow: 0 }}
            className="text-white underline underline-offset-2"
          >
            {locale === "ua" && <Link href="/en">EN</Link>}
            {locale === "en" && <Link href="/ua">UA</Link>}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
