import './Gallery.css';


import Accelerons1 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_1.jpg'
import Accelerons2 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_2.jpg'
import Accelerons3 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_3.jpg'
import Accelerons4 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_4.jpg'
import Accelerons5 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_5.jpg'
import Accelerons6 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_6.png'
import Accelerons7 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_7.jpg'
import Accelerons8 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_8.jpg'
import Accelerons9 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_9.jpg'
import Accelerons10 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_10.jpg'
import Accelerons11 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_11.jpg'
import Accelerons12 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_12.jpg'
import Accelerons13 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_13.jpg'
import Accelerons14 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_14.jpg'
import Accelerons15 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_15.jpg'
import Accelerons16 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_16.jpg'
import Accelerons17 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_17.jpg'
import Accelerons18 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_18.jpg'
import Accelerons19 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_19.jpg'
import Accelerons20 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_20.jpg'
import Accelerons21 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_21.jpg'
import Accelerons22 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_22.jpg'
import Accelerons23 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_23.jpg'
import Accelerons24 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_24.jpg'
import Accelerons26 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_26.jpg'
import Accelerons27 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_27.jpg'
import Accelerons28 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_28.jpg'
import Accelerons31 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_31.jpg'
import Accelerons32 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_32.jpg'
import Accelerons34 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_34.jpg'
import Accelerons35 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_35.jpg'
import Accelerons37 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_37.jpg'
import Accelerons38 from '../../../Assets/AcceleronsGallery/AcceleronsGallery_38.jpg'




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
          <img src={Accelerons1} alt="hello" className="image_of_gallery" />
          <img src={Accelerons2} alt="hello" className="image_of_gallery" />
          <img src={Accelerons3} alt="hello" className="image_of_gallery" />
          <img src={Accelerons4} alt="hello" className="image_of_gallery" />
          <img src={Accelerons5} alt="hello" className="image_of_gallery" />
          <img src={Accelerons6} alt="hello" className="image_of_gallery" />
          <img src={Accelerons7} alt="hello" className="image_of_gallery" />
        </div>
        <div className="Gallery-column">
          <img src={Accelerons8} alt="hello" className="image_of_gallery" />
          <img src={Accelerons9} alt="hello" className="image_of_gallery" />
          <img src={Accelerons10} alt="hello" className="image_of_gallery" />
          <img src={Accelerons11} alt="hello" className="image_of_gallery" />
          <img src={Accelerons12} alt="hello" className="image_of_gallery" />
          <img src={Accelerons13} alt="hello" className="image_of_gallery" />
        </div>
        <div className="Gallery-column">
          <img src={Accelerons14} alt="hello" className="image_of_gallery" />
          <img src={Accelerons15} alt="hello" className="image_of_gallery" />
          <img src={Accelerons16} alt="hello" className="image_of_gallery" />
          <img src={Accelerons17} alt="hello" className="image_of_gallery" />
          <img src={Accelerons18} alt="hello" className="image_of_gallery" />
          <img src={Accelerons19} alt="hello" className="image_of_gallery" />
          <img src={Accelerons20} alt="hello" className="image_of_gallery" />
        </div>
        <div className="Gallery-column">
          <img src={Accelerons21} className="image_of_gallery"  />
          <img src={Accelerons22} className="image_of_gallery" />
          <img src={Accelerons23} className="image_of_gallery" />
          <img src={Accelerons24} className="image_of_gallery"  />
          <img src={Accelerons26} className="image_of_gallery" />
          <img src={Accelerons27} className="image_of_gallery"  />
        </div>
        <div className="Gallery-column">
          <img src={Accelerons28} alt="hello" className="image_of_gallery" />
          <img src={Accelerons31} alt="hello" className="image_of_gallery" />
          <img src={Accelerons32} alt="hello" className="image_of_gallery" />
          <img src={Accelerons34} alt="hello" className="image_of_gallery" />
          <img src={Accelerons35} alt="hello" className="image_of_gallery" />
          <img src={Accelerons37} alt="hello" className="image_of_gallery" />
          <img src={Accelerons38} alt="hello" className="image_of_gallery" />
        </div>
      </div>
      <br/><br/>
    </>
  );
}
export default App;