import Image from "next/image";
import React from "react";

const ValidatorsTable = () => {
    
  return (
    <div>
      <table className="customTable overflow-y-scroll">
        <thead className="customTableHead">
          <tr className="text-left">
            <th>Rank</th>
            <th>Validator</th>
            <th>Voting Power</th>
            <th>Status</th>
            <th>Commission</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <tr key={index} className="">
              <td>01</td>
              <td className="flex gap-2">
                <div className="bg-[#3C3047] rounded-full h-[40px] w-[40px] flex justify-center items-center">
                  <Image
                    src="./osmosis-logo.svg"
                    height={31}
                    width={31}
                    alt="osmosis-logo"
                  />
                </div>
                <div className="my-auto">Polkachu</div>
              </td>
              <td>11,242,352,314</td>
              <td>
                <div className="flex items-center">
                  {item % 3 !== 0 ? (
                    <>
                      <span className="pl-2 pr-1">
                        <Image
                          className="inline"
                          src="./active-icon.svg"
                          width={16}
                          height={16}
                          alt="Price drop"
                        />
                      </span>
                      <span className="text-[#2DC5A4] text-[14px] leading-3">
                        Active
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="pl-2 pr-1">
                        <Image
                          className="inline"
                          src="./jailed-icon.svg"
                          width={16}
                          height={16}
                          alt="Price drop"
                        />
                      </span>
                      <span className="text-[#E57575] text-[14px] leading-3">
                        Jailed
                      </span>
                    </>
                  )}
                </div>
              </td>
              <td>
                20%
              </td>
              <td>
                <button className="customBtn">Claim</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ValidatorsTable;
