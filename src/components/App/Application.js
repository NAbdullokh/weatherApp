import React, { useState } from "react";
import {
  Card,
  CityTemp,
  Details,
  Info,
  Input,
  MainContainer,
  Search,
} from "./style";
import fetchWeather from "../../api/fetchWeather";

export const Application = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery();
      console.log(data);
    }
  };

  return (
    <MainContainer>
      <Search>
        <Input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
      </Search>
      {weather.main && (
        <Card>
          <Info>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
          </Info>
          <Details>
            <Details.CityName>
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </Details.CityName>
            <CityTemp>
              {Math.round(weather.main.temp)}
              <sup>&deg;C</sup>
              <p style={{ marginTop: "10px" }}>
                {weather.weather[0].description}
              </p>
            </CityTemp>
          </Details>
        </Card>
      )}
    </MainContainer>
  );
};
