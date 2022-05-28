import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FaRegEnvelope } from "@react-icons/all-files/fa/FaRegEnvelope";
import { FaRegUser } from "@react-icons/all-files/fa/FaRegUser";
import { FaMapMarker } from "@react-icons/all-files/fa/FaMapMarker";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaBirthdayCake } from "@react-icons/all-files/fa/FaBirthdayCake";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { FaRegStar } from "@react-icons/all-files/fa/FaRegStar";



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function InnerTabsPannel() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'transparent', display: 'flex', height: 450 }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 2, borderColor: 'divider' }}
            >
                <Tab label="Basic info" className='fs-1 my-3' {...a11yProps(0)} />
                <Tab label="Contact Info" className='fs-1 my-3' {...a11yProps(1)} />
                <Tab label="Overview" className='fs-1 my-3' {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <div className='text-white fw-bold ms-5'>
                    <h1 className='mb-3'>Basic info</h1>
                    <h1><FaRegUser className='m-4' /> Hamza Saleem</h1>
                    <h1><FaHeart className='m-4' /> Single</h1>
                    <h1><FaBirthdayCake className='m-4' /> January 8th, 1996</h1>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className='text-white fw-bold ms-5'>
                    <h1 className='mb-3'>Contact Info</h1>
                    <h1><FaRegEnvelope className='m-4' /> hamza.shaikh3533@gmail.com</h1>
                    <h1><FaHome className='m-4' /> Lahore, Pakistan</h1>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div className='text-white fw-bold ms-5'><h1 className='mb-3'>Overview</h1>
                    <h1><FaMapMarker className='m-4' /> Lahore, Pakistan</h1>
                    <h1><FaRegStar className='m-4' /> No life events to show</h1>
                </div>
            </TabPanel>
        </Box>
    );
}