import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { InputsService } from './inputs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'postInputs';

  enterInputs!: FormGroup;
  isSubmitted = false;
  returnUrl= '';
  inputData:any[]=[];

  constructor(private formBuilder:FormBuilder,
              private inputservice:InputsService,
              private router:Router,
              private activatedRoute: ActivatedRoute) {

                let inputObservabel:Observable<any[]>;
                activatedRoute.params.subscribe((params) =>{

                  inputObservabel = inputservice.getInputData();

                  inputObservabel.subscribe(serverinputs =>{
                  this.inputData = serverinputs;
                  });
                })
              }

  ngOnInit(): void {
    this.enterInputs = this.formBuilder.group({
      input: ['', Validators.required]
    })
  }
  
  submit(){
    this.isSubmitted = true;
    if (this.enterInputs.invalid) return;

    const inputValue= this.enterInputs.value;
    const user: any = {
      input: inputValue.input
    };

    this.inputservice.userinputs(inputValue).subscribe((response) =>{
      this.router.navigateByUrl(this.returnUrl);
    })
    this.enterInputs.reset();
  }
}
