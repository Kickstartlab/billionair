import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import Slider from './Slider'
import Release from './Release';
import Partners from './Partners';
import Competition from './Competition';
import tokenomics from '../assets/tokenomics.png';
import video_3 from '../assets/video_3.png';
import token from '../assets/token.png';
import giveaway from '../assets/giveaway.png';
import icon_1 from '../assets/icon_1.png';
import icon_2 from '../assets/icon_2.png';
import icon_3 from '../assets/icon_3.png';
import icon_4 from '../assets/icon_4.png';
import icon_5 from '../assets/icon_5.png';
import icon_6 from '../assets/icon_6.png';
import icon_7 from '../assets/icon_7.png';
import icon_8 from '../assets/icon_8.png';
import p_1 from '../assets/p_1.png';
import p_2 from '../assets/p_2.png';
import p_3 from '../assets/p_3.png';
import p_4 from '../assets/p_4.png';
import btn_1 from '../assets/btn_1.png';
import btn_2 from '../assets/btn_2.png';
import btn_3 from '../assets/btn_3.png';
import silid from '../assets/silid.png';
import logoSlide_1 from '../assets/logoSlide_1.png';
import logoSlide_2 from '../assets/logoSlide_2.png';
import logoSlide_3 from '../assets/logoSlide_3.png';
import logoSlide_4 from '../assets/logoSlide_4.png';
import logoSlide_5 from '../assets/logoSlide_5.png';
import about from '../assets/about.png';
import coin from '../assets/coin.png';
import staking from '../assets/staking.png';
import ecosystem from '../assets/ecosystem.png';
import games from '../assets/games.png';
import utility from '../assets/utility.png';
import table from '../assets/table.png';
import arb_token from '../assets/arb_token.png';
import nft_ticket from '../assets/nft_ticket.png';
import lock from '../assets/lock.png';
import incentive from '../assets/incentive.png';
import price from '../assets/price.png';
import chart from '../assets/chart.png';
import bnb from '../assets/bnb.png';
import bitmart from '../assets/bitmart.png';
import bg_shop from '../assets/bg_shop.png';
import shape from '../assets/shape.png';
import bar from '../assets/bar.png';
import bep from '../assets/bnb.svg';
import eth from '../assets/eth.svg';
import usdt from '../assets/usdt.svg';
import busd from '../assets/busd.svg';
import usdc from '../assets/usdc.svg';
import buy from '../assets/buy.svg';
import link from '../assets/link.svg';
import card from '../assets/usdc.svg';
import input_1 from '../assets/input_1.png';
import input_2 from '../assets/input_2.png';
import bg_top from '../assets/bg_top.png';
import copy from '../assets/copy.svg';
import bg_mobile from '../assets/bg_mobile.svg';
import Faq from './Faq';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 800
        });
        AOS.refresh();
    }, [])

    const [copySuccess, setCopySuccess] = useState('');

    // your function to copy here

    const copyToClipBoard = async copyMe => {
        try {
            await navigator.clipboard.writeText(copyMe);
            setCopySuccess('Copied!');
        } catch (err) {
            setCopySuccess('Failed to copy!');
        }
    };

    const accordionData = [
        {
            title: 'What are the NFTs?',
            content: `As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.`
        },
        {
            title: 'How do i get NFTs?',
            content: `As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.`
        },
        {
            title: 'How can we buy your NFTs?',
            content: `As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.`
        },
        {
            title: 'Who are the team behind the project?',
            content: `As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.`
        }
    ];

    return (
        <div className="bg-black-100 text-white-100 font-poppins">


            {/* top section */}

            <div className='bg-top lg:block hidden'>
                <img src={bg_top} alt='vector' className='absolute right-0 top-0 lg:block hidden'></img>

                <div className="lg:px-12 px-5 container mx-auto relative z-20">
                    <Menu />
                    <div className='lg:flex hidden justify-between items-center lg:py-20 py-8 gap-x-12'>

                        <div className='space-y-5 lg:w-1/2'>
                            <div className='flex lg:gap-x-4 gap-x-2 items-center'>
                                <a href=''><img src={icon_1} alt='icon' className='hover:opacity-50'></img></a>
                                <a href=''><img src={icon_2} alt='icon' className='hover:opacity-50'></img></a>
                                <a href=''><img src={icon_3} alt='icon' className='hover:opacity-50'></img></a>
                                <a href=''><img src={icon_4} alt='icon' className='hover:opacity-50'></img></a>
                                <a href=''><img src={icon_5} alt='icon' className='hover:opacity-50'></img></a>
                                <a href=''><img src={icon_6} alt='icon' className='hover:opacity-50'></img></a>
                                <a href=''><img src={icon_7} alt='icon' className='hover:opacity-50'></img></a>
                                <a href=''><img src={icon_8} alt='icon' className='hover:opacity-50'></img></a>
                            </div>

                            <h1 className="lg:text-6xl text-3xl font-bold">
                                The Ultimate Web3
                                Gamble & Earn Hub
                            </h1>

                            <p className='lg:py-3'>
                                Gambling Redefined: Become the House with unprecedented rewards, endless<br></br>
                                possibilities, and cross-community bridge-building!
                            </p>

                            <div className='flex lg:gap-x-8 gap-x-3 items-center'>
                                <button className='lg:px-8 px-3 lg:py-3 py-2 rounded-2xl bg-black-400 flex items-center justify-center lg:gap-x-4 gap-x-2 border-gradient lg:text-lg'>
                                    <img src={btn_1} className=''></img>
                                    Raffles
                                </button>

                                <button className='lg:px-8 px-3 lg:py-3 py-2 rounded-2xl bg-black-400 flex items-center justify-center lg:gap-x-4 gap-x-2 border-gradient lg:text-lg'>
                                    <img src={btn_2} className=''></img>
                                    Games
                                </button>

                                <button className='lg:px-8 px-3 lg:py-3 py-2 rounded-2xl bg-black-400 flex items-center justify-center lg:gap-x-4 gap-x-2 border-gradient lg:text-lg'>
                                    <img src={btn_3} className=''></img>
                                    Betting
                                </button>
                            </div>


                            <div className='lg:flex gap-x-3 items-center pt-5 lg:space-y-0 space-y-5'>

                                <button className='lg:px-8 px-16 py-3 rounded-2xl bg-black-50 lg:text-xl font-medium shadow
                                lg:block flex mx-auto items-center justify-center lg:w-44 w-full'>
                                    Whitepaper
                                </button>

                                <p className='underline lg:text-lg lg:text-left text-center'>
                                    Audited & KYC | 100% Secure & Verified
                                </p>

                                <div>
                                    <a href=''><img src={silid} className='lg:block flex mx-auto' alt='logo'></img></a>
                                </div>
                            </div>

                        </div>

                        <div className='rounded-3xl lg:px-14 px-5 lg:py-8 py-6 backdrop-blur-xl lg:w-1/2 border'>

                            <h1 className="lg:text-5xl text-2xl text-center font-bold">
                                $AIRB Pre-Sale
                            </h1>

                            <div>
                                <img src={bar} alt='progressbar' className='flex mx-auto py-6'></img>
                                <span className='text-xs absolute -mt-12 ml-40'>25%</span>
                            </div>

                            <div className='space-y-2 text-center'>
                                <p className='lg:text-2xl text-normal font-medium'>
                                    USD Raised: <span className='text-yellow-50'>$369,725 / $1,200,000</span>
                                </p>
                                <p className='lg:text-2xl text-normal'>
                                    Listing price: $0,060
                                </p>
                                <p className='lg:text-2xl text-normal font-medium'>
                                    1 $AIRB = $0.030
                                </p>
                            </div>

                            <div className='grid grid-cols-3 grid-rows-2 items-center justify-center gap-3 mt-5 mb-3'>

                                <a href='/'>
                                    <button className='rounded-2xl border-2 border-white-100 lg:px-5 py-2 hover:bg-yellow-100 hover:border-yellow-100 w-full'>
                                        <img src={bep} alt='bnd' className='flex mx-auto'></img>
                                    </button>
                                </a>

                                <a href='/'>
                                    <button className='rounded-2xl border-2 border-white-100 lg:px-5 py-2 hover:bg-yellow-100 hover:border-yellow-100 w-full'>
                                        <img src={eth} alt='bnd' className='flex mx-auto'></img>
                                    </button>
                                </a>

                                <a href='/'>
                                    <button className='rounded-2xl border-2 border-white-100 lg:px-5 py-2 hover:bg-yellow-100 hover:border-yellow-100 w-full'>
                                        <img src={usdt} alt='bnd' className='flex mx-auto'></img>
                                    </button>
                                </a>

                                <a href='/'>
                                    <button className='rounded-2xl border-2 border-white-100 lg:px-5 py-2 hover:bg-yellow-100 hover:border-yellow-100 w-full'>
                                        <img src={busd} alt='bnd' className='flex mx-auto'></img>
                                    </button>
                                </a>

                                <a href='/'>
                                    <button className='rounded-2xl border-2 border-white-100 lg:px-5 py-2 hover:bg-yellow-100 hover:border-yellow-100 w-full'>
                                        <img src={usdc} alt='bnd' className='flex mx-auto'></img>
                                    </button>
                                </a>

                                <a href='/'>
                                    <button className='rounded-2xl border-2 border-white-100 lg:px-5 py-2 hover:bg-yellow-100 hover:border-yellow-100 w-full'>
                                        <img src={card} alt='bnd' className='flex mx-auto'></img>
                                    </button>
                                </a>

                            </div>

                            <form className='space-y-2'>

                                <div className='space-y-2'>
                                    <label>
                                        Amount in <strong>BNB</strong> You Pay:
                                    </label>
                                    <div className="py-4 pl-5 w-full bg-white-100 flex items-center justify-between rounded-2xl">
                                        <input type="number" placeholder="0" id="email" required="" className="bg-white-100 focus:ring-0 focus:outline-none w-full placeholder-black-100 text-black-100" />

                                        <img src={input_1} alt='progressbar' className='pr-5'></img>
                                    </div>
                                </div>

                                <div className='space-y-2'>
                                    <label>
                                        Amount in <strong>AIRB</strong> You Receive:
                                    </label>
                                    <div className="py-4 pl-5 w-full bg-white-100 flex items-center justify-between rounded-2xl">
                                        <input type="number" placeholder="0" id="email" required="" className="bg-white-100 focus:ring-0 focus:outline-none w-full placeholder-black-100 text-black-100" />

                                        <img src={input_2} alt='progressbar' className='pr-5'></img>
                                    </div>
                                </div>

                                <div className='space-y-2'>
                                    <label>
                                        You get free 0 NFT Tickets
                                    </label>
                                    <button className='w-full py-4 text-black-100 font-semibold text-center btn-gradient rounded-2xl'>
                                        Connect wallet
                                    </button>
                                </div>

                            </form>

                            <div className='flex items-center justify-between lg:gap-x-6 gap-x-4 mt-2'>
                                <button className='flex items-center justify-center lg:gap-5 gap-2 bg-black-50 border-2 border-white-50 w-full py-1 rounded-xl lg:text-base text-xs'>
                                    <img src={buy} alt='buy'></img>
                                    How to buy
                                </button>

                                <button className='flex items-center justify-center lg:gap-5 gap-2 bg-black-50 border-2 border-white-50 w-full py-1 rounded-xl lg:text-base text-xs'>
                                    <img src={link} alt='buy'></img>
                                    5% Referral Link
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <img src={bg_mobile} alt='vector' className='absolute right-0 top-0 lg:hidden block'></img>

            <div className='lg:space-y-0 space-y-6 relative z-20 px-5 container mx-auto lg:hidden block'>

                <Menu />

                <div className='space-y-5 py-8'>

                    <h1 className="text-3xl font-bold">
                        The Ultimate Web3 1
                        Gamble & Earn Hub
                    </h1>

                    <p className=''>
                        Gambling Redefined: Become the House with unprecedented rewards, endless<br></br>
                        possibilities, and cross-community bridge-building!
                    </p>

                    <div className='flex gap-x-3 items-center'>
                        <button className='px-3 py-2 rounded-2xl bg-black-400 flex items-center justify-center gap-x-2 border-gradient lg:text-lg'>
                            <img src={btn_1} className=''></img>
                            Raffles
                        </button>

                        <button className='px-3 py-2 rounded-2xl bg-black-400 flex items-center justify-center gap-x-2 border-gradient lg:text-lg'>
                            <img src={btn_2} className=''></img>
                            Games
                        </button>

                        <button className='px-3 py-2 rounded-2xl bg-black-400 flex items-center justify-center gap-x-2 border-gradient lg:text-lg'>
                            <img src={btn_3} className=''></img>
                            Betting
                        </button>
                    </div>


                    <button className='py-3 rounded-2xl bg-black-50 lg:text-xl font-medium shadow flex mx-auto items-center justify-center w-full'>
                        Whitepaper
                    </button>

                    <div className='flex justify-center gap-x-2 items-center'>
                        <a href=''><img src={icon_1} alt='icon' className='hover:opacity-50'></img></a>
                        <a href=''><img src={icon_2} alt='icon' className='hover:opacity-50'></img></a>
                        <a href=''><img src={icon_3} alt='icon' className='hover:opacity-50'></img></a>
                        <a href=''><img src={icon_4} alt='icon' className='hover:opacity-50'></img></a>
                        <a href=''><img src={icon_5} alt='icon' className='hover:opacity-50'></img></a>
                        <a href=''><img src={icon_6} alt='icon' className='hover:opacity-50'></img></a>
                        <a href=''><img src={icon_7} alt='icon' className='hover:opacity-50'></img></a>
                        <a href=''><img src={icon_8} alt='icon' className='hover:opacity-50'></img></a>
                    </div>

                    <p className='underline lg:text-lg lg:text-left text-center'>
                        Audited & KYC | 100% Secure & Verified
                    </p>

                    <div>
                        <a href=''><img src={silid} className='lg:block flex mx-auto' alt='logo'></img></a>
                    </div>
                </div>

                <div className='rounded-2xl lg:px-14 px-5 lg:py-8 py-6 bg_blur'>

                    <h1 className="lg:text-5xl text-2xl text-center font-bold">
                        $AIRB Pre-Sale
                    </h1>

                    <div>
                        <img src={bar} alt='progressbar' className='flex mx-auto py-6'></img>
                        <span className='text-xs absolute -mt-10 ml-14'>25%</span>
                    </div>

                    <div className='space-y-2 text-center'>
                        <p className='lg:text-2xl text-normal font-medium'>
                            USD Raised: <span className='text-yellow-50'>$369,725 / $1,200,000</span>
                        </p>
                        <p className='lg:text-2xl text-normal'>
                            Listing price: $0,060
                        </p>
                        <p className='lg:text-2xl text-normal font-medium'>
                            1 $AIRB = $0.030
                        </p>
                    </div>

                    <div className='grid grid-cols-3 grid-rows-2 items-center justify-center gap-3 mt-5 mb-3'>

                        <a href='/'>
                            <button className='rounded-2xl border-2 border-white-100 lg:px-5 py-1 hover:bg-yellow-100 hover:border-yellow-100 w-full'>
                                <img src={bep} alt='bnb' className='flex mx-auto'></img>
                            </button>
                        </a>

                        <a href='/'>
                            <button className='rounded-2xl border-2 border-white-100 lg:px-5 py-1 hover:bg-yellow-100 hover:border-yellow-100 w-full'>
                                <img src={eth} alt='eth' className='flex mx-auto'></img>
                            </button>
                        </a>

                        <a href='/'>
                            <button className='rounded-2xl border-2 border-white-100 lg:px-5 py-1 hover:bg-yellow-100 hover:border-yellow-100 w-full'>
                                <img src={usdt} alt='usdt' className='flex mx-auto'></img>
                            </button>
                        </a>

                        <a href='/'>
                            <button className='rounded-2xl border-2 border-white-100 lg:px-5 py-1 hover:bg-yellow-100 hover:border-yellow-100 w-full'>
                                <img src={busd} alt='busd' className='flex mx-auto'></img>
                            </button>
                        </a>

                        <a href='/'>
                            <button className='rounded-2xl border-2 border-white-100 lg:px-5 py-1 hover:bg-yellow-100 hover:border-yellow-100 w-full'>
                                <img src={usdc} alt='usdc' className='flex mx-auto'></img>
                            </button>
                        </a>

                        <a href='/'>
                            <button className='rounded-2xl border-2 border-white-100 lg:px-5 py-1 hover:bg-yellow-100 hover:border-yellow-100 w-full'>
                                <img src={card} alt='card' className='flex mx-auto'></img>
                            </button>
                        </a>

                    </div>

                    <form className='space-y-2'>

                        <div className='space-y-2'>
                            <label>
                                Amount in <strong>BNB</strong> You Pay:
                            </label>
                            <div className="py-4 pl-5 w-full bg-white-100 flex items-center justify-between rounded-2xl">
                                <input type="number" placeholder="0" id="email" required="" className="bg-white-100 focus:ring-0 focus:outline-none w-full placeholder-black-100 text-black-100" />

                                <img src={input_1} alt='progressbar' className='pr-5'></img>
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <label>
                                Amount in <strong>AIRB</strong> You Receive:
                            </label>
                            <div className="py-4 pl-5 w-full bg-white-100 flex items-center justify-between rounded-2xl">
                                <input type="number" placeholder="0" id="email" required="" className="bg-white-100 focus:ring-0 focus:outline-none w-full placeholder-black-100 text-black-100" />

                                <img src={input_2} alt='progressbar' className='pr-5'></img>
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <label>
                                You get free 0 NFT Tickets
                            </label>
                            <button className='w-full py-4 text-black-100 font-semibold text-center btn-gradient rounded-2xl'>
                                Connect wallet
                            </button>
                        </div>

                    </form>

                    <div className='flex items-center justify-between lg:gap-x-6 gap-x-4 mt-2'>
                        <button className='flex items-center justify-center lg:gap-5 gap-2 bg-black-50 border-2 border-white-50 w-full py-1 rounded-xl lg:text-base text-xs'>
                            <img src={buy} alt='buy'></img>
                            How to buy
                        </button>

                        <button className='flex items-center justify-center lg:gap-5 gap-2 bg-black-50 border-2 border-white-50 w-full py-1 rounded-xl lg:text-base text-xs'>
                            <img src={link} alt='buy'></img>
                            5% Referral Link
                        </button>
                    </div>
                </div>

            </div>

            {/* logo slider */}

            <div className='lg:py-16 py-6'>

                <h4 className='lg:text-2xl text-xl font-semibold pb-6 text-center'>Featured In</h4>

                <marquee>
                    <div className='flex items-center justify-center lg:gap-x-24 gap-x-8 w-full'>
                        <img src={logoSlide_1} alt='logo' className='lg:w-44 w-32'></img>
                        <img src={logoSlide_2} alt='logo' className='lg:w-44 w-32'></img>
                        <img src={logoSlide_4} alt='logo' className='lg:w-44 w-32'></img>
                        <img src={logoSlide_3} alt='logo' className='lg:w-44 w-32'></img>
                        <img src={logoSlide_5} alt='logo' className='lg:w-44 w-32'></img>
                    </div>
                </marquee>
            </div>

            {/* about section */}

            <div className='lg:block hidden bg-about'>
                <div className="lg:px-20 px-5 lg:py-28 py-6 container mx-auto">
                    <div className='lg:flex justify-between items-center gap-x-24 lg:space-y-0 space-y-6'>

                        <div className='lg:w-1/2'>
                            <img src={about} alt='about' className='z-20 relative'></img>
                            <img src={coin} alt='about' className='absolute right-1/2 -mr-6 -mt-16 w-28 lg:block hidden'></img>
                        </div>

                        <div className='lg:w-1/2 space-y-8'>

                            <div className='lg:space-y-2'>
                                <h2 className='lg:text-4xl text-2xl font-bold'>
                                    <span className='text-gradient'>BillionAir</span> is a Revolutionary,
                                </h2>
                                <h2 className='lg:text-4xl text-2xl font-bold'>
                                    Multi-layered Blockchain
                                </h2>
                                <h2 className='lg:text-4xl text-2xl font-bold'>
                                    Gambling Platform.
                                </h2>
                            </div>

                            <p className='opacity-90 lg:text-lg'>
                                BillionAir is a trustless and secure blockchain ecosystem giving you a
                                chance to own a piece of an exponentially growing industry and get a
                                share of the revenue from its exceptional combination of gaming, betting,
                                and a unique raffle solution offering unparalleled excitement and utility to
                                global audiences.
                            </p>

                            <div>
                                <a href='/'>
                                    <button className="lg:px-16 px-6 lg:py-4 py-3 rounded-2xl btn-gradient text-black-100 font-semibold text-lg">
                                        Buy $AIRB
                                    </button>
                                </a>
                            </div>


                        </div>

                    </div>
                </div>
            </div>

            <div className="lg:hidden block px-5 py-6 container mx-auto">
                <div className='lg:space-y-0 space-y-6'>

                    <div className='space-y-8'>

                        <div className='lg:space-y-2'>
                            <h2 className='lg:text-4xl text-2xl font-bold'>
                                <span className='text-gradient'>BillionAir</span> is a Revolutionary,
                            </h2>
                            <h2 className='lg:text-4xl text-2xl font-bold'>
                                Multi-layered Blockchain
                            </h2>
                            <h2 className='lg:text-4xl text-2xl font-bold'>
                                Gambling Platform.
                            </h2>
                        </div>

                        <div className=''>
                            <img src={about} alt='about' className='z-20 relative'></img>
                            <img src={coin} alt='about' className='absolute w-16 right-0 -mt-8'></img>
                        </div>

                        <p className='opacity-90 lg:text-lg'>
                            BillionAir is a trustless and secure blockchain ecosystem giving you a
                            chance to own a piece of an exponentially growing industry and get a
                            share of the revenue from its exceptional combination of gaming, betting,
                            and a unique raffle solution offering unparalleled excitement and utility to
                            global audiences.
                        </p>

                        <div>
                            <a href='/'>
                                <button className="lg:px-16 px-6 lg:py-4 py-3 rounded-2xl btn-gradient text-black-100 font-semibold text-lg">
                                    Buy $AIRB
                                </button>
                            </a>
                        </div>


                    </div>

                </div>
            </div>

            <div className='bg-img'>

                <div className="lg:px-32 px-5 lg:py-20 py-6 container mx-auto">

                    {/* Unique and Immersive Ecosystem */}

                    <div>
                        <div className='lg:flex hidden justify-center items-center gap-x-24'>
                            <div className='lg:w-1/2 space-y-8'>

                                <div className='space-y-2'>
                                    <h2 className='lg:text-4xl text-2xl font-bold'>
                                        Unique and Immersive <span className='text-gradient-1'>Ecosystem</span>
                                    </h2>
                                </div>

                                <p className='opacity-90 lg:text-lg'>
                                    The centerpieces of our economy are the $AIRB token and NFT
                                    ticket, working seamlessly with our platform and its buyback,
                                    burning, and staking mechanisms, making it an ecosystem full
                                    of value and opportunity that will keep both earning you and
                                    keep you entertained.
                                </p>

                                <div>
                                    <a href='/'>
                                        <button className="lg:px-16 px-6 lg:py-4 py-3 rounded-2xl btn-gradient text-black-100 font-semibold text-lg">
                                            Buy $AIRB
                                        </button>
                                    </a>
                                </div>
                            </div>

                            <div className='lg:w-1/2'>
                                <img src={ecosystem} alt='about' className=''></img>
                            </div>

                        </div>

                        {/* mobile version */}

                        <div className='lg:hidden block space-y-8'>

                            <h2 className='lg:text-4xl text-2xl font-bold'>
                                Unique and Immersive <span className='text-gradient-1'>Ecosystem</span>
                            </h2>

                            <img src={ecosystem} alt='about' className=''></img>

                            <p className='opacity-90 lg:text-lg'>
                                The centerpieces of our economy are the $AIRB token and NFT
                                ticket, working seamlessly with our platform and its buyback,
                                burning, and staking mechanisms, making it an ecosystem full
                                of value and opportunity that will keep both earning you and
                                keep you entertained.
                            </p>

                            <div>
                                <a href='/'>
                                    <button className="lg:px-16 px-6 lg:py-4 py-3 rounded-2xl btn-gradient text-black-100 font-semibold text-lg">
                                        Buy $AIRB
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Staking and Tier System */}

                    <div>
                        <div className='lg:flex hidden justify-between items-center gap-x-24 py-20'>
                            <div className='lg:w-1/2'>
                                <img src={staking} alt='about' className=''></img>
                            </div>

                            <div className='lg:w-1/2 space-y-8'>

                                <h2 className='lg:text-4xl text-2xl font-bold'>
                                    <span className='text-purple-100'>Staking</span> and <span className='text-gradient-1'>Tier System</span>
                                </h2>

                                <p className='opacity-90 lg:text-lg'>
                                    Stake $AIRB to earn rewards from our massive token pools and
                                    a share of the platform revenue. Maximize your benefits by
                                    climbing the tier system to receive higher APY, lower fees, and
                                    greater odds of winning raffle prizes with our ticket multipliers.
                                </p>

                                <div>
                                    <a href='/'>
                                        <button className="lg:px-16 px-6 lg:py-4 py-3 rounded-2xl btn-gradient text-black-100 font-semibold text-lg">
                                            Buy $AIRB
                                        </button>
                                    </a>
                                </div>


                            </div>

                        </div>

                        {/* mobile version */}

                        <div className='lg:hidden block py-6 space-y-8'>

                            <h2 className='lg:text-4xl text-2xl font-bold'>
                                <span className='text-purple-100'>Staking</span> and <span className='text-gradient-1'>Tier System</span>
                            </h2>

                            <img src={staking} alt='about' className=''></img>

                            <p className='opacity-90 lg:text-lg'>
                                Stake $AIRB to earn rewards from our massive token pools and
                                a share of the platform revenue. Maximize your benefits by
                                climbing the tier system to receive higher APY, lower fees, and
                                greater odds of winning raffle prizes with our ticket multipliers.
                            </p>

                            <div>
                                <a href='/'>
                                    <button className="lg:px-16 px-6 lg:py-4 py-3 rounded-2xl btn-gradient text-black-100 font-semibold text-lg">
                                        Buy $AIRB
                                    </button>
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className='grid lg:grid-cols-3 grid-cols-1 items-center justify-center gap-6 lg:py-20 py-6'>

                        <div className='border space-y-2 rounded-2xl px-8 py-4'>
                            <h4 className='lg:text-3xl text-xl font-semibold opacity-70'>
                                Silver
                            </h4>
                            <h4 className='lg:text-2xl text-xl font-semibold'>
                                60% APR & 2x multiplier
                            </h4>
                            <p className='opacity-60'>
                                Minimum 10,000 AIRB
                            </p>
                        </div>

                        <div className='border border-yellow-50 space-y-2 rounded-2xl px-8 py-4'>
                            <h4 className='lg:text-3xl text-xl font-semibold text-yellow-50'>
                                Gold
                            </h4>
                            <h4 className='lg:text-2xl text-xl font-semibold'>
                                100% APR & 4x multiplier
                            </h4>
                            <p className='opacity-60'>
                                Minimum 50,000 AIRB
                            </p>
                        </div>

                        <div className='border space-y-2 rounded-2xl px-8 py-4'>
                            <h4 className='lg:text-3xl text-xl font-semibold text-gradient'>
                                Diamond
                            </h4>
                            <h4 className='lg:text-2xl text-xl font-semibold'>
                                240% APR & 6x multiplier
                            </h4>
                            <p className='opacity-60'>
                                Minimum 100,000 AIRB
                            </p>
                        </div>

                    </div>

                    {/* Raffles, Games and Betting */}

                    <div>
                        <div className='lg:flex hidden justify-center items-center gap-x-24 py-24'>
                            <div className='lg:w-1/2 space-y-8'>

                                <h2 className='lg:text-4xl text-3xl font-bold'>
                                    <span className='text-gradient-1'> Raffles, Games</span> and <br></br>
                                    <span className='text-gradient-1'>Betting</span>
                                </h2>

                                <div className='space-y-5'>
                                    <p className='opacity-90 lg:text-lg'>
                                        Our platform offers a huge range of games and prizes without
                                        any limitations or borders. Whether you prefer chance-based
                                        or skill-based games, gambling games or raffles, we give you
                                        the opportunity to make your dreams come true.
                                    </p>

                                    <p className='opacity-90 lg:text-lg'>
                                        You can win digital assets like tokens or NFTs, as well as
                                        physical goods such as cars, watches, and electronics, and
                                        even unforgettable trips and experiences. Moreover, our
                                        carefully curated fees and raffle over-collections help
                                        replenish the staking pools and boost the ecosystem's growth.
                                    </p>
                                </div>

                                <div className='flex lg:gap-x-8 gap-x-3 items-center'>
                                    <button className='lg:px-8 px-3 lg:py-3 py-2 rounded-2xl btn_gradient flex items-center justify-center lg:gap-x-4 gap-x-2 border lg:text-lg'>
                                        <img src={btn_1} className=''></img>
                                        Raffles
                                    </button>

                                    <button className='lg:px-8 px-3 lg:py-3 py-2 rounded-2xl btn_gradient flex items-center justify-center lg:gap-x-4 gap-x-2 border lg:text-lg'>
                                        <img src={btn_2} className=''></img>
                                        Games
                                    </button>

                                    <button className='lg:px-8 px-3 lg:py-3 py-2 rounded-2xl btn_gradient flex items-center justify-center lg:gap-x-4 gap-x-2 border lg:text-lg'>
                                        <img src={btn_3} className=''></img>
                                        Betting
                                    </button>
                                </div>

                                <div>
                                    <a href='/'>
                                        <button className="lg:px-16 px-6 lg:py-4 py-3 rounded-2xl btn-gradient text-black-100 font-semibold text-lg">
                                            Buy $AIRB
                                        </button>
                                    </a>
                                </div>
                            </div>

                            <div className='lg:w-1/2'>
                                <img src={games} alt='about' className=''></img>
                            </div>

                        </div>

                        {/* mobile version */}

                        <div className='lg:hidden block space-y-8 py-6'>

                            <h2 className='text-2xl font-bold'>
                                <span className='text-gradient-1'> Raffles, Games</span> and <br></br>
                                <span className='text-gradient-1'>Betting</span>
                            </h2>

                            <img src={games} alt='about' className=''></img>


                            <div className='space-y-5'>
                                <p className='opacity-90'>
                                    Our platform offers a huge range of games and prizes without
                                    any limitations or borders. Whether you prefer chance-based
                                    or skill-based games, gambling games or raffles, we give you
                                    the opportunity to make your dreams come true.
                                </p>

                                <p className='opacity-90'>
                                    You can win digital assets like tokens or NFTs, as well as
                                    physical goods such as cars, watches, and electronics, and
                                    even unforgettable trips and experiences. Moreover, our
                                    carefully curated fees and raffle over-collections help
                                    replenish the staking pools and boost the ecosystem's growth.
                                </p>

                                <div className='flex gap-x-3 items-center'>
                                    <button className='lg:px-8 px-3 lg:py-3 py-2 rounded-2xl btn_gradient flex items-center justify-center lg:gap-x-4 gap-x-2 border lg:text-lg'>
                                        <img src={btn_1} className=''></img>
                                        Raffles
                                    </button>

                                    <button className='lg:px-8 px-3 lg:py-3 py-2 rounded-2xl btn_gradient flex items-center justify-center lg:gap-x-4 gap-x-2 border lg:text-lg'>
                                        <img src={btn_2} className=''></img>
                                        Games
                                    </button>

                                    <button className='lg:px-8 px-3 lg:py-3 py-2 rounded-2xl btn_gradient flex items-center justify-center lg:gap-x-4 gap-x-2 border lg:text-lg'>
                                        <img src={btn_3} className=''></img>
                                        Betting
                                    </button>
                                </div>

                                <div>
                                    <a href='/'>
                                        <button className="lg:px-16 px-6 lg:py-4 py-3 rounded-2xl btn-gradient text-black-100 font-semibold text-lg">
                                            Buy $AIRB
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Providing utility and Entertainment to Other Web3 Projects */}

                    <div>
                        <div className='lg:flex hidden justify-between items-center gap-x-24 py-20'>
                            <div className='lg:w-1/2'>
                                <img src={utility} alt='about' className=''></img>
                            </div>

                            <div className='lg:w-1/2 space-y-8'>

                                <h2 className='lg:text-4xl text-3xl font-bold'>
                                    <span className='text-gradient-1'>Providing utility</span> and
                                    Entertainment to Other<br></br>
                                    Web3 Projects
                                </h2>

                                <p className='opacity-90 lg:text-lg'>
                                    BillionAir solves a common issue many projects face - how to
                                    provide more value and fun to their token holders. Our unique
                                    gaming solution will be available to all web3 projects open to
                                    join the platform, offering them new ways to fundraise, burn
                                    their tokens from over-collections, entertain their community,
                                    and connect with others.
                                </p>

                                <div>
                                    <a href='/'>
                                        <button className="lg:px-16 px-6 lg:py-4 py-3 rounded-2xl btn-gradient text-black-100 font-semibold text-lg">
                                            Buy $AIRB
                                        </button>
                                    </a>
                                </div>


                            </div>

                        </div>

                        {/* mobile version */}

                        <div className='lg:hidden block space-y-8 py-6'>

                            <h2 className='lg:text-4xl text-2xl font-bold'>
                                <span className='text-gradient-1'>Providing utility</span> and
                                Entertainment to Other<br></br>
                                Web3 Projects
                            </h2>

                            <img src={utility} alt='about' className=''></img>

                            <p className='opacity-90 lg:text-lg'>
                                BillionAir solves a common issue many projects face - how to
                                provide more value and fun to their token holders. Our unique
                                gaming solution will be available to all web3 projects open to
                                join the platform, offering them new ways to fundraise, burn
                                their tokens from over-collections, entertain their community,
                                and connect with others.
                            </p>

                            <div>
                                <a href='/'>
                                    <button className="lg:px-16 px-6 lg:py-4 py-3 rounded-2xl btn-gradient text-black-100 font-semibold text-lg">
                                        Buy $AIRB
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* table */}

                    <div className='lg:py-20 py-6'>
                        <img src={table} alt='table' className='lg:flex hidden mx-auto'></img>

                        <div className='lg:hidden block bg-competition rounded-3xl'>
                            <Competition />
                        </div>

                    </div>

                    <div className='grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-8 lg:py-20 py-6'>

                        <div className='lg:flex items-center justify-between border border-opacity-5 rounded-2xl lg:p-8 p-6 bg-gradient lg:space-y-0 space-y-8'>
                            <div className='space-y-5'>
                                <h4 className='lg:text-4xl text-2xl font-bold'>
                                    <span className='text-gradient-1'>$AIRB</span> Token
                                </h4>
                                <p>Platform-wide currency utilised for
                                    every transaction, including
                                    purchases, staking, and earning
                                    multipliers with built-in deflation.</p>
                            </div>

                            <img src={arb_token} alt='arb-token' className='lg:block flex mx-auto w-60'></img>
                        </div>

                        <div className='lg:flex items-center justify-between border border-opacity-5 rounded-2xl lg:p-8 p-6 bg-gradient lg:space-y-0 space-y-8'>
                            <div className='space-y-5'>
                                <h4 className='lg:text-4xl text-2xl font-bold'>
                                    <span className='text-gradient-1'>BillionAir</span> NFT
                                    Ticket
                                </h4>
                                <p>Platform-wide currency utilised for
                                    every transaction, including
                                    purchases, staking, and earning
                                    multipliers with built-in deflation.</p>
                            </div>

                            <img src={nft_ticket} alt='arb-token' className='w-56 lg:block flex mx-auto'></img>
                        </div>
                    </div>

                    {/* why $airb */}

                    <div className='lg:py-20 py-6'>

                        <div className='space-y-6 text-center'>
                            <h3 className='lg:text-4xl text-2xl font-bold'>
                                Why <span className='text-gradient-1'>$AIRB?</span>
                            </h3>

                            <p className='lg:w-9/12 flex mx-auto'>
                                $AIRB is the ecosystem powering token behind BillionAir, working in tandem with our NFT raffle tickets. The token has built-in
                                value across the platform and the whole web3 with use cases including staking, built-in deflation, climbing the tier system,
                                favoured game entries and lower fees, raffle ticket purchases, and much more.
                            </p>

                            <p className='font-semibold'>As the BillionAir platform and ecosystem grow, the more $AIRB we burn, and the utility and price of $AIRB will grow with it.</p>
                        </div>

                        <div className='grid lg:grid-cols-3 grid-cols-1 items-center justify-center gap-8 lg:py-20 py-6'>

                            <div className='flex flex-col gap-y-6 bg-gradient lg:p-12 p-5 border rounded-3xl lg:h-80'>
                                <div>
                                    <img src={lock} alt='utility' className=''></img>
                                </div>

                                <h4 className='lg:text-3xl text-xl font-bold'>
                                    Utility
                                </h4>

                                <p className='opacity-60'>
                                    $AIRB unlocks the full potential of the
                                    BillionAir platform, providing extra value
                                    throughout the ecosystem.
                                </p>
                            </div>

                            <div className='flex flex-col gap-y-6 bg-gradient lg:p-12 p-5 border rounded-3xl lg:h-80'>
                                <div>
                                    <img src={incentive} alt='utility' className=''></img>
                                </div>

                                <h4 className='lg:text-3xl text-xl font-bold'>
                                    Incentives
                                </h4>

                                <p className='opacity-60'>
                                    $AIRB holders receive a share of the
                                    platform's revenue and rewards,
                                    including staking benefits and climbing
                                    the tier system.
                                </p>
                            </div>

                            <div className='flex flex-col gap-y-6 bg-gradient lg:p-12 p-5 border rounded-3xl lg:h-80'>
                                <div>
                                    <img src={price} alt='utility' className=''></img>
                                </div>

                                <h4 className='lg:text-3xl text-xl font-bold'>
                                    Price Appreciation
                                </h4>

                                <p className='opacity-60'>
                                    As the BillionAir ecosystem and the
                                    whole gambling market grow, the value
                                    and demand of $AIRB will grow with it.
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* partner slider */}

                    <div className='lg:pb-16 pb-6'>

                        <h4 className='lg:text-2xl text-xl font-semibold pb-8 text-center'>Backers and Partners</h4>

                        <marquee>
                            <div className='flex items-center justify-center lg:gap-x-24 gap-x-8 w-full'>
                                <img src={p_1} alt='logo' className=''></img>
                                <img src={p_2} alt='logo' className='lg:w-44 w-32'></img>
                                <img src={p_3} alt='logo' className='lg:w-44 w-32'></img>
                                <img src={p_4} alt='logo' className='lg:w-44 w-32'></img>
                            </div>
                        </marquee>
                    </div>

                    {/* chart */}

                    <div>
                        <img src={chart} alt='video' className='flex mx-auto'></img>

                        <div className='grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-8 lg:py-20 py-6'>

                            <div className='space-y-6 border rounded-2xl lg:p-8 p-5'>
                                <h3 className='lg:text-4xl text-2xl font-bold'>
                                    Member of Binance<br></br>
                                    accelerator program
                                </h3>

                                <img src={bnb} alt='bnb'></img>
                            </div>

                            <div className='space-y-6 border rounded-2xl lg:p-8 p-5'>
                                <h3 className='lg:text-4xl text-2xl font-bold'>
                                    $AIRB Confirmed<br></br>
                                    Exchange Listing
                                </h3>

                                <img src={bitmart} alt='bnb'></img>
                            </div>
                        </div>

                    </div>

                    {/* video */}

                    <div>
                        <h3 className="lg:text-5xl text-3xl font-bold text-center">
                            <span className='text-purple-100'>BillionAir</span> official explainer video
                        </h3>

                        <div>
                            <img src={video_3} alt='video' className='flex mx-auto lg:pt-12 pt-6    '></img>
                        </div>
                    </div>

                    {/* tokenomics */}

                    <div>
                        <div className='text-center space-y-6 lg:py-20 py-6'>
                            <h3 className="lg:text-5xl text-3xl font-bold">
                                Tokenomics
                            </h3>

                            <p className='opacity-80'>BillionAir is a BEP-20 token deployed on BNB Chain mainnet.<br></br>The total supply of $AIRB tokens is 1 billion (1,000,000,000).</p>
                        </div>

                        <div>
                            <img data-aos='zoom-in' src={tokenomics} alt='tokenomics' className='flex mx-auto lg:pt-12 pt-6'></img>
                            <img src={token} alt='tokenomics' className='lg:flex mx-auto absolute right-0 left-0 -mt-96 -translate-y-4 translate-x-12 hidden'></img>
                        </div>
                    </div>

                    {/* token contact */}

                    <div>
                        <div className='text-center space-y-6 lg:py-20 py-6'>
                            <h3 className="lg:text-5xl text-3xl font-bold">
                                Token Contract
                            </h3>

                            <p className='opacity-80'>
                                Use the contract information below to add the $AIRB token to your wallet.
                            </p>
                        </div>

                        <div className='grid lg:grid-cols-5 grid-cols-1 border border-white-50 rounded-2xl gap-x-8 lg:divide-x-2 lg:divide-y-0 divide-y-2 divide-purple-50 bg-black-200'>

                            <div className='space-y-5 lg:p-12 p-6 lg:col-span-2'>
                                <h4 className='lg:text-3xl text-xl font-bold'>
                                    Address
                                </h4>

                                <div className="">
                                    <button onClick={() => copyToClipBoard('0xB6b3B930AF6Fa095D71876d268a89Def5f3e9894')} className='flex items-center gap-x-2'>
                                        <p className='opacity-60 lg:block hidden'>0xB6b3B930AF6Fa095D71876d268a89Def5f3e9894</p>
                                        <p className='opacity-60 break-words lg:hidden block'>0xB6b3B93...ef5f3e9894</p>

                                        <img src={copy} alt='copy'></img>
                                    </button>
                                </div>

                                <span className="text-white-100 absolute duration-300 -translate-y-4 text-sm">
                                    {copySuccess}
                                </span>
                            </div>

                            <div className='lg:space-y-5 lg:text-center lg:p-12 p-4'>
                                <h4 className='lg:text-3xl text-xl font-bold'>
                                    Decimal
                                </h4>

                                <p className='opacity-60'>18</p>
                            </div>

                            <div className='lg:space-y-5 lg:text-center lg:p-12 p-4'>
                                <h4 className='lg:text-3xl text-xl font-bold'>
                                    Network
                                </h4>

                                <p className='opacity-60'>BNB-Chain</p>
                            </div>

                            <div className='lg:space-y-5 lg:text-center lg:p-8 p-4'>
                                <h4 className='lg:text-3xl text-xl font-bold'>
                                    Token Symbol
                                </h4>

                                <p className='opacity-60'>$AIRB</p>
                            </div>

                        </div>

                        <p className='text-purple-50 text-center py-6'>Please note that you should not send any tokens to this address, as doing so may result in the permanent loss of the tokens.</p>
                    </div>

                </div>

                {/* roadmap */}

                <div className='lg:px-10 px-5 lg:py-20 py-6 container mx-auto'>

                    <div className='space-y-6 lg:pl-28'>
                        <h2 className='lg:text-4xl text-2xl font-bold'>
                            Roadmap
                        </h2>

                        <p className='opacity-60'>
                            Detailed action plan of how we are going to<br></br>
                            reshape the future of earntertainment.
                        </p>
                    </div>

                    <div className='lg:py-12 py-6'>
                        <Slider />
                    </div>

                    <div className=''>
                        <div className='space-y-6 lg:ml-64 ml-6 absolute lg:mt-32 mt-12'>
                            <h2 className='lg:text-4xl text-xl font-bold'>
                                Merch yourself
                            </h2>

                            <p className='lg:text-normal text-sm'>
                                Buy our exclusive branded merchandise<br></br>
                                and represent BillionAir in style!
                            </p>

                            <button className='lg:px-8 px-5 text-black-100 py-3 rounded-2xl bg-yellow-50 font-semibold'>
                                Shop Now!
                            </button>
                        </div>

                        <img src={bg_shop} alt='shop' className='lg:flex hidden mx-auto w-9/12'></img>
                        <img src={shape} alt='shop' className='lg:hidden block'></img>
                    </div>

                </div>

                {/* Press release */}

                <div className='lg:px-10 px-5 lg:py-20 py-6 container mx-auto'>
                    <div className='space-y-6 lg:pl-28'>
                        <h2 className='lg:text-4xl text-2xl font-bold'>
                            Press release
                        </h2>

                        <p className='opacity-60'>
                            Latest articles and updates about BillionAir.
                        </p>
                    </div>

                    <div className='lg:pt-12 pt-6 lg:pb-32 pb-8'>
                        <Release />
                    </div>
                </div>

            </div>

            {/* team section */}

            <div className='bg-team'>
                <div className='lg:px-10 px-5 lg:py-20 py-6 container mx-auto'>

                    <div className='flex flex-col mx-auto gap-y-8 rounded-t-2xl bg_gradient lg:p-10 p-6 lg:-mt-52 lg:w-9/12'>
                        <h3 className='lg:text-4xl text-2xl font-bold'>
                            Deepen the knowledge
                        </h3>
                        <p className=''>
                            Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                        </p>
                        <div className='lg:flex block gap-x-12 items-center justify-center lg:space-y-0 space-y-5'>
                            <button className='py-3 rounded-2xl lg:text-lg font-semibold bg-pager w-full'>
                                OnePager
                            </button>

                            <button className='py-3 rounded-2xl lg:text-lg font-semibold bg-token w-full'>
                                Tokenomics
                            </button>

                            <button className='py-3 rounded-2xl lg:text-lg font-semibold bg-whitepaper w-full'>
                                Whitepaper
                            </button>
                        </div>

                    </div>

                    <div className='lg:flex gap-x-4 items-center justify-center pt-5 lg:space-y-0 space-y-5'>
                        <p className='underline lg:text-lg lg:text-left text-center'>
                            Audited & KYC | 100% Secure & Verified
                        </p>

                        <div>
                            <a href=''><img src={silid} className='lg:block flex mx-auto' alt='logo'></img></a>
                        </div>
                    </div>

                    <div className='text-center mt-6 space-y-6'>
                        <h3 className='lg:text-4xl text-2xl font-bold'>
                            Team & Advisors
                        </h3>

                        <p className=''>
                            It's not just about the people behind the project,<br></br>
                            it's about the people in front and their experience and knowledge
                        </p>
                    </div>

                    <div className='lg:py-12 py-6'>
                        <Partners />
                    </div>


                    <h3 className='lg:text-4xl text-2xl font-bold text-center lg:pt-6 lg:pb-28'>
                        Backers and Partners
                    </h3>
                </div>
            </div>


            {/* faq section */}
            <div className='bg_faq'>
                <div className="lg:px-20 px-5 lg:py-20 py-6 container mx-auto">

                    <div className='lg:flex items-center justify-between mx-auto bg-yellow-50 rounded-3xl lg:w-10/12 lg:-mt-52'>

                        <div className='space-y-6 lg:w-8/12 text-black-200 lg:p-20 p-6'>
                            <h3 className="lg:text-4xl text-3xl font-bold">
                                $500k and Tesla
                                giveaway!
                            </h3>

                            <p className=''>
                                The more $AIRB you purchase and the more you participate in
                                Gleam, the more tickets you earn, and the higher your chances of
                                walking away with these extraordinary prizes!
                            </p>

                            <button className='lg:px-6 px-5 py-3 bg-black-200 text-white-100 lg:text-lg rounded-2xl'>
                                Join the giveaway
                            </button>
                        </div>

                        <div>
                            <img src={giveaway} alt='car' className=''></img>
                        </div>

                    </div>

                    <div data-aos="fade-right" className="flex flex-col items-center justify-center lg:pt-20 pt-8">
                        <div className="lg:w-7/12">

                            <div className='text-center space-y-6'>
                                <h3 className="lg:text-5xl text-3xl font-bold">
                                    FAQ
                                </h3>

                                <p className='opacity-90'>You may have questions, we have the answers.</p>
                            </div>

                            <div className="accordion lg:mt-6">
                                {accordionData.map(({ title, content }) => (
                                    <Faq title={title} content={content} />
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div >
    )
}
