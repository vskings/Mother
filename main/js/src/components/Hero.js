import React from 'react';
import {
  hero,
  ea,
  fifa,
  riot,
  ubisoft,
  krafton,
  eaBlack,
  fifaBlack,
  riotBlack,
  ubisoftBlack,
  kraftonBlack,
} from '../assets';

const Hero = () => {
  return (
    <div className="bg-hero h-auto flex flex-col gap-8 w-full py-4 px-10">
      <h1 className="web-h1 text-grey-500 dark:text-white text-center">
        Dominate the esports space with us
      </h1>
      <p className="web-p2 text-grey-500 dark:text-white text-center">
        Play and host tournaments, place bets, and compete in head-to-head games
      </p>

      <div className="flex gap-8 justify-center items-center">
        <button className="bg-secondary2-500 text-white border border-secondary2-500 px-8 py-2 rounded-full web-p2">
          Create tournaments
        </button>
        <button className="bg-transparent text-secondary2-500 border border-secondary2-500 px-8 py-2 rounded-full web-p2">
          Join tournaments
        </button>
      </div>

      <span className="web-p3 text-grey-500 my-8 mt-12 mx-auto">
        TRUSTED BY GAMERS AND ORGANIZERS
      </span>

      <figure className="flex justify-center flex-wrap h-auto gap-6 text-black mx-auto mb-10">
        <img
          src={fifaBlack}
          className="h-auto w-auto object-contain"
          alt="game"
        />
        <img
          src={riotBlack}
          className="h-auto w-auto object-contain"
          alt="riot"
        />
        <img src={eaBlack} className="h-auto w-auto object-contain" alt="ea" />
        <img
          src={ubisoftBlack}
          className="h-auto w-auto object-contain"
          alt="ubisoft"
        />
        <img
          src={kraftonBlack}
          className="h-auto w-auto object-contain"
          alt="krafton"
        />
      </figure>
    </div>
  );
};

export default Hero;
