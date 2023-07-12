import IConsole from "./src/Console/Console/IConsole";
import { Playstation } from "./src/Console/Console/Playstation";
import { Xbox } from "./src/Console/Console/Xbox";
import AdvancedPlay from "./src/Console/Play/AdvancedPlay";

function StartAdvanceLive(Console : IConsole){
  console.log("aguarde...");
  const play = new AdvancedPlay(Console);
  play.playing();
  play.result();
  play.challenge();
}

StartAdvanceLive(new Playstation())
StartAdvanceLive (new Xbox())