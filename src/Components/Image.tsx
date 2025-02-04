type ImageProps =
{
     title: string, 
     smallImage :string
}

export function Image(props: ImageProps)
{
    return(

        <div className='portfolio-item'>
      <div className='hover-bg'>
        {' '}
        <a
          title={props.title}
          data-lightbox-gallery='gallery1'
        >
          <div className='hover-text'>
            <h4>{props.title}</h4>
          </div>
          <img
            src={props.smallImage}
            className='img-responsive'
            alt={props.title}
          />{' '}
        </a>{' '}
      </div>
    </div>
    )   
}

export default Image;