import Component from "../utils/Component";
import { TaskDOMInterface } from "../interfaces/TaskInterface";
import { TaskService } from "../services/TaskService";
export default class Task extends Component implements TaskDOMInterface {
  id: number;
  title: string;
  done: boolean;
  parentElt: HTMLElement;
  private taskService: TaskService;
  constructor(
    id: number,
    title: string,
    done: boolean = false,
    parentElt: HTMLElement = document.getElementById("root") as HTMLElement
  ) {
    super();
    this.id = id;
    this.title = title;
    this.done = done;
    this.parentElt = parentElt;
    this.render();
    this.taskService = TaskService.getInstance();
    console.log(`Dans le constructeur de Task`);
  }
  render() {
    console.log(`Dans render de Task`, this);
    const sectionElt = this.createMarkup("section", "", this.parentElt);
    this.createMarkup("h2", this.title, sectionElt, {
      style: this.done ? "border:1px solid green" : "border:1px solid red",
    });
    const button = this.createMarkup("button", "Supprimer", sectionElt);
    button.addEventListener("click", () => {
      console.log(`click sur bouton supprimer`, this);
      this.taskService.removeTask(this.id);
    });
  }
}
