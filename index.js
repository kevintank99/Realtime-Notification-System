const cluster = require('cluster');
const os = require('os');
const express = require('express');
const config = require('./src/config');
const router = require('./src/router');
const db = require('./src/db');

if (cluster.isMaster) {
    const numCPUs = os.cpus().length;
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
      console.log(`Worker ${worker.process.pid} died`);
      console.log('Starting a new worker');
        cluster.fork();
    });
} else {
    db();
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(`/api/${config.version}`, router);
    app.listen(config.port, () => {
        console.log(`Worker ${process.pid} started at port ${config.port}`);
    });
}
