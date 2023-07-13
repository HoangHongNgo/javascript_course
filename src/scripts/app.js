import { UserController } from "./mvc/controller";
import { UserService } from "./mvc/services";
import { UserView } from "./mvc/view";

export class App {
  constructor() {}
  startApp() {
    const userController = new UserController(new UserView(), new UserService());
    userController.init();
  }
}
