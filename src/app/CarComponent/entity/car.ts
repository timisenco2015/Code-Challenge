export class Car
{
    mileage:number;
    name:string;
    model: string;
    engine:string;
    color:string;
   


    constructor()
    {

    }

  getMileage()
    {
        return this.mileage;
    }

   setMileage(mileage:number)
    {
        this.mileage = mileage;
    }


   getName()
    {
        return this.name;
    }

setName(name:string)
    {
        this.name = name;
    }

   getModel()
    {
        return this.model;
    }

   setModel(model:string)
    {
        this.model = model;
    }

     getEngine()
    {
        return this.engine;
    }

   setEngine(engine:string)
    {
        this.engine = engine;
    }


   getColor()
    {
        return this.color;
    }

    setColor(color:string)
    {
        this.color = color;
    }


}