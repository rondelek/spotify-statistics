import ArtistsWeek from "../components/ArtistsWeek";
import ArtistsMonth from "../components/ArtistsMonth";
import { useContext, useEffect } from "react";
import { LoginContext } from "./../contexts/LoginContext";
import TimeTabs from "../components/TimeTabs";
import ArtistsAll from "../components/ArtistsAll";

export default function Artists() {
  const { alignment } = useContext(LoginContext);

  return (
    <div className="top-wrapper--gap">
      <h2>Top artists</h2>
      <TimeTabs />
      {alignment === "week" && <ArtistsWeek />}
      {alignment === "month" && <ArtistsMonth />}
      {alignment === "all" && <ArtistsAll />}
    </div>
  );
}
