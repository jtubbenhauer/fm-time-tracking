import React from "react";
import jeremyImg from "../assets/image-jeremy.png";

function ProfileCard() {
  return (
    <div className={"flex flex-col max-w-lg"}>
      <div className={"bg-fm-blue flex p-8 rounded-xl"}>
        <div className={"border-2 border-solid border-white rounded-full"}>
          <img src={jeremyImg} width={50} alt="Jeremy portrait" />
        </div>
        <div className={"flex flex-col text-white"}>
          <p>Report for</p>
          <p>Jeremy Robson</p>
        </div>
      </div>
      <div
        className={"bg-fm-dark-blue -translate-y-[0.75rem] -z-10 pt-[0.75rem]"}
      >
        <div
          className={"flex items-center justify-around text-fm-desat-blue p-6"}
        >
          <p>Daily</p>
          <p>Weekly</p>
          <p>Monthly</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
