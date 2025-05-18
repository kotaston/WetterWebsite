const puppeteer = require('puppeteer');
const sharp = require('sharp');
const path = require('path');

//DHV Wetter
async function takeDHVScreenshot() {

  const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  await page.setViewport({ width: 1280, height: 2000 });
  await page.goto('https://www.dhv.de/wetter/dhv-wetter/', { waitUntil: 'networkidle2' });

  // ✅ Warte auf Cookie-Banner (wenn vorhanden)
  await page.click('button.select-all');
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Nordalpen ausklappen
  await page.click('button.accordion-button.bg-col-lightblue.collapsed');
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Screenshot vom ganzen sichtbaren Bereich
  const screenshotBuffer = await page.screenshot();
  await browser.close();

  const croppedBuffer = await sharp(screenshotBuffer)
  .extract({ width: 820, height: 855, left: 30, top: 560})
  .toBuffer();

  const savePath = path.join(__dirname, 'public', 'DHVWetter_screenshot.png');
  await sharp(croppedBuffer).toFile(savePath);
  console.log('DHV-Wetter Screenshot gespeichert:', new Date().toLocaleTimeString());
  
}

// Patscherkofel Wind
async function takePatscherkofelScreenshot() {
  
  const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('https://wetter.orf.at/tirol/patscherkofel/', { waitUntil: 'networkidle2' });

  const screenshotBuffer = await page.screenshot();
  await browser.close();

  const croppedBuffer = await sharp(screenshotBuffer)
    .extract({ width: 600, height: 320, left: 30, top: 30})
    .toBuffer();

  const savePath = path.join(__dirname, 'public', 'patscherkofel_screenshot.png');
  await sharp(croppedBuffer).toFile(savePath);
  console.log('Patscherkofel Screenshot gespeichert:', new Date().toLocaleTimeString());
}
// Elfer Bergstation
async function takeElferBergstationScreenshot() {
  
  const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 2000 });
  await page.goto('https://elferbahnen.alpindigital.at/bergstation.php', { waitUntil: 'networkidle2' });

  const screenshotBuffer = await page.screenshot();
  await browser.close();

  const croppedBuffer = await sharp(screenshotBuffer)
    .extract({ width: 1280, height: 400, left: 0, top: 1600})
    .toBuffer();

  const savePath = path.join(__dirname, 'public', 'ElferBergstation_screenshot.png');
  await sharp(croppedBuffer).toFile(savePath);
  console.log('ElferBergstation Screenshot gespeichert:', new Date().toLocaleTimeString());
}

// Elfer Startplatz 1
async function takeElferStartplatz1Screenshot() {
  
  const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 2000 });
  await page.goto('https://elferbahnen.alpindigital.at/startplatz1.php', { waitUntil: 'networkidle2' });

  const screenshotBuffer = await page.screenshot();
  await browser.close();

  const croppedBuffer = await sharp(screenshotBuffer)
    .extract({ width: 1280, height: 370, left: 0, top: 1530})
    .toBuffer();

  const savePath = path.join(__dirname, 'public', 'ElferStartplatz1_screenshot.png');
  await sharp(croppedBuffer).toFile(savePath);
  console.log('ElferStartplatz1 Screenshot gespeichert:', new Date().toLocaleTimeString());
}

// Elfer Landeplatz
async function takeElferLandeplatzScreenshot() {
  
  const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 2300 });
  await page.goto('https://elferbahnen.alpindigital.at/landeplatz.php', { waitUntil: 'networkidle2' });

  const screenshotBuffer = await page.screenshot();
  await browser.close();

  const croppedBuffer = await sharp(screenshotBuffer)
    .extract({ width: 1280, height: 350, left: 0, top: 1750})
    .toBuffer();

  const savePath = path.join(__dirname, 'public', 'ElferLandeplatz_screenshot.png');
  await sharp(croppedBuffer).toFile(savePath);
  console.log('ElferLandeplatz Screenshot gespeichert:', new Date().toLocaleTimeString());
}




// Diese Funktion ruft alle Screenshot-Funktionen nacheinander auf
async function takeAllScreenshots() {
  await takeDHVScreenshot();
  await takePatscherkofelScreenshot();
  await takeElferBergstationScreenshot();
  await takeElferStartplatz1Screenshot();
  await takeElferLandeplatzScreenshot();
  // weitere Screenshots hier hinzufügen...
}

takeAllScreenshots() // später wieder entfernen, nur zum testen

module.exports = { takeAllScreenshots };