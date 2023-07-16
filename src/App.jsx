import { Body } from "./components/Body";
import Header from "./components/Header";
import Parallelogram from "./components/Parallelogram";
import { Swipper } from "./components/Swipper";

function App() {
  return (
    <>
      <Header />
      <Body />
      <Swipper />
      <Parallelogram text="Review" />
      <Parallelogram text="Review" />
    </>
  );
}

export default App;
