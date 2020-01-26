import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  cardHeader: {
    width: '100%',
    height: '85px',
    marginBottom: '16px',
    borderRadius: '5px',
    fontSize: '25px',
    textAlign: 'center',
    lineHeight: '3',
  },
  logo: {
  },
  title: {
    textAlign: 'center',
    fontSize: '35px'
  }
});

export default function InfoBox(props: any) {
  const data = props["data"];
  const classes = useStyles(data);

  return (
    <a href={data.href} target="_blank" rel="noopener noreferrer">
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            {<div
              style={{ backgroundColor: data.backgroundColor }}
              className={classes.cardHeader}>
              <div
                style={data.logo !== undefined ? { backgroundImage: data.logo } : {}}
                className={data.logo !== undefined ? classes.logo : classes.title}>
              </div>
              {data.title && <span style={{ color: data.titleColors[0] }}> {data.title}</span>}
            </div>}
            <Typography variant="body1" color="textSecondary" component="p">
              {data.text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  );
}