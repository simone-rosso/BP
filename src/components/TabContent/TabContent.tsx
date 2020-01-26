import React from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
  item?: any
}

const TabPanel = (props: TabPanelProps) => {
  const { value, index } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && <Box p={3}>{props.item.content}</Box>}
    </Typography>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 2,
    display: 'flex',
  },
  verticalTabs: {
    flexBasis: '100%'
  },
  tabButton: {
    backgroundColor: 'inherit'
  },
  container: {
    marginTop: '20px'
  }
}));

const TabContent = ({ props, orientation }: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const config = props.data;

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        orientation={orientation}
        variant="scrollable"
        className={classes.verticalTabs}
      >
        {config.content.map((obj: any, index: number) => (
          <Tab
            key={index}
            className={classes.tabButton}
            label={obj.label} />
        ))}
      </Tabs>
      <div className={classes.container}>
          {config.content.map((item: any, index: number) => (
            <TabPanel
              key={index}
              value={value}
              index={index}
              dir={theme.direction}
              item={item} />
          ))}
      </div>
    </div>
  );
}

export default TabContent