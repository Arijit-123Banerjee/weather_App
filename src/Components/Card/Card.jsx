import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { WiHumidity } from "react-icons/wi";
import { LuWind } from "react-icons/lu";
import { IoIosCloudyNight } from "react-icons/io";
import { FaCloudSun } from "react-icons/fa";
import Skeleton from "../Skeleton/Skeleton";

const Card = ({ getInputData }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${getInputData}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1eff894604msheabf59d28196e56p13a6dfjsn97a0f8c78a22",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (getInputData) {
      fetchData();
    }
  }, [getInputData]);

  if (loading) {
    return (
      <div className=" text-white h-64 w-80 bg-transparent flex justify-center items-center shadow-lg shadow-gray-700 rounded-2xl">
        <Skeleton />
      </div>
    );
  }

  const getTime = new Date().getHours();

  return (
    <div>
      {data ? (
        <div className="h-64 min-w-80 bg-transparent p-10 text-white rounded-2xl shadow-lg shadow-gray-700 flex flex-col justify-between">
          <h1 className="text-4xl">{`${data.temp}ºC`}</h1>
          {getTime > 19 ? (
            <IoIosCloudyNight size={45} />
          ) : (
            <FaCloudSun size={45} />
          )}
          <div className="flex items-center justify-between gap-5">
            <WiHumidity size={43} />
            <h1 className="text-3xl">{`${data.humidity}%`}</h1>
            <LuWind size={43} />
            <h1 className="text-3xl">{`${data.wind_speed}m/s`}</h1>
          </div>
        </div>
      ) : (
        <h1 className="text-white">No result found</h1>
      )}
    </div>
  );
};

export default Card;
