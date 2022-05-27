import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
  formValues = {
    id: 0,
    name: '',
    age: 0,
    email: "",
    phone: 0
  }
  onCreateUser(newUser: any) {
    console.log(newUser)
  }
  onEditUser(userId: number) {
    const editUser = this.users.find(user => user.id === userId)
    if (editUser) {
      this.formValues = {
        ...editUser
      }
    }
  }
}
