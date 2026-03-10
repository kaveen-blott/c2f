import { scanProject } from "../scanners/scanProject";
import { generateAgentPlan } from "./generateAgentPlan";
import { writeAgents } from "./writeAgents";

export async function initC2F() {
  console.log("Initializing C2F agents...");

  const project = await scanProject();

  const plan = await generateAgentPlan(project);

  await writeAgents(plan);

  console.log("C2F initialization complete.");
}
