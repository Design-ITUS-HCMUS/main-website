'use client';
import { Be_Vietnam_Pro } from 'next/font/google';
import { Oswald } from 'next/font/google';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import colors from '../colors';

const beVietnamPro = Be_Vietnam_Pro({
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['vietnamese'],
});

const oswald = Oswald({
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['vietnamese'],
});

let theme = createTheme({
  palette: {
    background: {
      default: colors.neutral.white,
    },
    primary: {
      main: colors.blue[500],
      light: colors.blue[200],
      dark: colors.blue[700],
    },
    secondary: {
      main: colors.blue[500],
      light: colors.blue[200],
      dark: colors.blue[700],
    },
    info: {
      main: colors.neutral[50],
      light: colors.neutral[50],
      dark: colors.neutral[100],
      contrastText: colors.blue[900],
    },
    success: {
      main: colors.notification.success,
      contrastText: colors.neutral.white,
    },
    warning: {
      main: colors.notification.warning,
    },
    error: {
      main: colors.notification.error,
    },
  },
  typography: {
    fontFamily: beVietnamPro.style.fontFamily + ', Be Vietnam Pro, sans-serif',
  },
  components: {
    MuiCardMedia: {
      styleOverrides: {
        root: {
          lineHeight: 0,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: 'inherit',
          textDecoration: 'none',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: 'body2',
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      variants: [
        {
          props: { variant: 'text' },
          style: {
            '&:hover': {
              backgroundColor: colors.blue[50],
            },
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            padding: '0.5rem 1.25rem',
            width: 'fit-content',
          },
        },
      ],
      styleOverrides: {
        root: {
          boxShadow: 'none',
          textTransform: 'none',
          fontWeight: 600,
          whiteSpace: 'nowrap',
          fontSize: '14px',
          borderRadius: '0',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
  },
} as any);

declare module '@mui/material/styles' {
  interface TypographyVariants {
    title: React.CSSProperties;
  }

  // allow configuration using createTheme
  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
  }
}

theme.typography.title = {
  fontFamily: oswald.style.fontFamily + ', Oswald, sans-serif',
  fontWeight: 700,
  fontSize: '2.5rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
  },
};

theme = responsiveFontSizes(theme);

export const lightTheme = theme;
