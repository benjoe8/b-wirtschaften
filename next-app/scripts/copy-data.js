/**
 * Deployment script: copies JSON data files from ../data/ to ./data/
 * - Only copies if the destination file does NOT yet exist (never overwrites live data)
 * - Creates ./data/ directory if missing
 * Run automatically via "prebuild" hook in package.json
 */
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "..", "data");
const DST = path.join(__dirname, "..", "data");

fs.mkdirSync(DST, { recursive: true });

if (!fs.existsSync(SRC)) {
  console.log("[copy-data] No ../data/ directory found, skipping.");
  process.exit(0);
}

const files = fs.readdirSync(SRC).filter((f) => f.endsWith(".json"));

for (const file of files) {
  const dest = path.join(DST, file);
  if (!fs.existsSync(dest)) {
    fs.copyFileSync(path.join(SRC, file), dest);
    console.log(`[copy-data] Copied ${file}`);
  } else {
    console.log(`[copy-data] Skipped ${file} (already exists)`);
  }
}
