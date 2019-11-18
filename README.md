# CodeChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

## Description

A simple web page that pulls data from server and display them in the table. Users 	are allow to sort and filter every column
Made by [Ayobami Idowu (ayobami.o.idowu@gmail.com)]

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Code Structure
```bash
|-- src
|
| |-- carComponent
| 
| | |-- car
| 
| | | |-- carComponent.html
|
| | | |-- carComponent.ts
|
| | | |-- carComponent.css
|
| | |-- entity
|
| | | |-- car
|
| | |-- service
|
| | | |-- apiService
|
| | | |-- carService
|
| |-- carComponentTest
|
| | |-- carTest
|
| | | |-- carComponentTest
|
| | |-- entityTest
|
| | | |-- carTest
|
| | |-- serviceTest
|
| | | |-- apiServiceTest
|
| | | |-- carServiceTest
|
|-- app-routing.module.ts
|
|-- app.config.ts
|
|-- app.module.ts
|
|-- other angular created files
```

## Code details
```bash
  - apiService (service folder): has a method called get(). This method calls http get method. API Url is passed to the http        
      get method from app.config.ts using @Inject(). http get method fecthes data from the server and return an Observable
      
	- carService (service folder): 
		-- methods are:
			- getCars(): which get all cars information by calling get() method in apiService. It returns Observable.
			- sortDataAscendMilleage(): sort car list in ascending order using mileage as the sort criteria returns Observable
			- sortDataDescendMilleage(): sort car list in descending order using mileage as the sort criteria returns Observable
			- sortDataAscendname(): sort car list in ascending order using name (car name) as the sort criteria returns Observable
			- sortDataDescendName(): sort car list in descending order using name (car name) as the sort criteria returns Observable
			- sortDataAscendModel(): sort car list in ascending order using model as the sort criteria returns Observable
			- sortDataDescendModel(): sort car list in descending order using model as the sort criteria returns Observable
			- sortDataAscendEngine(): sort car list in ascending order using engine as the sort criteria returns Observable
			- sortDataDescendEngine(): sort car list in descending order using engine as the sort criteria returns Observable
			- sortDataAscendColor(): sort car list in ascending order using color as the sort criteria returns Observable
			- sortDataDescendColor(): sort car list in descending order using color as the sort criteria returns Observable
			- filterByName(name:string): accept name (car name) as parameter. It filters car list by name (car name) return Observable
			- filterByMileage(mileage:number): accept mileage as parameter. It filters car list by mileage returns Observable
			- filterByModel(model:string): accept model as parameter. It filters car list by model and returns Observable
			- filterByEngine(engine:string): accept engine as parameter. It filters car list by engine and returns Observable
			- filterByColor(color:string): accept color as parameter. It filters car list by color and returns Observable
			- handleError(error: Response) : handles error return http get errors.

	-car (entity folder): is the Car class. 
		methods are: getMileage(), setMileage(mileage:number), getName(), setName(name:string), getModel(), setModel(model:string),       
      getEngine(), setEngine(engine:string), getColor(), setColor(color:string)

	- carComponent.ts: component in angular is like controller in MVC. fecthes data from carService by calling appropriate methods          
      and send carList to the carComponent.html for tabular view
		-- methods are:
			- ngOnInit(): calls getAllCars() method
			- onClickRefreshCarList(): refresh car list from the server by calling getAllCars() method
			- getAllCars(): fetch car list from the server
			- sortDownward($event): accept event from the html and calls appropraite method based on the value passed from the html
			- sortUpward($event): accept event from the html and calls appropraite method based on the value passed fromthe html
			- columnFilter(event: any)accept event from the html and calls appropraite method based on the value passed fromthe html
      
	- carComponent.html: is the view. Display car list in the table. allows user filter or sort the list. User can also refresh     
      the list by clicking on the refresh button
      
	- app.config.ts: stores the url to API. can be editted manually or by passing the url through the terminal using this variable        
      GETCARS_ENDPOINT
      
-- CarComponentTest
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
