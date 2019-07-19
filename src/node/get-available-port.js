const net = require('net');

export const getAvailablePort = options => new Promise((resolve, reject) => {
  const server = net.createServer();
  server.unref();
  server.on('error', reject);
  server.listen(options, () => {
      const {port} = server.address();
      server.close(() => {
          resolve(port);
      });
  });
});
