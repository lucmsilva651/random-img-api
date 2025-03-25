const express = require("express");
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const app = express();
const port = 3001;
const imagesDir = path.join(__dirname, "images");

let lastImage = null;
let lastImageBuffer = null;
let requestCount = 0;
let resetTime = Date.now() + 5 * 60 * 1000;

app.use((req, res, next) => {
  const userAgent = req.get('User-Agent');
  const allowedUserAgentPattern = /^github-camo \([a-zA-Z0-9]+\)$/;

  if (allowedUserAgentPattern.test(userAgent)) {
    return next();
  }

  res.status(403).json({ error: '403 Forbidden. Cope harder!'});
});

app.get("/", async (res) => {
  const now = Date.now();
  
  if (now > resetTime) {
    requestCount = 0;
    resetTime = now + 5 * 60 * 1000;
  }

  if (requestCount >= 2) {
    if (lastImageBuffer) {
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      return res.end(lastImageBuffer);
    } else {
      return res.status(429).json({ error: "Too many requests. Try again later." });
    }
  }

  fs.readdir(imagesDir, async (err, files) => {
    if (err || files.length === 0) {
      return res.status(404).json({ error: "No image found on /images. Did you forget to add your images there?" });
    }

    let randomImage;
    do {
      randomImage = files[Math.floor(Math.random() * files.length)];
    } while (files.length > 1 && randomImage === lastImage);

    lastImage = randomImage;
    const imagePath = path.join(imagesDir, randomImage);

    try {
      lastImageBuffer = await sharp(imagePath)
        .resize(300, 300, { fit: "cover" })
        .toBuffer();

      requestCount++;
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      res.end(lastImageBuffer);
    } catch (error) {
      res.status(500).json({ error: "Error processing image." });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

module.exports = app;