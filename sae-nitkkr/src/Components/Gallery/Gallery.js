import './Gallery.css';
import one1 from "./one1.jpg";
import one from './one.JPG';
import one2 from './one2.jpg';

function App() {
  return (
    <div>
      <h1 className="Gallery-photos">PHOTOS</h1>
      <Gallery />
    </div>
  );
}


function Gallery() {
  return (
    <>

      <div className="Gallery-row">
        <div className="Gallery-column">
          <img src={one1} alt="hello" className="image_of_gallery" />
          <img src={one2} alt="hello" className="image_of_gallery" />
          <img src={one} alt="hello" className="image_of_gallery" />
          <img src={one} alt="hello" className="image_of_gallery" />
          <img src={one2} alt="hello" className="image_of_gallery" />
          <img src={one} alt="hello" className="image_of_gallery" />
          <img src={one1} alt="hello" className="image_of_gallery" />
        </div>
        <div className="Gallery-column">
          <img src={one2} alt="hello" className="image_of_gallery" />
          <img src={one} alt="hello" className="image_of_gallery" />
          <img src={one} alt="hello" className="image_of_gallery" />
          <img src={one2} alt="hello" className="image_of_gallery" />
          <img src={one} alt="hello" className="image_of_gallery" />
          <img src={one} alt="hello" className="image_of_gallery" />
        </div>
        <div className="Gallery-column">
          <img src={one1} alt="hello" className="image_of_gallery" />
          <img src={one2} alt="hello" className="image_of_gallery" />
          <img src={one} alt="hello" className="image_of_gallery" />
          <img src={one} alt="hello" className="image_of_gallery" />
          <img src={one2} alt="hello" className="image_of_gallery" />
          <img src={one} alt="hello" className="image_of_gallery" />
          <img src={one1} alt="hello" className="image_of_gallery" />
        </div>
        <div className="Gallery-column">
          <img src={one2} className="image_of_gallery"  />
          <img src={one} className="image_of_gallery" />
          <img src={one} className="image_of_gallery" />
          <img src={one2} className="image_of_gallery"  />
          <img src={one} className="image_of_gallery" />
          <img src={one} className="image_of_gallery"  />
        </div>
        <div className="Gallery-column">
          <img src={one1} alt="hello" className="image_of_gallery" />
          <img src={one2} alt="hello" className="image_of_gallery" />
          <img src={one} alt="hello" className="image_of_gallery" />
          <img src={one} alt="hello" className="image_of_gallery" />
          <img src={one2} alt="hello" className="image_of_gallery" />
          <img src={one} alt="hello" className="image_of_gallery" />
          <img src={one1} alt="hello" className="image_of_gallery" />
        </div>

      </div>




    </>

  );
}
export default App;