import { IconButton, Menu, MenuItem, Theme, Typography } from "@mui/material";
import React, { useState, MouseEvent } from "react";
import { changeLocale, getLocale } from "../locales/i18n";
import { Locale } from "../locales/Locale";
import TranslateIcon from "@mui/icons-material/Translate";
import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles((theme: Theme) => ({
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: theme.palette.primary.main
    }
  }
}));

export const LanguageSelection = () => {
  const languageMenuId: string = "change-language-menu-id";
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const [locale, setLocale] = useState<Locale>(getLocale());
  const isLanguageMenuOpen = Boolean(anchorEl);
  const classes = useStyles();

  const handleLanguageMenuOpen = (event: MouseEvent): void => {
    setAnchorEl(event.currentTarget);
  };

  const changeUserLocale = (newLocale: Locale): void => {
    changeLocale(newLocale);
    setLocale(newLocale);
    handleMenuClose();
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const getMenuItems = () => {
    return Locale.supported().map((locale, index) => {
      return (
        <MenuItem key={index} onClick={() => changeUserLocale(locale)}>
          {locale.name}
        </MenuItem>
      );
    });
  };

  const renderMenu = (
    <Menu
      className={classes.menu}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={languageMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isLanguageMenuOpen}
      onClose={handleMenuClose}
    >
      {getMenuItems()}
    </Menu>
  );

  return <>
    <IconButton
      edge="end"
      aria-label="language of site"
      aria-controls={languageMenuId}
      aria-haspopup="true"
      onClick={handleLanguageMenuOpen}
      color="inherit"
      size="large">
      <TranslateIcon />
      <Typography variant="h6">{locale.name}</Typography>
    </IconButton>
    {renderMenu}
  </>;
};
