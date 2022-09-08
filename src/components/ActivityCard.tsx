import React from "react";
import { Timeframes } from "../App";
import classNames from "classnames";

interface Props {
  title: string;
  timeframes: Timeframes;
  colour: string;
  format: string;
  icon: string;
}

function ActivityCard({ title, timeframes, colour, format, icon }: Props) {
  const topBarClasses = classNames(
    "h-[3rem] rounded-t-xl z-10 overflow-hidden",
    `bg-${colour}`
  );

  let data;
  let previousText;

  switch (format) {
    case "daily":
      data = timeframes.daily;
      previousText = `Yesterday - ${data.previous}hrs`;
      break;
    case "weekly":
      data = timeframes.weekly;
      previousText = `Last Week - ${data.previous}hrs`;
      break;
    case "monthly":
      data = timeframes.monthly;
      previousText = `Last Month - ${data.previous}hrs`;
      break;
  }

  return (
    <div className={"w-4/5"}>
      <div className={topBarClasses}>
        <img className={"ml-auto mr-4 -translate-y-1"} src={icon} alt="" />
      </div>
      <div
        className={
          "bg-fm-dark-blue rounded-xl text-white p-4 z-20 -translate-y-2"
        }
      >
        <div className={"flex items-center justify-between"}>
          <p>{title}</p>
          <img src="/icon-ellipsis.svg" alt="" />
        </div>
        <div className={"flex items-center justify-between"}>
          <p className={"text-3xl font-light"}>{data?.current}hrs</p>
          <p>{previousText}</p>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
