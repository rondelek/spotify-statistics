import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 5,

  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor:
      theme.palette.mode === "light" ? "rgba(57,124,49, .4)" : "#308fe8",
  },
}));

export default function GenresAll() {
  let dataArtistsAll: [] | null = null;
  let genresArray: any = [];
  let genresDict = {};

  const [genresDictArray, setGenresDictArray] = useState([]);
  const [genresSumValues, setGenresSumValues] = useState<any>();

  function sortGenresDict() {
    createGenresDict();
    const dict: any = Object.keys(genresDict).map((key) => {
      return [key, genresDict[key]];
    });
    dict.sort((first: any, second: any) => {
      return second[1] - first[1];
    });
    setGenresDictArray(dict.slice(0, 10));
  }

  function createGenresDict() {
    createGenresArray();
    genresArray.map((genre: any) => {
      if (genresDict[genre]) {
        genresDict[genre] += 1;
      } else {
        genresDict[genre] = 1;
      }
    });
    setGenresSumValues(
      Object.values(genresDict).reduce(
        (accumulator, currentValue: any) => accumulator! + currentValue
      )
    );
  }
  function createGenresArray() {
    dataArtistsAll!.map((item: { [key: string]: [] }) =>
      item.genres.map((genre) => genresArray.push(genre))
    );
  }

  useEffect(() => {
    const dataArtists = localStorage.getItem("dataArtistsAll");
    if (dataArtists) {
      dataArtistsAll = JSON.parse(dataArtists);
    }
  }, []);

  useEffect(() => {
    sortGenresDict();
  }, [dataArtistsAll]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        {genresDictArray?.map((item: any, index) => {
          return (
            <div>
              <p>
                {index + 1}. {item[0][0].toUpperCase()}
                {item[0].slice(1).toLowerCase()}
              </p>
              <BorderLinearProgress
                variant="determinate"
                value={(item[1] / genresSumValues) * 500}
              />
            </div>
          );
        })}
      </Box>
    </>
  );
}
