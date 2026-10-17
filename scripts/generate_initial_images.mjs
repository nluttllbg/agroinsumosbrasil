import fs from 'node:fs';
import path from 'node:path';
import jpeg from 'jpeg-js';

const outDir = path.resolve('public/images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Helper to create an RGBA buffer with dimensions width x height
function createImage(width, height, drawFn) {
  const frameData = Buffer.alloc(width * height * 4);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const [r, g, b, a = 255] = drawFn(x, y, width, height);
      frameData[idx] = r;
      frameData[idx + 1] = g;
      frameData[idx + 2] = b;
      frameData[idx + 3] = a;
    }
  }
  const rawImageData = {
    data: frameData,
    width,
    height,
  };
  return jpeg.encode(rawImageData, 90).data;
}

// 1. fachada-agrobrasil.jpeg: Modern building facade with green architectural canopy, tinted glass, pavement
const fachada = createImage(800, 600, (x, y, w, h) => {
  const ny = y / h;
  const nx = x / w;

  // Sky area (top 0 to 0.25)
  if (ny < 0.22) {
    const skyB = 180 + Math.floor(ny * 50);
    return [160, 185, skyB];
  }
  // Building structure (0.22 to 0.75)
  if (ny < 0.72) {
    // Green canopy band (0.22 to 0.38)
    if (ny < 0.38) {
      // Agro Brasil primary brand green gradient
      const g = 140 + Math.floor(Math.sin(nx * 4) * 20);
      return [18, 120 + Math.floor(nx * 30), 55];
    }
    // Glass windows with green reflections (0.38 to 0.58)
    if (ny < 0.58) {
      const isGrid = (x % 70 < 2) || (y % 60 < 2);
      if (isGrid) return [40, 50, 45];
      const reflect = Math.sin(nx * 10 + ny * 5) * 20;
      return [35 + reflect, 55 + reflect, 50 + reflect];
    }
    // Dark brown/bronze lower walls and entrance (0.58 to 0.72)
    return [55, 48, 42];
  }
  // Pavement / Forecourt (0.72 to 1.0)
  const pavePattern = ((x + y) % 16 < 2) ? 140 : 160;
  return [pavePattern, pavePattern - 5, pavePattern - 10];
});
fs.writeFileSync(path.join(outDir, 'fachada-agrobrasil.jpeg'), fachada);

// 2. logo-agrobrasil.jpeg: Office interior wall with light warm background, spotlights, sofa below
const logoOffice = createImage(800, 600, (x, y, w, h) => {
  const ny = y / h;
  const nx = x / w;
  // Ceiling and spotlights at top (0 to 0.15)
  if (ny < 0.12) {
    const spot = Math.sin(nx * Math.PI * 4);
    const lum = 220 + Math.max(0, Math.floor(spot * 35));
    return [lum, lum, lum - 10];
  }
  // Wall (0.12 to 0.65)
  if (ny < 0.65) {
    // Wall center logo area
    const isLogoX = nx > 0.35 && nx < 0.65;
    const isLogoY = ny > 0.32 && ny < 0.45;
    if (isLogoX && isLogoY) {
      return [18, 110, 52]; // Dark green logo lettering
    }
    // Warm light grey wall
    const wallLum = 215 - Math.floor(ny * 25);
    return [wallLum, wallLum + 2, wallLum];
  }
  // Black/Dark leather reception couch (0.65 to 1.0)
  const tuft = ((x % 40 < 3) || (y % 40 < 3)) ? 25 : 45;
  return [tuft, tuft, tuft + 5];
});
fs.writeFileSync(path.join(outDir, 'logo-agrobrasil.jpeg'), logoOffice);

// 3. lavoura-equipe.jpeg: Wide panoramic soybean field day with group of farmers and overcast sky
const lavouraEquipe = createImage(800, 600, (x, y, w, h) => {
  const ny = y / h;
  // Overcast cumulus sky (0 to 0.42)
  if (ny < 0.42) {
    const cloud = Math.sin(x / 50) * 15;
    const lum = 160 + Math.floor(ny * 60) + cloud;
    return [lum - 10, lum, lum + 15];
  }
  // Horizon and distant pickup trucks/tree line (0.42 to 0.48)
  if (ny < 0.48) {
    return [60, 95, 45];
  }
  // Group of people standing in row (0.46 to 0.60)
  const nx = x / w;
  const isPerson = (ny > 0.47 && ny < 0.60) && (Math.sin(nx * 40) > 0.4);
  if (isPerson) {
    return [65, 80, 110]; // Shirts & hats
  }
  // Lush soybean foliage rows (0.48 to 1.0)
  const row = Math.sin((x + (ny - 0.48) * 200) / 12) * 25;
  const green = 110 + row + Math.floor((1 - ny) * 30);
  return [40 + Math.floor(green * 0.3), green, 30 + Math.floor(green * 0.2)];
});
fs.writeFileSync(path.join(outDir, 'lavoura-equipe.jpeg'), lavouraEquipe);

