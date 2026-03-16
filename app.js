import express from "express";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import csv from "csv-parser";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
//python uses 5000 - java uses 8080, becasue a backend port is traditionally 80 - js uses 3000

const DATA_DIR = path.join(import.meta.dirname, "data");
const WEATHER_FILE = path.join(DATA_DIR, "weather.json");
const LOG_FILE = path.join(DATA_DIR, "weather_log.csv");

app.use(express.static(path.join(import.meta.dirname, "public")));
//makes frontend work with express, without a specific frontend js file

//we will have to routes, but will all be in app.js

//throw an error, when express is not being used

app.get("/api/weather", (req, res) => {
  if (!fs.existsSync(WEATHER_FILE)) {
    return res.status(404).json({ error: "No weather available" });
  }

  try {
    const weatherData = JSON.parse(fs.readFileSync(WEATHER_FILE, "utf8"));
    res.json(weatherData);
  } catch (err) {
    console.log("Error reading weather.json", err);
    res.status(500).json({ error: "failed to read weather data" });
  }
});

app.get("/api/weather-log", (req, res) => {
  if (!fs.existsSync(LOG_FILE)) {
    res.status(404).json({ error: "No weather log available" });
  }

  try {
    const timestamps = [];
    const temperatures = [];
    //const logData = fs.readFileSync(LOG_FILE, "utf8").split("\n") //may be unnecssary
    fs.createReadStream(LOG_FILE) //open csv so we can read the csv line by line
      .pipe(csv()) //csv parser library to parse each line into a js object
      .on("data", (row) => {
        if (row.timestamp && row.temperature) {
          timestamps.push(row.timestamp);
          temperatures.push(parseFloat(row.temperature));
        }
      })
      .on("end", () => {
        res.json({ timestamps, temperatures });
      })
      .on("error", (err) => {
        console.log("Error reading CSV:", err);
        res.status(500).json({ error: "Failed to read log" });
      });
  } catch (err) {
    console.log("Error reading log data", err);
    res.status(500).json({ error: "failed to read weather data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
