import * as fs from "node:fs";
import * as path from "node:path";

// The plan: one concrete, executable 30-day plan an AI agent can carry out
// itself to turn $100 into the most money. 276 Unicode code points.
const TEXT =
  "Sell one $19 tool to one proven buyer: a CSV cleaner for Etsy sellers on Gumroad. Day 1: find 10+ forum threads begging for it, buy a $12 domain, ship it. Answer buyers in minutes, ship the top feature daily. 0 sales by day 7: kill it, pivot. Expected: 2/day, ~$900 by day 30.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), TEXT, "utf8");
