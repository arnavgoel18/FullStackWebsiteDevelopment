import react, { useState } from "react";
import "./Gallery.css";

import Nitrox1 from "../../../Assets/NitroxGallery/Nitroxgallery_1.jpg";
import Nitrox2 from "../../../Assets/NitroxGallery/Nitroxgallery_2.JPG";
import Nitrox5 from "../../../Assets/NitroxGallery/Nitroxgallery_5.JPG";
import Nitrox6 from "../../../Assets/NitroxGallery/Nitroxgallery_6.JPG";
import Nitrox8 from "../../../Assets/NitroxGallery/Nitroxgallery_8.JPG";
import Nitrox9 from "../../../Assets/NitroxGallery/Nitroxgallery_9.JPG";
import Nitrox10 from "../../../Assets/NitroxGallery/Nitroxgallery_10.jpg";
import Nitrox11 from "../../../Assets/NitroxGallery/Nitroxgallery_11.jpg";
import Nitrox12 from "../../../Assets/NitroxGallery/Nitroxgallery_12.jpg";
import Nitrox13 from "../../../Assets/NitroxGallery/Nitroxgallery_13.jpg";
import Nitrox15 from "../../../Assets/NitroxGallery/Nitroxgallery_15.jpg";
import Nitrox16 from "../../../Assets/NitroxGallery/Nitroxgallery_16.jpg";
import Nitrox17 from "../../../Assets/NitroxGallery/Nitroxgallery_17.jpg";
import Nitrox18 from "../../../Assets/NitroxGallery/Nitroxgallery_18.jpg";
import Nitrox20 from "../../../Assets/NitroxGallery/Nitroxgallery_20.jpg";
import Nitrox21 from "../../../Assets/NitroxGallery/Nitroxgallery_21.jpg";
import Nitrox23 from "../../../Assets/NitroxGallery/Nitroxgallery_23.jpg";
import Nitrox25 from "../../../Assets/NitroxGallery/Nitroxgallery_25.jpg";
import Nitrox26 from "../../../Assets/NitroxGallery/Nitroxgallery_26.jpg";
import Nitrox36 from "../../../Assets/NitroxGallery/Nitroxgallery_36.jpg";
import Nitrox61 from "../../../Assets/NitroxGallery/Nitroxgallery_61.JPG";
import Nitrox62 from "../../../Assets/NitroxGallery/Nitroxgallery_62.JPG";
import Nitrox65 from "../../../Assets/NitroxGallery/Nitroxgallery_65.JPG";
import Nitrox66 from "../../../Assets/NitroxGallery/Nitroxgallery_66.JPG";
import Nitrox71 from "../../../Assets/NitroxGallery/Nitroxgallery_71.JPG";
import Nitrox75 from "../../../Assets/NitroxGallery/Nitroxgallery_75.JPG";
import Nitrox78 from "../../../Assets/NitroxGallery/Nitroxgallery_78.JPG";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Nitrox1,
    },
    {
      id: 2,
      imgSrc: Nitrox2,
    },
    {
      id: 3,
      imgSrc: Nitrox5,
    },
    {
      id: 4,
      imgSrc: Nitrox6,
    },
    {
      id: 5,
      imgSrc: Nitrox8,
    },
    {
      id: 6,
      imgSrc:Nitrox9,
    },
    {
      id: 7,
      imgSrc: Nitrox10,
    },
    {
      id: 8,
      imgSrc: Nitrox11,
    },
    {
      id: 9,
      imgSrc: Nitrox13,
    },];
    let data1=[
    {
      id: 10,
      imgSrc: Nitrox12,
    },
    {
      id: 11,
      imgSrc: Nitrox11,
    },
    {
      id: 12,
      imgSrc: Nitrox12,
    },
    {
      id: 13,
      imgSrc: Nitrox13,
    },
    {
      id: 14,
      imgSrc: Nitrox15,
    },
    {
      id: 15,
      imgSrc: Nitrox16,
    },
    {
      id: 16,
      imgSrc: Nitrox17,
    },
    {
      id: 17,
      imgSrc: Nitrox18,
    },
    {
      id: 18,Nitrox20,
    },
    {
      id: 19,
      imgSrc: Nitrox21,
    },
    {
      id: 20,
      imgSrc: Nitrox23,
    },
    {
      id: 21,
      imgSrc: Nitrox25,
    },
    {
      id: 22,
      imgSrc: Nitrox26,
    },
    {
      id: 23,
      imgSrc: Nitrox36,
    },
    {
      id: 24,
      imgSrc: Nitrox61,
    },
    {
      id: 25,
      imgSrc: Nitrox62,
    },
    {
      id: 26,
      imgSrc: Nitrox65,
    },
    {
      id: 27,
      imgSrc: Nitrox66,
    },
    {
      id: 28,
      imgSrc: Nitrox71,
    },
    {
      id: 29,
      imgSrc: Nitrox75,
    },
    {
      id: 30,
      imgSrc: Nitrox78,
    }
    
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
    <div className="galleryContainer2">
      <div className="galleryContainer">
        <div className={model ? "model open" : "model"}>
          <img src={tempimgSrc} onClick={() => setModel(false)} />
          {/* <CloseIcon  onClick={()=> setModel(false) }/> */}
        </div>
        <div className="gallery" id='nitrox-show'>
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
       <div  id="nitrox-hide-btn" style={{color:'red'}} onClick={HideNitroxGalley} ><i class="fa fa-angle-down" aria-hidden="true"></i></div>
        <div className="gallery" id="nitrox-hide">

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
      </div>
    </>
  );
};
export default Gallery;

function HideNitroxGalley() {
  var hidegal = document.getElementById("nitrox-hide");
  var showgal = document.getElementById("nitrox-show");
  hidegal.style.display="block";
  showgal.style.display="none";
  let removeviewmore = document.getElementById("nitrox-hide-btn");
  removeviewmore.style.display = "none";
}
