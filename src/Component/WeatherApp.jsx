/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useQuery } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
// import Bgimage from "../assets/bg.jpeg";
import {
  ThermometerSimple,
  CloudRain,
  Wind,
  Drop,
  Sun,
  MapPin,
  MagnifyingGlass,
} from "@phosphor-icons/react";

function WeatherApp() {
  const [location, setLocation] = useState("");
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [isCurrentLocationUsed, setIsCurrentLocationUsed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  useEffect(() => {
    if (isCurrentLocationUsed) {
      setLocation(`${position.latitude},${position.longitude}`);
      const timeout = setTimeout(() => {
        refetch();
        setIsCurrentLocationUsed(false);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isCurrentLocationUsed, position]);

  const fetchWeather = async () => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API}&q=${location}&days=3&aqi=yes&alerts=yes`
    );
    return response.json();
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["weather", location],
    queryFn: fetchWeather,
    enabled: false,
  });

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  useEffect(() => {
    if (data && data.error) {
      setErrorMessage("No specific location found! Please try again.");
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="grid place-items-center">
        <span className="loading loading-spinner text-center mt-20"></span>
      </div>
    );
  }

  if (data && data.error) {
    return (
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div>
            <p className="text-5xl mb-6 font-bold text-slate-200">
              Welcome to <span className="text-sky-custom">SkyCast</span>
            </p>
            <p className="mb-4 text-2xl">Choose a location to see the weather forecast &#x26C5;</p>
            <input
              className="input text-xl input-bordered input-primary w-full max-w-xs"
              type="text"
              placeholder="Search location"
              value={location}
              onChange={handleLocationChange}
            />
            <button
              className="btn btn-outline bg-slate-700 text-white m-3 "
              onClick={() => {
                if (location.trim() === "") {
                  setErrorMessage("Please enter a valid location!");
                } else {
                  setErrorMessage("");
                  refetch();
                }
              }}
            >
              <MagnifyingGlass size={20} className="ml-2" />
            </button>
            <button
              className="btn btn-outline bg-green-500 text-white m-3"
              onClick={() => setIsCurrentLocationUsed(true)}
            >
              Check weather at your Location<MapPin size={20} className="ml-2" />
            </button>
            {errorMessage && <div className="text-red-500 text-xl mt-2">{errorMessage}</div>}
          </div>
        </div>
      </div>
    );
  }

  if (data) {
    return (
      <>
        <div className="hero min-h-screen">
          <div className="lg:hero-content w-full max-w-full overflow-hidden mt-10  md:px-5  lg:px-10">
            <div>
              <div
                className="lg:card text-white text-xl bg-opacity-60 p-6 mx-4 shadow-xl md:mx-0 rounded-md md:h-auto border-2 border-zinc-800"
                style={{ backgroundImage: 'linear-gradient(to left top, #f994e2, #d177c7, #a95aac, #834092, #5d2678, #461e68, #301557, #1a0d46, #120e39, #0f0b2b, #0a071d, #02020d)' }}
              >
                <div>
                  <h1 className="lg:text-3xl md:text-2xl text-center">
                    {data.location.name},<span className="ml-4"></span>{data.location.country}
                  </h1>
                  <h1 className="mt-3">
                    {data.location.localtime.split(" ")[0]} <br />
                    Last updated at {data.location.localtime.split(" ")[1]}
                  </h1>
                </div>
                <div>
                  <div className="flex mt-36">
                    <div className="text-left w-11/12">
                      <h1 className="lg:text-6xl mt-6 md:text-2xl">{data.current.temp_c}°c</h1>
                      <h1>{data.current.condition.text}</h1>
                    </div>
                    <img
                      src={data.current.condition.icon}
                      alt={data.current.condition.text}
                      className="w-4/12"
                      width={96}
                      height={96}
                    />
                  </div>
                </div>
              </div>
              <div
                className="lg:card text-white text-xl mx-4 mt-5 shadow-xl md:mx-auto rounded-md border-2 border-zinc-800"
                style={{ backgroundImage: 'linear-gradient(to bottom, #030203, #0a010c, #0f0013, #110019, #12001f, #110220, #100321, #0f0522, #0f081e, #0f0b1a, #0f0d15, #0f0f0f)' }}
              >
                <div className="p-5 flex">
                  <p className="text-left w-1/2 flex">
                    {" "}
                    <ThermometerSimple size={32} weight="thin" /> Thermal
                    sensation
                  </p>
                  <p className="text-right w-1/2">
                    {data.current.feelslike_c}°C
                  </p>
                </div>
                {/* <hr /> */}
                <div className="p-5 flex">
                  <p className="text-left w-1/2 flex">
                    {" "}
                    <CloudRain size={32} weight="thin" />
                    Probability of rain
                  </p>
                  <p className="text-right w-1/2">{data.current.vis_km}%</p>
                </div>
                {/* <hr /> */}
                <div className="p-5 flex">
                  <p className="text-left w-1/2 flex">
                    {" "}
                    <Wind size={32} weight="thin" />
                    Wind speed
                  </p>
                  <p className="text-right w-1/2">
                    {data.current.wind_kph} km/h
                  </p>
                </div>
                {/* <hr /> */}
                <div className="p-5 flex">
                  <p className="text-left w-1/2 flex">
                    {" "}
                    <Drop size={32} weight="thin" />
                    Air humidity
                  </p>
                  <p className="text-right w-1/2">{data.current.humidity}%</p>
                </div>
                {/* <hr /> */}
                <div className="p-5 flex">
                  <p className="text-left w-1/2 flex">
                    {" "}
                    <Sun size={32} weight="thin" />
                    UV Index
                  </p>
                  <p className="text-right w-1/2">{data.current.uv}</p>
                </div>
              </div>

              <div className="lg:card text-white text-xl mx-4 mt-5 shadow-xl  text-center overflow-x-auto md:mx-auto rounded-md" style={{backgroundImage: 'linear-gradient(to top, #0a0307, #0a0309, #0a030c, #08040f, #060511, #050515, #030518, #00061b, #000520, #000424, #000229, #01002d)'}}>
                {data && (
                  <div className="carousel rounded-box overflow-x-auto">
                    <div className="flex md:flex-wrap">
                      {data.forecast.forecastday.map((day) => (
                        <div key={uuidv4()} className="flex-shrink-0 w-1/2 md:w-auto">
                          <div className="shadow-xl">
                            <h2 className="p-2"> {day.date} </h2>
                            <img
                              className="mx-10 m-2"
                              src={day.day.condition.icon}
                              alt={day.day.condition.text}
                            />
                            <div className="card m-2">
                              <p className="p-2 "> {day.day.maxtemp_c} °C</p>
                              <p className="p-2 "> {day.day.mintemp_c} °C</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {data && (
                <button
                  className="btn btn-outline bg-green-500 text-white m-3 absolute top-0 right-0 mt-4 mr-4 hidden md:block"
                  onClick={() => {
                    setLocation("");
                    setErrorMessage("");
                    window.scrollTo(0, 0);
                  }}
                >
                  GO BACK
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div>
            <p className="text-5xl mb-6 font-bold text-slate-200">
              Welcome to <span className="text-sky-custom">SkyCast</span>
            </p>
            <p className="mb-4 text-2xl">Choose a location to see the weather forecast &#x26C5;</p>
            <input
              className="input text-2xl input-bordered input-primary w-full max-w-xs"
              type="text"
              placeholder="Search location"
              value={location}
              onChange={handleLocationChange}
            />
            <button
              className="btn btn-outline bg-slate-700 text-white m-3"
              onClick={() => refetch()}
            >
              <MagnifyingGlass size={20} className="ml-2" />
            </button>
            <button
              className="btn btn-outline bg-green-500 text-white m-3"
              onClick={() => {
                setIsCurrentLocationUsed(true);
              }}
            >
              Check weather at your Location<MapPin size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherApp;