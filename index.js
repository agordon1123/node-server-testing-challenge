const server = require('./server');

const port = process.env.PORT || 7600;

server.listen(port, () => console.log(`*** server listening on port ${port} ***`));
