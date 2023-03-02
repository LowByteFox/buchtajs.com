import { Buchta, BuchtaCLI } from "buchta";
interface TailwindConfig {
    input: string;
    output: string;
}

export function tailwind(config: TailwindConfig) {
    const run = () => Bun.spawnSync(["bun", "run", "--bun", "tailwindcss", "-i", config.input, "-o", config.output]);

    return function (this: Buchta | BuchtaCLI) {
        if (this instanceof Buchta) {
            if (this.livereload) {
                this.livereload.registerOnUpdate((file: string) => {
                    run();
                })
            }
            run();
        }
    }
}