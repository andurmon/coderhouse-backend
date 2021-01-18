interface CalculosInterface {
    resultado(): Promise<number>;
}

abstract class Calculos implements CalculosInterface{
    protected numA: number;
    protected numB: number;

    constructor(numA:number, numB:number){
        this.numA = numA;
        this.numB = numB;
    }

    abstract resultado() : Promise<number>;

}

export = Calculos;