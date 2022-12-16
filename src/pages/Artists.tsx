import ArtistsWeek from '../components/ArtistsWeek';
import Top from '../layouts/Top';

export default function Artists() {

    return (
        <Top name={'artists'} tab1={<ArtistsWeek />} tab2={<ArtistsWeek />} tab3={<ArtistsWeek />}/>
    )
}