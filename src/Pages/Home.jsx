import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import './Home.css'

function Home() {
  return (
<>
        <Carousel  className='homeCarousel container-fluid ' >
          <Carousel.Item>
    <img className='w-100 object-fit-cover' height={"100px"} src="https://images.pexels.com/photos/33376220/pexels-photo-33376220.jpeg" alt="" />
            <Carousel.Caption className=' p-0 m-0'>
              <h3>Redmi Phones</h3>
              <Button>Shop Now</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
    <img className='w-100 object-fit-cover' height={"100px"}  src="https://images.pexels.com/photos/33915434/pexels-photo-33915434.jpeg" alt="" />
    
            <Carousel.Caption>
              <h3>Hauawei Phones</h3>
              <Button>Shop Now</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
    <img className='w-100 object-fit-cover' height={"100px"}  src="https://images.pexels.com/photos/33453407/pexels-photo-33453407.jpeg" alt="" />
    
            <Carousel.Caption>
              <h3>Models</h3>
                        <Button>Check Out</Button>
    
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
  <div className=' d-flex flex-row justify-content-between'>
    
    <img className=' w-25 h-100' src="https://images.pexels.com/photos/31295417/pexels-photo-31295417.jpeg" alt="" />
        <img className=' w-25 h-100' src="https://images.pexels.com/photos/31295417/pexels-photo-31295417.jpeg" alt="" />
        <img className=' w-25 h-100' src="https://images.pexels.com/photos/31295417/pexels-photo-31295417.jpeg" alt="" />

    
  </div>
</>

  );
}

export default Home;