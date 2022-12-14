import Box from '@mui/material/Box';
import ArtistsWeek from '../components/ArtistsWeek';
import FullWidthTabs from '../components/FullWidthTabs';

export default function Artists() {
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <h2>Top artists</h2>
            <FullWidthTabs tab1={<ArtistsWeek />} tab2={<ArtistsWeek />} tab3={<ArtistsWeek />}/>
        </Box>
    )
}