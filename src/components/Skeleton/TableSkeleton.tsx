import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 25
  },
});

export default function TableSkeleton() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Skeleton animation="wave" />
    </div>
  );
}