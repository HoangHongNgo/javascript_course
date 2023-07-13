export class UserController {
  constructor(view, service) {
    this.view = view;
    this.service = service;
  }

  init = () => {
    this.handleRenderTable();
    this.view.openForm(this.handleGetUserById);
  };

  handleRenderTable = async () => {
    try {
      const data = await this.service.getListUsers();
      this.view.renderData(data);
    } catch (err) {
      console.error("Error fetching data:", error);
    }
  };

  handleGetUserById = async (id) => {
    try {
      return await this.service.getUserById(id);
    } catch (err) {
      console.error("Error fetching user:", err);
    }
  };
}
