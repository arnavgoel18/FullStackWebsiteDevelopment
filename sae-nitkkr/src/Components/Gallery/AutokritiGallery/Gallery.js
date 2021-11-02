import react, {useState} from 'react';
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
import Autokriti26 from '../../../Assets/AutokritiGallery/Autokritigallery_26.JPG'
import Autokriti27 from '../../../Assets/AutokritiGallery/Autokritigallery_27.JPG'
import Autokriti28 from '../../../Assets/AutokritiGallery/Autokritigallery_28.JPG'
import Autokriti29 from '../../../Assets/AutokritiGallery/Autokritigallery_29.JPG'
import Autokriti30 from '../../../Assets/AutokritiGallery/Autokritigallery_30.jpg'




const Gallery = () => {

  let data = [
      {
          id: 1,
          imgSrc: Autokriti1,
      },
      {
          id: 2,
          imgSrc: Autokriti2,
      },
      {
          id: 3,
          imgSrc: Autokriti3,
      },
      {
          id: 4,
          imgSrc: Autokriti4,
      },
      {
          id: 5,
          imgSrc: Autokriti5,
      },
      {
          id: 6,
          imgSrc: Autokriti6,
      },
      {
          id: 7,
          imgSrc: Autokriti7,
      },
      {
          id: 8,
          imgSrc: Autokriti8,
      },
      {
          id: 9,
          imgSrc: Autokriti9,
      },
      {
          id: 10,
          imgSrc: Autokriti10,
      },
      {
          id: 11,
          imgSrc: Autokriti11,
      },{
          id: 12,
          imgSrc: Autokriti12,
      },
      {
          id: 13,
          imgSrc: Autokriti13,
      },
      {
          id: 14,
          imgSrc: Autokriti14,
      },
      {
          id: 15,
          imgSrc: Autokriti15,
      },
      {
          id: 16,
          imgSrc: Autokriti16,
      },
      {
          id: 17,
          imgSrc: Autokriti17,
      },
      {
          id: 18,
          imgSrc: Autokriti18,
      },
      {
          id: 19,
          imgSrc: Autokriti19,
      },
      {
          id: 20,
          imgSrc: Autokriti20,
      },
      {
          id: 21,
          imgSrc: Autokriti21,
      },
      {
          id: 22,
          imgSrc: Autokriti22,
      },
      {
          id: 23,
          imgSrc: Autokriti23,
      },
      {
          id: 24,
          imgSrc: Autokriti24,
      },
      {
          id: 25,
          imgSrc: Autokriti25,
      },
      {
          id: 26,
          imgSrc: Autokriti26,
      },
      {
          id: 27,
          imgSrc: Autokriti27,
      },
      {
          id: 28,
          imgSrc: Autokriti28,
      },
      {
          id: 29,
          imgSrc: Autokriti29,
      },
      // {
      //     id: 30,
      //     imgSrc: Autokriti30,
      // },
  ]
  const [model, setModel]= useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
  const getImg =(imgSrc) =>{
      setTempImgSrc(imgSrc);
      setModel(true);
  }
  return (
      <>
      <div className="galleryContainer">
      <div className={model? "model open" : "model"}>
          <img src={tempimgSrc} onClick={()=> setModel(false) } />
          {/* <CloseIcon  onClick={()=> setModel(false) }/> */}
      </div>
      <div className="gallery">
          {data.map((item, index)=>{
              return(
                  <div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}>
                      <img className="Galleryimg" src={item.imgSrc} style={{width: '100%'}}/>
                  </div>
              )
          })}
      </div>
      </div>
      </>
  )
}
export default Gallery