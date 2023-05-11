import Hapi from '@hapi/hapi'
import CFG from './config'
import routes from './routes'

// Run the server!
const init = async () => {

    const server = Hapi.server({
        port: CFG.port,
        host: 'localhost',
        routes: { cors: { origin: ["*"] } }
    });

    // register routes
    server.route(routes);

    // START
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();