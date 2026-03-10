import path from "path";
import { fileURLToPath } from "url";
import fs from "fs-extra";
import { AgentPlan } from "../types/agents.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getTemplatePath(templateName: string): string {
  return path.resolve(__dirname, "../../templates/ai", templateName);
}

export async function generateOrchestrator(plan: AgentPlan) {
  const agentList = plan.agents.map((a) => `- ${a.name}`).join("\n");

  const templatePath = getTemplatePath("orchestrator.md");
  const template = await fs.readFile(templatePath, "utf-8");
  const content = template.replace("{{AGENT_LIST}}", agentList);

  await fs.writeFile(".ai/orchestrator.md", content);
}
