import './Card_new.css'



function Card(poop) {
  const { src, title, subTitle, body } = poop.poop
  console.log(poop.poop)

  return (

      <div className='blog-card-container'>
        <div className='blog-img-container'>
          <div className='first-half'>
            <img src={src} alt='SOS' />
          </div>
          <div className='second-half'></div>
        </div>
        <div className='blog_content'>
          <hr />
          <div className='blog_content_title'>{title}</div>
          <div className='blog_content_subTitle'>{subTitle}</div>
          <p>{body}</p>
          <br />
          <button className='blog_content_button'>
            <div> Read more</div>
          </button>
        </div>
      </div>

  )
}

export default Card
