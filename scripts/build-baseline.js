const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const docsDir = path.join(root, "docs");

if (!fs.existsSync(docsDir)) {
  console.error("Baseline build failed. Missing docs/ directory.");
  process.exit(1);
}

function countMarkdownFiles(dir) {
  let count = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += countMarkdownFiles(fullPath);
      continue;
    }
    if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      count += 1;
    }
  }
  return count;
}

const markdownCount = countMarkdownFiles(docsDir);

if (markdownCount === 0) {
  console.error("Baseline build failed. docs/ directory has no markdown documentation files.");
  process.exit(1);
}

console.log(`Baseline build passed. docs/ contains ${markdownCount} markdown file(s).`);
