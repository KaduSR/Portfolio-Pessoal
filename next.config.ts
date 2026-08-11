import { execFileSync } from "node:child_process";
import type { NextConfig } from "next";

function readGitValue(args: string[]) {
  return execFileSync("git", args, { encoding: "utf8" }).trim();
}

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  env: {
    NEXT_PUBLIC_BUILD_COMMIT_COUNT: readGitValue(["rev-list", "--count", "HEAD"]),
    NEXT_PUBLIC_BUILD_COMMIT_HASH: readGitValue(["rev-parse", "--short=7", "HEAD"]),
    NEXT_PUBLIC_BUILD_COMMIT_DATE: readGitValue(["show", "-s", "--format=%cs", "HEAD"]),
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
