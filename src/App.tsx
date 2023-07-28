import BackgroundImage from "./components/BackgroundImage";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <BackgroundImage />
      <div className="card-container">
        <Card />
      </div>
    </>
  );
};

export default App;
