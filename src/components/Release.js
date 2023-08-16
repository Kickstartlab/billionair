import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import press from '../assets/press.png';


function ImageSlider() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        cssEase: "linear",
        autoplaySpeed: 2000,

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
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
                    <div className="bg-green-100 rounded-2xl h-450">
                        <img src={press} alt='press' className='rounded-t-2xl w-full'></img>

                        <div className='space-y-5 p-6'>
                            <p className='font-semibold uppercase text-green-50'>
                                Announcement
                            </p>
                            <h3 className='lg:text-lg font-semibold'>
                                Shockwave: The next phase of secret network’s explosive
                            </h3>
                            <p className='opacity-60'>
                                Learn how we aim to solidify Secret Network as a critical pillar and privacy hub
                            </p>
                        </div>

                    </div>
                </div>

                <div className="card-wrapper col-span-1">
                    <div className="bg-green-100 rounded-2xl h-450">
                        <img src={press} alt='press' className='rounded-t-2xl w-full'></img>

                        <div className='space-y-5 p-6'>
                            <p className='font-semibold uppercase text-green-50'>
                                Eco system
                            </p>
                            <h3 className='lg:text-lg font-semibold'>
                                SCRT Labs delegation policy
                                SCRT Labs delegation policy
                            </h3>
                            <p className='opacity-60'>
                                SCRT Labs shares its new delegation policies for 2022, helping incentivize the secret nodes
                            </p>
                        </div>

                    </div>
                </div>

                <div className="card-wrapper col-span-1">
                    <div className="bg-green-100 rounded-2xl h-450">
                        <img src={press} alt='press' className='rounded-t-2xl'></img>

                        <div className='space-y-5 p-6'>
                            <p className='font-semibold uppercase text-green-50'>
                                Community
                            </p>
                            <h3 className='lg:text-lg font-semibold'>
                                Revealing the New Secret Agents - Now Recruiting!
                            </h3>
                            <p className='opacity-60'>
                                We need your help to defend the privacy of the decentralized web.
                            </p>
                        </div>

                    </div>
                </div>

                <div className="card-wrapper col-span-1">
                    <div className="bg-green-100 rounded-2xl h-450">
                        <img src={press} alt='press' className='rounded-t-2xl w-full'></img>

                        <div className='space-y-5 p-6'>
                            <p className='font-semibold uppercase text-green-50'>
                                Announcement
                            </p>
                            <h3 className='lg:text-lg font-semibold'>
                                Shockwave: The next phase of secret network’s explosive
                            </h3>
                            <p className='opacity-60'>
                                Learn how we aim to solidify Secret Network as a critical pillar and privacy hub
                            </p>
                        </div>

                    </div>
                </div>

                <div className="card-wrapper col-span-1">
                    <div className="bg-green-100 rounded-2xl h-450">
                        <img src={press} alt='press' className='rounded-t-2xl w-full'></img>

                        <div className='space-y-5 p-6'>
                            <p className='font-semibold uppercase text-green-50'>
                                Eco system
                            </p>
                            <h3 className='lg:text-lg font-semibold'>
                                SCRT Labs delegation policy
                                SCRT Labs delegation policy
                            </h3>
                            <p className='opacity-60'>
                                SCRT Labs shares its new delegation policies for 2022, helping incentivize the secret nodes
                            </p>
                        </div>

                    </div>
                </div>

                <div className="card-wrapper col-span-1">
                    <div className="bg-green-100 rounded-2xl h-450">
                        <img src={press} alt='press' className='rounded-t-2xl'></img>

                        <div className='space-y-5 p-6'>
                            <p className='font-semibold uppercase text-green-50'>
                                Community
                            </p>
                            <h3 className='lg:text-lg font-semibold'>
                                Revealing the New Secret Agents - Now Recruiting!
                            </h3>
                            <p className='opacity-60'>
                                We need your help to defend the privacy of the decentralized web.
                            </p>
                        </div>

                    </div>
                </div>

            </Slider>

            <div className="flex gap-6 justify-center pt-8">
                <button onClick={() => slider?.current?.slickPrev()} className="left-arrow bg-white-100 hover:bg-green-50 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-black-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </button>

                <button onClick={() => slider?.current?.slickNext()} className="left-arrow bg-white-100 hover:bg-green-50 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-black-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>

        </div>

    )


}

export default ImageSlider 