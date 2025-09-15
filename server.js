// Import core modules
const http = require("http");
const fs = require("fs");

// Create the web server
const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);

  // Handle different routes
  if (req.url === "/") {
    // Home page route
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Error loading page");
      } else {
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
  } else if (req.url === "/about") {
    // About page route
    fs.readFile("./about.html", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Error loading page");
      } else {
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
  } else if (req.url === "/contact") {
    // Contact page route
    fs.readFile("./contact.html", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Error loading page");
      } else {
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
  } else {
    // 404 - Page not found route
    fs.readFile("./404.html", (err, data) => {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    });
  }
});

// Set the port number
const PORT = 3000;

// Start the server and make it listen on port 3000
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
