import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  template: `
    <div>
      @for (task of tasks; track task.id) {
      <div class="task">
        <div>
          <input
            (click)="task.completed = !task.completed"
            type="checkbox"
            [checked]="task.completed"
          />
          <label>{{ task.name }}</label>
        </div>
      </div>
      }
    </div>
  `,
  styles: `
  
  .task {
        display: flex;
        justify-content: space-between;
    }
        `,
})
export class TodoComponent {
  tasks = [
    {
      id: 1,
      name: 'Task 1',
      completed: false,
    },
    {
      id: 2,
      name: 'Task 2',
      completed: true,
    },
    {
      id: 3,
      name: 'Task 3',
      completed: false,
    },
  ];
}
