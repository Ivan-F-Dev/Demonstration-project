import {makeStyles} from "@material-ui/core";

export const useStylesNavBar = makeStyles({
    root: {
        width: '100%',
        padding: '0 5px',
        justifyContent: 'start',
        textTransform: 'none',
        color: 'black',
        fontWeight: "normal"
    },
    rootActive: {
        width: '100%',
        padding: '0 5px',
        justifyContent: 'start',
        textTransform: 'none',
        color: '#5181b8',
        fontWeight: "normal"
    },
    rootTest: {
        backgroundColor: "aqua",
        color: 'aqua',

    }
});
//#5181b8