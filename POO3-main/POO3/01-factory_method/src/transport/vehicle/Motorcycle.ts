import IVehicle from "./interface/IVehicle";

export default class Motorcycle implements IVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Moto: Iniciando a Entrega...");
    }
    getCargo(): void {
       console.log("Moto: Encomenda Retirada!");
    }

}