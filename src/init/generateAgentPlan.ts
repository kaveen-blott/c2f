import type { AgentPlan } from "../types/agents.js";

export async function generateAgentPlan(project: any): Promise<AgentPlan> {
  const agents = [];

  if (project.dependencies.react) {
    agents.push({
      name: "react-ui-agent",
      role: "React UI specialist",
      responsibilities: ["Build React components", "Maintain UI state"],
    });
  }

  agents.push({
    name: "api-agent",
    role: "Backend API developer",
    responsibilities: ["Create backend endpoints", "Handle server logic"],
  });

  agents.push({
    name: "testing-agent",
    role: "Testing engineer",
    responsibilities: ["Write unit tests", "Ensure feature reliability"],
  });

  return { agents };
}
