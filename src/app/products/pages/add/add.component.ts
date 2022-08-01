import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent implements OnInit {

  name: string = 'Valentin'
  color: string = 'red'

  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor( private formBuilder: FormBuilder) { }


  ngOnInit(): void {
  }

  validateCamp(key: string) {
    return (this.form.controls[key].errors && this.form.controls[key].touched) || false;
  }
  changeName(){
    if(this.form.invalid){
      return this.form.markAllAsTouched()
    }
    this.name = this.getValue('name')
  }
  getValue(key: string){
    return this.form.get(key)?.value as string
  }
  errorMsg(key: string){
    return `${this.getValue(key).length > 0 ?  `*${this.getValue(key)}` : '*Empty'} is not valid to camp ${key}` 
  }
  changeColor(){
    this.color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16))
  }

}
