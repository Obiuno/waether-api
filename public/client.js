//2 functions inside this folder
//one loads weatehr and one loads chart with temp over time

async function loadWeather() {
    try {
        const res = await fetch("/api/weather")
        const weather = await res.json()

        document.getElementById("weather").innerHTML = `
            <h2>${weather.name}</h2>
            <p>Temperateure: ${weather.main.temp}C</p>
            <p>Condition: ${weather.weather[0].description}</p>
        `
    } catch (err) {
        document.getElementById("weather").innerHTML = "<p>Failed to load weather data</p>"
        console.error(err)
    }
}

//create out charts
async function loadChart() {
    try {
        const res = await fetch("api/weather-log")
        const {timestamps, temperatures} = await res.json()

        const trace =  {
            x: timestamps,
            y: temperatures,
            type: "scatter",
            mode: "lines+markers",
            line: {
                color: "green"
            }
        }

        const layout = {
            title: "Temperature Over Time",
            xaxis: {title: "Date", type: "date"},
            yaxis: {title: "Temperature C"},
            legend: {orientation: "h", x: 0, y: 1.1}
        }

        Plotly.newPlot("chart", [trace], layout)
    } catch (err) {
        console.error("Failed to lead chart", err)
    }    
}

loadWeather()
loadChart()