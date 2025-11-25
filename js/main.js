import TaskModel from "./model/TaskModel.js";
import TaskView from "./view/TaskView.js";
import TaskController from "./controller/TaskController.js";

const app = new TaskController(new TaskModel(), new TaskView());