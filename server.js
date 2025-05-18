const express = require('express');
const path = require('path');
// Screenshots machen, dafür wird in screenshot.js auch der node.js gestartet.
const { takeAllScreenshots } = require('./screenshot');

const app = express();
const PORT = 3000;

// Statische Dateien im "public"-Ordner bereitstellen
app.use(express.static(path.join(__dirname, 'public')));


// Screenshots von Websites beim Start und regelmäßig neu anfertigen
takeAllScreenshots();
setInterval(takeAllScreenshots, 5 * 60 * 1000);

// Server starten
app.listen(PORT, () => {
  console.log(`🌐 Server läuft unter: http://localhost:${PORT}`);
});