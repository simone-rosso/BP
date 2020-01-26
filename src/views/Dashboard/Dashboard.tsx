import React, { useState } from 'react';
import { useStyles } from './DashboardConfig';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import PrivateRoutes from '../../routes/PrivateRoutes';
import IconButton from '@material-ui/core/IconButton';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import Topbar from '../../layouts/Main/Components/Topbar';
import Sidebar from '../../layouts/Main/Components/Sidebar';
import { Logo } from '../../icons'

const DashboardLayout = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <ul className={classes.topbar}>
          <li>
            <a href="/home">
              <Logo />
            </a>
          </li>
          <li>
            <Topbar />
          </li>
        </ul>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <Sidebar />
        <div className={clsx(classes.toolbar, classes.toggleMenu)}>
          <IconButton onClick={toggleDrawer}>
            {open ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <PrivateRoutes />
      </main>
    </div>
  );
}
export default DashboardLayout;