class BikeStation {
  constructor (status, info) {
    this.zone = this.loadZone(info);
    this.station_id = `${info.station_id}`;
    this.name = info.name;
    this.latitude = `${info.lat}`;
    this.longitude = `${info.lon}`;
    this.address = info.address;
    this.neighborhood = 'None';
    this.postal_code = info.post_code;
    this.capacity = `${info.capacity}`;
    this.bikes_available = `${status.num_bikes_available}`;
    this.bikes_unavailable = `${status.num_bikes_disabled}`;
    this.dock_available = `${status.num_docks_available}`;
    this.dock_unavailable = `${status.num_docks_disabled}`;
  }

  loadZone (info) {
    if (info.name.includes('GDL')) {
      return 'Guadalajara';
    } if (info.name.includes('ZPN')) {
      return 'Zapopan';
    } if (info.name.includes('TLQ')) {
      return 'Tlaquepaque';
    }
    return 'None';
  }
}

module.exports = BikeStation;
