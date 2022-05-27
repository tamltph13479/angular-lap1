import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  inputValue = {
    id: 0,
    name: '',
    age: 0,
    email: "",
    phone: 0
  }
  users = [
    {
      id: 1,
      name: 'tamltph13479',
      age: 24,
      email: 'tamltph13479@gmail.com',
      phone: 123456,
    },
    {
      id: 10,
      name: 'tamltph134',
      age: 24,
      email: 'tamltph13479@gmail.com',
      phone: 123456,
    }
  ]
  onSubmit(userForm: NgForm) {
    console.log(userForm.value);
    const newUser = this.users
      .map(user => user.id) // lấy ra mang mới chỉ có id
      .sort((a: number, b: number) => b - a) // sort cac id đang có
    const maxId = newUser[0];
    //1 push du lieu form vao mang
    if (userForm.value.id === 0) {
      this.users.push({
        ...userForm.value,// lay ra object value form
        id: maxId + 1
      })
    } else {
      //update
    }

    userForm.resetForm({
      name: '',
      age: 0
    });
  }
  onEdit(user: any) {
    this.inputValue = user;
  }

}
