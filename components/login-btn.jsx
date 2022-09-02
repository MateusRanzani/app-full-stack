import { useSession, signIn, signOut } from "next-auth/react";
import useSWR from "swr";
import api from "../utils/api";

export default function Component() {
  const { data: session, loading } = useSession();

  const { data, error } = useSWR(`/api/user/${session?.user?.email}`, api);

  return (
    <>
      <div className="flex justify-center items-center ...">
        {!session && (
          <div className="flex justify-center items-center ...">
            <div>
              <button
                onClick={() => signIn("auth0")}
                className="px-4 py-1 text-sm  text-[white] font-semibold rounded-full hover:text-white hover:bg-[#04D361] hover:border border-neutral-50 focus:outline-none  "
              >
                Login
              </button>
            </div>
          </div>
        )}
        {session && data && (
          <>
            <div>
              {/* Signed in as {session.user.email} <br />
              <p> {data.data.coins}</p> */}
              <button onClick={() => signOut()}>Sair</button>
            </div>
          </>
        )}
        {error && session && (
          <div>
            O usuário com email {session.user.email} não existe em nossa base de
            dados.
            <br />
            <button onClick={() => signOut()}>Sign out</button>
          </div>
        )}
        {loading && <div>Carregando...</div>}
      </div>
    </>
  );
}
