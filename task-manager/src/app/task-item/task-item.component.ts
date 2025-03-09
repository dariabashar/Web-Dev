import { Component } from '@angular/core';
import { BaseTaskComponent } from '../base-task//base-task.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-item.component.html',
})

export class TaskItemComponent extends BaseTaskComponent { }
