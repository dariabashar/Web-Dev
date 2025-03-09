import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  description: string;
  category: string;
  status: string;
  deadline: Date;
}

@Component({
  selector: 'app-base-task',
  standalone: true,
  template: '',
})
export class BaseTaskComponent {
  @Input() task!: Task;
  @Output() taskCompleted = new EventEmitter<number>();

  markAsCompleted() {
    this.taskCompleted.emit(this.task.id);
  }
}