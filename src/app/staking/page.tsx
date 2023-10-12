import React from "react";
import Image from "next/image";
const page = () => {
  const networksData = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="page">
      <div className="staking-grid">
        {networksData.map((index: number, id: number) => (
          <div
            className="staking-grid-card"
            key={id}
          >
            <div className="space-y-10 w-full">
              <div className="flex justify-between w-full">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/validator.png"
                    width={32}
                    height={32}
                    alt="validator.."
                  ></Image>
                  <div className="staking-card-title">Stakefish</div>
                </div>
                <Image
                  src="/network.png"
                  width={32}
                  height={32}
                  alt="validator.."
                ></Image>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="flex justify-between">
                  <div>
                    <div>Staked Amount</div>
                    <div>$2.30</div>
                  </div>
                  <div>
                    <div>Rewards</div>
                    <div>2 AKT</div>
                  </div>
                </div>
                <div>
                  <div>Commission</div>
                  <div>30%</div>
                </div>
              </div>
              <div className="flex justify-between">
                <button>s</button>
                <button>s</button>
                <div> a</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
