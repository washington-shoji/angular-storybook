import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { TaskComponent } from '../component/task/task.component';
import { TaskListComponent } from '../component/task-list/task-list.component';
import { TasksState } from '../state/task.state';
import { PureTaskListComponent } from '../component/task-list/pure-task-list.component';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([TasksState])],
  exports: [TaskComponent, TaskListComponent],
  declarations: [TaskComponent, TaskListComponent, PureTaskListComponent],
  providers: [],
})
export class TaskModule {}
