const express = require('express');
// Import the Express framework
const router = express.Router();    // Create a router instance

const { allCustomer ,newCustomer} = require('../trans/dbtrans'); // Import the controller function from dbtrans.js

router.get('/all', allCustomer); // Define a GET route '/all' and bind it to the controller function

router.post('/newcustomer', newCustomer    )













module.exports = router; // Export the router so it can be used in app.js





/*

🔗 Connections:

control.js imports the controller logic from dbtrans.js.

It defines routes and exports the router.

app.js imports this router and mounts it under /api, so the full route becomes:



*/