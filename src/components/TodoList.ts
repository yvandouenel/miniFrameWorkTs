// components/TodoList.ts
import Component from "../utils/Component";
import { TaskInterface } from "../interfaces/TaskInterface";
import Task from "./Task";
import { TaskService } from "../services/TaskService";
import { Subscription } from "rxjs";

export default class TodoList extends Component {
  private parentElt: HTMLElement;
  private taskService: TaskService;
  private subscription: Subscription;

  constructor(
    initialTasks: TaskInterface[] = [],
    parentElt: HTMLElement = document.getElementById("root") as HTMLElement
  ) {
    super();
    this.parentElt = parentElt;
    this.taskService = TaskService.getInstance();

    // Initialiser avec les tâches initiales
    this.taskService.setTasks(initialTasks);

    // S'abonner aux changements
    this.subscription = this.taskService.getTasks().subscribe((tasks) => {
      console.log(`Une nouvelle valeur de tasks a été émise : `, tasks);
      this.render(tasks);
    });
  }

  render(tasks: TaskInterface[]) {
    // Nettoyer le contenu existant
    this.parentElt.innerHTML = "";

    const sectionElt = this.createMarkup("section", "", this.parentElt);
    tasks.forEach((task) => {
      new Task(task.id, task.title, task.done, sectionElt);
    });
  }

  // Important : se désabonner quand le composant est détruit
  destroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
