import { images } from '@/exports/images';
import Image from 'next/image';
import React from 'react';
import dripImg from '../public/assets/drippyBig.png';

const HowToBuy = () => {
  return (
    <section id='howtobuy' className='container my-[100px]'>
      <hgroup data-aos='fade-up' className='text-center'>
        <h2 className='flex items-center gap-2 justify-center'>
          {' '}
          <Image
            src={images.drippyIcon}
            alt=''
            className='w-[24px] h-[24px] '
          />{' '}
          HOW TO BUY{' '}
          <Image
            src={images.drippyIcon}
            alt=''
            className='w-[24px] h-[24px] '
          />{' '}
        </h2>
        <h4>Drippy Inu NFT</h4>
      </hgroup>

      <section className='flex flex-col md:flex-row justify-between gap-3'>
        <article data-aos='fade-left' className='w-full md:w-6/12'>
          <div className='my-7 w-full md:w-11/12 mx-auto flex items-center justify-between'>
            <a
              href='https://mint.launchifi.xyz/collections/0xcC827795BF764895533a1076cD74bcFe0BFdB240?chain=369#top'
              target='_blank'
              rel='noreferrer'
              className='main-btn'
            >
              MINT ON PULSECHAIN
            </a>

            <a
              href='https://mint.launchifi.xyz/collections/0xF9a9aC457354b4868dACE87dE1D36A221BE7244e?chain=56#top'
              target='_blank'
              rel='noreferrer'
              className='main-btn'
            >
              MINT ON BSC
            </a>
          </div>
          <figure>
            <Image src={dripImg} alt='' />
          </figure>

          <ul className='claims'>
            <div className=' flex flex-wrap justify-between items-center my-4'>
              <button className='main-btn w-full md:w-5/12'>
                CLAIM DRIPPY INU TOKEN
              </button>
              <li className='list-disc w-full md:w-6/12'>
                MUST OWN MINIMUM 1 NFT ON BSC OR PULSECHAIN
              </li>
            </div>
            <div className='flex flex-wrap justify-between items-center my-4'>
              <button className='main-btn w-full md:w-5/12'>
                CLAIM INC OR PLS REWARDS
              </button>
              <li className='list-disc w-full md:w-6/12'>
                MUST OWN MINIMUM 1 NFT ON BOTH CHAINS TO EARN
              </li>
            </div>
            <div className='flex flex-wrap justify-between items-center my-4'>
              <button className='main-btn w-full md:w-5/12'>
                CLAIM BNB REWARDS
              </button>
              <li className='list-disc w-full md:w-6/12'>
                MUST OWN MINIMUM 1 NFT ON BOTH CHAINS TO EARN
              </li>
            </div>
            <div className='flex flex-wrap justify-between items-center my-4'>
              <button className='main-btn w-full md:w-5/12'>
                UPGRADE DRIPPY INU NFT
              </button>
              <li className='list-disc w-full md:w-6/12'>
                UPGRADE TO A NFT SMART WALLET FOR EXTRA REWARDS
              </li>
            </div>
            <div className='flex flex-wrap justify-between items-center my-4'>
              <button className='main-btn w-full md:w-5/12'>
                DRIPPY INU HIGH & LOW ROI DAPPS
              </button>
              <li className='list-disc w-full md:w-6/12'>
                &quot;DUMB MONEY SAGA”&quot;
              </li>
            </div>

            <li className='mt-10'>
              <h4 className='mb-3'>
                MAKE MEMES AND SHARE THEM WITH THE COMMUNITY
              </h4>
              Use{' '}
              <span className='underline'>
                $PLS $DRIPPY #DRIPPYINU #DRIPX #BNB
              </span>{' '}
              & tag the official Twitter account{' '}
              <span className='underline'>@DRIPPYINU</span>
            </li>
          </ul>
        </article>
        <aside
          data-aos='fade-right'
          className='w-full md:w-4/12 flex flex-col justify-between'
        >
          <div>
            <h2 className='mb-3'>Whats inside?</h2>
            {/* 1. Visit Drippy Inu NFT Buy button on this website: */}
            <ul className='list-disc pl-10 mb-5'>
              <br />
              <li> Drippy Inu NFTs. </li>
              <li> Tenshi V3 Single Staking Tutorials</li>
              <li> Defi Education 101</li>
              <li> Defi Zoom Mondays</li>
              <li> Keep Wallet Safe Tutorials</li>
              <li> Enroll Into Pulsechain</li>
              <li> Enroll Into Pulsechain</li>
              <li>24/7 VC For All Defi Answer</li>
              <li> Defi After Dark Voice Chat (VC)</li>
              <li> Dumb Money Movie Nights</li>
              <li>Whats Trending Fridays</li>
              <li>Top Defi Picks (ROI Dapps)</li>
              <li>Preach Crypto Sundays</li>
              <li>INC Rewards </li>
              <li>BNB rewards </li>
              <li>NFT Giveaways</li>
              <li>Seasonal Airdrops</li>
              <li>Pulsechain Token Airdrops</li>
              <li>TangGang Meet Ups</li>
              <li>NFT Smart Wallets</li>
              <li>Drippy Inu Whale Airdrop</li>
              <li>Community Sticking Together</li>
              <li>Hiring roles in development and education (Web3)</li>
            </ul>

            <p>
              Drippy Inu will airdrop its token to NFT holders to be paired with
              WDRIP making a few nft holders a whale in the drippy Inu
              ecosystem.
              <br /> <br />
              Congratulations! You&apos;ve now made a purchased to educate
              yourself.
            </p>
          </div>
          <h4 className='war'>MEME WARS COMING SOON</h4>
        </aside>
      </section>
    </section>
  );
};

export default HowToBuy;
