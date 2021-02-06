import React from 'react';

import { ThemeProvider } from '@emotion/react';
import { addDecorator } from "@storybook/react";

import theme from '@shared/constants/theme';
import '@shared/styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'Twitter Dark',
    values: [
      {
        name: 'Twitter Dark',
        value: theme.backgroundColor,
      },
    ],
  },
}

addDecorator(
  (story) => (
    <ThemeProvider theme={theme}>
      {story()}
    </ThemeProvider>
  )
);
