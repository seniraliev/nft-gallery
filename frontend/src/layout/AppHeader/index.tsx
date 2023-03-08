import { useState } from "react";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { setAccount } from "src/store/account";
import { getOwnedNftList } from "src/store/nft";
import { setLoading } from "src/store/viewState";
import { ethers } from "ethers";
import { toast } from "react-toastify";

import { styled, alpha } from "@mui/material/styles";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AdbIcon from "@mui/icons-material/Adb";
import "./AppHeader.scss";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: "10px",
  width: "26ch",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "50ch",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "42ch",
    },
  },
}));

export default function AppHeader() {
  const [inputAddress, setInputAddress] = useState<string>("");
  const dispatch = useAppDispatch();
  const submit = () => {
    if (!ethers.utils.isAddress(inputAddress)) {
      toast.warn("Please input valid address");
      return;
    }
    dispatch(setAccount(inputAddress));
    dispatch(setLoading(true));
    if (inputAddress) {
      dispatch(getOwnedNftList(inputAddress))
        .then(() => {
          dispatch(setLoading(false));
        })
        .catch(() => dispatch(setLoading(false)));
    } else {
      dispatch(setLoading(false));
    }
  };
  const handleChange = (value: string) => {
    setInputAddress(value);
  };
  return (
    <Box className="app-header">
      <AppBar position="static">
        <Toolbar sx={{justifyContent: "space-between"}}>
          <Box sx={{display: { xs: 'none', md: 'flex' }, alignItems: "center"}}>
            <AdbIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              NFT Gallery
            </Typography>
          </Box>
          <Box sx={{display: "flex", alignItems: "center", marginLeft: "auto"}}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Input Ethereum mainnet address"
                inputProps={{ "aria-label": "search" }}
                value={inputAddress}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e.target.value)
                }
              />
            </Search>
            <Button
              variant="outlined"
              className="submit-button"
              onClick={submit}
            >
              <Typography noWrap>View NFTs</Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
