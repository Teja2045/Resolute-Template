import { FunctionComponent } from "react";

const HomeComponent: FunctionComponent = () => {
  return (
    <div className="relative bg-gray-100 w-full h-[821px] overflow-hidden text-left text-xl text-white font-inter">
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[821px] object-cover"
        alt=""
        src="/image-39@2x.png"
      />
      <div className="absolute top-[0px] left-[258px] w-[1182px] h-[821px] flex flex-col items-start justify-start p-10 box-border gap-[40px]">
        <div className="self-stretch flex flex-row items-center justify-between">
          <b className="self-stretch relative leading-[24px] flex items-center w-[94px] shrink-0">
            Overview
          </b>
          <div className="flex flex-row items-center justify-end gap-[24px] text-sm">
            <div className="self-stretch rounded-81xl box-border w-[200px] flex flex-col items-start justify-center py-1 px-4 border-[1px] border-solid border-white">
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="self-stretch w-[122.5px] flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="relative rounded-[50%] w-6 h-6 object-cover"
                    alt=""
                    src="/ellipse-2@2x.png"
                  />
                  <div className="self-stretch relative leading-[12px] flex items-center w-[77px] shrink-0">
                    All Network
                  </div>
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/expand-more-fill0-wght200-grad0-opsz24-1.svg"
                />
              </div>
            </div>
            <img
              className="relative w-10 h-10 overflow-hidden shrink-0"
              alt=""
              src="/logout-fill0-wght200-grad0-opsz24-1.svg"
            />
          </div>
        </div>
        <div className="w-[1102px] flex flex-col items-center justify-start text-right text-[16px]">
          <div className="self-stretch rounded-2xl bg-gray-300 flex flex-col items-end justify-start p-6">
            <div className="self-stretch h-16 flex flex-row items-center justify-between">
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative rounded-[50%] w-10 h-10 object-cover"
                  alt=""
                  src="/ellipse-20@2x.png"
                />
                <div className="relative tracking-[0.04em] leading-[12px]">
                  akash1y0hvu8ts6mnpc7yltgj8g56v
                </div>
                <img
                  className="relative w-[38px] h-[38px] overflow-hidden shrink-0"
                  alt=""
                  src="/content-copy-fill0-wght200-grad0-opsz24-3-1.svg"
                />
              </div>
              <div className="self-stretch w-[690px] flex flex-row items-center justify-end text-sm text-darkgray-100">
                <div className="h-[52px] flex flex-row items-center justify-end">
                  <div className="self-stretch flex flex-row items-center justify-center gap-[24px]">
                    <div className="self-stretch flex flex-col items-end justify-start gap-[16px]">
                      <div className="self-stretch flex flex-row items-start justify-end">
                        <div className="relative tracking-[0.02em] leading-[16px]">
                          Public Key
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-end gap-[8px] text-white">
                        <div className="relative tracking-[0.04em] leading-[40px] flex items-center w-[183px] h-6 shrink-0">
                          A548OhedNfWrFXPfe5...
                        </div>
                        <img
                          className="relative w-6 h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/content-copy-fill0-wght200-grad0-opsz24-3-11.svg"
                        />
                      </div>
                    </div>
                    <div className="relative bg-darkslategray-200 w-px h-[50px]" />
                    <div className="self-stretch flex flex-col items-end justify-start gap-[16px]">
                      <div className="self-stretch flex flex-row items-start justify-end">
                        <div className="relative tracking-[0.02em] leading-[16px]">
                          Account Number
                        </div>
                      </div>
                      <div className="self-stretch relative tracking-[0.04em] leading-[40px] text-white flex items-center h-6 shrink-0">
                        123648493
                      </div>
                    </div>
                    <div className="relative bg-darkslategray-200 w-px h-[50px]" />
                    <div className="self-stretch flex flex-col items-end justify-start gap-[16px]">
                      <div className="self-stretch flex flex-row items-start justify-end">
                        <div className="relative tracking-[0.02em] leading-[16px]">
                          Sequence
                        </div>
                      </div>
                      <div className="self-stretch relative tracking-[0.04em] leading-[40px] text-white flex items-center h-6 shrink-0">
                        00000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1102px] flex flex-col items-center justify-start">
          <div className="self-stretch rounded-2xl bg-gray-300 flex flex-col items-end justify-start p-6">
            <div className="self-stretch h-16 flex flex-row items-center justify-between">
              <div className="self-stretch flex flex-col items-start justify-center gap-[24px]">
                <b className="flex-1 relative tracking-[0.04em] leading-[12px] flex items-center w-[186px]">
                  Available Balance
                </b>
                <div className="flex-1 relative text-[28px] tracking-[0.04em] leading-[40px] font-semibold text-right flex items-center w-[94px]">
                  $ 0.43
                </div>
              </div>
              <div className="self-stretch w-[690px] flex flex-row items-center justify-end text-right text-sm">
                <div className="flex flex-row items-center justify-end">
                  <div className="self-stretch flex flex-row items-center justify-center gap-[24px]">
                    <div className="self-stretch flex flex-col items-end justify-start gap-[16px]">
                      <div className="self-stretch flex flex-row items-start justify-end">
                        <div className="relative tracking-[0.02em] leading-[16px]">
                          Staked balance
                        </div>
                      </div>
                      <div className="self-stretch relative tracking-[0.04em] leading-[40px] font-semibold flex items-center h-6 shrink-0">
                        $ 0.43
                      </div>
                    </div>
                    <div className="relative bg-gray-200 w-px h-[50px]" />
                    <div className="self-stretch flex flex-col items-end justify-start gap-[16px]">
                      <div className="self-stretch flex flex-row items-start justify-end">
                        <div className="relative tracking-[0.02em] leading-[16px]">
                          Rewards
                        </div>
                      </div>
                      <div className="self-stretch relative tracking-[0.04em] leading-[40px] font-semibold flex items-center h-6 shrink-0">
                        $ 0.43
                      </div>
                    </div>
                    <div className="relative bg-gray-200 w-px h-[50px]" />
                    <div className="self-stretch flex flex-col items-end justify-start gap-[16px]">
                      <div className="self-stretch flex flex-row items-start justify-end">
                        <div className="relative tracking-[0.02em] leading-[16px]">
                          Wallet Balance
                        </div>
                      </div>
                      <div className="self-stretch relative tracking-[0.04em] leading-[40px] font-semibold flex items-center h-6 shrink-0">
                        $ 0.43
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1102px] flex flex-col items-end justify-start gap-[24px]">
          <div className="self-stretch flex flex-row items-center justify-between">
            <b className="self-stretch relative leading-[24px] flex items-center w-44 shrink-0">
              Asset Information
            </b>
            <div className="rounded bg-white overflow-hidden flex flex-row items-start justify-start">
              <img
                className="relative w-8 h-8 overflow-hidden shrink-0"
                alt=""
                src="/reorder-fill0-wght200-grad0-opsz24-3.svg"
              />
              <img
                className="relative w-8 h-8 overflow-hidden shrink-0"
                alt=""
                src="/monitoring-fill0-wght200-grad0-opsz24-1-4.svg"
              />
            </div>
          </div>
          <div className="w-[1102px] flex flex-col items-start justify-start text-sm">
            <div className="self-stretch flex flex-row items-center justify-start gap-[40px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <div className="flex flex-col items-start justify-start gap-[16px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                    <div className="self-stretch h-[49px] flex flex-row items-start justify-between">
                      <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                        <img
                          className="relative w-[46px] h-[46px]"
                          alt=""
                          src="/group-15.svg"
                        />
                        <div className="self-stretch w-[189px] flex flex-col items-start justify-start gap-[8px]">
                          <div className="flex flex-row items-start justify-start gap-[4px]">
                            <b className="self-stretch relative leading-[14px] flex items-center w-[65px] shrink-0">
                              10 OSMO
                            </b>
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/content-copy-fill0-wght200-grad0-opsz24-3-11.svg"
                            />
                          </div>
                          <div className="h-[17px] flex flex-row items-start justify-start text-xs text-darkgray-100">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                              <div className="self-stretch relative leading-[14px] font-light flex items-center w-12 shrink-0">
                                Osmosis
                              </div>
                              <div className="relative bg-darkslategray-100 w-px h-[17px]" />
                              <div className="self-stretch relative leading-[14px] font-light flex items-center w-10 shrink-0">
                                Akash
                              </div>
                              <div className="relative bg-darkslategray-100 w-px h-[17px]" />
                              <div className="self-stretch relative leading-[14px] font-light flex items-center w-[42px] shrink-0">
                                Regen
                              </div>
                            </div>
                            <img
                              className="relative w-[17px] h-[17px] overflow-hidden shrink-0"
                              alt=""
                              src="/expand-more-fill0-wght200-grad0-opsz24-11.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-end py-2 px-0">
                        <div className="self-stretch flex flex-row items-center justify-start">
                          <b className="relative leading-[14px]">$ 1.20</b>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-end text-lightcoral">
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0"
                            alt=""
                            src="/arrow-drop-down-fill0-wght200-grad0-opsz24-1.svg"
                          />
                          <div className="relative leading-[14px] font-semibold ml-[-4px]">
                            3.5%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[624px] flex flex-col items-start justify-start">
                      <div className="self-stretch h-2 flex flex-col items-start justify-start relative gap-[10px]">
                        <div className="self-stretch flex-1 relative rounded-81xl bg-darkgray-300 z-[0]" />
                        <div className="absolute my-0 mx-[!important] top-[0px] left-[0px] rounded-tl-81xl rounded-tr-none rounded-br-none rounded-bl-81xl bg-orchid w-[400px] h-2 z-[1]" />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-10 flex flex-row items-start justify-between text-xs text-darkgray-100">
                    <div className="self-stretch flex-1 flex flex-row items-start justify-between">
                      <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[16px]">
                        <div className="self-stretch flex flex-row items-center justify-end py-2 px-0 gap-[4px]">
                          <div className="self-stretch flex flex-row items-center justify-start">
                            <div className="relative leading-[14px] font-extralight">
                              Stake Amount
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start text-sm text-white">
                            <b className="relative leading-[14px]">$ 1.20</b>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-end py-2 px-0 gap-[4px]">
                          <div className="self-stretch flex flex-row items-center justify-start">
                            <div className="relative leading-[14px] font-extralight">
                              Rewards
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start text-sm text-white">
                            <b className="relative leading-[14px]">$ 1.20</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[300px] flex flex-row items-start justify-end text-sm text-white">
                      <div className="w-[140px] flex flex-col items-start justify-start">
                        <div className="self-stretch rounded-81xl bg-dimgray flex flex-row items-center justify-center py-3.5 px-6 border-[1px] border-solid border-white">
                          <div className="relative leading-[12px]">View</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[16px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                    <div className="self-stretch h-[49px] flex flex-row items-start justify-between">
                      <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                        <img
                          className="relative w-[46px] h-[46px]"
                          alt=""
                          src="/group-16.svg"
                        />
                        <div className="self-stretch w-[189px] flex flex-col items-start justify-start gap-[8px]">
                          <div className="flex flex-row items-start justify-start gap-[4px]">
                            <b className="self-stretch relative leading-[14px] flex items-center w-[50px] shrink-0">
                              10 AKT
                            </b>
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/content-copy-fill0-wght200-grad0-opsz24-3-11.svg"
                            />
                          </div>
                          <div className="h-[17px] flex flex-row items-start justify-start text-xs text-darkgray-100">
                            <div className="self-stretch flex flex-row items-start justify-start">
                              <div className="self-stretch relative leading-[14px] font-light flex items-center w-10 shrink-0">
                                Akash
                              </div>
                            </div>
                            <img
                              className="relative w-[17px] h-[17px] overflow-hidden shrink-0"
                              alt=""
                              src="/expand-more-fill0-wght200-grad0-opsz24-12.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-end py-2 px-0">
                        <div className="self-stretch flex flex-row items-center justify-start">
                          <b className="relative leading-[14px]">$ 1.20</b>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-end text-lightcoral">
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0"
                            alt=""
                            src="/arrow-drop-down-fill0-wght200-grad0-opsz24-1.svg"
                          />
                          <div className="relative leading-[14px] font-semibold ml-[-4px]">
                            3.5%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[624px] flex flex-col items-start justify-start">
                      <div className="self-stretch h-2 flex flex-col items-start justify-start relative gap-[10px]">
                        <div className="self-stretch flex-1 relative rounded-81xl bg-darkgray-300 z-[0]" />
                        <div className="absolute my-0 mx-[!important] top-[0px] left-[0px] rounded-tl-81xl rounded-tr-none rounded-br-none rounded-bl-81xl bg-sandybrown w-[400px] h-2 z-[1]" />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-10 flex flex-row items-start justify-between text-xs text-darkgray-100">
                    <div className="self-stretch flex-1 flex flex-row items-start justify-between">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                        <div className="self-stretch flex flex-row items-center justify-end py-2 px-0 gap-[4px]">
                          <div className="self-stretch flex flex-row items-center justify-start">
                            <div className="relative leading-[14px] font-extralight">
                              Stake Amount
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start text-sm text-white">
                            <b className="relative leading-[14px]">$ 1.20</b>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-end py-2 px-0 gap-[4px]">
                          <div className="self-stretch flex flex-row items-center justify-start">
                            <div className="relative leading-[14px] font-extralight">
                              Rewards
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start text-sm text-white">
                            <b className="relative leading-[14px]">$ 1.20</b>
                          </div>
                        </div>
                      </div>
                      <div className="w-[300px] flex flex-row items-start justify-between text-sm text-white">
                        <div className="w-[140px] flex flex-col items-start justify-start">
                          <div className="self-stretch rounded-81xl bg-dimgray flex flex-row items-center justify-center py-3.5 px-6 border-[1px] border-solid border-white">
                            <div className="relative leading-[12px]">Claim</div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-81xl flex flex-row items-center justify-center py-3.5 px-6 border-[1px] border-solid border-white">
                            <div className="relative leading-[12px]">{`Claim & Stake`}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[16px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                    <div className="self-stretch h-[49px] flex flex-row items-start justify-between">
                      <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                        <img
                          className="relative w-[46px] h-[46px]"
                          alt=""
                          src="/group-151.svg"
                        />
                        <div className="self-stretch w-[189px] flex flex-col items-start justify-start gap-[8px]">
                          <div className="flex flex-row items-start justify-start gap-[4px]">
                            <b className="self-stretch relative leading-[14px] flex items-center w-[69px] shrink-0">
                              10 REGEN
                            </b>
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/content-copy-fill0-wght200-grad0-opsz24-3-11.svg"
                            />
                          </div>
                          <div className="h-[17px] flex flex-row items-start justify-start text-xs text-darkgray-100">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                              <div className="self-stretch relative leading-[14px] font-light flex items-center w-12 shrink-0">
                                Osmosis
                              </div>
                              <div className="relative bg-darkslategray-100 w-px h-[17px]" />
                              <div className="self-stretch relative leading-[14px] font-light flex items-center w-10 shrink-0">
                                Akash
                              </div>
                              <div className="relative bg-darkslategray-100 w-px h-[17px]" />
                              <div className="self-stretch relative leading-[14px] font-light flex items-center w-[42px] shrink-0">
                                Regen
                              </div>
                            </div>
                            <img
                              className="relative w-[17px] h-[17px] overflow-hidden shrink-0"
                              alt=""
                              src="/expand-more-fill0-wght200-grad0-opsz24-12.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-end py-2 px-0">
                        <div className="self-stretch flex flex-row items-center justify-start">
                          <b className="relative leading-[14px]">$ 1.20</b>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-end text-lightcoral">
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0"
                            alt=""
                            src="/arrow-drop-down-fill0-wght200-grad0-opsz24-1.svg"
                          />
                          <div className="relative leading-[14px] font-semibold ml-[-4px]">
                            3.5%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[624px] flex flex-col items-start justify-start">
                      <div className="self-stretch h-2 flex flex-col items-start justify-start relative gap-[10px]">
                        <div className="self-stretch flex-1 relative rounded-81xl bg-darkgray-300 z-[0]" />
                        <div className="absolute my-0 mx-[!important] top-[0px] left-[0px] rounded-tl-81xl rounded-tr-none rounded-br-none rounded-bl-81xl bg-darkseagreen w-[400px] h-2 z-[1]" />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-10 flex flex-row items-start justify-between text-xs text-darkgray-100">
                    <div className="self-stretch flex-1 flex flex-row items-start justify-between">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                        <div className="self-stretch flex flex-row items-center justify-end py-2 px-0 gap-[4px]">
                          <div className="self-stretch flex flex-row items-center justify-start">
                            <div className="relative leading-[14px] font-extralight">
                              Stake Amount
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start text-sm text-white">
                            <b className="relative leading-[14px]">$ 1.20</b>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-end py-2 px-0 gap-[4px]">
                          <div className="self-stretch flex flex-row items-center justify-start">
                            <div className="relative leading-[14px] font-extralight">
                              Rewards
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start text-sm text-white">
                            <b className="relative leading-[14px]">$ 1.20</b>
                          </div>
                        </div>
                      </div>
                      <div className="w-[300px] flex flex-row items-start justify-between text-sm text-white">
                        <div className="w-[140px] flex flex-col items-start justify-start">
                          <div className="self-stretch rounded-81xl flex flex-row items-center justify-center py-3.5 px-6 border-[1px] border-solid border-white">
                            <div className="relative leading-[12px]">
                              Deposit
                            </div>
                          </div>
                        </div>
                        <div className="w-[140px] flex flex-col items-start justify-start text-darkgray-200">
                          <div className="self-stretch rounded-81xl flex flex-row items-center justify-center py-3.5 px-6 border-[1px] border-solid border-darkgray-200">
                            <div className="relative leading-[12px]">
                              Withdraw
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[16px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                    <div className="self-stretch h-[49px] flex flex-row items-start justify-between">
                      <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                        <img
                          className="relative w-[46px] h-[46px]"
                          alt=""
                          src="/expand-more-fill0-wght200-grad0-opsz24-12.svg"
                        />
                        <div className="self-stretch w-[189px] flex flex-col items-start justify-start gap-[8px]">
                          <div className="flex flex-row items-start justify-start gap-[4px]">
                            <b className="self-stretch relative leading-[14px] flex items-center w-[78px] shrink-0">
                              10 ATOMS
                            </b>
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/expand-more-fill0-wght200-grad0-opsz24-12.svg"
                            />
                          </div>
                          <div className="h-[17px] flex flex-row items-start justify-start text-xs text-darkgray-100">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                              <div className="self-stretch relative leading-[14px] font-light flex items-center w-[74px] shrink-0">
                                Cosmos Hub
                              </div>
                              <img
                                className="relative w-px h-[17px]"
                                alt=""
                                src="/expand-more-fill0-wght200-grad0-opsz24-12.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-end py-2 px-0">
                        <div className="self-stretch flex flex-row items-center justify-start">
                          <b className="relative leading-[14px]">$ 1.20</b>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-end text-lightcoral">
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0"
                            alt=""
                            src="/expand-more-fill0-wght200-grad0-opsz24-12.svg"
                          />
                          <div className="relative leading-[14px] font-semibold ml-[-4px]">
                            3.5%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[624px] flex flex-col items-start justify-start">
                      <div className="self-stretch h-2 flex flex-col items-start justify-start relative gap-[10px]">
                        <div className="self-stretch flex-1 relative rounded-81xl bg-darkslategray-100 z-[0]" />
                        <div className="absolute my-0 mx-[!important] top-[0px] left-[0px] rounded-tl-81xl rounded-tr-none rounded-br-none rounded-bl-81xl bg-darkslateblue-100 w-[400px] h-2 z-[1]" />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-10 flex flex-row items-start justify-between text-xs text-darkgray-100">
                    <div className="self-stretch flex-1 flex flex-row items-start justify-between">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                        <div className="self-stretch flex flex-row items-center justify-end py-2 px-0 gap-[4px]">
                          <div className="self-stretch flex flex-row items-center justify-start">
                            <div className="relative leading-[14px] font-extralight">
                              Stake Amount
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start text-sm text-white">
                            <b className="relative leading-[14px]">$ 1.20</b>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-end py-2 px-0 gap-[4px]">
                          <div className="self-stretch flex flex-row items-center justify-start">
                            <div className="relative leading-[14px] font-extralight">
                              Rewards
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start text-sm text-white">
                            <b className="relative leading-[14px]">$ 1.20</b>
                          </div>
                        </div>
                      </div>
                      <div className="w-[300px] flex flex-row items-start justify-between text-sm text-white">
                        <div className="w-[140px] flex flex-col items-start justify-start">
                          <div className="self-stretch rounded-81xl bg-dimgray flex flex-row items-center justify-center py-3.5 px-6 border-[1px] border-solid border-mediumaquamarine">
                            <div className="relative leading-[12px]">Claim</div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-81xl flex flex-row items-center justify-center py-3.5 px-6 border-[1px] border-solid border-mediumaquamarine">
                            <div className="relative leading-[12px]">{`Claim & Stake`}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative bg-darkslategray-100 w-px h-[600px]" />
              <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[40px]">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[397px] shrink-0"
                  alt=""
                  src="/group-161.svg"
                />
                <div className="flex flex-row items-start justify-center gap-[40px]">
                  <div className="flex flex-row items-start justify-center">
                    <div className="flex flex-col items-center justify-start gap-[40px]">
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex flex-col items-center justify-start">
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-row items-start justify-start">
                              <div className="flex flex-row items-start justify-start">
                                <div className="flex flex-row items-start justify-start gap-[4px]">
                                  <div className="relative rounded bg-orchid w-6 h-6" />
                                  <b className="self-stretch relative leading-[14px] flex items-center w-[76px] shrink-0">
                                    10 OSMOS
                                  </b>
                                  <b className="self-stretch relative leading-[14px] flex items-center w-[31px] shrink-0">
                                    55%
                                  </b>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <div className="flex flex-row items-start justify-start">
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-row items-start justify-start gap-[4px]">
                              <div className="relative rounded bg-darkseagreen w-6 h-6" />
                              <b className="self-stretch relative leading-[14px] flex items-center w-[76px] shrink-0">
                                10 REGEN
                              </b>
                              <b className="self-stretch relative leading-[14px] flex items-center w-[31px] shrink-0">
                                05%
                              </b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[40px]">
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex flex-row items-start justify-start">
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-row items-start justify-start">
                              <div className="flex flex-row items-start justify-start gap-[4px]">
                                <div className="relative rounded bg-sandybrown w-6 h-6" />
                                <b className="self-stretch relative leading-[14px] flex items-center w-[76px] shrink-0">
                                  10 AKT
                                </b>
                                <b className="self-stretch relative leading-[14px] flex items-center w-[31px] shrink-0">
                                  35%
                                </b>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <div className="flex flex-row items-start justify-start">
                        <div className="flex flex-row items-start justify-start">
                          <div className="flex flex-row items-start justify-start gap-[4px]">
                            <div className="relative rounded bg-darkslateblue-200 w-6 h-6" />
                            <b className="self-stretch relative leading-[14px] flex items-center w-[76px] shrink-0">
                              10 ATOMS
                            </b>
                            <b className="self-stretch relative leading-[14px] flex items-center w-[31px] shrink-0">
                              05%
                            </b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180.13deg,_#1f102d,_rgba(98,_76,_82,_0))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[260px] h-[821px] flex flex-col items-center justify-start py-6 px-4 box-border text-sm">
        <div className="self-stretch flex-1 flex flex-col items-center justify-start">
          <div className="self-stretch flex-1 flex flex-col items-center justify-between">
            <div className="self-stretch h-[567px] flex flex-col items-center justify-start gap-[40px]">
              <div className="self-stretch h-[78px] flex flex-col items-start justify-center">
                <div className="self-stretch flex flex-col items-start justify-center p-1">
                  <img
                    className="relative w-[184px] h-[51.64px] object-cover"
                    alt=""
                    src="/image-25@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
                <div className="self-stretch rounded-81xl bg-darkgray-300 overflow-hidden flex flex-col items-start justify-start py-2 px-4">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/space-dashboard-fill0-wght200-grad0-opsz40-2.svg"
                    />
                    <div className="relative tracking-[0.04em] leading-[12px]">
                      Overview
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-81xl flex flex-col items-start justify-start py-2 px-4">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/token-fill0-wght200-grad0-opsz24-1.svg"
                    />
                    <div className="self-stretch relative tracking-[0.04em] leading-[12px] flex items-center w-[74px] shrink-0">
                      Transfers
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-81xl flex flex-col items-start justify-start py-2 px-4">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/account-balance-fill0-wght200-grad0-opsz24-1.svg"
                    />
                    <div className="self-stretch relative tracking-[0.04em] leading-[12px] flex items-center w-[95px] shrink-0">
                      Governance
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-81xl flex flex-col items-start justify-start py-2 px-4">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/electric-bolt-fill0-wght200-grad0-opsz24-1.svg"
                    />
                    <div className="self-stretch relative tracking-[0.04em] leading-[12px] flex items-center w-[59px] shrink-0">
                      Staking
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-81xl flex flex-col items-start justify-start py-2 px-4">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/description-fill0-wght200-grad0-opsz24-1.svg"
                    />
                    <div className="self-stretch relative tracking-[0.04em] leading-[12px] flex items-center w-[62px] shrink-0">
                      Multisig
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-81xl flex flex-col items-start justify-start py-2 px-4">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/verified-user-fill0-wght200-grad0-opsz24-1.svg"
                    />
                    <div className="self-stretch relative tracking-[0.04em] leading-[12px] flex items-center w-[46px] shrink-0">
                      Authz
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-81xl flex flex-col items-start justify-start py-2 px-4">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/bolt-fill0-wght200-grad0-opsz24-1.svg"
                    />
                    <div className="self-stretch relative tracking-[0.04em] leading-[12px] flex items-center w-[71px] shrink-0">
                      Feegrant
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-81xl flex flex-col items-start justify-start py-2 px-4">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/diversity-1-fill0-wght200-grad0-opsz24-1.svg"
                    />
                    <div className="self-stretch relative tracking-[0.04em] leading-[12px] flex items-center w-[57px] shrink-0">
                      Groups
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-end gap-[24px]">
              <div className="self-stretch relative bg-darkgray-300 h-px" />
              <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
                <div className="self-stretch rounded-81xl flex flex-row items-center justify-start py-2 px-4 gap-[8px]">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="self-stretch relative tracking-[0.04em] leading-[12px] flex items-center w-[86px] shrink-0">
                      Authz Mode
                    </div>
                  </div>
                  <div className="relative w-[54px] h-6 [transform:_rotate(180deg)] [transform-origin:0_0]">
                    <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start [transform:_rotate(180deg)] [transform-origin:0_0]">
                      <div className="relative w-[54px] h-6 z-[0]">
                        <div className="absolute top-[0px] left-[0px] rounded-81xl bg-darkgray-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] w-[54px] h-6" />
                      </div>
                      <div className="absolute my-0 mx-[!important] top-[0px] left-[0px] rounded-81xl bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-6 h-6 z-[1]" />
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-81xl flex flex-col items-start justify-start py-2 px-4">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="rounded-81xl bg-darkgray-300 w-[77px] h-8 flex flex-row items-start justify-start gap-[9px]">
                      <img
                        className="relative rounded-81xl w-10 h-10 overflow-hidden shrink-0"
                        alt=""
                        src="/dark-mode-fill0-wght200-grad0-opsz24-1.svg"
                      />
                      <img
                        className="relative rounded-81xl w-8 h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/light-mode-fill0-wght200-grad0-opsz24-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;