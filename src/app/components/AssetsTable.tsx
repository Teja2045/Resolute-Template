import Image from "next/image";
import React from "react";

const AssetsTable = () => {
  return (
    <div>
      <table className="customTable overflow-y-scroll">
        <thead className="customTableHead">
          <tr className="text-left">
            <th>Network</th>
            <th>StakeAmount</th>
            <th>Rewards</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <tr>
              <td className="flex gap-2">
                <div className="bg-[#3C3047] rounded-full h-[54px] w-[54px] flex justify-center items-center">
                  <Image
                    src="./osmosis-logo.svg"
                    height={42}
                    width={42}
                    alt="osmosis-logo"
                  />
                </div>
                <div className="my-auto font-bold">1.23 OSMO</div>
              </td>
              <td>2 OSMO</td>
              <td>0.3 OSMO</td>
              <td>$ 3.2 - 31.5%</td>
              <td>
                <button className="customBtn">Claim</button>
                <button className="customBtn customBtnDisabled">
                  Claim & Stake
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetsTable;