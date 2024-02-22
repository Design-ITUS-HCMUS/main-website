'use client';

// React and Next
import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Material UI Components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ButtonProps } from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

// Material UI Icons
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import CloseIcon from '@mui/icons-material/CloseRounded';
import ExpandLessIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MenuIcon from '@mui/icons-material/MenuRounded';
import ViewCarouselRoundedIcon from '@mui/icons-material/ViewCarouselRounded';

// Local Imports
import { colors } from '../';
import { Logo } from './Logo';

import { useMotionValueEvent, useScroll } from 'framer-motion';

interface INavbarPill {
  name: string;
  link?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  menuItems?: {
    icon?: React.ReactNode;
    name: string;
    link: string;
    disabled?: boolean;
  }[];
}

interface NavbarPillProps extends INavbarPill {
  active?: boolean;
}
interface StyledNavbarPillProps extends ButtonProps {
  active?: boolean;
}

const StyledNavbarPill = styled(Button, { shouldForwardProp: (prop) => prop !== 'active' })<StyledNavbarPillProps>(
  ({ active }) => ({
    color: active ? colors.neutral.white : colors.blue[500],
    backgroundColor: active ? colors.blue[500] : 'transparent',
    height: '100%',
    padding: '1rem 1.25rem 0rem 1.25rem',
    '&.Mui-disabled': {
      backgroundColor: 'transparent',
    },
    '&:hover': {
      color: active ? colors.neutral[50] : colors.neutral.white,
      backgroundColor: active ? colors.blue[700] : colors.blue[500],
    },
    '& .MuiButton-endIcon': {
      marginLeft: 0,
    },
  })
);

const FocusedNavbarPillStyle = {
  color: colors.neutral.white,
  backgroundColor: colors.blue[500],
};

function NavbarPill({ name, link, menuItems, active, disabled }: NavbarPillProps): React.JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    event.currentTarget.focus();
    console.log('focused');
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const BoxStyle = {
    display: 'flex',
    height: '64px',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  return (
    <Box sx={BoxStyle}>
      <StyledNavbarPill
        LinkComponent={Link}
        href={!menuItems ? link : undefined}
        onClick={menuItems && handleOpen}
        endIcon={menuItems && <ExpandMoreIcon />}
        sx={open ? FocusedNavbarPillStyle : undefined}
        active={active}
        disabled={disabled}>
        <Typography variant='subtitle1' fontWeight={600}>
          {name}
        </Typography>
      </StyledNavbarPill>
      {menuItems && (
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose} disableScrollLock>
          {menuItems.map(
            (menuItem, i, arr) =>
              i < arr.length - 1 && (
                <MenuItem key={menuItem.name} component={Link} href={menuItem.link}>
                  {menuItem.name}
                </MenuItem>
              )
          )}
          <Divider />
          <MenuItem
            key={menuItems[menuItems.length - 1].name}
            component={Link}
            href={menuItems[menuItems.length - 1].link}>
            {menuItems[menuItems.length - 1].name}
          </MenuItem>
        </Menu>
      )}
    </Box>
  );
}

const StyledDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: theme.spacing(2),
  marginRight: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    columnGap: theme.spacing(1),
    flexGrow: 1,
    marginRight: 0,
  },
}));

function Title(): React.JSX.Element {
  return (
    <StyledDiv>
      <Logo size='medium' />
    </StyledDiv>
  );
}

const pages: INavbarPill[] = [
  { name: 'Trang chủ', link: '/', icon: <HomeRoundedIcon /> },
  { name: 'Giới thiệu', link: '/aboutus', icon: <ViewCarouselRoundedIcon /> },
  {
    name: 'Sự kiện',
    link: '/events',
    menuItems: [
      { name: 'Outr space 8 (OS8)', link: '/events/OS8' },
      { name: 'Workshop Des to Dev (D2D)', link: '/events/D2D', disabled: true },
      { name: 'Tất cả sự kiện', link: '/events' },
    ],
    icon: <AutoAwesomeRoundedIcon />,
  },
];

export interface NavbarProps {
  activeURL?: string;
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  padding: theme.spacing(0, 15),
  borderRadius: 0,
  color: colors.blue[900],
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default,

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0, 5),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 2),
  },
}));

function Navbar({ activeURL = '' }: NavbarProps): React.JSX.Element {
  const pathname = usePathname();

  // ref Navbar
  const navbarRef = React.useRef<HTMLDivElement>(null);

  // Responsive Drawer state manager
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  // Responsive Collapse state manager
  const [openCollapse, setOpenCollapse] = React.useState(false);
  const toggleCollapse = () => {
    setOpenCollapse(!openCollapse);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (navbarRef.current) {
      if (latest > 0) {
        navbarRef.current.style.boxShadow = '0 0 1rem 0 rgba(0,0,0,0.2)';
      } else {
        navbarRef.current.style.boxShadow = 'none';
      }
    }
  });

  return (
    <StyledAppBar position='fixed' elevation={0} ref={navbarRef}>
      <Container maxWidth={false} disableGutters>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Title />
          {/* Responsive -> Visible only on MD and above */}
          {!isMobile ? (
            <>
              <Box sx={{ display: 'flex', gap: 3 }}>
                {pages.map((page, index) => (
                  <NavbarPill
                    {...page}
                    key={index}
                    active={pathname?.includes(page.link || '') || activeURL?.includes(page.link || '')}
                    disabled={page.disabled}
                  />
                ))}
              </Box>
            </>
          ) : (
            /* Responsive -> Visible only on XS and SM */
            <>
              <Box sx={{ display: { md: 'none' } }}>
                <IconButton onClick={toggleDrawer}>
                  <MenuIcon color='primary' />
                </IconButton>
              </Box>
              <Drawer anchor='right' open={openDrawer} onClose={toggleDrawer} PaperProps={{ sx: { width: '100%' } }}>
                <Box sx={{ overflow: 'auto' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, py: 1 }}>
                    <IconButton onClick={toggleDrawer}>
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <Divider />
                  <List>
                    {pages.map((page, index) =>
                      !page.menuItems ? (
                        <ListItemButton
                          key={index}
                          component={Link}
                          href={page.link || ''}
                          onClick={toggleDrawer}
                          disabled={page.disabled}>
                          <ListItemIcon>{page.icon}</ListItemIcon>
                          <ListItemText
                            primary={page.name}
                            primaryTypographyProps={{
                              variant: 'subtitle1',
                              fontWeight: 700,
                              color: colors.neutral[300],
                            }}
                          />
                        </ListItemButton>
                      ) : (
                        <React.Fragment key={index}>
                          <ListItemButton
                            disabled={page.disabled}
                            onClick={toggleCollapse}
                            sx={{ padding: '8px 16px' }}>
                            <ListItemIcon>{page.icon}</ListItemIcon>
                            <ListItemText
                              primary={page.name}
                              primaryTypographyProps={{
                                variant: 'subtitle1',
                                fontWeight: 700,
                                color: colors.neutral[300],
                              }}
                            />
                            <ListItemIcon>{openCollapse ? <ExpandLessIcon /> : <ExpandMoreIcon />}</ListItemIcon>
                          </ListItemButton>
                          <Collapse in={openCollapse} timeout='auto' unmountOnExit>
                            <List component='div'>
                              {page.menuItems?.map(
                                (menuItem, index, arr) =>
                                  index < arr.length - 1 && (
                                    <ListItemButton
                                      key={index}
                                      component={Link}
                                      href={menuItem.link}
                                      onClick={toggleDrawer}
                                      sx={{ pl: 4, pr: 4 }}
                                      disabled={menuItem.disabled}>
                                      <ListItemText>{menuItem.name}</ListItemText>
                                    </ListItemButton>
                                  )
                              )}
                              <Divider component='li' variant='middle' />
                              {page.menuItems && (
                                <ListItemButton
                                  key={page.menuItems[page.menuItems.length - 1].name}
                                  component={Link}
                                  href={page.menuItems[page.menuItems.length - 1].link}
                                  onClick={toggleDrawer}
                                  sx={{ px: 4 }}
                                  disabled={page.menuItems[page.menuItems.length - 1].disabled}>
                                  <ListItemText>{page.menuItems[page.menuItems.length - 1].name}</ListItemText>
                                </ListItemButton>
                              )}
                            </List>
                          </Collapse>
                        </React.Fragment>
                      )
                    )}
                  </List>
                </Box>
              </Drawer>
            </>
          )}
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}
export default Navbar;
