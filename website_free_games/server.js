const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000; // Use any port you prefer

// Define a route to trigger the Python script execution
app.get('', (req, res) => {
  // Replace './dist/app' with the correct path to your Python script executable
  exec('/home/wiktor/Desktop/backend_server/python/dist/app', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing the Python script: ${error}`);
      return res.status(500).json({ error: 'Something went wrong' });
    }
    // Directly send the output of the Python script as the response
    res.send(stdout); // Send the fetched data as a response without parsing
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});







