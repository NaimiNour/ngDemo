import { Component } from '@angular/core';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 storeInfo: StoreData;
 isImageShown:boolean=true;
 constructor(){
  this.storeInfo=new StoreData("IT Store","https://fakeimg.pl/300/",["Elbayadh","SBA","Oran"])
 }
toggleImage(){
  this.isImageShown=!this.isImageShown;
}

}
