const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const requiredFiles = [
  "README.md",
  "CHANGELOG.md",
  ".github/pull_request_template.md",
  "DEPLOYMENT_GUIDE.md",
  "GO_TO_MARKET.md",
  "BRAND_GUIDELINES.md",
  "SECURITY.md",
];

const missing = requiredFiles.filter(
  (file) => !fs.existsSync(path.join(root, file)),
);

if (missing.length > 0) {
  console.error("Baseline test failed. Missing required files:");
  for (const file of missing) {
    console.error(`- ${file}`);
  }
  process.exit(1);
}

console.log("Baseline test passed. Required documentation files are present.");
