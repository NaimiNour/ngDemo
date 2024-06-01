import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
  catList: ICategory[];
  @Input() sentCatID:number=0;
  prdList: IProduct[];
  prdListOfCat: IProduct[]=[];
  orderTotalPrice:number=0;
  constructor(){
    this.catList=[
      { id:1, name:"Laptops"},
      { id:2, name:"Tablets"},
      { id:3, name:"Mobiles"},
    ];
   this.prdList=[
    {id:100, name:'Lenovo laptop',price:100, quantity:1, imgURL:'https://fakeimg.pl/250x100/ff0000/', categoryID:1},
    {id:200, name:'Apple MACBook laptop',price:200, quantity:0, imgURL:'https://fakeimg.pl/250x100/', categoryID:2},
    {id:300, name:'acer laptop',price:200, quantity:10, imgURL:'https://fakeimg.pl/250x100/ff0000/', categoryID:3},
    {id:400, name:'acer laptop',price:300, quantity:10, imgURL:'https://fakeimg.pl/250x100/ff0000/', categoryID:1},
    {id:500, name:'hp laptop',price:300, quantity:4, imgURL:'https://fakeimg.pl/250x100/ff0000/', categoryID:2},
    {id:600, name:'DELL laptop',price:500, quantity:7, imgURL:'https://fakeimg.pl/250x100/ff0000/', categoryID:3},
   
   ];
  }
  trackprdByFn(index:number,prd:IProduct):number
  {
    return prd.id;
  }
  buy(prdPrice:number, count:string){

this.orderTotalPrice=+count * prdPrice;
  }
  private filterProductByCatID(){
    this.prdListOfCat=this.prdList.filter(prd=>prd.categoryID==this.sentCatID)
  }
  // change(){
  //   this.selectedCatID=1;
  // }
  ngOnChanges(): void {
    this.filterProductByCatID();
  }
  ngOnInit(): void {

  }

}
