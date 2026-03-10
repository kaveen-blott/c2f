import { scanProject } from "../scanners/scanProject.js";
import { generateAgentPlan } from "./generateAgentPlan.js";
import { writeAgents } from "./writeAgents.js";

export async function initC2F() {
  console.log("Initializing C2F agents...");

  const project = await scanProject();

  const plan = await generateAgentPlan(project);

  await writeAgents(plan);

  console.log("C2F initialization complete.");
}
