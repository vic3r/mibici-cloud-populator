const { handleStationStatus, handleStationInfo } = require('../handlers');
const BikeStation = require('../models/BikeStation');

async function getStationData () {
  const stationStatus = await handleStationStatus();
  const stationsInfo = await handleStationInfo();
  if (stationStatus === undefined || stationsInfo === undefined) {
    return undefined;
  }

  const result = stationStatus.map((status) => {
    const info = stationsInfo.find(statInfo => statInfo.station_id === status.station_id);
    const bikeStation = new BikeStation(status, info);
    return bikeStation;
  });

  return result;
}

module.exports = getStationData;
