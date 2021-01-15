interface CalculosInterface {
    // numA: number;
    // numB: number;
    resultado():number;
}

abstract class Calculos implements CalculosInterface{
    protected numA: number;
    protected numB: number;

    // private privado: string = "Esto deberia ser private"
    
    // public publico: string = "Esto deberia ser public"

    constructor(numA:number, numB:number){
        this.numA = numA;
        this.numB = numB;
    }

    abstract resultado() : number;

}

export = Calculos;