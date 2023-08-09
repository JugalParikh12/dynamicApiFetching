import { Component } from '@angular/core';
import { HeroserviceService } from '../heroservice.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  constructor(private heroService:HeroserviceService,private http: HttpClient){}
  message:any;
  image:any;
  getImages(){
    this.heroService.getDogImages().subscribe((res:any)=>{
      console.log("exact res============",res)
      this.image=res.message;
      console.log(this.image)
    } )
  }

}
