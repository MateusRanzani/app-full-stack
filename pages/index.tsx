import type { NextPage } from "next";
import { useSession } from "next-auth/react";

import { useEffect, useState } from "react";
import api from "../utils/api";

interface Teacher {
  _id: string;
  name: string;
  email: string;
  cellphone: string;
  teacher: boolean;
  coins: number;
  courses: string[];
  available_hours: Record<string, number[]>;
  available_locations: string[];
  reviews: Record<string, unknown>[];
  appointments: Record<string, unknown>[];
}

const Home: NextPage = () => {
  let [user, setUser] = useState<Teacher>({} as Teacher);
  const { data: session, status } = useSession();

  const isEmptyObj = (obj: any) => {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return true;
  };

  const fetchUser = () => {
    if (session !== undefined) {
      api(`/api/user/${session?.user?.email}`)
        .then((response) => {
          const teachers: Teacher = response.data;
          user = teachers;
          setUser(user);
        })
        .catch((error) => {});
    }
  };

  return (
    <div>
      <div className="totalPageHome">
        <div className="header-homePage">
          <br />
          Olá! Seja bem vindo
        </div>
      </div>
    </div>
  );
};

export default Home;
