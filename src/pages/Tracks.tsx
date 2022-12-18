import TracksWeek from "../components/TracksWeek";
import TracksMonth from "../components/TracksMonth";
import TracksAll from "../components/TracksAll";
import TimeTabs from "../components/TimeTabs";
import { useContext, useEffect } from "react";
import { LoginContext } from "./../contexts/LoginContext";

export default function Tracks() {
  const { alignment, accessToken, setAccessToken } = useContext(LoginContext);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, []);

  return (
    <div className="top-wrapper--no-gap">
      <h2>Top tracks</h2>
      <TimeTabs />
      {alignment === "week" && <TracksWeek />}
      {alignment === "month" && <TracksMonth />}
      {alignment === "all" && <TracksAll />}
    </div>
  );
}
