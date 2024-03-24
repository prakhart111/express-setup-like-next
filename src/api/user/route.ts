import { httpStatus } from "../../http-status";
import type { Request, Response, NextFunction } from "express";

export async function getUsers(req: Request, res: Response) {
  res.send("getUsers").status(httpStatus.OK);
}

export async function postUsers(req: Request, res: Response) {
  res.send("postUsers").status(httpStatus.CREATED);
}
