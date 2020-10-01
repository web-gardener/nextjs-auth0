import Layout from "../components/layout";
import { useFetchUser } from "../lib/user"; // custom hook!

function Home() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <h1>Next.js and Auth0 Example</h1>

      {loading && <p>Loading login info...</p>}

      {!loading && !user && (
        // se não estiver carregando e se não tiver usuário, renderize
        <>
          <p>
            To test the login click in <i>Login</i>
          </p>
          <p>
            Once you have logged in you should be able to click in{" "}
            <i>CSR/SSR Profile</i> and <i>Logout</i>
          </p>
        </>
      )}

      {user && (
        // 'user &&' é a mesma coisa que verificar se 'user !== null'.
        // Assim, não renderizamos elementos vazios, caso o usuário não tehha sido encontrado
        <>
          <h4>Rendered user info on the client</h4>
          <img src={user.picture} alt="user" />
          <p>Nickname: {user.nickname}</p>
          <p>Name: {user.name}</p>
        </>
      )}
    </Layout>
  );
}

export default Home;
