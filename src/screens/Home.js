import { useHistory } from "react-router-dom";
import { LogUserOut } from "./apollo";

function Home() {
  const history = useHistory();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => LogUserOut(history)}>Log out now</button>
    </div>
  );
}
export default Home;
