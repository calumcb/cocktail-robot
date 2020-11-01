const path = require('path');

const express = require('express');
const appRoot = require('app-root-path');

class WebServer {
    constructor(port, app) {
        this.port = port;
        this.app = app;
        this.path;   
    }

    enableStatic() {
        // Serve our static site
        this.app.use(express.static(path.join(appRoot.toString(), 'web/static')));
    }

    listen() {
        // Create the static routes
        this.enableStatic();
        // Start the server
        this.app.listen(this.port, (err) => {
            if (err) {
                console.error(err);
            } else {
                // open(`http://localhost:${this.port}`);
            }

        });
    }
}

module.exports = { WebServer }