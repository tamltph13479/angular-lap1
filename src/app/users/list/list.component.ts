import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-userlist',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() users: any;
  @Output() handleEdit: EventEmitter<number>;
  @Output() handleDelete: EventEmitter<number>;
  constructor() {
    // gan gi tri mac dinh
    this.handleEdit = new EventEmitter();
    this.handleDelete = new EventEmitter();
  }

  ngOnInit(): void {
  }
  onEdit(userId: number) {
    this.handleEdit.emit(userId);

  }
  onDelete(userId: number) {
    this.handleDelete.emit(userId);
  }
}
