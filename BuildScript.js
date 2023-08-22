// The build script should be run after compiling with sass
// It does the following:
// - Copies style settings
// - Updates the legacy obsidian.css file
// - Asks for a new version number (can be skipped)
//
// Used in `npm run build`

const fs = require("fs");
const readline = require("readline");

const sourceStyleSettingsYamlPath = "source/style-settings.yaml";
const themeCssPath = "theme.css";
const obsidianCssPath = "obsidian.css";
const manifestJsonPath = "manifest.json";

// #region Copy style settings
const styleSettingsYamlContent = fs.readFileSync(
  sourceStyleSettingsYamlPath,
  "utf8"
);
const themeCssContent = fs.readFileSync(themeCssPath, "utf8");
const newThemeCssContent = styleSettingsYamlContent + "\n\n" + themeCssContent;
fs.writeFileSync(themeCssPath, newThemeCssContent, "utf8");
console.log("Copied style settings")
// #endregion

// Update obsidian.css file
fs.copyFileSync(themeCssPath, obsidianCssPath);
console.log("Updated obsidian.css")


// #region Update version number
const manifestJsonContent = fs.readFileSync(manifestJsonPath, "utf8");
const manifestObject = JSON.parse(manifestJsonContent);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(
  `(Optional!) Enter new version number (current is ${manifestObject.version}): `,
  (newVersionNumber) => {
    // Cancel if user types nothing
    if (!newVersionNumber) {
      return;
    }
    manifestObject.version = newVersionNumber;
    fs.writeFileSync(manifestJsonPath, JSON.stringify(manifestObject, undefined, "\t"), "utf8");
    console.log(`Version number updated to ${manifestObject.version}`);
	rl.close();
  }
);
// #endregion