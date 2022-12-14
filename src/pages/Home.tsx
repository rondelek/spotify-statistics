import Box from '@mui/material/Box';
import MenuBox from "../components/MenuBox";

export default function Home() {
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={"center"} gap={'.5rem'} paddingTop={'.5rem'}>
            <h1 style={{margin: '.5rem'}}>Spotify statistics</h1>
            <p>Choose what you want to see:</p>
            <MenuBox />
        </Box>
    )
}