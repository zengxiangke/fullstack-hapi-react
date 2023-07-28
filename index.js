const Hapi = require('@hapi/hapi');

(async function init() {
  const server = Hapi.server({
    port: '3000',
    routes: {
      files: {
        relativeTo: __dirname + '/ui-dist',
      },
    },
  });

  await server.register(
    // for static files
    require('@hapi/inert')
  );

  // the react app
  server.route({
    method: 'get',
    path: '/{file*}',
    handler: {
      directory: {
        path: '.',
      },
    },
  });

  // start the server
  server.start();
  console.log('Server started on port: 3000');
})();
