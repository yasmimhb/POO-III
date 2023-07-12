import Play from "./Play";
import IConsole from "../Console/IConsole";

export default class AdvancedPlay extends Play {
  constructor(Console: IConsole) {
    super(Console);
  }
  challenge(): void {
    console.log("desafio ativo")
  }

}