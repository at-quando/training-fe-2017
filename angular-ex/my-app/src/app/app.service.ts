import { Injectable } from '@angular/core';

@Injectable()

export class AppService {
	imageAva=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgz1wen061qd4crGM907p8z8eWTRZqUbZ_blRivbcWCX8l1tV",
  "https://t4.ftcdn.net/jpg/01/13/92/79/500_F_113927934_sCoaIlA5zeK7yEskjh1tG7GAqseplkAT.jpg",
  "https://qph.ec.quoracdn.net/main-qimg-23ce3068c64a607a204ff1354c0aee2b-c",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQJ9vykMdF_tzkv6CrqdIj00sw66RCvtcxHNSNBbsUounNz60"
  ];
  logo=["http://www.eatlogos.com/alphabet_logos/png/vector_f_e_letter_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1000px-Ruby_logo.svg.png"
  ];
  trainers=[
  	{avatar:this.imageAva[0],name:"Vy Nguyen T." ,birthday: "1989",team:"FE", teamLogo:this.logo[0]},
  	{avatar:this.imageAva[1],name:"Kien Nguyen T" ,birthday: "1993",team:"Ruby", teamLogo:this.logo[1]},
    {avatar:this.imageAva[2],name:"Quan Do H." ,birthday: "1995",team:"FE", teamLogo: ''},
    {avatar:'',name:"No Name" ,birthday: "",team:"Ruby", teamLogo: ''},
  ];
  selectedTrainer: any ;
  trainer: any;

  getDetails(id: number){
  	 return this.trainers[id];
    }
  }
