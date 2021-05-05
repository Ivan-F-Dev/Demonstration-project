import {createMuiTheme, makeStyles} from "@material-ui/core";

export const theme = createMuiTheme({
    typography: {
        button: {
            textTransform: "none",
            fontWeight: "normal",
            justifyContent: "start",
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

export const useStylesPaddingZero = makeStyles((theme) => ({
    root: {
        padding:0
    },
}));

export const useStylesJustifyCenter = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        borderTopLeftRadius:0,
        borderTopRightRadius:0,
    },
}));
//#5181b8