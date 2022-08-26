import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session, loading } = useSession();
  if (session) {
    return (
      <>
        <div>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </>
    );
  }
  return (
    <>
      {loading && (
        <>
          <div className="text-5xl">
            <h1>Carregando...</h1>
          </div>
        </>
      )}
      Not signed in <br />
      <button onClick={() => signIn("auth0")}>Sign in</button>
    </>
  );
}
