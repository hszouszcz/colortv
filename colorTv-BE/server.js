const Hapi = require('hapi');
const Inert = require('inert');
const Routes = require('./routes');

const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});


server.register(Inert,  function(){});
server.route(Routes);

//yep I was in hurry!
server.register({
    register: require('hapi-cors'),
    options: {
        origins: ['http://localhost:9999']
    }
});

server.start(function(err) {
    if(err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
