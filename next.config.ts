import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Empêche Next.js de régénérer AGENTS.md / CLAUDE.md à chaque démarrage
  agentRules: false,
};

export default nextConfig;
