import fs from "fs-extra";
import { AgentPlan } from "../types/agents.js";

export async function generateAgents(plan: AgentPlan) {
  await fs.ensureDir(".ai/agents");

  for (const agent of plan.agents) {
    const content = `
# ${agent.name}

Role:
${agent.role}

Responsibilities:
${agent.responsibilities.join("\n")}
`;

    await fs.writeFile(`.ai/agents/${agent.name}.md`, content);
  }
}
