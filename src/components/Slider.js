import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        cssEase: "linear",
        autoplaySpeed: 2000,

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true
            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                infinite: true,

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }]
    }



    const slider = React.useRef(null);

    return (
        <div className="">

            <Slider ref={slider} {...settings}>

                <div className="card-wrapper col-span-1">
                    <div className="bg-gradient rounded-3xl lg:p-8 p-5 space-y-8">
                        <h3 className='text-gradient lg:text-3xl text-xl font-bold'>
                            Q1 - 2023
                        </h3>
                        <p className='opacity-60 lg:leading-loose'>
                            Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </p>
                    </div>
                </div>

                <div className="card-wrapper col-span-1">
                    <div className="bg-gradient rounded-3xl lg:p-8 p-5 space-y-8">
                        <h3 className='text-gradient lg:text-3xl text-xl font-bold'>
                            Q2 - 2023
                        </h3>
                        <p className='opacity-60 lg:leading-loose'>
                            Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </p>
                    </div>
                </div>

                <div className="card-wrapper col-span-1">
                    <div className="bg-gradient rounded-3xl lg:p-8 p-5 space-y-8">
                        <h3 className='text-gradient lg:text-3xl text-xl font-bold'>
                            Q3 - 2023
                        </h3>
                        <p className='opacity-60 lg:leading-loose'>
                            Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </p>
                    </div>
                </div>

                <div className="card-wrapper col-span-1">
                    <div className="bg-gradient rounded-3xl lg:p-8 p-5 space-y-8">
                        <h3 className='text-gradient lg:text-3xl text-xl font-bold'>
                            Q4 - 2023
                        </h3>
                        <p className='opacity-60 lg:leading-loose'>
                            Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </p>
                    </div>
                </div>

                <div className="card-wrapper col-span-1">
                    <div className="bg-gradient rounded-3xl lg:p-8 p-5 space-y-8">
                        <h3 className='text-gradient lg:text-3xl text-xl font-bold'>
                            Q5 - 2023
                        </h3>
                        <p className='opacity-60 lg:leading-loose'>
                            Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </p>
                    </div>
                </div>

                <div className="card-wrapper col-span-1">
                    <div className="bg-gradient rounded-3xl lg:p-8 p-5 space-y-8">
                        <h3 className='text-gradient lg:text-3xl text-xl font-bold'>
                            Q6 - 2023
                        </h3>
                        <p className='opacity-60 lg:leading-loose'>
                            Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </p>
                    </div>
                </div>

            </Slider>

            <div className="flex gap-6 justify-center pt-6">
                <button onClick={() => slider?.current?.slickPrev()} className="left-arrow bg-white-100 hover:bg-green-50 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-black-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </button>

                <button onClick={() => slider?.current?.slickNext()} className="left-arrow bg-white-100 hover:bg-green-50 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-black-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>

        </div>

    )


}

export default ImageSlider 