import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";

import Component from "../components/login-btn.jsx";

const ProfilePage: NextPage = () => {
  return (
    <div>
      <Component />
    </div>
  );
};

export default ProfilePage;
