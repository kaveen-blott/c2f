import fs from "fs";

export async function scanProject() {
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

  return {
    dependencies: pkg.dependencies || {},
    devDependencies: pkg.devDependencies || {},
  };
}
