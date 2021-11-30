import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Product } from '../model/Product';
import { RegistrationService } from '../registration.service';
import { Reviews } from '../model/Reviews';
@Component({
  selector: 'app-reviewlist',
  templateUrl: './reviewlist.component.html',
  styleUrls: ['./reviewlist.component.css']
})
export class ReviewlistComponent implements OnInit {
 reviewList:Array<Reviews>=[]
 average:any;
 totalReview:any;
 id:any;
 userName:string=""
 product:Product={
  messageBody:"",
  subject:"",
  question:"",
  userName:"",
  date:""
 }
  constructor(private service:DashboardService,private registrationService:RegistrationService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this. id=this.route.snapshot.paramMap.get('subject');
    if(this.registrationService.getloginUserName()!=null){
      this.userName=this.registrationService.getloginUserName()
    }
    this.allReview(this.id);
   // this.getAllAverage(this.id);
    this.getProduct(this.id);
  }
  
  //This method is used tp get all review of product
  allReview(id:any){
   
    console.log(id); 
    this.service.getReviewList(id).subscribe((data)=>{
    this.reviewList=data;
    this.totalReview=data.length
     },
     (error)=>
     console.log(error))
  }
  //This method is used to get product 
 getProduct(id:any){
  this.service.getProductById(id).subscribe((data)=>{
  this.product=data;
  console.log(this.product);
  },(error)=>{
  console.log(error)
})

 }

 //This method is used to get average of rating
// getAllAverage(id:any){
// this.service.getAverageReview(id).subscribe((data)=>{
// this.average=data
// console.log(this.average);
// this.average=parseInt(data)

// },(error)=>{
// console.log(error);
// })
// }

//This method is used for conversion into integer value
//  convert(data:any){
//    return parseInt(data);
//  }

//This method is used for logout user
 logOutLogin(){
  this.registrationService.logOut();
  location.reload();
  }
}
