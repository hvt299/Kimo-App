import { DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';

export const lightTheme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#2E7D32',
        background: '#F0F2F5',
        card: '#FFFFFF',
        text: '#1C1C1E',
        border: '#E5E5E5',
        notification: '#D32F2F',
    }
};

export const darkTheme: Theme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: '#4CAF50',
        background: '#121212',
        card: '#1E1E1E',
        text: '#F5F5F5',
        border: '#333333',
        notification: '#EF5350',
    }
};