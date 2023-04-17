import type { CliOptions } from "@dynatrace/dt-app";

const config: CliOptions = {
  environmentUrl: "https://ulc38583.apps.dynatrace.com/",
  icon: "src/assets/app-icon.png",
  app: {
    name: "github-actions-profiler",
    version: "0.0.73",
    description: "GitHub Action Profiler - A sample project",
    id: "my.github.actions.profiler",
    scopes: [
      {
        name: "storage:metrics:read",
        comment:
          "this was added by the default template. We should check in the end if we actually need this.",
      },
      { name: "storage:events:read", comment: "we need this to fetch github data from workflows" },
      {
        name: "storage:events:write",
        comment: "we need this scope so the serverless function can write events to grail",
      },
    ],
  },
};

module.exports = config;