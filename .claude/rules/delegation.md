# Delegating to agents

Tokens are a cost like CI minutes. Spend them where they change the result. (Adapted from
noktah-dashboard, where rounds of full-repo reviews spent millions.)

- **Do it yourself when you can.** An agent re-reads the instructions and the code you already have;
  delegate only work that is large, parallel, or would flood this session with file dumps.
- **Sonnet by default** (`model: "sonnet"` on the Agent call; the agents in `.claude/agents/` default to
  it). Opus only for a hard design question or a subtle bug.
- **Fewer, larger agents.** One agent per area (a page, a set of components), not one per finding; at
  most three at once.
- **Agents implement; the lead verifies once.** An agent checks only what it changed (its page in
  `pnpm ui:sweep -g "<slug>$"`), never the full sweep or a review pass. `pnpm build`, the full
  `pnpm ui:gate` and the Step 5 static checks run once, on the combined branch, and failures are fixed there.
- **Short briefs, short reports.** Give the agent the file list, the reference page and the findings, not
  the background it can read. Ask for a report of at most 25 lines: what changed per item, what was
  skipped and why, risks.
- **Reviews only where they pay.** `ux-copy-advisor` and `performance` run on a new page or a reshaped
  section, not on every fix.
