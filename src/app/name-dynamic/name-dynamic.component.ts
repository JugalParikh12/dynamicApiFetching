import { Component } from '@angular/core';
import { HeroserviceService } from '../heroservice.service';


@Component({
  selector: 'app-name-dynamic',
  templateUrl: './name-dynamic.component.html',
  styleUrls: ['./name-dynamic.component.css']
})
export class NameDynamicComponent {
  constructor(private _heroService:HeroserviceService){}
  name:any;
  gender:any;
  Submit(){
    this._heroService.getNameSubmit(this.name).subscribe((res:any)=>{
      console.log("exact res============",res)
      this.gender=res.gender;
    } )
    
  }

}
