import React from "react";
import jeremyImg from "/image-jeremy.png";

interface Props {
  format: string;
  setFormat: React.Dispatch<React.SetStateAction<string>>;
}

function ProfileCard({ format, setFormat }: Props) {
  return (
    <div className={"flex flex-col w-screen px-6 md:px-0 md:w-auto"}>
      <div
        className={
          "bg-fm-blue flex md:flex-col px-6 py-8 md:pt-4 rounded-xl z-20 items-center md:items-start justify-center gap-4 md:max-w-[13rem]"
        }
      >
        <div className={"border-2 border-solid border-white rounded-full"}>
          <img src={jeremyImg} width={60} alt="Jeremy portrait" />
        </div>
        <div className={"flex flex-col text-white"}>
          <p className={"font-light text-md opacity-70"}>Report for</p>
          <p className={"text-2xl font-light"}>Jeremy Robson</p>
        </div>
      </div>
      <div
        className={
          "bg-fm-dark-blue -translate-y-[0.75rem] z-0 pt-[0.75rem] rounded-b-xl md:max-w-[13rem]"
        }
      >
        <div
          className={
            "flex md:flex-col items-center md:items-start md:gap-2 justify-center gap-16 text-fm-desat-blue py-6 px-8"
          }
        >
          <button
            className={
              format === "daily"
                ? "text-white transition-all"
                : "transition-all"
            }
            onClick={() => setFormat("daily")}
          >
            Daily
          </button>
          <button
            className={
              format === "weekly"
                ? "text-white transition-all"
                : "transition-all"
            }
            onClick={() => setFormat("weekly")}
          >
            Weekly
          </button>
          <button
            className={
              format === "monthly"
                ? "text-white transition-all"
                : "transition-all"
            }
            onClick={() => setFormat("monthly")}
          >
            Monthly
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
