import React from 'react';
import '../index.css';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import Layout from '../components/Layout';
import { avatar1, avatar2, avatar3, banner, banner2 } from '../assets';
import Table from '../components/Table';
import TitleHeader from '../components/TitleHeader';

import {
  latestGames,
  challenges,
  challengeHeaders,
  latestHeaders,
} from '../utils/data';
import TableCard from '../components/TableCard';

const Homepage = () => {
  return (
    <div className="relative">
      <Layout>
        <Hero />
        <div className=" px-[2em]">
          <Featured />
        </div>
        <figure className="my-[4em] px-[2em]">
          <img src={banner} alt="" />
        </figure>
        <div className="flex flex-col mx-auto px-[2em] overflow-x-auto">
          <TitleHeader
            heading={'Latest Bets'}
            text={'View all bets'}
            link={'/'}
          />
          <Table
            headers={latestHeaders}
            latest={latestGames}
            className="hidden md:flex"
          />
          <TableCard latest={latestGames} className="flex md:hidden" />
        </div>
        <div className="flex flex-col mx-auto px-[2em] overflow-x-auto">
          <TitleHeader
            heading={'Open H2H Challenges'}
            text={'View all H2H Challenges'}
            link={'/'}
          />
          <Table
            headers={challengeHeaders}
            challenges={challenges}
            className="hidden md:flex"
          />
          <TableCard challenges={challenges} className="flex md:hidden" />
        </div>
        <div className="flex flex-col mx-auto  gap-y-6 my-10 px-[2em]">
          <TitleHeader heading={'Why Choose Us'} />
          <figure className="grid grid-cols-1 sm:grid-cols-2">
            <div className="-ml-[2em]">
              <img src={avatar1} alt="" />
            </div>
            <figcaption className="flex flex-col gap-4 items-center justify-center">
              <h3 className="font-semibold text-lg md:text-2xl font-poppins text-grey-500 dark:text-white">
                Organize and host tournaments in top-played games
              </h3>
              <p className="font-normal text-sm md:text-lg font-poppins text-grey-500 dark:text-grey-200">
                Connect with other gamers and discover tournaments organized by
                the best, or organize your own.
              </p>
            </figcaption>
          </figure>
          <figure className="grid grid-cols-1 sm:grid-cols-2">
            <figcaption className="flex order-last md:order-first flex-col gap-4 items-center justify-start md:justify-center">
              <h3 className="font-semibold text-lg md:text-2xl font-poppins text-grey-500 dark:text-white">
                Place bets on tournaments
              </h3>
              <p className="font-normal text-sm md:text-lg font-poppins text-grey-500 dark:text-grey-200">
                Create betting odds for your tournaments or place bets on
                ongoing tournaments
              </p>
            </figcaption>
            <div className="-mr-[2em]">
              <img src={avatar2} alt="" />
            </div>
          </figure>
          <figure className="grid grid-cols-1 sm:grid-cols-2">
            <div className="-ml-[2em]">
              <img src={avatar3} alt="" />
            </div>
            <figcaption className="flex flex-col gap-4 items-center justify-center">
              <h3 className="font-semibold text-lg md:text-2xl font-poppins text-grey-500 dark:text-white">
                Create a challenge or accept one with H2H
              </h3>
              <p className="font-normal text-sm md:text-lg font-poppins text-grey-500 dark:text-grey-200">
                Take on challenges and win cash wagers playing your favorite
                games
              </p>
            </figcaption>
          </figure>
        </div>
        <figure className="my-[4em] flex justify-center w-full px-[2em]">
          <img src={banner2} alt="" />
        </figure>
      </Layout>
    </div>
  );
};

export default Homepage;
