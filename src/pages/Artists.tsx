import { useContext, lazy, Suspense } from "react";
import { AlignmentContext } from "../contexts/AlignmentContext";
import TimeTabs from "../components/TimeTabs";
import { CircularProgress } from "@mui/material";

const ArtistsWeek = lazy(() => import("../components/ArtistsWeek"));
const ArtistsMonth = lazy(() => import("../components/ArtistsMonth"));
const ArtistsAll = lazy(() => import("../components/ArtistsAll"));

export default function Artists() {
  const { alignment } = useContext(AlignmentContext);

  return (
    <div className="top-wrapper--gap">
      <h2>Top artists</h2>
      <Suspense fallback={<CircularProgress color="success" />}>
        <TimeTabs />
        {alignment === "week" && <ArtistsWeek />}
        {alignment === "month" && <ArtistsMonth />}
        {alignment === "all" && <ArtistsAll />}
      </Suspense>
    </div>
  );
}
