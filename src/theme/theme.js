import { colours } from './colours';

export const theme = {
    palette: {
        type: 'dark',
        primary: {
            light: colours.GREY_LIGHT,
            main: colours.GREY_MAIN,
            dark: colours.GREY_DARK,
            contrastText: colours.WHITE,
        },
        secondary: {
            light: colours.YELLOW_LIGHT,
            main: colours.YELLOW_MAIN,
            dark: colours.YELLOW_DARK,
            contrastText: colours.BLACK,
        }
    }
}
