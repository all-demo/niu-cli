import { program } from "commander";
import pkg from "../package.json";

program
  .version(pkg.version)
  .option("-d, --debug", "output extra debugging")
  .option("-s, --small", "small pizza size")
  .option("-p, --pizza-type <type>", "flavour of pizza");

program.command("create [name]").action((xxx) => {
  console.log(xxx);
});

program.parse(process.argv);
