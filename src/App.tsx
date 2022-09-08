import data from "../data.json";
import ProfileCard from "./components/ProfileCard";
import { useState } from "react";
import ActivityCard from "./components/ActivityCard";

export interface Timeframes {
  daily: {
    current: number;
    previous: number;
  };
  monthly: {
    current: number;
    previous: number;
  };
  weekly: {
    current: number;
    previous: number;
  };
}

function App() {
  const [format, setFormat] = useState("daily");
  return (
    <div className={"flex flex-col items-center justify-center h-screen"}>
      <ProfileCard format={format} setFormat={setFormat} />
      <ActivityCard
        title={data[0].title}
        timeframes={data[0].timeframes}
        colour={"fm-light-red-work"}
        format={format}
        icon={"icon-play.svg"}
      />
    </div>
  );
}

export default App;
