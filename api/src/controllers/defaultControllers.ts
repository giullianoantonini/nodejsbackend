
import { Request, Response } from "express";

const rootResponse = (req: Request, res: Response): void => {
  res.send("API em NodeJS com TS em MVC - hospedada na Vercel");
}

export default rootResponse;