/*
  Fetch data
*/
getListUsers = async () => {
  const apiRequest = await fetch("users.json");
  const dataResponse = await apiRequest.json();
  return dataResponse;
};

/*
  Process data, Execute functions
*/
processData = async () => {
  const data = await getListUsers();
  console.log("List of users: ", data);

  setIsActive(data);

  findUserById(9, data);

  listNation(data);

  listFemaleUsers(data);

  anyVietNamese(data);

  everyHasJob(data);
};

/*
  map method example
*/
setIsActive = (users) => {
  let newData = users.map((user) => {
    user.isActice = true;
    return user;
  });
  console.log("Update user status: ", newData);
};

/*
  find method example
*/
findUserById = (id, users) => {
  console.log(
    "Looking for user " + id + "...",
    users.find((user) => user.id == id)
  );
};

/*
  forEach, push method example
*/
listNation = (users) => {
  let nations = [];
  users.forEach((user) => {
    if (!nations.includes(user.nation)) nations.push(user.nation);
  });
  console.log("List of nations: ", nations);
};

/*
  filter method example
*/
listFemaleUsers = (users) => {
  let females = users.filter((user) => user.sex === "female");
  console.log("List of female users: ", females);
};

/*
  some method example
*/
anyVietNamese = (users) => {
  console.log("Is there any Vietnamese? ", users.some((user) => user.nation === "Viet Nam") ? "Yes" : "No");
};

/*
  every method example
*/
everyHasJob = (users) => {
  console.log("Does everyone has job? ", users.every((user) => user.job !== "") ? "Yes" : "No");
};

processData();

/*
  reduce method example
*/
const getMax = (a, b) => Math.max(a, b);
console.log("Reduce example returns: ", [1, 50, 100].reduce(getMax, 75));

/*
  examples for push, pop, shift, unshift and sort methods
*/
const array = [0, 9, 3, 5, 4, 8, 7, 0, 3, 7];

console.log("The array: ", array);

console.log("Push method returns: ", array.push("end"));
console.log("The array after push: ", array);

console.log("Pop method returns: ", array.pop());
console.log("The array after pop: ", array);

console.log("Shift method returns: ", array.shift());
console.log("The array after shift: ", array);

console.log("Unshift method returns: ", array.unshift("+84"));
console.log("The array after unshift: ", array);

console.log("Sort method returns: ", array.sort());
console.log("The array after sort: ", array);
