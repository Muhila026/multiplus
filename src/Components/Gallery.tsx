

import { Container, Row, Col } from 'react-bootstrap';
import { Image } from "./Image";
import { default as JsonData } from "../data/data.json";


export function Gallery() {
  return (

    <div id='portfolio' className='text-center'>
      <Container>
        <div className='section-title'>
          <h2>Gallery</h2>
          <p>
            Medi is the key to improving healthcare delivery and services, enabling advancements in patient care.
          </p>
        </div>

        <div className='portfolio-items'>
          <Row>
            {JsonData
              ? JsonData.Gallery.map((d, i) => (
                <Col sm={6} lg md={4} key={`${d.title}-${i}`}>
                  <Image title={d.title} smallImage={d.smallImage} />
                </Col>
              ))
              : 'Loading...'}
          </Row>
        </div>
      </Container>
    </div>

  )
}

export default Gallery;