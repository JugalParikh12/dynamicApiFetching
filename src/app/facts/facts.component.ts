import { Component } from '@angular/core';
import { HeroserviceService } from '../heroservice.service';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent {
  constructor(private _heroService:HeroserviceService) { }
  value: any = "";

  getFacts(){
    this._heroService.getFactsNow().subscribe((fact:any)=>{
      // console.log(fact)
      this.value=fact.fact;
      // console.log(this.value)
    } )
  }

}
