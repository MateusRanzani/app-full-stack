import type { NextPage } from "next";
import { useSession } from "next-auth/react";

import { useEffect, useState } from "react";
import Component from "../components/login-btn";
import Image from "next/image";

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
    <div className="totalPageHome">
      <div className="bannerImage" />

      <div className="cardUser">
        <div>
          <div className="avatar" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div>
            {!isEmptyObj(user) ? (
              <div style={{ marginTop: "5rem" }}>
                <div
                  className="mt-8  mb-8 text-center text-white ..."
                  style={{ height: "10rem" }}
                >
                  <p style={{ fontWeight: "700" }}>{user.name}</p>
                  <p style={{ fontWeight: "300", fontSize: "0.8rem" }}>
                    {user.email}
                  </p>

                  {user.teacher !== undefined && user.teacher !== false && (
                    <div>TEACHER</div>
                  )}
                  <p
                    style={{
                      fontWeight: "700",
                      backgroundImage:
                        "linear-gradient(90deg, rgba(210,187,1,1) 0%, rgba(255,217,0,1) 44%, rgba(208,150,3,1) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      MozBackgroundClip: "text",
                    }}
                  >
                    Coins: {user.coins}
                  </p>
                </div>
                <div className="text-center text-white ...">
                  <Component />
                </div>
              </div>
            ) : (
              <div>
                {" "}
                <h1 className="text-white">Faça o login para saber mais</h1>
                <br />
                <Component />
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className="flex"
        style={{
          width: "100%",
          height: "10rem",
          display: "flex",
          flex: "1",
        }}
      >
        <div style={{ width: "20rem"}}></div>

        <div
          style={{
            width: "calc(100% - 20rem)",
            textAlign:"center",
            padding:"1.5rem"
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrum exercitationem ullam corporis suscipit
          laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  );
};

export default Home;
