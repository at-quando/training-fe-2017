import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  providers: [AppService]
})

export class EditComponent {
  formEdit: FormGroup;
  article: any;
  id : number;
  private sub: any;

  constructor(private _appService: AppService,private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.article = {id:"", title:"", image:"", content:"", description:"", author: ""};
    this._appService.getAll().subscribe (
      data => {
        this.article = data.articles[this.id];
        (<FormGroup>this.formEdit).setValue(this.article, { onlySelf: true });
      },
      err => console.log("can't get data",err.status, err.url),
      () => console.log("Get complete")
    );
  }

  ngOnInit() {
    this.formEdit = this.fb.group ({
        id: [''],
        title: ['', [Validators.required]],
        image: [''],
        content: [''],
        description:[''],
        author: []
    });
    this.sub = this.route.params.subscribe(params => {
        this.id = +params["id"];
    });
  }
  navigateto() {
    this.router.navigate(['/'])
  }
}

