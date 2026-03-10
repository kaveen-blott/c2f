import fs from "fs";
import path from "path";

export async function scanProject() {
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

  const folders = fs
    .readdirSync("src", { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => `src/${d.name}`);

  return {
    dependencies: Object.keys(pkg.dependencies || {}),
    devDependencies: Object.keys(pkg.devDependencies || {}),
    folders,
  };
}
