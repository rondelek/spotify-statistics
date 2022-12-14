import Box from '@mui/material/Box';
import ArtistsWeek from '../components/ArtistsWeek';
import FullWidthTabs from '../components/FullWidthTabs';
import Top from '../layouts/Top';

export default function Artists() {
    return (
        <Top name={'artists'} tab1={<ArtistsWeek />} tab2={<ArtistsWeek />} tab3={<ArtistsWeek />}/>
    )
}