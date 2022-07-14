import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import {theme} from '../styles/theme';
import UsersProvider from '../providers/UsersProvider.provider';

export const renderWithProviders = ({children}: any) => {
	return render(
		<ThemeProvider theme={theme}>
			<UsersProvider>{children}</UsersProvider>
		</ThemeProvider>
	);
};
