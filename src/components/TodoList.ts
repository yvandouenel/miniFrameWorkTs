import Component from "../utils/Component";
import { TaskInterface } from "../interfaces/TaskInterface";
import Task from "./Task";
export default class TodoList extends Component {
  private tasks: TaskInterface[];
  private parentElt: HTMLElement;
  constructor(
    tasks: TaskInterface[] = [],
    parentElt: HTMLElement = document.getElementById("root") as HTMLElement
  ) {
    super();
    this.tasks = tasks;
    this.parentElt = parentElt;
    this.render();
  }
  render() {
    const sectionElt = this.createMarkup("section", "", this.parentElt);
    this.tasks.forEach((task) => {
      new Task(task.id, task.title, task.done, sectionElt);
    });
  }
}
