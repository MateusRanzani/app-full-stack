// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ObjectID } from "mongodb";
import connect from "../../utils/database";

type ErrorResponseType = {
  error: string;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | object[]>
): Promise<void> => {
  if (req.method === "GET") {
    const { courses } = req.body;

    if (!courses) {
      res.status(400).json({ error: "Missing course name on request body" });
      return;
    }

    const { db } = await connect();
    const response = await db.collection("users").find({ courses }).toArray();

    if (response.length === 0) {
      res.status(400).json({ error: "Courses not found" });
      return
    }

    res.status(200).json(response);
  } else {
    res.status(400).json({ error: "Wrong request method" });
    return
  }
};
