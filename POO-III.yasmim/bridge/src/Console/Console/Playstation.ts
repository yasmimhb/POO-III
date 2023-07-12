import IConsole from "./IConsole";

export class Playstation implements IConsole{
constructor(){
this.configureGame();
console.log("Playstation configurado")
}
configureGame() : void {
this.authToken()
console.log("Playstation está com a função configureGame ativa")
}

authToken() : void{
console.log("Playstation autorizando tokens")
}
}