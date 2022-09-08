import React from "react";
import classNames from "classnames";
import { DataItem } from "../App";

function ActivityCard({ title, timeframes, colour, format, icon }: DataItem) {
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
    <div className={"w-screen px-6 md:w-auto"}>
      <div
        className={"h-[3rem] rounded-t-xl z-10 overflow-hidden"}
        style={{ backgroundColor: colour }}
      >
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
        <div
          className={
            "flex md:flex-col md:items-start items-center justify-between"
          }
        >
          <p className={"text-3xl font-light"}>{data?.current}hrs</p>
          <p className={"font-light text-sm text-fm-pale-blue"}>
            {previousText}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
