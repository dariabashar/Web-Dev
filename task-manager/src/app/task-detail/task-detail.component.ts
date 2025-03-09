import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../base-task/base-task.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './task-detail.component.html',
})

export class TaskDetailComponent implements OnInit {
  task: Task | undefined;
  tasks: Task[] = [
    { id: 1, title: 'Grocery Shopping', description: 'Buy milk, eggs, and bread', category: 'Personal', status: 'In Progress', deadline: new Date() },
    { id: 2, title: 'Project Meeting', description: 'Discuss project progress', category: 'Work', status: 'In Progress', deadline: new Date() },
    { id: 3, title: 'Study Session', description: 'Review chapter 3', category: 'Study', status: 'In Progress', deadline: new Date() },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const taskId = +this.route.snapshot.paramMap.get('id')!;
    this.task = this.tasks.find(t => t.id === taskId);
  }
}

