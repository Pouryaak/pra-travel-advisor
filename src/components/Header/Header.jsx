import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  InputAdornment,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";
import { AccountCircle } from "@material-ui/icons";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          PRA Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore New Places
          </Typography>
          {/* <Autocomplete> */}
          <div className={classes.search}>
            <InputBase
              placeholder="Search..."
              className={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              startAdornment={
                <InputAdornment position="start">
                  <div className={classes.searchIcon}>
                    <SearchIcon style={{ color: "white" }} />
                  </div>
                </InputAdornment>
              }
            />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
