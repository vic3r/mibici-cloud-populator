const axios = require('axios');

function handleStationStatus () {
  return axios.get('https://guad.publicbikesystem.net/ube/gbfs/v1/en/station_status')
    .then(response => response.data.data.stations)
    .catch((err) => {
      console.error(err);
      return err;
    });
}

function handleStationInfo () {
  return axios.get('https://guad.publicbikesystem.net/ube/gbfs/v1/en/station_information')
    .then(response => response.data.data.stations)
    .catch((err) => {
      console.error(err);
      return err;
    });
}

module.exports = { handleStationStatus, handleStationInfo };
