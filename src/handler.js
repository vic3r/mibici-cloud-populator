require('dotenv').load();
const config = require('config');
const stationController = require('./controllers');
const redisClient = require('./storage/Redis');

const client = redisClient(config);

exports.populator = async (req, res) => {
  const stationsUpdated = await stationController();
  if (stationsUpdated === undefined) {
    res.status(500).send('No data found');
  }

  stationsUpdated.forEach((station) => {
    client.lpush(station.zone, JSON.stringify(station));
  });

  res.status(200).send('Redis updated');
};
