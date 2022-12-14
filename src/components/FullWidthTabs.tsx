import { lazy, useState, Suspense } from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs, { TabsProps } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const ArtistsWeek = lazy(() => import('./ArtistsWeek'))

type TabProps = {
  tab1: React.ReactNode;
  tab2: React.ReactNode;
  tab3: React.ReactNode;
}

export default function FullWidthTabs({tab1, tab2, tab3}: TabProps) {
  interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
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
  
  function a11yProps(index: number) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '70%' }}>
      <AppBar position="static" sx={{boxShadow: 'none'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Last week" {...a11yProps(0)} />
          <Tab label="Last year" {...a11yProps(1)} />
          <Tab label="All time" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <Box>
        <Suspense fallback={<CircularProgress color="success" />}>
          <TabPanel value={value} index={0} dir={theme.direction}>
            {tab1}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {tab2}
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            {tab3}
          </TabPanel>
        </Suspense>
      </Box>
    </Box>
  );
}