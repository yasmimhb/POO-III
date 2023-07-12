import IPlay from "./IPlay";
import IConsole from "../Console/IConsole";

export default class Play implements IPlay{
  constructor(private Console : IConsole){
  }
  playing() : void{
    console.log("começando jogo")
  }
  result() : void{
    console.log("**JOGO ON**")
  }
}