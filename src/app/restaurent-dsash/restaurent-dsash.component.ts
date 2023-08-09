import { Component, OnInit } from '@angular/core';
import { HeroserviceService } from '../heroservice.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-restaurent-dsash',
  templateUrl: './restaurent-dsash.component.html',
  styleUrls: ['./restaurent-dsash.component.css']
})
export class RestaurentDsashComponent{

  addRestaurent=new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    email:new FormControl('')
  })


  constructor(private heroService:HeroserviceService) { }

  ngOnInit(): void {
  }


   
  getAllData(){
    this.heroService.getRetro().subscribe((res:any)=>{
      console.log("exact res============",res)
    } )
  }

  postData(data:any){
    this.heroService.getPostRetro(data).subscribe((res:any)=>{
      console.log("exact res============",res)
    } )
  }
  createResto(){
    this.heroService.getPostRetro(this.addRestaurent.value).subscribe((res:any)=>{
      console.log("exact res============",res)
    } )
  }
  updateResto(){
    this.heroService.getPutRetro(this.addRestaurent.value).subscribe((res:any)=>{
      console.log("exact res============",res)
    } )
  }

}
