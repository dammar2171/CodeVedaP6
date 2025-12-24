import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardContainer from "./components/CardContainer";
import Heading from "./components/Heading";

function App() {
  const data = [
    {
      question: "Select one input device.",
      options: { o1: "keyboard", o2: "plotter", o3: "monitor", o4: "Screen" },
    },
  ];
  return (
    <>
      <Heading />
      <CardContainer data={data} />
    </>
  );
}

export default App;
