import React, { Fragment } from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { toolsConfig } from '../../config/toolsConfig'
import TabContent from '../../components/TabContent/TabContent'

interface TabPanelProps {
  dir?: string;
  index: any;
  value: any;
  data?: any
}

function TabCard(props: TabPanelProps) {
  const { value, index } = props;

  return (
    <Fragment>
      {value === index && <TabContent props={props} orientation="vertical" />}
    </Fragment>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
  },
  tabButton: {
    backgroundColor: 'inherit'
  },
  container: {
    marginTop: '20px'
  }
}));

export default function Settings() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h3">Herramientas</Typography>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
        >
          {toolsConfig.map((item: any, index: number) => (
            <Tab
              key={index}
              className={classes.tabButton}
              label={item.label} />
          ))}
        </Tabs>
      </AppBar>
      <div className={classes.container}>
        <Paper>
            {toolsConfig.map((item: any, index: number) => (
              <TabCard
                key={index}
                value={value}
                index={index}
                dir={theme.direction}
                data={item}
              />
            ))}
        </Paper>
      </div>
    </div>
  );
}