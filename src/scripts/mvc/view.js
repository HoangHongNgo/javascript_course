export class UserView {
  constructor() {
    this.table = document.querySelector(".table-body");
    this.modalEdit = document.querySelector(".modal");
  }

  attachEditEventListener() {
    this.btnEdit = document.querySelector(".edit-btn"); // Find the element
    if (this.btnEdit) {
      const showModal = async (e) => {
        this.modalEdit.classList.toggle("modal-active");
      };
      this.btnEdit.addEventListener("click", showModal);
    }
  }

  renderData(list) {
    const html = list.map(
      (user) => `
        <tr data-id="${user.id}" class="table-row">
            <td class="table-data">${user.name}</td>
            <td class="table-data">${user.sex}</td>
            <td class="table-data">${user.nation}</td>
            <td class="table-data">${user.job}</td>
            <td class="table-data"><button class="edit-btn">Edit</button></td>
        </tr>
    `
    );
    this.table.innerHTML = html.join("");
    this.attachEditEventListener();
  }

  async openForm(handleGetJobById) {}
}
