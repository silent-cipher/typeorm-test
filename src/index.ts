import { AppDataSource, AppDataSource2 } from "./data-source";
import { Details } from "./entity/Details";

// AppDataSource.initialize()
//   .then(async () => {
async function main() {
  await AppDataSource.initialize();
  await AppDataSource2.initialize();
  console.log("Inserting a new user into the database...");
  const user = new Details();
  user.firstName = "Shivam";
  user.lastName = "Kumar";
  user.age = 21;
  await AppDataSource.manager.save(user);
  console.log("Saved a new user with id: " + user.id);

  console.log("Loading users from the database...");
  const users = await AppDataSource.manager.find(Details);
  console.log("Loaded users: ", users);

  console.log(
    "Here you can setup and run express / fastify / any other framework."
  );
}
// })
// .catch((error) => console.log(error));

main();
