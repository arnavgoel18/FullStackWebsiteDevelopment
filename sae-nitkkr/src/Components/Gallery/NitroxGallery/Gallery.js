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
import Nitrox90 from "../../../Assets/NitroxGallery/Nitroxgallery_90.webp";
import Nitrox91 from "../../../Assets/NitroxGallery/Nitroxgallery_91.webp";
import Nitrox92 from "../../../Assets/NitroxGallery/Nitroxgallery_92.webp";
import Nitrox93 from "../../../Assets/NitroxGallery/Nitroxgallery_93.webp";
import Nitrox94 from "../../../Assets/NitroxGallery/Nitroxgallery_94.webp";
import Nitrox95 from "../../../Assets/NitroxGallery/Nitroxgallery_95.webp";

const Gallery = () => {
  let data = [
    {
      id:1,
      imgSrc: Nitrox90,
    },
    {
      id:2,
      imgSrc: Nitrox91,
    },
    {
      id:3,
      imgSrc: Nitrox92,
    },
    {
      id:4,
      imgSrc: Nitrox93,
    },
    {
      id:4,
      imgSrc: Nitrox94,
    },
    {
      id:6,
      imgSrc: Nitrox95,
    },
    {
      id: 7,
      imgSrc: Nitrox1,
    },
    {
      id: 8,
      imgSrc: Nitrox2,
    },
    {
      id: 9,
      imgSrc: Nitrox5,
    },
    {
      id: 10,
      imgSrc: Nitrox6,
    },];
    let data1=[
    {
      id: 11,
      imgSrc: Nitrox8,
    },
    {
      id: 12,
      imgSrc:Nitrox9,
    },
    {
      id: 13,
      imgSrc: Nitrox10,
    },
    {
      id: 14,
      imgSrc: Nitrox11,
    },
    {
      id: 15,
      imgSrc: Nitrox13,
    },
    {
      id: 16,
      imgSrc: Nitrox12,
    },
    {
      id: 17,
      imgSrc: Nitrox11,
    },
    {
      id: 18,
      imgSrc: Nitrox12,
    },
    {
      id: 19,
      imgSrc: Nitrox13,
    },
    {
      id: 20,
      imgSrc: Nitrox15,
    },
    {
      id: 21,
      imgSrc: Nitrox16,
    },
    {
      id: 22,
      imgSrc: Nitrox17,
    },
    {
      id: 23,
      imgSrc: Nitrox18,
    },
    {
      id: 24,
      imgSrc: Nitrox20,
    },
    {
      id: 25,
      imgSrc: Nitrox21,
    },
    {
      id: 26,
      imgSrc: Nitrox23,
    },
    {
      id: 27,
      imgSrc: Nitrox25,
    },
    {
      id: 28,
      imgSrc: Nitrox26,
    },
    {
      id: 29,
      imgSrc: Nitrox36,
    },
    {
      id: 30,
      imgSrc: Nitrox61,
    },
    {
      id: 31,
      imgSrc: Nitrox62,
    },
    {
      id: 32,
      imgSrc: Nitrox65,
    },
    {
      id: 33,
      imgSrc: Nitrox66,
    },
    {
      id: 34,
      imgSrc: Nitrox71,
    },
    {
      id: 35,
      imgSrc: Nitrox75,
    },
    {
      id: 36,
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
       <div  id="nitrox-hide-btn" style={{color:'red'}} onClick={ShowNitroxGalley} ><i class="fa fa-angle-down" aria-hidden="true"></i></div>
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
      <div  id="viewless-btn" style={{color:'red',display:'none'}} onClick={ViewLess} ><i class="fa fa-angle-up" aria-hidden="true"></i></div>
      </div>
    </>
  );
};
export default Gallery;

function ShowNitroxGalley() {
  var hidegal = document.getElementById("nitrox-hide");
  var showgal = document.getElementById("nitrox-show");
  hidegal.style.display="block";
  showgal.style.display="none";
  var removeviewmore = document.getElementById("nitrox-hide-btn");
  var viewless = document.getElementById("viewless-btn");
  removeviewmore.style.display = "none";
  viewless.style.display = "block";
}

function ViewLess(){
  var hidegal = document.getElementById("nitrox-hide");
  var showgal = document.getElementById("nitrox-show");
  hidegal.style.display="none";
  showgal.style.display="block";
  var viewless = document.getElementById("viewless-btn");
  var removeviewmore = document.getElementById("nitrox-hide-btn");
  removeviewmore.style.display = "block";
  viewless.style.display = "none";
}