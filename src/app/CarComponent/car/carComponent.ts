import { Component,OnInit } from '@angular/core';
import {CarService} from "../service/carService";
import{Car} from '../../CarComponent/entity/car';
import {Observable,Subject} from 'rxjs';


@Component({
  selector:'car-page',
  templateUrl: './carComponent.html',
  styleUrls: ['./carComponent.css']
})
export class CarComponent implements OnInit  
{

  private carList:Car[];
  destroy: Subject<boolean> = new Subject<boolean>();
  filteredOptions: Observable<Car[]>;
  
  constructor(private carService:CarService)
    {
    
    }

  ngOnInit() 
    {
      this.getAllCars();
    }

  onClickRefreshCarList()
    {
      this.getAllCars();
    }
  getAllCars() 
    {
      this.carService.getCars().subscribe(response => 
        {
          this.carList=response;
        },error => 
          {
            alert(error.message);
          });
    }


  sortDownward($event)
    {
      var value:string = $event.target.id;
      if(value==="milleage")
        {
          this.carService.sortDataDescendMilleage().subscribe(response => 
            {
              this.carList=response;
            },error => 
            {
              alert(error.message);
            });
        }
      else if(value==="name")
        {
          this.carService.sortDataDescendName().subscribe(response => 
            {
              this.carList=response;
            },error => 
            {
              alert(error.message);
            });
        }
      else if(value==="model")
        {
          this.carService.sortDataDescendModel().subscribe(response => 
            {
              this.carList=response;
            },error => 
            {
              alert(error.message);  
            });
        }
      else if(value==="engine")
        {
          this.carService.sortDataDescendEngine().subscribe(response => 
            {
              this.carList=response;
            },error => 
            {
              alert(error.message);
            });
        }
      else if(value==="color")
        {
          this.carService.sortDataDescendColor().subscribe(response => 
            {
              this.carList=response;
            },error => 
            {
              alert(error.message);
            });
        }
    }
  sortUpward($event)
    {
      var value:string = $event.target.id;
      if(value==="milleage")
        {
          this.carService.sortDataAscendMilleage().subscribe(response => 
            {
              this.carList=response;
            },error => 
            {
              alert(error.message);
            });
        }
      else if(value==="name")
        {
          this.carService.sortDataAscendName().subscribe(response => 
            {
              this.carList=response;
            },error => 
            {
              alert(error.message);
            });
        }
      else if(value==="model")
        {
          this.carService.sortDataAscendModel().subscribe(response => 
            {
              this.carList=response;
            },error => 
            {
              alert(error.message);
            });
        }
      else if(value==="engine")
        {
          this.carService.sortDataAscendEngine().subscribe(response => 
            {
              this.carList=response;
            },error => 
            {
              alert(error.message);
            });
        }
      else if(value==="color")
        {
          this.carService.sortDataAscendColor().subscribe(response => 
            {
              this.carList=response;
            },error => 
            {
              alert(error.message);
            });
        }
    }

  columnFilter(event: any) 
    { 
      var value:string = event.target.id; 
      var filterValues = event.target.value;
      if(value==="milleage")
        {
          this.carService.filterByMileage(parseInt(filterValues)).subscribe(response => 
            {
              this.carList=response;
            },error => 
            {
              alert(error.message);
            });
        }
      else if(value==="name")
        {
          this.carService.filterByName(filterValues).subscribe(response => 
            {
              this.carList=response;
            },error => 
            {
              alert(error.message);
            });
        }
      else if(value==="model")
        {
          this.carService.filterByModel(filterValues).subscribe(response => 
            {
              this.carList=response;
            }, error => 
            {
              alert(error.message);
            });
        }
      else if(value==="engine")
        {
          this.carService.filterByEngine(filterValues).subscribe(response => 
            {
              this.carList=response;
            }, error => 
            {
              alert(error.message);
            });
        }
      else if(value==="color")
        {
          this.carService.filterByColor(filterValues).subscribe(response => 
            {
              this.carList=response;
            },error => 
            {
              alert(error.message);
            });
        }
    }
}
