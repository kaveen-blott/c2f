export interface AgentSpec {
  name: string;
  role: string;
  responsibilities: string[];
}

export interface AgentPlan {
  agents: AgentSpec[];
}
