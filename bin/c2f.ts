#!/usr/bin/env node

import { initC2F } from "../src/init/initC2F";

const command = process.argv[2];

async function main() {
  if (command === "init") {
    await initC2F();
  } else {
    console.log("Usage: c2f init");
  }
}

main();
