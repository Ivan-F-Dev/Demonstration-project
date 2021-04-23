import { createMuiTheme, makeStyles } from "@material-ui/core";

export const theme = createMuiTheme({
    typography: {
        button: {
            textTransform: "none"
        }
    },
    palette: {
        primary: {
            main: '#5181b8',
        },
        secondary: {
            main: '#c6ff00',
        },
    },
});

export const useStylesNavBar = makeStyles({
    root: {
        padding: '0 5px',
        justifyContent: 'start',
        fontWeight: "normal"
    },
});
//#5181b8