// 4. tecnico-no-campo.jpeg: Agronomist in soybean field with safari hat, talking to camera
const tecnico = createImage(600, 800, (x, y, w, h) => {
  const ny = y / h;
  const nx = x / w;
  // Overcast sky (0 to 0.35)
  if (ny < 0.35) {
    const lum = 175 + Math.floor(ny * 40);
    return [lum - 5, lum, lum + 10];
  }
  // Person silhouette / agronomist (centered nx 0.3 to 0.7, ny 0.25 to 0.65)
  const dx = Math.abs(nx - 0.5);
  if (ny > 0.22 && ny < 0.32 && dx < 0.16) {
    // Safari hat
    return [220, 210, 185];
  }
  if (ny >= 0.32 && ny < 0.40 && dx < 0.10) {
    // Face
    return [205, 155, 125];
  }
  if (ny >= 0.40 && ny < 0.65 && dx < 0.22) {
    // Khaki technical shirt
    return [115, 105, 75];
  }
  // Lush soybean canopy (0.35 to 1.0)
  const leafNoise = Math.sin(x / 8) * Math.cos(y / 8) * 30;
  const g = 125 + leafNoise;
  return [45, Math.min(220, Math.max(60, g)), 35];
});
fs.writeFileSync(path.join(outDir, 'tecnico-no-campo.jpeg'), tecnico);

// 5. analise-tecnica.jpeg: Group of technical specialists examining soybean plant in field
const analise = createImage(600, 800, (x, y, w, h) => {
  const ny = y / h;
  const nx = x / w;
  // Sky (0 to 0.32)
  if (ny < 0.32) {
    const lum = 170 + Math.floor(ny * 50);
    return [lum - 5, lum, lum + 10];
  }
  // Group of agronomists (ny 0.25 to 0.70)
  if (ny > 0.26 && ny < 0.68) {
    // Faces and shirts
    if (ny < 0.36 && ((nx > 0.15 && nx < 0.3) || (nx > 0.35 && nx < 0.5) || (nx > 0.55 && nx < 0.75))) {
      return [210, 165, 135];
    }
    if (nx > 0.1 && nx < 0.85) {
      // Light blue, green and checkered shirts
      if (nx < 0.35) return [100, 145, 195];
      if (nx < 0.6) return [70, 75, 75];
      return [130, 175, 145];
    }
  }
  // Soybean plants in field
  const leaf = Math.sin(x / 6 + y / 6) * 35;
  const g = 135 + leaf;
  return [40, Math.min(230, Math.max(70, g)), 35];
});
fs.writeFileSync(path.join(outDir, 'analise-tecnica.jpeg'), analise);

// 6. equipe-na-lavoura.jpeg: 4 men standing proudly in soybean field
const equipe = createImage(600, 800, (x, y, w, h) => {
  const ny = y / h;
  const nx = x / w;
  // Overcast sky (0 to 0.38)
  if (ny < 0.38) {
    const lum = 180 + Math.floor(ny * 40);
    return [lum - 10, lum, lum + 10];
  }
  // 4 persons (nx ~ 0.15, 0.38, 0.62, 0.88)
  if (ny > 0.32 && ny < 0.58) {
    const centers = [0.15, 0.38, 0.63, 0.88];
    for (const c of centers) {
      if (Math.abs(nx - c) < 0.08) {
        if (ny < 0.40) return [205, 160, 130]; // face
        if (c < 0.3) return [195, 185, 155]; // khaki shirt
        if (c < 0.5) return [75, 115, 170]; // blue shirt
        if (c < 0.7) return [155, 180, 170]; // light mint shirt
        return [45, 65, 110]; // navy shirt
      }
    }
  }
  // Soybean crop (0.38 to 1.0)
  const leaf = Math.sin(x / 7) * Math.cos(y / 7) * 35;
  const g = 130 + leaf;
  return [42, Math.min(225, Math.max(65, g)), 32];
});
fs.writeFileSync(path.join(outDir, 'equipe-na-lavoura.jpeg'), equipe);

// 7. planta-soja.jpeg: Hand holding uprooted soybean plant against field backdrop
const plantaSoja = createImage(600, 900, (x, y, w, h) => {
  const ny = y / h;
  const nx = x / w;
  // Sky background (0 to 0.45)
  if (ny < 0.45) {
    const lum = 185 + Math.floor(ny * 35);
    return [lum - 5, lum, lum + 10];
  }
  // Field in horizon (0.45 to 0.55)
  if (ny < 0.55) {
    return [55, 120, 45];
  }
  // Hand holding root (ny 0.75 to 0.95, nx 0.25 to 0.55)
  if (ny > 0.74 && ny < 0.92 && nx > 0.25 && nx < 0.55) {
    return [210, 165, 135];
  }
  // Plant stem & nodules & pods (vertical center nx 0.4 to 0.58)
  if (nx > 0.38 && nx < 0.55 && ny > 0.08 && ny < 0.85) {
    // Roots at bottom
    if (ny > 0.65) return [150, 105, 60];
    // Stem and pods
    return [110, 160, 55];
  }
  // Background soybean field
  const leaf = Math.sin(x / 9 + y / 9) * 30;
  const g = 125 + leaf;
  return [40, Math.min(220, Math.max(60, g)), 30];
});
fs.writeFileSync(path.join(outDir, 'planta-soja.jpeg'), plantaSoja);

console.log('Successfully created initial photographic jpeg assets in public/images/');
