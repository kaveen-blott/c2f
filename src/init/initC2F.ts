import fs from "fs-extra";
import { scanProject } from "../scanners/scanProject.js";
import consola from "consola";

export async function initC2F() {
  consola.start("Initializing C2F...");

  consola.info("Scanning project structure...");
  const context = await scanProject();

  await fs.ensureDir(".claude/commands");

  await fs.writeFile(".c2f/context.json", JSON.stringify(context, null, 2));

  const commandPrompt = `
# C2F Agent Planner

Read project context from:

.c2f/context.json

Design specialized agents for this repository.

Rules:

- Create 3 to 6 agents
- Prefer architecture specific agents
- Avoid generic agents like "coder"

Return JSON only:

{
 "agents":[
   {
     "name":"agent-name",
     "role":"description",
     "responsibilities":[]
   }
 ]
}

Save result into:

.c2f/agent-plan.json
`;

  await fs.writeFile(".claude/commands/c2f-plan.md", commandPrompt);

  consola.success("C2F initialized.");
  consola.log("A new command has been created: /c2f-plan");
  consola.log("\n");
  consola.info("Next steps:");
  consola.info("1. Open Claude Code");
  consola.info("2. Run: /c2f-plan");
  consola.info("3. Then run: npx c2f build");
}
