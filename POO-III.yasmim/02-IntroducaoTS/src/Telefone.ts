class Telefone{
    private _ddd: string;
    private _numero: number;
    private _tipo: string;

    get ddd(): string{
        return this._ddd;
    }
    set ddd(ddd: string){
        this._ddd = ddd;
    }
    get numero(): number{
        return this._numero;
    }
    set numero(numero: number){
        this._numero = numero;
    }
    get tipo(): string{
        return this._tipo;
    }
    set tipo(tipo: string){
        this._tipo = tipo;
    }
}