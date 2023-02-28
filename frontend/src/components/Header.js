import React from "react";
import Box from "@mui/material/Box";
import Logo from "../images/logo.png";
import { TextField, IconButton } from "@mui/material";
import {
  AccountBalanceWalletOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const primaryColor = "#2B2D42";
  const selectedColor = "#EF233C";
  const handleSearch = () => {};
  const navigate = useNavigate();
  const cartItems = [
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: {
        rate: 3.3,
        count: 203,
      },
      reviews: [
        {
          rating: 4,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasfermentum fringilla ante, nec gravida urna elementum ut. Nullaporttitor sit amet nisl vitae tincidunt. Pellentesque ut eniminterdum, scelerisque turpis gravida, fringilla nibh",
          user: "Rituraj",
          date: "February 22nd, 2023",
        },
        {
          rating: 3,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasfermentum fringilla ante, nec gravida urna elementum ut. Nullaporttitor sit amet nisl vitae tincidunt. Pellentesque ut eniminterdum, scelerisque turpis gravida, fringilla nibh",
          user: "Yogesh",
          date: "February 22nd, 2023",
        },
      ],
      quantity: 1,
    },
  ];
  const totalCost = 30;
  const totalItems = 1;

  const logout = () => {
    const isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
    if (isUserLoggedIn) {
      localStorage.setItem("isUserLoggedIn", false);
      navigate("/");
    }
  };

  const handleViewCart = () => {
    navigate("/cart", {
      replace: false,
      state: {
        cartItems: cartItems,
        totalCost: totalCost,
        totalItems: totalItems,
      },
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        height: "8vh",
        color: { primaryColor },
      }}
    >
      <Box sx={{ flex: 1.5 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            height: "100%",
          }}
        >
          <a
            href={localStorage.getItem("isUserLoggedIn") ? "/home" : "/"}
            aria-label="Company logo"
          >
            <img
              style={{ height: "15rem", width: "15rem" }}
              src={Logo}
              alt="logo"
            />
          </a>
          {/* <p style={{ fontFamily: "Lato", color: { primaryColor } }}>Logo</p> */}
        </Box>
      </Box>
      <Box
        sx={{
          flex: 3,
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: { primaryColor },
          }}
        >
          <TextField
            sx={{
              width: "90%",
              "& .MuiInputBase-root": {
                "& input": {
                  color: { primaryColor },
                },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #8098ab",
              },
            }}
            id="outlined-basic"
            label="search"
            variant="outlined"
            size="small"
            aria-label="Type your product name"
          />
          <IconButton
            type="button"
            onClick={{ handleSearch }}
            aria-label="Start searching"
          >
            <SearchOutlined
              style={{
                fill: "#252525",
                height: "2rem",
                width: "2rem",
              }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <Box>
                <Button
                  aria-label="Account settings"
                  sx={{
                    background: primaryColor,
                    textTransform: "none",
                    height: "2.5rem",
                    "&:hover": {
                      backgroundColor: selectedColor,
                    },
                  }}
                  variant="contained"
                  {...bindTrigger(popupState)}
                >
                  Account
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem
                    aria-label="Update your password"
                    onClick={popupState.close}
                  >
                    <NavLink
                      to="/updatepassword"
                      style={{ textDecoration: "none" }}
                    >
                      Update Password
                    </NavLink>
                  </MenuItem>
                  <MenuItem
                    aria-label="Update your account details"
                    onClick={popupState.close}
                  >
                    <NavLink to="/account" style={{ textDecoration: "none" }}>
                      Update Details
                    </NavLink>
                  </MenuItem>
                </Menu>
              </Box>
            )}
          </PopupState>
        </Box>
      </Box>
      <Box sx={{ flex: 2 }}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            overflow: "hidden",
            color: { primaryColor },
          }}
        >
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <IconButton
              type="button"
              aria-label="Wishlist"
              sx={{
                padding: "0",
              }}
            >
              <FavoriteBorderOutlined
                style={{
                  fill: "#252525",
                  height: "2rem",
                  width: "2rem",
                }}
              />
            </IconButton>
            <p style={{ fontSize: "0.7rem", padding: "0", margin: "0" }}>
              Wishlist
            </p>
          </Box>
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <IconButton
              type="button"
              aria-label="Wallet"
              sx={{
                padding: "0",
              }}
            >
              <AccountBalanceWalletOutlined
                style={{
                  fill: "#252525",
                  height: "2rem",
                  width: "2rem",
                }}
              />
            </IconButton>
            <p style={{ fontSize: "0.7rem", padding: "0", margin: "0" }}>
              Wallet
            </p>
          </Box>
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <IconButton
              type="button"
              aria-label="View cart"
              sx={{
                padding: "0",
              }}
              onClick={handleViewCart}
            >
              <ShoppingCartOutlined
                style={{
                  fill: "#252525",
                  height: "2rem",
                  width: "2rem",
                }}
              />
            </IconButton>
            <p style={{ fontSize: "0.7rem", padding: "0", margin: "0" }}>
              Cart
            </p>
          </Box>
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <IconButton
              type="button"
              aria-label="Logout"
              sx={{
                padding: "0",
              }}
              onClick={logout}
            >
              <LogoutOutlined
                style={{
                  fill: "#252525",
                  height: "2rem",
                  width: "2rem",
                }}
              />
            </IconButton>
            <p style={{ fontSize: "0.7rem", padding: "0", margin: "0" }}>
              Logout
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
