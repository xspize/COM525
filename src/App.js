import "./styles.css";
import Week1 from "./components/Week1";

//function Heading(props) {
// console.log(props);
// return <h1>Hello </h1>;
//}

// parent App

/*

          APP
          l
          data(name)
          l
          Heading
*/

export default function App() {
  return (
    <div className="App">
      <h1>this is my cool application</h1>
      <Week1 name="Joao" location="Southampton" />
    </div>
  );
}
