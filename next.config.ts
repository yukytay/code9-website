import "./bootstrap.mjs";
import { cpSync, existsSync, rmSync } from "node:fs";

process.on("exit", () => {
  if (!existsSync("out")) return;
  rmSync("public", { force: true, recursive: true });
  cpSync("out", "public", { recursive: true });
});

const nextConfig = {
  output: "export" as const,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
