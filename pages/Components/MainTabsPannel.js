import * as React from 'react';
import { useState, useEffect } from 'react';
import InnerTabsPannel from './InnerTabsPannel'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImagesList from './ImagesList';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MainTabsPannel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Photos" className='fs-1 m-4' {...a11yProps(0)} />
          <Tab label="About" className='fs-1 m-4' {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className='container-fluid row p-0'>
          <h1 className='fw_bolder text-light m-3'>Photos</h1>
          <div className=' border-secondary border-3 p-3'>
            <ImagesList />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className='container-fluid row p-0'>
          <h1 className='fw_bolder text-light m-3 mb-5'>About</h1>
          <InnerTabsPannel />
        </div>
      </TabPanel>
    </Box>
  );
}