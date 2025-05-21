import type { MarkdownRenderer } from "vitepress";
import fs from "node:fs";

import { docRoot } from "@kuinne/ui-utils";
import { resolve } from "node:path";

interface ContainerOpts {
  marker?: string | undefined;
  validate?(params: string): boolean;
  render?: MarkdownRenderer["renderer"]["rules"]["container"];
}
export function createDemoContainer(md: MarkdownRenderer): ContainerOpts {
  return {
    validate(params) {
      return params.trim() === "demo";
    },
    render(tokens, idx, options, env, self) {
      if (tokens[idx].nesting === 1) {
        const sourceFileToken = tokens[idx + 2];

        let source = "";
        const sourceFile = sourceFileToken.children?.[0].content ?? "";

        if (sourceFileToken.type === "inline") {
          source = fs.readFileSync(
            resolve(docRoot, "examples", `${sourceFile}.vue`),
            "utf-8"
          );
        }
        if (!source) {
          throw new Error(`Incorrect source file: ${sourceFile}`);
        }

        return `<Demo>`;
      } else {
        return `</Demo>\n`;
      }
    },
  };
}
