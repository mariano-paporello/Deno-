
import { DenonConfig } from "https://deno.land/x/denon@2.5.0/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run --allow-env --allow-read --allow-net deno.ts"
    },
  },
};

export default config;