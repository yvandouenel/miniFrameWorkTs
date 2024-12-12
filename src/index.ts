// index.ts
import "./sass/index";
import TodoList from "./components/TodoList";
import { TaskService } from "./services/TaskService";

console.log("Dans index.ts");

const todoList = new TodoList([
  { id: 1, title: "Faire la vaisselle", done: false },
]);

// Exemple d'utilisation du service
const taskService = TaskService.getInstance();

// Ajouter une tâche
setTimeout(() => {
  taskService.addTask({
    id: 2,
    title: "Nouvelle tâche",
    done: false,
  });
}, 2000);

// Modifier une tâche
setTimeout(() => {
  taskService.updateTask({
    id: 1,
    title: "Faire la vaisselle",
    done: true,
  });
}, 4000);
