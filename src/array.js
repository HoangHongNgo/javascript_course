getListUsers = async () => {
  const apiRequest = await fetch("users.json");
  const dataResponse = await apiRequest.json();
  return dataResponse;
};

processData = async () => {
  const data = await getListUsers();
  console.log("List of users: ", data);

  setIsActive(data);

  findUserById(9, data);

  listNation(data);

  listFemaleUsers(data);
};

setIsActive = (users) => {
  let newData = users.map((user) => {
    user.isActice = true;
    return user;
  });
  console.log("Update user status: ", newData);
};

findUserById = (id, users) => {
  console.log(
    "Looking for user " + id + "...",
    users.find((user) => user.id == id)
  );
};

listNation = (users) => {
  let nations = [];
  users.forEach((user) => {
    if (!nations.includes(user.nation)) nations.push(user.nation);
  });
  console.log("List of nations: ", nations);
};

listFemaleUsers = (users) => {
  let females = users.filter((user) => user.sex === "female");
  console.log("List of female users: ", females);
};

const getMax = (a, b) => Math.max(a, b);
console.log("Reduce example returns: ", [1, 100].reduce(getMax, 150));

processData();
