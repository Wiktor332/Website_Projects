const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000; // Use any port you prefer

// Define a route to trigger the Python script execution
app.get('', (req, res) => {
  // Replace 'python ../python/api.py' with the correct command to execute your Python script
  exec('..\python\build\exe.win-amd64-3.11\api.exe', (error, stdout, stderr) => {
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







