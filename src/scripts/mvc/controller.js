class UserController {
  constructor(view, service) {
    this.view = view;
    this.service = service;
  }

  init = () => {
    this.handleRenderTable();
  };

  handleRenderTable = async () => {
    try {
      const data = await this.service.getListUsers();
      this.view.renderData(data);
    } catch (err) {
      console.error("Error fetching data:", error);
    }
  };
}

export default UserController;
