import React from 'react'
import { Badge, Avatar, Typography } from '@material-ui/core';
import Notifications from '@material-ui/icons/Notifications';
import { makeStyles } from "@material-ui/core";
import TopbarMenu from '../../../../components/TopbarMenu'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex'
  },
  flexItem: {

  },
  container: {
    marginTop: '20px'
  }
}))

const Topbar = () => {
  const classes = useStyles();

  return (
    <ul className={classes.root}>
      <li className={classes.flexItem}>
        <Badge badgeContent={3} color="secondary">
          <Notifications color="primary" />
        </Badge>
      </li>
      <li><Avatar>SR</Avatar></li>
      <li><Typography variant="h5">Simone Rosso</Typography></li>
      <li><TopbarMenu /></li>
    </ul>
  )
}

export default Topbar