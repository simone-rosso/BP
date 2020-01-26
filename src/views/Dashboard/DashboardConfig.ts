import { makeStyles, Theme, createStyles } from "@material-ui/core";

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            position: 'relative'
        },
        topbar: {
            display: 'flex',
            padding: '0 15px',
            justifyContent: 'space-between',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            backgroundColor: 'white',
        },
        appBarShift: {
        },
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
        },
        tabButton: {
            backgroundColor: "#ffffff"
        },
        tabsList: {
            marginTop: '250px'
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(6),
        },
        toggleMenu: {
            position: 'absolute',
            bottom: '0px',
            right: '0px'
        },
    }),
);
