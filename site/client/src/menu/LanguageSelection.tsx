import { IconButton, Menu, MenuItem, Typography } from "@material-ui/core";
import React, { useState, MouseEvent } from "react";
import i18n from "../i18n";
import LanguageIcon from "../icons/LanguageIcon";
import { Locale } from "../locales/Locale";

export const LanguageSelection = () => {

    const languageMenuId: string = 'change-language-menu-id';
    const [anchorEl, setAnchorEl] = useState<Element | null>(null);
    const [locale, setLocale] = useState<Locale>(Locale.finnish());
    const isLanguageMenuOpen = Boolean(anchorEl);

    const handleLanguageMenuOpen = (event: MouseEvent): void => {
        setAnchorEl(event.currentTarget);
    }

    const changeLocale = (newLocale: Locale): void => {
        i18n.changeLanguage(newLocale.locale);
        setLocale(newLocale);
        handleMenuClose();
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={languageMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isLanguageMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={() => changeLocale(Locale.finnish())}>{Locale.finnish().name}</MenuItem>
            <MenuItem onClick={() => changeLocale(Locale.english())}>{Locale.english().name}</MenuItem>
        </Menu>
    );

    return (
        <>
            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={languageMenuId}
                aria-haspopup="true"
                onClick={handleLanguageMenuOpen}
                color="inherit" >
                <LanguageIcon />
                <Typography variant="h6">
                    {locale.name}
                </Typography>
            </IconButton>
            { renderMenu}
        </>);
}