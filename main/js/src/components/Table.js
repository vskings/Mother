import React from 'react';

const Table = () => {
  return (
    <div className=" w-4/5 py-4 px-6 mx-auto overflow-x-auto mb-12 border border-secondary2-500">
      <table className="table-auto w-full">
        <thead className=" border-b-2 ">
          <tr>
            <th className="text-left py-4">Game</th>
            <th className="text-left py-4">Players</th>
            <th className="text-left py-4">Bet amount</th>
            <th className="text-left py-4">Multiplier</th>
            <th className="text-left py-4">Profit</th>
            <th className="text-left py-4"></th>
          </tr>
        </thead>
        <tbody className="p-10">
          <tr>
            <td className="py-4">Call of duty</td>
            <td className="py-4">@Gameboy</td>
            <td className="py-4">$200</td>
            <td className="py-4">2x</td>
            <td className="py-4">$400</td>
            <td className="py-4">
              {' '}
              <a href="/">bet</a>
            </td>
          </tr>
          <tr>
            <td className="py-4">Call of duty</td>
            <td className="py-4">@Gameboy</td>
            <td className="py-4">$200</td>
            <td className="py-4">2x</td>
            <td className="py-4">$400</td>
            <td className="py-4">
              {' '}
              <a href="/">bet</a>
            </td>
          </tr>
          <tr>
            <td className="py-4">Call of duty</td>
            <td className="py-4">@Gameboy</td>
            <td className="py-4">$200</td>
            <td className="py-4">2x</td>
            <td className="py-4">$400</td>
            <td className="py-4">
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
