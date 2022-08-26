// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import connect from "../../../utils/database";

type ErrorResponseType = {
  error: string;
};

type SuccessResponseType = {
  name: string;
  email: string;
  cellphone: string;
  teacher: string;
  coins: number;
  courses: [];
  available_hours: {};
  available_locations: [];
  reviews: [];
  appointments: [];
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | string>
): Promise<void> => {
  if (req.method === "GET") {
    const { email } = req.query;

    if (!email) {
      res.status(400).json({ error: "Missing e-mail on request body" });
      return;
    }

    const { db } = await connect();
    const response = await db.collection("users").findOne({ email });

    if (!response) {
      res.status(400).json({ error: "User not found" });
      return;
    }

    res.status(200).json(response);
    return;
  } else {
    res.status(400).json({ error: "Wrong request method" });
    return;
  }
};
