import { Component } from '@angular/core';
import { Task } from '../base-task/base-task.component';
import { TaskItemComponent } from '../task-item/task-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent, CommonModule],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  tasks: Task[] = [
    { id: 1, title: 'Grocery Shopping', description: 'Buy milk, eggs, and bread', category: 'Personal', status: 'In Progress', deadline: new Date() },
    { id: 2, title: 'Project Meeting', description: 'Discuss project progress', category: 'Work', status: 'In Progress', deadline: new Date() },
    { id: 3, title: 'Study Session', description: 'Review chapter 3', category: 'Study', status: 'In Progress', deadline: new Date() },
  ];

  handleTaskCompleted(taskId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.status = 'Completed';
    }
  }
}