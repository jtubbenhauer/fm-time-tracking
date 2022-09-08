import data from "../data.json";
import ProfileCard from "./components/ProfileCard";
import { useState } from "react";
import ActivityCard from "./components/ActivityCard";

export interface DataItem {
  title: string;
  colour: string;
  icon: string;
  format?: string;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
  };
}

function App() {
  const [format, setFormat] = useState("daily");
  return (
    <div className={"flex items-center justify-center md:h-screen"}>
      <div
        className={
          "flex flex-col md:flex-row items-center justify-center gap-4"
        }
      >
        <ProfileCard format={format} setFormat={setFormat} />
        <div
          className={
            "flex flex-col items-center gap-4 md:grid md:grid-cols-3 md:h-full"
          }
        >
          {data.map((i) => (
            <ActivityCard
              key={i.title}
              title={i.title}
              timeframes={i.timeframes}
              colour={i.colour}
              format={format}
              icon={i.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
