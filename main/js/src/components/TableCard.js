import React from 'react';

const TableCard = ({ latest, challenges }) => {
  return (
    <div className="flex overflow-x-auto scrollbar-hide md:hidden  gap-x-4 my-6">
      {latest
        ? latest.map((item) => (
            <div
              key={item.id}
              className="min-h-fit min-w-[300px]  gap-y-4 h-auto py-6 px-4 border-2 border-solid border-secondary2-500 grid rounded-md"
            >
              <p className="text-grey-300 font-poppins font-medium leading-[19.95px] text-sm">
                Game
              </p>
              <h3 className="text-grey-400 dark:text-white font-poppins font-medium text-2xl my-4 ">
                {item.game}
              </h3>
              <div className="flex items-center">
                <span className="mr-3 text-grey-300 font-poppins font-medium leading-[19.95px] text-sm">
                  Match:
                </span>
                <div className="flex items-center">
                  <span className="italic font-poppins text-lg text-secondary2-500 font-medium">
                    {item.player1}
                  </span>
                  <span className="mx-2 text-grey-300 dark:text-grey-200 font-poppins font-medium leading-[19.95px] text-lg">
                    VS
                  </span>
                  <span className="italic font-poppins text-lg text-secondary2-500 font-medium">
                    {item.player2}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-grey-300 font-poppins font-medium leading-[19.95px] text-sm">
                  Condition:
                </span>
                <span className="text-grey-400 dark:text-white font-poppins font-medium text-lg ">
                  {item.condition}
                </span>
              </div>
              <div className="grid grid-cols-2">
                <div className="grid gap-2">
                  <p className="text-grey-300  font-poppins font-medium leading-[19.95px] text-sm">
                    Bet date/time
                  </p>
                  <p className="text-grey-400 dark:text-white font-poppins font-medium text-lg ">
                    {item.date}
                  </p>
                </div>
                <div className="grid gap-2">
                  <p className="text-grey-300  font-poppins font-medium leading-[19.95px] text-sm">
                    No. open Bets
                  </p>
                  <p className="text-grey-400 dark:text-white font-poppins font-medium text-lg ">
                    {item.openBets}
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-secondary2-500 border-none text-white rounded-full px-4 py-1"
                  onClick={() => setModalIsOpen(true)}
                >
                  Bet
                </button>
              </div>
            </div>
          ))
        : challenges
        ? challenges.map((item) => (
            <div
              key={item.id}
              className="min-h-fit min-w-[300px] gap-y-4 h-auto py-6 px-4 border-2 border-solid border-secondary2-500 grid rounded-md"
            >
              <p className="text-grey-300  font-poppins font-medium leading-[19.95px] text-sm">
                Game
              </p>
              <h3 className="text-grey-400 dark:text-white font-poppins font-medium text-2xl my-4 ">
                {item.game}
              </h3>
              <div className="flex items-center">
                <span className="mr-3 text-grey-300  font-poppins font-medium leading-[19.95px] text-sm">
                  Match
                </span>
                <span className="italic font-poppins text-lg text-secondary2-500 font-medium">
                  {item.player}
                </span>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-grey-300 font-poppins font-medium leading-[19.95px] text-sm">
                  Completion rate:
                </span>
                <span className="text-grey-400 dark:text-white font-poppins font-medium text-lg ">
                  {item.completionRate}%
                </span>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-grey-300 font-poppins font-medium leading-[19.95px] text-sm">
                  Condition:
                </span>
                <span className="text-grey-400 dark:text-white font-poppins font-medium text-lg ">
                  {item.condition}
                </span>
              </div>
              <div className="grid grid-cols-2">
                <div className="grid gap-2">
                  <p className="text-grey-300  font-poppins font-medium leading-[19.95px] text-sm">
                    Stake
                  </p>
                  <p className="text-grey-400 dark:text-white font-poppins font-medium text-lg ">
                    {item.stake}
                  </p>
                </div>
                <div className="grid gap-2">
                  <p className="text-grey-300  font-poppins font-medium leading-[19.95px] text-sm">
                    Platform
                  </p>
                  <p className="text-grey-400 dark:text-white font-poppins font-medium text-lg ">
                    {item.platform}
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-secondary2-500 border-none text-white rounded-full px-4 py-1"
                  onClick={() => setModalIsOpen(true)}
                >
                  Play
                </button>
              </div>
            </div>
          ))
        : ''}
    </div>
  );
};

export default TableCard;
