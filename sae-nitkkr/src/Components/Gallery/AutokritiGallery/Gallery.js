import './Gallery.css';

import Autokriti1 from '../../../Assets/AutokritiGallery/Autokritigallery_1.jpg'
import Autokriti2 from '../../../Assets/AutokritiGallery/Autokritigallery_2.jpg'
import Autokriti3 from '../../../Assets/AutokritiGallery/Autokritigallery_3.jpg'
import Autokriti4 from '../../../Assets/AutokritiGallery/Autokritigallery_4.jpg'
import Autokriti5 from '../../../Assets/AutokritiGallery/Autokritigallery_5.jpg'
import Autokriti6 from '../../../Assets/AutokritiGallery/Autokritigallery_6.jpg'
import Autokriti7 from '../../../Assets/AutokritiGallery/Autokritigallery_7.jpg'
import Autokriti8 from '../../../Assets/AutokritiGallery/Autokritigallery_8.jpg'
import Autokriti9 from '../../../Assets/AutokritiGallery/Autokritigallery_9.jpg'
import Autokriti10 from '../../../Assets/AutokritiGallery/Autokritigallery_10.jpg'
import Autokriti11 from '../../../Assets/AutokritiGallery/Autokritigallery_11.jpg'
import Autokriti12 from '../../../Assets/AutokritiGallery/Autokritigallery_12.jpg'
import Autokriti13 from '../../../Assets/AutokritiGallery/Autokritigallery_13.jpg'
import Autokriti14 from '../../../Assets/AutokritiGallery/Autokritigallery_14.jpg'
import Autokriti15 from '../../../Assets/AutokritiGallery/Autokritigallery_15.jpg'
import Autokriti16 from '../../../Assets/AutokritiGallery/Autokritigallery_16.jpg'
import Autokriti17 from '../../../Assets/AutokritiGallery/Autokritigallery_17.jpg'
import Autokriti18 from '../../../Assets/AutokritiGallery/Autokritigallery_18.jpg'
import Autokriti19 from '../../../Assets/AutokritiGallery/Autokritigallery_19.jpg'
import Autokriti20 from '../../../Assets/AutokritiGallery/Autokritigallery_20.jpg'
import Autokriti21 from '../../../Assets/AutokritiGallery/Autokritigallery_21.jpg'
import Autokriti22 from '../../../Assets/AutokritiGallery/Autokritigallery_22.jpg'
import Autokriti23 from '../../../Assets/AutokritiGallery/Autokritigallery_23.jpg'
import Autokriti24 from '../../../Assets/AutokritiGallery/Autokritigallery_24.jpg'
import Autokriti25 from '../../../Assets/AutokritiGallery/Autokritigallery_25.jpg'
import Autokriti26 from '../../../Assets/AutokritiGallery/Autokritigallery_26.jpg'
import Autokriti27 from '../../../Assets/AutokritiGallery/Autokritigallery_27.jpg'
import Autokriti28 from '../../../Assets/AutokritiGallery/Autokritigallery_28.jpg'
import Autokriti29 from '../../../Assets/AutokritiGallery/Autokritigallery_29.jpg'
import Autokriti30 from '../../../Assets/AutokritiGallery/Autokritigallery_30.jpg'




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
          <img src={Autokriti1} alt="hello" className="image_of_gallery" />
          <img src={Autokriti2} alt="hello" className="image_of_gallery" />
          <img src={Autokriti3} alt="hello" className="image_of_gallery" />
          <img src={Autokriti4} alt="hello" className="image_of_gallery" />
          <img src={Autokriti5} alt="hello" className="image_of_gallery" />
          <img src={Autokriti6} alt="hello" className="image_of_gallery" />
          <img src={Autokriti7} alt="hello" className="image_of_gallery" />
        </div>
        <div className="Gallery-column">
          <img src={Autokriti8} alt="hello" className="image_of_gallery" />
          <img src={Autokriti9} alt="hello" className="image_of_gallery" />
          <img src={Autokriti10} alt="hello" className="image_of_gallery" />
          <img src={Autokriti11} alt="hello" className="image_of_gallery" />
          <img src={Autokriti12} alt="hello" className="image_of_gallery" />
          <img src={Autokriti13} alt="hello" className="image_of_gallery" />
        </div>
        <div className="Gallery-column">
          <img src={Autokriti14} alt="hello" className="image_of_gallery" />
          <img src={Autokriti15} alt="hello" className="image_of_gallery" />
          <img src={Autokriti16} alt="hello" className="image_of_gallery" />
          <img src={Autokriti17} alt="hello" className="image_of_gallery" />
          <img src={Autokriti18} alt="hello" className="image_of_gallery" />
          <img src={Autokriti19} alt="hello" className="image_of_gallery" />
          <img src={Autokriti20} alt="hello" className="image_of_gallery" />
        </div>
        <div className="Gallery-column">
          <img src={Autokriti21} className="image_of_gallery"  />
          <img src={Autokriti22} className="image_of_gallery" />
          <img src={Autokriti23} className="image_of_gallery" />
          <img src={Autokriti24} className="image_of_gallery"  />
          <img src={Autokriti25} className="image_of_gallery" />
          <img src={Autokriti26} className="image_of_gallery"  />
        </div>
        <div className="Gallery-column">
          <img src={Autokriti27} alt="hello" className="image_of_gallery" />
          <img src={Autokriti28} alt="hello" className="image_of_gallery" />
          <img src={Autokriti29} alt="hello" className="image_of_gallery" />
          <img src={Autokriti30} alt="hello" className="image_of_gallery" />
          <img src={Autokriti3} alt="hello" className="image_of_gallery" />
          <img src={Autokriti13} alt="hello" className="image_of_gallery" />
          <img src={Autokriti23} alt="hello" className="image_of_gallery" />
        </div>
      </div>
      <br/><br/>
    </>
  );
}
export default App;