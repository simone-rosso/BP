import React from 'react'
import { NavLink } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { ISidebar } from '../../../../models';
import sidebarConfig from '../../../../config/sidebarConfig';

const useStyles = makeStyles(theme => ({
  tabButton: {
    backgroundColor: 'inherit',
    padding: '10px 0'
  },
  tabsList: {
    marginTop: '200px'
  },
  navbarItem: {
    fill: '#C3C2E0'
  },
  sidebarItemSelected: {
    borderColor: '#343375',
    fill: '#343375'
  }
}));

const Sidebar = (props: any) => {
  const classes: any = useStyles();

  return (
    <div className={classes.tabsList} >
      {sidebarConfig.map((item: ISidebar, index: number) => (
        <NavLink
          key={item.key}
          to={"/" + item.location}
          className={classes.navbarItem}
          activeClassName={classes.sidebarItemSelected}
        >
          <div className={classes.tabButton} key={index}>
            <ListItem>
              <ListItemIcon >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </div>
        </NavLink>
      )
      )}
    </div >
  )
}
export default Sidebar