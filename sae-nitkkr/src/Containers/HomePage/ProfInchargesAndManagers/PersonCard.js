function PersonCard(props){
  if(props.page == "professor incharge"){

      return (
        <>
          <div className='container_pm'>
            <div className='wrapper'>
              <img src={props.url} loading='lazy' alt='' />
              <div className='name'>{props.name}</div>
              <div className='designation'>{props.designation}</div>
            </div>
          </div>
        </>
      )
  }
  else{
    return (
      <>
        <div className='container_pm'>
          <div className='wrapper'>
            <img src={props.url} loading='lazy' alt='' />
            <div className='name'>{props.name}</div>
            <div className='designation'>{props.designation}</div>
          </div>

          <div
            className='icons'
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              textAlign: 'center',
            }}
          >
            <li>
              <a href={props.linkedin}>
                <span
                  class='fab fa-linkedin '
                  style={{ fontSize: '20px' }}
                ></span>
              </a>
            </li>
            <li>
              <a href={props.email}>
                <span
                  class='fa fa-envelope'
                  style={{ fontSize: '20px' }}
                ></span>
              </a>
            </li>
          </div>
        </div>
      </>
    )
  }

}

export default PersonCard;