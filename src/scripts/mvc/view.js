class UserView {
  constructor() {
    this.table = document.querySelector(".table-user-body");
  }

  renderData(list) {
    const html = list.map(
      (user) => `
        <tr class="table-body">
            <td class="table-data">${user.name}</td>
            <td class="table-data">${user.sex}</td>
            <td class="table-data">${user.nation}</td>
            <td class="table-data">${user.job}</td>
        </tr>
    `
    );
    this.table.innerHTML = html.join("");
  }
}

export default UserView;
