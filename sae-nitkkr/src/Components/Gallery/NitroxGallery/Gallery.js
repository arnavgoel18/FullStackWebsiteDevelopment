import './Gallery.css';


import Nitrox1 from '../../../Assets/NitroxGallery/Nitroxgallery_1.jpg'
import Nitrox2 from '../../../Assets/NitroxGallery/Nitroxgallery_2.JPG'
import Nitrox5 from '../../../Assets/NitroxGallery/Nitroxgallery_5.JPG'
import Nitrox6 from '../../../Assets/NitroxGallery/Nitroxgallery_6.JPG'
import Nitrox8 from '../../../Assets/NitroxGallery/Nitroxgallery_8.JPG'
import Nitrox9 from '../../../Assets/NitroxGallery/Nitroxgallery_9.JPG'
import Nitrox10 from '../../../Assets/NitroxGallery/Nitroxgallery_10.jpg'
import Nitrox11 from '../../../Assets/NitroxGallery/Nitroxgallery_11.jpg'
import Nitrox12 from '../../../Assets/NitroxGallery/Nitroxgallery_12.jpg'
import Nitrox13 from '../../../Assets/NitroxGallery/Nitroxgallery_13.jpg'
import Nitrox15 from '../../../Assets/NitroxGallery/Nitroxgallery_15.jpg'
import Nitrox16 from '../../../Assets/NitroxGallery/Nitroxgallery_16.jpg'
import Nitrox17 from '../../../Assets/NitroxGallery/Nitroxgallery_17.jpg'
import Nitrox18 from '../../../Assets/NitroxGallery/Nitroxgallery_18.jpg'
import Nitrox20 from '../../../Assets/NitroxGallery/Nitroxgallery_20.jpg'
import Nitrox21 from '../../../Assets/NitroxGallery/Nitroxgallery_21.jpg'
import Nitrox23 from '../../../Assets/NitroxGallery/Nitroxgallery_23.jpg'
import Nitrox25 from '../../../Assets/NitroxGallery/Nitroxgallery_25.jpg'
import Nitrox26 from '../../../Assets/NitroxGallery/Nitroxgallery_26.jpg'
import Nitrox36 from '../../../Assets/NitroxGallery/Nitroxgallery_36.jpg'
import Nitrox61 from '../../../Assets/NitroxGallery/Nitroxgallery_61.JPG'
import Nitrox62 from '../../../Assets/NitroxGallery/Nitroxgallery_62.JPG'
import Nitrox65 from '../../../Assets/NitroxGallery/Nitroxgallery_65.JPG'
import Nitrox66 from '../../../Assets/NitroxGallery/Nitroxgallery_66.JPG'
import Nitrox71 from '../../../Assets/NitroxGallery/Nitroxgallery_71.JPG'
import Nitrox75 from '../../../Assets/NitroxGallery/Nitroxgallery_75.JPG'
import Nitrox78 from '../../../Assets/NitroxGallery/Nitroxgallery_78.JPG'



function App() {
  return (
    <div className="Gallery-Main_Cotainer">
      <br/><br/>
      {/* <h1 className="Gallery-photos">PHOTOS</h1> */}
      <Gallery />
    </div>
  );
}

function Gallery() {
  return (
    <>
      <div className="Gallery-row">
        <div className="Gallery-column">
          <img src={Nitrox1} alt="hello" className="image_of_gallery" />
          <img src={Nitrox2} alt="hello" className="image_of_gallery" />
          <img src={Nitrox5} alt="hello" className="image_of_gallery" />
          <img src={Nitrox6} alt="hello" className="image_of_gallery" />
          <img src={Nitrox8} alt="hello" className="image_of_gallery" />
          <img src={Nitrox9} alt="hello" className="image_of_gallery" />
          <img src={Nitrox10} alt="hello" className="image_of_gallery" />
        </div>
        <div className="Gallery-column">
          <img src={Nitrox11} alt="hello" className="image_of_gallery" />
          <img src={Nitrox12} alt="hello" className="image_of_gallery" />
          <img src={Nitrox13} alt="hello" className="image_of_gallery" />
          <img src={Nitrox15} alt="hello" className="image_of_gallery" />
          <img src={Nitrox16} alt="hello" className="image_of_gallery" />
          <img src={Nitrox17} alt="hello" className="image_of_gallery" />
        </div>
        <div className="Gallery-column">
          <img src={Nitrox18} alt="hello" className="image_of_gallery" />
          <img src={Nitrox20} alt="hello" className="image_of_gallery" />
          <img src={Nitrox21} alt="hello" className="image_of_gallery" />
          <img src={Nitrox23} alt="hello" className="image_of_gallery" />
          <img src={Nitrox2} alt="hello" className="image_of_gallery" />
          <img src={Nitrox25} alt="hello" className="image_of_gallery" />
          <img src={Nitrox26} alt="hello" className="image_of_gallery" />
        </div>
        <div className="Gallery-column">
          <img src={Nitrox36} className="image_of_gallery"  />
          <img src={Nitrox61} className="image_of_gallery" />
          <img src={Nitrox62} className="image_of_gallery" />
          <img src={Nitrox65} className="image_of_gallery"  />
          <img src={Nitrox66} className="image_of_gallery" />
          <img src={Nitrox10} className="image_of_gallery"  />
        </div>
        <div className="Gallery-column">
          <img src={Nitrox10} alt="hello" className="image_of_gallery" />
          <img src={Nitrox20} alt="hello" className="image_of_gallery" />
          <img src={Nitrox5} alt="hello" className="image_of_gallery" />
          <img src={Nitrox9} alt="hello" className="image_of_gallery" />
          <img src={Nitrox75} alt="hello" className="image_of_gallery" />
          <img src={Nitrox71} alt="hello" className="image_of_gallery" />
          <img src={Nitrox78} alt="hello" className="image_of_gallery" />
        </div>
      </div>
      <br/><br/>
    </>
  );
}
export default App;