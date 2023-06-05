import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="text-2xl">React Timeline Thingy</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore ipsam
        exercitationem laboriosam corporis odio porro facilis debitis deleniti
        esse, commodi consequatur excepturi nostrum sunt fugit consequuntur
        accusamus tempore harum asperiores.
      </p>

      <Link to="/editor">Editor</Link>
    </>
  );
}

export default App;
