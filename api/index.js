const express = require("express");
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const app = express();
const port = 3001;
const imagesDir = path.join(__dirname, "images");
let lastImage = null;

app.get("/", (req, res) => {
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
      const imageBuffer = await sharp(imagePath)
        .resize(300, 300, { fit: "cover" })
        .toBuffer();

      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      res.end(imageBuffer);
    } catch (error) {
      res.status(500).json({ error: "Error processing image." });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

module.exports = app;