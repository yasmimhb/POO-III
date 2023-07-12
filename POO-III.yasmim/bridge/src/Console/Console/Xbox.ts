import IConsole from "./IConsole";

export class Xbox implements IConsole{
constructor(){
this.configureGame();
console.log("Xbox configurado")
}
configureGame() : void {
this.authToken()
console.log("Xbox está com a função configureGame ativa")
}

authToken() : void{
console.log("Xbox autorizando tokens")
}
}