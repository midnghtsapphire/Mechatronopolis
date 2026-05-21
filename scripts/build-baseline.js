const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const docsDir = path.join(root, "docs");

if (!fs.existsSync(docsDir)) {
  console.error("Baseline build failed. Missing docs/ directory.");
  process.exit(1);
}

const entries = fs.readdirSync(docsDir, { withFileTypes: true });
const hasContent = entries.some((entry) => entry.isDirectory() || entry.isFile());

if (!hasContent) {
  console.error("Baseline build failed. docs/ directory has no content.");
  process.exit(1);
}

console.log("Baseline build passed. docs/ directory is present and populated.");
