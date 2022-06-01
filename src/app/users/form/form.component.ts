import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() inputValue: any
  //dinh nghia phuong thuc cho cha
  @Output() handleSubmit: EventEmitter<any>
  constructor() {
    // khoi tao
    this.handleSubmit = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onSubmit(userForm: NgForm) {
    console.log(userForm.value);
    // 3 ban du lieu de
    this.handleSubmit.emit(userForm.value)
    // // cap nhap lai form
    userForm.resetForm({
      name: '',
      age: 0
    });
  }

}
