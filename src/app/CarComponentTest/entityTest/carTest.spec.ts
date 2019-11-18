import{Car} from '../../CarComponent/entity/car';


describe('Entity Car', () => {
    let car: Car;
  
   
  
    it('should create', async() => {
      car = new Car();
      expect(car).toBeTruthy();
    }) 



    it('should test class methods', async() => {
        car = new Car();
        car.setName("Ford");
        expect(car.getName()).toEqual("Ford");

        car.setModel("Focus");
        expect(car.getModel()).toEqual("Focus");

        car.setMileage(12033);
        expect(car.getMileage()).toEqual(12033);

        car.setEngine("3 gophers on a treadmill");
        expect(car.getEngine()).toEqual("3 gophers on a treadmill");

        car.setColor("green");
        expect(car.getColor()).toEqual("green");
      }) 


  });