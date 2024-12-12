// services/TaskService.ts
import { BehaviorSubject, Observable } from "rxjs";
import { TaskInterface } from "../interfaces/TaskInterface";

export class TaskService {
  private static instance: TaskService;
  private tasks$ = new BehaviorSubject<TaskInterface[]>([]);

  private constructor() {}

  static getInstance(): TaskService {
    if (!TaskService.instance) {
      TaskService.instance = new TaskService();
    }
    return TaskService.instance;
  }

  getTasks(): Observable<TaskInterface[]> {
    return this.tasks$.asObservable();
  }

  setTasks(tasks: TaskInterface[]): void {
    this.tasks$.next(tasks);
  }

  addTask(task: TaskInterface): void {
    const currentTasks = this.tasks$.getValue();
    this.tasks$.next([...currentTasks, task]);
  }

  removeTask(taskId: number): void {
    console.log(`Dans removeTask du service`, taskId);
    const currentTasks = this.tasks$.getValue();
    this.tasks$.next(currentTasks.filter((task) => task.id !== taskId));
  }

  updateTask(updatedTask: TaskInterface): void {
    const currentTasks = this.tasks$.getValue();
    this.tasks$.next(
      currentTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  }
}
