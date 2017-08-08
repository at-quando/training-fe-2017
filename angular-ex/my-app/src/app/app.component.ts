import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { User } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formRegister: any;
  teams: Array<string>;
  trainers: any;
  trainer: User;
  check: boolean;

  constructor(private fb: FormBuilder) { 
    this.teams =[
    'FE', 'Ruby', 'PHP'
    ];
    this.trainers=[];
    this.check = false;
  }

  ngOnInit() {
    this.formRegister = this.fb.group({
      personal: this.fb.group({
        name: ['', [Validators.required]],
        birthday: [''],
        avatar: ['']
      }),
      company: this.fb.group({
        team: ['',[Validators.required]],
        joined: []
      }),
      skills: []
    })

    this.formRegister.get('company.team').valueChanges.subscribe(
      (val: string) => {
        this.formRegister.setControl('skills', new FormControl('', [this.checkSkills]));
      }
    );
  }

  checkSkills = (input: FormControl) => {
    let isValid: boolean;
    let prerequisite : string;
    prerequisite = this.formRegister.get('company.team').value.toLowerCase();
    if(input.value.toLowerCase().match(prerequisite)) {
      isValid = true;
    }
    else if ( prerequisite.toLowerCase() == 'fe' && input.value.search('css') !== -1) {
      isValid = true;
    }
    else {
      isValid = false;
    }
    return isValid ?  null: { skillsInvalid: true };
  }

  onSubmit(model: User) {
    this.trainers.push(model);
  }

  fillDetails(object) {
    (<FormGroup>this.formRegister).setValue(object, { onlySelf: true });
  }
}
