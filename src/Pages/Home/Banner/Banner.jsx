import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/banner/194524_117.jpg'
import img2 from '../../../assets/banner/img2.jpg'
import img3 from '../../../assets/banner/img3.jpg'
import img4 from '../../../assets/banner/img4.jfif'
import img6 from '../../../assets/banner/img6.png'
const Banner = () => {
    return (
        <div >   
             <Carousel className="text-center">
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                {/* <img src={img5} /> */}
            </div>
            <div>
                <img src={img6} />
            </div>
        </Carousel>
        </div>
    );
};

export default Banner;