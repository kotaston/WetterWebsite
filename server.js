const express = require('express');
const app = express();
const path = require('path');
const { takeAllScreenshots } = require('./screenshot');

// Statische Dateien im "public"-Ordner bereitstellen
app.use(express.static(path.join(__dirname, 'public')));


// Screenshots von Websites beim Start und regelmäßig neu anfertigen
takeAllScreenshots();
setInterval(takeAllScreenshots, 5 * 60 * 1000);

// Server starten
// auf port von Render hören, der dynmisch verändert werden kann
const port = process.env.PORT || 3000; // process.env.PORT kommt von Render, fallback ist 3000 für lokal
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});

