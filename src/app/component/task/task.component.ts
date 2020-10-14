import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  title: string;
  @Input() task: Task;

  @Output() onPinTask: EventEmitter<any> = new EventEmitter();
  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onArchive(taskId: string) {
    this.onArchiveTask.emit(taskId);
  }

  onPin(taskId: string) {
    this.onPinTask.emit(taskId);
  }

}
