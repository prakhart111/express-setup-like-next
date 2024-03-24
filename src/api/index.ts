import { Router } from "express";
import { getUsers, postUsers } from "./user/route";
import { getSomethingElse, postSomethingElse } from "./somethingElse/route";

export default function () {
  const routes = Router();
  routes.get("/users", getUsers);
  routes.post("/users", postUsers);

  routes.get("/somethingElse", getSomethingElse);
  routes.post("/somethingElse", postSomethingElse);
  console.log("Routes loaded");
  return routes;
}
