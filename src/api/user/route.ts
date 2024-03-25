import { httpStatus } from "../../http-status";
import type { Request, Response, NextFunction } from "express";

// @get
export async function getUsers(req: Request, res: Response) {
  res.send("getUsers").status(httpStatus.OK);
}

// @post
export async function postUsers(req: Request, res: Response) {
  res.send("postUsers").status(httpStatus.CREATED);
}
