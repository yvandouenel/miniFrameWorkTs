export interface TaskInterface {
  id: number;
  title: string;
  done: boolean;
}
export interface TaskDOMInterface extends TaskInterface {
  parentElt: HTMLElement;
}
