import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { useContext, useEffect, useState, useRef } from "react";
import { LoginContext } from "./../contexts/LoginContext";
import { useQuery } from "@tanstack/react-query";

export default function ArtistsWeek() {
  // const { accessToken, alignment } = useContext(LoginContext);

  const [dataArtistsWeek, setDataArtistsWeek] = useState<any>();
  const [test, setTest] = useState<any>();
  // const dataArtistsWeek = {
  //   items: [
  //     {
  //       external_urls: {
  //         spotify: "https://open.spotify.com/artist/2txHhyCwHjUEpJjWrEyqyX",
  //       },
  //       followers: {
  //         href: null,
  //         total: 2672134,
  //       },
  //       genres: ["chill pop", "pop"],
  //       href: "https://api.spotify.com/v1/artists/2txHhyCwHjUEpJjWrEyqyX",
  //       id: "2txHhyCwHjUEpJjWrEyqyX",
  //       images: [
  //         {
  //           height: 640,
  //           url: "https://i.scdn.co/image/ab6761610000e5eb7e75420ae58cf25941cb2cd4",
  //           width: 640,
  //         },
  //         {
  //           height: 320,
  //           url: "https://i.scdn.co/image/ab676161000051747e75420ae58cf25941cb2cd4",
  //           width: 320,
  //         },
  //         {
  //           height: 160,
  //           url: "https://i.scdn.co/image/ab6761610000f1787e75420ae58cf25941cb2cd4",
  //           width: 160,
  //         },
  //       ],
  //       name: "Tom Odell",
  //       popularity: 79,
  //       type: "artist",
  //       uri: "spotify:artist:2txHhyCwHjUEpJjWrEyqyX",
  //     },
  //   ],
  // };
  useEffect(() => {
    const dataArtists: any = localStorage.getItem("dataArtistsWeek");
    console.log(dataArtists);
    setTest(JSON.parse(dataArtists));
    // setDataArtistsWeek((prevState: any) => [...prevState, ...test]);
    // console.log(dataArtistsWeek);
  }, []);
  const isInitialMount = useRef(true);
  const isInitialMount2 = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      console.log(test);
      setDataArtistsWeek(test);
    }
  }, [test]);

  useEffect(() => {
    if (isInitialMount2.current) {
      isInitialMount2.current = false;
    } else {
      console.log(dataArtistsWeek);
    }
  }, [dataArtistsWeek]);

  // const fetchData = async () => {
  //   return await fetch(
  //     "https://api.spotify.com/v1/me/top/artists?limit=50&time_range=short_term",
  //     { headers: { Authorization: `Bearer ${accessToken}` } }
  //   )
  //     .then((response) => response.json())
  //     .catch(console.error);
  // };

  // const { data: dataArtistsWeek, refetch } = useQuery(
  //   ["dataArtistsWeek"],
  //   fetchData,
  //   {
  //     enabled: false,
  //   }
  // );

  // useEffect(() => {
  //   if (dataArtistsWeek) {
  //     localStorage.setItem(
  //       "dataArtistsWeek",
  //       JSON.stringify(dataArtistsWeek.items)
  //     );
  //   }
  // }, [dataArtistsWeek]);

  // function logArtists() {
  //   refetch();
  // }

  // useEffect(() => {
  //   logArtists();
  // }, [alignment]);
  return (
    <Box
      display={"flex"}
      maxWidth={"100%"}
      flexWrap={"wrap"}
      gap={"5rem"}
      paddingTop={"3rem"}
      justifyContent={"center"}
    >
      {dataArtistsWeek?.map((item: any, index: any) => {
        console.log(dataArtistsWeek);
        return (
          <Box key={item.name}>
            <Avatar src={item.images[0].url} sx={{ width: 200, height: 200 }} />
            <div style={{ textAlign: "center", paddingTop: "1rem" }}>
              {item.name}
            </div>
          </Box>
        );
      })}
    </Box>
  );
}
