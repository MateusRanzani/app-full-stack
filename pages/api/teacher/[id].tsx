// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ObjectID } from "mongodb";
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
  courses: string[];
  available_hours: {};
  available_locations: string[];
  reviews: [];
  appointments: [];
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | SuccessResponseType>
): Promise<void> => {
  if (req.method === "GET") {
    const { id } = req.query;

    if (!id) {
      res.status(400).json({ error: "Missing teacher ID on request body" });
      return;
    }

    const { db } = await connect();
    const response = await db
      .collection("users")
      .findOne({ _id: new ObjectID(id) });

    if (!response) {
      res.status(400).json({ error: "Teacher not found" });
      return;
    }

    res.status(200).json(response);
  } else {
    res.status(400).json({ error: "Wrong request method" });
    return;
  }
};
