import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slide1 from "../../../assets/home/01.jpg"
import slide2 from "../../../assets/home/02.jpg"
import slide3 from "../../../assets/home/03.png"
import slide4 from "../../../assets/home/04.jpg"
import slide5 from "../../../assets/home/05.png"
import slide6 from "../../../assets/home/06.png"

const Banner = () => {
    return (
        <>
            <Carousel autoPlay emulateTouch infiniteLoop swipeScrollTolerance showThumbs={false} showStatus={false}>
                <div className="relative">
                    <img className="h-[900px]" src={slide1} />
                     <div className="absolute inset-0 bg-black/20"></div> 
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-opacity-40 p-4 rounded text-white bg-black/40 text-center w-3/4">
                        <h1 className="text-4xl font-black text-white mb-4 leading-10">Welcome to the Premier Destination <br /> <span className="text-orange-600 bg-black/30">for Agricultural Innovation</span></h1>
                        <p className="text-gray-300">We ensure healthy and high-yield crops through modern pest control techniques, organic farming methods, <br /> and years of hands-on agricultural experience.</p>
                    </div>
                </div>

                <div className="relative">
                    <img className="h-[900px]" src={slide2} />
                      <div className="absolute inset-0 bg-black/20"></div> 
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-opacity-40 p-4 rounded text-white bg-black/40 text-center w-3/4">
                        <h1 className="text-4xl font-black text-white mb-4 leading-10">Sustainable Farming for a <br /> <span className="text-orange-600 bg-black/30">Better Tomorrow</span></h1>
                        <p className="text-gray-300">Our eco-friendly techniques promote soil health, conserve water, and ensure long-term agricultural success  <br />for future generations.</p>
                    </div>
                </div>

                <div className="relative">
                    <img className="h-[900px]" src={slide3} />
                      <div className="absolute inset-0 bg-black/20"></div> 
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-opacity-40 p-4 rounded text-white bg-black/40 text-center w-3/4">
                        <h1 className="text-4xl font-black text-white mb-4 leading-10">Modern Irrigation Systems for <br /> <span className="text-orange-600 bg-black/30">Maximum Yield</span></h1>
                        <p className="text-gray-300">Using drip and sprinkler irrigation, we provide precise water delivery <br /> to crops, reducing waste and boosting productivity.</p>
                    </div>
                </div>

                <div className="relative">
                    <img className="h-[900px]" src={slide4} />
                      <div className="absolute inset-0 bg-black/20"></div> 
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-opacity-40 p-4 rounded text-white bg-black/40 text-center w-3/4">
                        <h1 className="text-4xl font-black text-white mb-4 leading-10">Organic Farming at <span className="text-orange-600 bg-black/30">Its Best</span></h1>
                        <p className="text-gray-300">Say goodbye to harmful chemicals. We grow our produce using 100% natural fertilizers <br /> and bio-pesticides for healthier crops.</p>
                    </div>
                </div>

                <div className="relative">
                    <img className="h-[900px]" src={slide5} />
                      <div className="absolute inset-0 bg-black/20"></div> 
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-opacity-40 p-4 rounded text-white bg-black/40 text-center w-3/4">
                        <h1 className="text-4xl font-black text-white mb-4 leading-10">Advanced Machinery <span className="text-orange-600 bg-black/30">Empowering</span> <br /> Farmers</h1>
                        <p className="text-gray-300">From tractors to harvesters, we equip our farms with the latest tools that <br /> reduce labor and increase efficiency.</p>
                    </div>
                </div>

                <div className="relative">
                    <img className="h-[900px]" src={slide6} />
                      <div className="absolute inset-0 bg-black/20"></div> 
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-opacity-40 p-4 rounded text-white bg-black/40 text-center w-3/4">
                        <h1 className="text-4xl font-black text-white mb-4 leading-10">Empowering Rural Communities <br /> <span className="text-orange-600 bg-black/30">through Agriculture</span></h1>
                        <p className="text-gray-300">We provide training and employment opportunities to local farmers, uplifting <br /> entire villages through sustainable farming.</p>
                    </div>
                </div>
            </Carousel>
        </>
    );
};

export default Banner;
