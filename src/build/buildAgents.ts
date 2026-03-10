import fs from "fs-extra";
import { AgentPlan } from "../types/agents.js";
import { generateAgents } from "../generators/agentGenerator.js";
import { generateOrchestrator } from "../generators/orchestratorGenerator.js";
import { consola } from "consola/basic";

export async function buildAgents() {
  if (!fs.existsSync(".c2f/agent-plan.json")) {
    consola.error("agent-plan.json not found.");
    consola.error("Run /c2f-plan in Claude Code first.");
    process.exit(1);
  }

  consola.start("Building C2F agents...");
  const plan: AgentPlan = JSON.parse(
    fs.readFileSync(".c2f/agent-plan.json", "utf8"),
  );

  await generateAgents(plan);

  await generateOrchestrator(plan);

  consola.success("C2F agents created successfully.");
}
