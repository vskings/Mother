import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Table = ({ headers, latest, challenges }) => {
  const { setModalIsOpen } = useContext(AuthContext);

  return (
    <div className="hidden md:flex w-full py-4 px-6 mx-auto mb-12 rounded-md border overflow-x-auto border-secondary2-500">
      <table className="table-auto w-full overflow-x-auto">
        <thead className=" border-b-2 ">
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className="text-left py-4 web-sub1 text-grey-500 dark:text-white"
              >
                {header}
              </th>
            ))}

            <th className="text-left py-4 web-sub1 text-grey-500 dark:text-white"></th>
          </tr>
        </thead>
        <tbody className="p-10">
          {latest
            ? latest.map((item) => (
                <tr>
                  <td className="py-4  web-p4 text-grey-500 dark:text-white">
                    {item.game}
                  </td>
                  <td className="py-4 web-p4 text-secondary2-500 italic">
                    {item.player1} vs {item.player2}
                  </td>
                  <td className="py-4  web-p4 text-grey-500 dark:text-white">
                    {item.date}
                  </td>
                  <td className="py-4  web-p4 text-grey-500 dark:text-white">
                    {item.condition}
                  </td>
                  <td className="py-4  web-p4 text-grey-500 dark:text-white">
                    {item.openBets}
                  </td>
                  <td className="py-4  web-p4 text-white">
                    <button
                      className="bg-secondary2-500 border-none rounded-full px-4 py-1"
                      onClick={() => setModalIsOpen(true)}
                    >
                      Bet
                    </button>
                  </td>
                </tr>
              ))
            : challenges
            ? challenges.map((item) => (
                <tr>
                  <td className="py-4  web-p4 text-grey-500 dark:text-white">
                    {item.game}
                  </td>
                  <td className="py-4 web-p4 text-secondary2-500 italic">
                    {item.player}
                  </td>
                  <td className="py-4  web-p4 text-grey-500 dark:text-white">
                    {item.stake}
                  </td>
                  <td className="py-4  web-p4 text-grey-500 dark:text-white">
                    {item.condition}
                  </td>
                  <td className="py-4  web-p4 text-grey-500 dark:text-white">
                    {item.completionRate}
                  </td>
                  <td className="py-4  web-p4 text-grey-500 dark:text-white">
                    {item.platform}
                  </td>
                  <td className="py-4  web-p4 text-white">
                    <button
                      className="bg-secondary2-500 border-none rounded-full px-4 py-1"
                      onClick={() => setModalIsOpen(true)}
                    >
                      Bet
                    </button>
                  </td>
                </tr>
              ))
            : ''}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
