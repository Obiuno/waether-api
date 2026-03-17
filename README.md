# Weather APp - DataOps

## Description 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non urna at dui blandit tincidunt sed non nunc. Nam a tincidunt dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus dapibus viverra ligula ut rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis eu nulla in scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent mi sapien, tincidunt id congue vel, consequat vel quam. Etiam a consequat nibh. Etiam rhoncus quam tortor, id varius ex varius ut. Sed ac orci finibus, bibendum metus congue, luctus dolor. Cras nulla massa, pellentesque in imperdiet eu, condimentum id enim. Sed quam ex, sagittis non justo ac, cursus lobortis magna. Aenean ac commodo dolor. Nunc non massa consequat, aliquet sapien sed, hendrerit erat. Sed leo lorem, sollicitudin maximus pulvinar ut, finibus id risus.

## Instalation 

- Clone this repo
- On your terminal
    - `cd` to root folder
    - delete data folder, to start your own
    - `npm i` to install dependencies
    - setup `.env` with:
        - `PORT` of your choosing
        - `CITY` of your choosing
        - `API_KEY` from openweather
    - `npm i` to install dependencies
    - `node fetchWeather.js` to create/update data folder
    - `node app.js` to start server
- Open browser on `PORT` to see weather and graph

### Using Docker

- Open your Docker Desktop
- Make sure you are on same path as Dockerfile
- On your terminal run:
    - `docker build -t <app-name>:<tag> .` or `docker build -t weather-app:1.0 .` - to build an image based on Dockerfile
    - `docker run -p <local-port>:<container-port> <image-name>` or `docker run -p 5000:5000 weather-app` - to run a container based on an image
    