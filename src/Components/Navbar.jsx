import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import MenuIcon from "@mui/icons-material/Menu";

import ListItemButton from "@mui/joy/ListItemButton";
import ModalClose from "@mui/joy/ModalClose";
import Menu from "@mui/icons-material/Menu";
import Search from "@mui/icons-material/Search";
import { navbarItems } from "./NavbarItems/NavbarItems.mjs";

export default function Navbar() {
  const state1 = useSelector((state) => state.handleCart );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const theme = useTheme();
  const isResponsive = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: "30px",
          mb: "50px",
          alignItems: "center",
        }}
      >
        <Typography fontSize={{ lg: "30px", sm: "20px", xs: "15px" }}>
          COLLECTIONS
        </Typography>
        <Stack>
          <IconButton
            onClick={toggleMobileMenu}
            sx={{
              display: { xs: "flex", md: "none", lg: "none" },
              color: "#333333",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={mobileMenuOpen}
            onClose={toggleMobileMenu}
            sx={{
              "& .MuiDrawer-paper": {
                width: "180px",
              },
            }}
          >
            <Box
              className="mobile-menu"
              sx={{
                bg: "#fff",
                height: "100%",
                padding: "16px",
              }}
            >
              <Stack spacing={2} pt={3} alignItems="center">
                <>
                  {navbarItems.map((item, i) => (
                    <NavLink
                      key={`navbar_items_mobile${i}`}
                      to={item.link}
                      duration={1000}
                      className="scroll-link"
                      onClick={toggleMobileMenu}
                    >
                      <Typography
                        sx={{
                          textAlign: "start",
                          color: "#000",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </NavLink>
                  ))}
                  <Stack direction="column" alignItems="center" spacing={1}>
                    <Link to="register">
                      <Button
                        sx={{
                          backgroundColor: "blue",
                          color: "white",
                          "&:hover": { backgroundColor: "black !important" },
                          alignItems: "center",
                        }}
                      >
                        <VpnKeyIcon mr="15px" />
                        <Typography ml={1}>Register</Typography>
                      </Button>
                    </Link>
                    <Link to="shopping-card">
                      <Button
                        sx={{
                          backgroundColor: "blue",
                          color: "white",
                          "&:hover": { backgroundColor: "black !important" },
                          alignItems: "center",
                        }}
                      >
                        <ShoppingCartIcon mr="15px" />
                        <Typography ml={1}>Cart({state1.length})</Typography>
                      </Button>
                    </Link>
                  </Stack>
                </>
              </Stack>
            </Box>
          </Drawer>
        </Stack>
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          
          sx={{ ...(isResponsive ? { display: "none" } : { display: "" }) }}
        >

          <Link smooth="true" to="/" className="text" color='#fff'>
            Home
          </Link>

          <Link smooth="true" className="text" to="products">
            Products
          </Link>
          <Link smooth="true" className="text" to="about">
            About
          </Link>
          <Link smooth="true" className="text" to="contacts">
            Contacts
          </Link>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          sx={{ ...(isResponsive ? { display: "none" } : { display: "" }) }}
        >
          <Link to="register">
            <Button
              sx={{
                backgroundColor: "blue",
                color: "white",
                "&:hover": { backgroundColor: "black !important" },
                alignItems: "center",
              }}
            >
              <VpnKeyIcon mr="15px" />
              <Typography ml={1}>Register</Typography>
            </Button>
          </Link>
          <Link to="shopping-card">
            <Button
              sx={{
                backgroundColor: "blue",
                color: "white",
                "&:hover": { backgroundColor: "black !important" },
                alignItems: "center",
              }}
            >
              <ShoppingCartIcon mr="15px" />
              <Typography ml={1}>Cart({state1.length})</Typography>
            </Button>
          </Link>
        </Stack>
      </Box>
    </>
  );
}
