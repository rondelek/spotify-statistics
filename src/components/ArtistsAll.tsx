import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";

export default function ArtistsAll() {
  const [dataArtistsAll, setDataArtistsAll] = useState<any>();
  const [testArtistsAll, setTestArtistsAll] = useState<any>();

  useEffect(() => {
    const dataArtists: any = localStorage.getItem("dataArtistsAll");
    setTestArtistsAll(JSON.parse(dataArtists));
  }, []);

  useEffect(() => {
    setDataArtistsAll(testArtistsAll);
  }, [testArtistsAll]);

  return (
    <Box
      display={"flex"}
      maxWidth={"100%"}
      flexWrap={"wrap"}
      gap={"5rem"}
      paddingTop={"3rem"}
      justifyContent={"center"}
    >
      {dataArtistsAll?.map((item: any, index: any) => (
        <Box key={item.name}>
          <Avatar src={item.images[0].url} sx={{ width: 200, height: 200 }} />
          <div style={{ textAlign: "center", paddingTop: "1rem" }}>
            {item.name}
          </div>
        </Box>
      ))}
    </Box>
  );
}
