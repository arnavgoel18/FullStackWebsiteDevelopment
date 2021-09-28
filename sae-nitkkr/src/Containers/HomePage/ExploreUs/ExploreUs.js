import "./ExploreUs.css";

function App() {
  return (
    <div>
      <h1 className="heading">EXPLORE US</h1>

      <div className="Container">
        <div className="box">
          <Card text="GALLERY" />
        </div>
        <div className="box">
          <Card text="SPONSERS" />
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div class="box">
      <div class="box1">
        <h2 class="text">{props.text}</h2>
      </div>
    </div>
  );
}

export default App;
