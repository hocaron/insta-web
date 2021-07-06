import { isLoggedInVar, LogUserOut } from "./apollo";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => LogUserOut()}>Log out now</button>
    </div>
  );
}
export default Home;
