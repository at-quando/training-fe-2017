import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	trainers: any[];
	teamColor: boolean;
  selectedTrainer: any;
  imageAva=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgz1wen061qd4crGM907p8z8eWTRZqUbZ_blRivbcWCX8l1tV",
  "https://t4.ftcdn.net/jpg/01/13/92/79/500_F_113927934_sCoaIlA5zeK7yEskjh1tG7GAqseplkAT.jpg",
  "https://qph.ec.quoracdn.net/main-qimg-23ce3068c64a607a204ff1354c0aee2b-c",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQJ9vykMdF_tzkv6CrqdIj00sw66RCvtcxHNSNBbsUounNz60"
  ]

	constructor(){
		this.trainers=[
  	{avatar:this.imageAva[0],name:"Vy Nguyen T." ,birthday: "1989",team:"FE"},
  	{avatar:this.imageAva[1],name:"Kien Nguyen T" ,birthday: "1993",team:"Ruby"},
    {avatar:this.imageAva[2],name:"Quan Do H." ,birthday: "1995",team:"FE"},
    {avatar:this.imageAva[3],name:"No Name" ,birthday: "",team:"Ruby"},
  ];
	}

  showInfo(trainer){
    this.selectedTrainer = null;
    setTimeout(()=>{
      this.selectedTrainer = trainer;
    });
  }
}
