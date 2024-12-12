import "./sass/index";
import TodoList from "./components/TodoList";
console.log("Dans index.ts");

new TodoList([{ id: 1, title: "Faire la vaisselle", done: false }]);
