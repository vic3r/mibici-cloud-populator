const redis = require('redis');

function createRedisClient (config) {
  if (config.redis.port === undefined ||
    config.redis.host === undefined ||
    config.redis.password === undefined) {
    throw new Error('undefined config');
  }

  const client = redis.createClient({
    host: config.redis.host,
    port: config.redis.port,
    password: config.redis.password
  });

  client.on('connect', () => {
    console.log('Redis client connected');
  });
  client.on('error', (err) => {
    console.error(`Unexpected error ${err}`);
  });

  return client;
}

module.exports = createRedisClient;
