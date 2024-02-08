import type { Preview, ReactRenderer } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme } from '../src/libs/ui';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true, // Adds the description and default columns
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider<ReactRenderer>({
      themes: {
        light: lightTheme,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
  ],
};

export default preview;
