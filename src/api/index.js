require('dotenv').load();
const config = require('config');
const express = require('express');
const bodyParser = require('body-parser');
const stationController = require('../controllers');
const redisClient = require('../storage/Redis');

const client = redisClient(config);

function start () {
  const app = express();
  app.use(bodyParser.json());

  app.get('/bike/status', async (req, res) => {
    const stationsUpdated = await stationController();
    if (stationsUpdated === undefined) {
      res.status(500).send('No data found');
    }
    
    client.flushdb((err, succeeded) => {
      console.log(succeeded);
    });

    stationsUpdated.forEach((station) => {
      client.lpush(station.zone, JSON.stringify(station));
    });

    res.status(200).send('Redis updated');
  });

  return app;
}

module.exports = start;
