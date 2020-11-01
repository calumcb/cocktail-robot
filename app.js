const express = require('express')

const webServer = require('./src/site/webServer').WebServer;

// Serve the site
const port = 80;
const Server = new webServer(port, express());

Server.listen();