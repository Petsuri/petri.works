import { AppBar, IconButton, makeStyles, Menu, MenuItem, Theme, Toolbar, Typography } from "@material-ui/core";
import React, { MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from './i18n';
import LanguageIcon from "./icons/LanguageIcon";
import { Locale } from "./locales/Locale";

const useStyles = makeStyles((theme: Theme) => ({
    titleDesktop: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
    titleMobile: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.down('xs')]: {
          display: 'block',
        },
      },
    }
));

const TopMenu = (): JSX.Element => {
 
    const languageMenuId: string = 'change-language-menu-id';
    
    const [anchorEl, setAnchorEl] = useState<Element | null>(null);
    const [locale, setLocale] = useState<Locale>(Locale.finnish());
    const { t } = useTranslation();
    const classes = useStyles();
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
    

    return <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" className={classes.titleDesktop}>
            {t('main.works')}
        </Typography>
        <Typography variant="h6" className={classes.titleMobile}>
            {t('main.works_short')}
        </Typography>
        <div>
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
            {renderMenu}
        </div>
        </Toolbar>
    </AppBar>;
}

export default TopMenu;