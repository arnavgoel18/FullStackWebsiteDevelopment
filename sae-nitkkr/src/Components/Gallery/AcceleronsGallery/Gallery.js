import react, {useState} from 'react';
import "./Gallery.css";

import Accelerons1 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_1.JPG";
import Accelerons2 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_2.JPG";
import Accelerons3 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_3.JPG";
import Accelerons4 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_4.JPG";
import Accelerons5 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_5.jpg";
import Accelerons6 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_6.png";
import Accelerons7 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_7.jpg";
import Accelerons8 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_8.jpg";
import Accelerons9 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_9.jpg";
import Accelerons10 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_10.jpg";
import Accelerons11 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_11.jpg";
import Accelerons12 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_12.jpg";
import Accelerons13 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_13.jpg";
import Accelerons14 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_14.jpg";
import Accelerons15 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_15.jpg";
import Accelerons16 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_16.jpg";
import Accelerons17 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_17.jpg";
import Accelerons18 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_18.jpg";
import Accelerons19 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_19.JPG";
import Accelerons20 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_20.jpg";
import Accelerons21 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_21.JPG";
import Accelerons22 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_22.JPG";
import Accelerons23 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_23.JPG";
import Accelerons24 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_24.JPG";
import Accelerons26 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_26.JPG";
import Accelerons27 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_27.JPG";
import Accelerons28 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_28.JPG";
import Accelerons31 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_31.JPG";
import Accelerons32 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_32.JPG";
import Accelerons34 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_34.JPG";
import Accelerons35 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_35.JPG";
import Accelerons37 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_37.JPG";
import Accelerons38 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_38.JPG";
import Accelerons39 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_39.webp";
import Accelerons40 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_40.webp";
import Accelerons41 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_41.webp";
import Accelerons42 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_42.webp";
import Accelerons43 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_43.webp";
import Accelerons44 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_44.webp";
import Accelerons45 from "../../../Assets/AcceleronsGallery/AcceleronsGallery_45.webp";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Accelerons39,
    },
    {
      id: 2,
      imgSrc: Accelerons40,
    },
    {
      id: 3,
      imgSrc: Accelerons41,
    },
    {
      id: 4,
      imgSrc: Accelerons42,
    },
    {
      id: 5,
      imgSrc: Accelerons43,
    },
    {
      id: 6,
      imgSrc: Accelerons44,
    },
    {
      id: 7,
      imgSrc: Accelerons45,
    },
    {
      id: 8,
      imgSrc: Accelerons1,
    },
    {
      id: 9,
      imgSrc: Accelerons2,
    }];
    let data1=[
    {
      id: 10,
      imgSrc: Accelerons3,
    },
    {
      id: 11,
      imgSrc: Accelerons4,
    },
    {
      id: 12,
      imgSrc: Accelerons5,
    },
    {
      id: 13,
      imgSrc: Accelerons6,
    },
    {
      id: 14,
      imgSrc:Accelerons7,
    },
    {
      id: 15,
      imgSrc: Accelerons8,
    },
    {
      id: 16,
      imgSrc: Accelerons9,
    },
    {
      id: 17,
      imgSrc: Accelerons10,
    },
    {
      id: 18,
      imgSrc: Accelerons11,
    },
    {
      id: 19,
      imgSrc: Accelerons12,
    },
    {
      id: 20,
      imgSrc: Accelerons13,
    },
    {
      id: 21,
      imgSrc:Accelerons14,
    },
    {
      id: 22,
      imgSrc: Accelerons15,
    },
    {
      id: 23,
      imgSrc: Accelerons16,
    },
    {
      id: 24,
      imgSrc: Accelerons17,
    },
    {
      id: 25,
      imgSrc: Accelerons18,
    },
    {
      id: 26,
      imgSrc: Accelerons19,
    },
    {
      id: 27,
      imgSrc: Accelerons20,
    },
    {
      id: 28,
      imgSrc: Accelerons21,
    },
    {
      id: 29,
      imgSrc: Accelerons22,
    },
    {
      id: 30,
      imgSrc: Accelerons23,
    },
    {
      id: 31,
      imgSrc: Accelerons24,
    },
    {
      id: 32,
      imgSrc: Accelerons2,
    },
    {
      id: 33,
      imgSrc: Accelerons26,
    },
    {
      id: 34,
      imgSrc: Accelerons27,
    },
    {
      id: 35,
      imgSrc: Accelerons28,
    },
    {
      id: 36,
      imgSrc: Accelerons2,
    },
    {
      id: 37,
      imgSrc: Accelerons3,
    },
    {
      id: 38,
      imgSrc: Accelerons31,
    },
    {
      id: 39,
      imgSrc: Accelerons32,
    },
    {
      id: 40,
      imgSrc: Accelerons3,
    },
    {
      id: 41,
      imgSrc: Accelerons34,
    },
    {
      id: 42,
      imgSrc: Accelerons35,
    },
    {
      id: 43,
      imgSrc: Accelerons3,
    },
    {
      id: 44,
      imgSrc: Accelerons37,
    },
    {
      id: 45,
      imgSrc: Accelerons38,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
    <div className="galleryContainer1">
      <div className="galleryContainer">
        <div className={model ? "model open" : "model"}>
          <img src={tempimgSrc} onClick={() => setModel(false)} />
          {/* <CloseIcon  onClick={()=> setModel(false) }/> */}
        </div>
        <div className="gallery" id='accelerons-show'>
          {data.map((item, index) => {
            return (
              <div
                className="pics"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <img
                  className="Galleryimg"
                  src={item.imgSrc}
                  style={{ width: "100%" }}
                />
              </div>
            );
          })}
        </div>
       <div  id="accelerons-hide-btn" style={{color:'red'}} onClick={HideAcceleronsGalley} ><i class="fa fa-angle-down" aria-hidden="true"></i></div>
        <div className="gallery" id="accelerons-hide">

        {data.map((item, index) => {
            return (
              <div
                className="pics"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <img
                  className="Galleryimg"
                  src={item.imgSrc}
                  style={{ width: "100%" }}
                />
              </div>
            );
          })}


          {data1.map((item, index) => {
            return (
              <div
                className="pics"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <img
                  className="Galleryimg"
                  src={item.imgSrc}
                  style={{ width: "100%" }}
                />
              </div>
            );
          })}
        </div>

      </div>
      <div  id="viewless-btn" style={{color:'red',display:'none'}} onClick={ViewLess} ><i class="fa fa-angle-up" aria-hidden="true"></i></div>

      </div>
    </>
  );
};
export default Gallery;

function HideAcceleronsGalley() {
  var hidegal = document.getElementById("accelerons-hide");
  var showgal = document.getElementById("accelerons-show");
  hidegal.style.display="block";
  showgal.style.display="none";
  let removeviewmore = document.getElementById("accelerons-hide-btn");
  var viewless = document.getElementById("viewless-btn")
  removeviewmore.style.display = "none";
  viewless.style.display = "block";
}
function ViewLess(){
  var hidegal = document.getElementById("accelerons-hide");
  var showgal = document.getElementById("accelerons-show");
  hidegal.style.display="none";
  showgal.style.display="block";
  var viewless = document.getElementById("viewless-btn");
  var removeviewmore = document.getElementById("accelerons-hide-btn");
  removeviewmore.style.display = "block";
  viewless.style.display = "none";
}