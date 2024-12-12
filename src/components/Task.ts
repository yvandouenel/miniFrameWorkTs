import Component from "../utils/Component";
import { TaskDOMInterface } from "../interfaces/TaskInterface";
export default class Task extends Component implements TaskDOMInterface {
  id: number;
  title: string;
  done: boolean;
  parentElt: HTMLElement;
  constructor(
    id: number,
    title: string,
    done: boolean = false,
    parentElt: HTMLElement = document.getElementById("root") as HTMLElement
  ) {
    super();
    this.id = Date.now();
    this.title = title;
    this.done = done;
    this.parentElt = parentElt;
    this.render();
    console.log(`Dans le constructeur de Task`);
  }
  render() {
    const sectionElt = this.createMarkup("section", "", this.parentElt);
    console.log(`Dans render de Task`, this);
    this.createMarkup("h2", this.title, sectionElt);
  }
}
