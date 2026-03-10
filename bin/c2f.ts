#!/usr/bin/env node

import { initC2F } from "../src/init/initC2F.js";
import { buildAgents } from "../src/build/buildAgents.js";
import consola from "consola";

const command = process.argv[2];

async function main() {
  if (command === "init") {
    await initC2F();
  } else if (command === "build") {
    await buildAgents();
  } else {
    consola.log("Usage:");
    consola.log("  c2f init");
    consola.log("  c2f build");
  }
}

main();
