#!/usr/bin/env node
import { copyFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dir = join(process.cwd(), "dist/client");
const shell = join(dir, "_shell.html");
copyFileSync(shell, join(dir, "index.html"));
copyFileSync(shell, join(dir, "404.html"));
writeFileSync(join(dir, ".nojekyll"), "");
console.log("[pages] wrote index.html, 404.html, .nojekyll from _shell.html");
