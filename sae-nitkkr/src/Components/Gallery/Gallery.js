import './Gallery.css';
import one1 from '../../Assets/one1.jpg';
import one from '../../Assets/one.JPG';
import one2 from '../../Assets/one2.jpg';

function App() {
  return (
    <div>
      <h1>PHOTOS</h1>
      <Gallery />
    </div>
  );
}


function Gallery() {
  return (
    <>

      <div className="Gallery-row">
        <div className="Gallery-column">
          <img src={one1} />
          <img src={one2} />
          <img src={one} />
          <img src={one} />
          <img src={one2} />
          <img src={one} />
          <img src={one1} />
        </div>
        <div className="Gallery-column">
          <img src={one2} />
          <img src={one} />
          <img src={one} />
          <img src={one2} />
          <img src={one} />
          <img src={one} />
        </div>
        <div className="Gallery-column">
          <img src={one1} />
          <img src={one2} />
          <img src={one} />
          <img src={one} />
          <img src={one2} />
          <img src={one} />
          <img src={one1} />
        </div>
        <div className="Gallery-column">
          <img src={one2} />
          <img src={one} />
          <img src={one} />
          <img src={one2} />
          <img src={one} />
          <img src={one} />
        </div>
        <div className="Gallery-column">
          <img src={one1} />
          <img src={one2} />
          <img src={one} />
          <img src={one} />
          <img src={one2} />
          <img src={one} />
          <img src={one1} />
        </div>

      </div>




    </>

  );
}
export default App;
