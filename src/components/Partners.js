import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import team from '../assets/team.png';
import linkedin from '../assets/linkedin.png';


function ImageSlider() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        cssEase: "linear",
        autoplaySpeed: 2000,

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                centerMode: true
            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
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

                <div data-aos='fade-up' className="card-wrapper col-span-1">
                    <div className="bg-black-200 rounded-2xl">
                        <img src={team} alt='press' className='rounded-t-2xl w-full'></img>

                        <div className='space-y-4 p-5'>
                            <h3 className='lg:text-lg font-semibold'>
                                Jason Smith
                            </h3>
                            <p className=''>
                                Software Engineer
                            </p>
                            <img src={linkedin} alt='linkedin' className=''></img>
                        </div>

                    </div>
                </div>

                <div data-aos='fade-up' className="card-wrapper col-span-1">
                    <div className="bg-black-200 rounded-2xl">
                        <img src={team} alt='press' className='rounded-t-2xl w-full'></img>

                        <div className='space-y-4 p-5'>
                            <h3 className='lg:text-lg font-semibold'>
                                Jason Smith
                            </h3>
                            <p className=''>
                                Software Engineer
                            </p>
                            <img src={linkedin} alt='linkedin' className=''></img>
                        </div>

                    </div>
                </div>

                <div data-aos='fade-up' className="card-wrapper col-span-1">
                    <div className="bg-black-200 rounded-2xl">
                        <img src={team} alt='press' className='rounded-t-2xl w-full'></img>

                        <div className='space-y-4 p-5'>
                            <h3 className='lg:text-lg font-semibold'>
                                Jason Smith
                            </h3>
                            <p className=''>
                                Software Engineer
                            </p>
                            <img src={linkedin} alt='linkedin' className=''></img>
                        </div>

                    </div>
                </div>

                <div data-aos='fade-up' className="card-wrapper col-span-1">
                    <div className="bg-black-200 rounded-2xl">
                        <img src={team} alt='press' className='rounded-t-2xl w-full'></img>

                        <div className='space-y-4 p-5'>
                            <h3 className='lg:text-lg font-semibold'>
                                Jason Smith
                            </h3>
                            <p className=''>
                                Software Engineer
                            </p>
                            <img src={linkedin} alt='linkedin' className=''></img>
                        </div>

                    </div>
                </div>

                <div data-aos='fade-up' className="card-wrapper col-span-1">
                    <div className="bg-black-200 rounded-2xl">
                        <img src={team} alt='press' className='rounded-t-2xl w-full'></img>

                        <div className='space-y-4 p-5'>
                            <h3 className='lg:text-lg font-semibold'>
                                Jason Smith
                            </h3>
                            <p className=''>
                                Software Engineer
                            </p>
                            <img src={linkedin} alt='linkedin' className=''></img>
                        </div>

                    </div>
                </div>

                <div data-aos='fade-up' className="card-wrapper col-span-1">
                    <div className="bg-black-200 rounded-2xl">
                        <img src={team} alt='press' className='rounded-t-2xl w-full'></img>

                        <div className='space-y-4 p-5'>
                            <h3 className='lg:text-lg font-semibold'>
                                Jason Smith
                            </h3>
                            <p className=''>
                                Software Engineer
                            </p>
                            <img src={linkedin} alt='linkedin' className=''></img>
                        </div>

                    </div>
                </div>

                <div data-aos='fade-up' className="card-wrapper col-span-1">
                    <div className="bg-black-200 rounded-2xl">
                        <img src={team} alt='press' className='rounded-t-2xl w-full'></img>

                        <div className='space-y-4 p-5'>
                            <h3 className='lg:text-lg font-semibold'>
                                Jason Smith
                            </h3>
                            <p className=''>
                                Software Engineer
                            </p>
                            <img src={linkedin} alt='linkedin' className=''></img>
                        </div>

                    </div>
                </div>

            </Slider>

        </div>

    )


}

export default ImageSlider 