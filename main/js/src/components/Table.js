import React from 'react';

const Table = () => {
  return (
    <div className=" w-full py-4 px-6 mx-auto overflow-x-auto mb-12 rounded-md border border-secondary2-500">
      <table className="table-auto w-full">
        <thead className=" border-b-2 ">
          <tr>
            <th className="text-left py-4 web-sub1">Game</th>
            <th className="text-left py-4 web-sub1">Players</th>
            <th className="text-left py-4 web-sub1">Bet amount</th>
            <th className="text-left py-4 web-sub1">Multiplier</th>
            <th className="text-left py-4 web-sub1">Profit</th>
            <th className="text-left py-4 web-sub1"></th>
          </tr>
        </thead>
        <tbody className="p-10">
          <tr>
            <td className="py-4  web-p4">Call of duty</td>
            <td className="py-4 web-p4 text-secondary2-500 italic">@Gameboy</td>
            <td className="py-4  web-p4">$200</td>
            <td className="py-4  web-p4">2x</td>
            <td className="py-4  web-p4">$400</td>
            <td className="py-4  web-p4">
              {' '}
              <a href="/">bet</a>
            </td>
          </tr>
          <tr>
            <td className="py-4  web-p4">Call of duty</td>
            <td className="py-4 web-p4 text-secondary2-500 italic">@Gameboy</td>
            <td className="py-4  web-p4">$200</td>
            <td className="py-4  web-p4">2x</td>
            <td className="py-4  web-p4">$400</td>
            <td className="py-4  web-p4">
              {' '}
              <a href="/">bet</a>
            </td>
          </tr>
          <tr>
            <td className="py-4  web-p4">Call of duty</td>
            <td className="py-4 web-p4 text-secondary2-500 italic">@Gameboy</td>
            <td className="py-4  web-p4">$200</td>
            <td className="py-4  web-p4">2x</td>
            <td className="py-4  web-p4">$400</td>
            <td className="py-4  web-p4">
              {' '}
              <a href="/">bet</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
