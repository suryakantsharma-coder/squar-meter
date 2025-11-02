function WhitelistPage() {
  return (
    <div className="w-[100%] h-[100vh] lg:h-[auto] relative overflow-hidden">
      <img src="/assets/whitelist/boxes.svg" className="w-[100%]" alt="boxes" />
      <img
        src="/assets/whitelist/buildings.svg"
        className="w-[100%] absolute bottom-0"
        alt="buildings"
      />

      <div className="w-[100%] h-[100vh] absolute top-0 left-0 flex justify-center items-start mt-[107px] 2xl:mt-[8%] px-[16px]">
        <div className="w-[100%] lg:w-[741px] flex-cols justify-center items-center bg-[rgba(255,255,255,0.4)] ">
          <div className="w-[100%] flex justify-center items-center">
            <img src="/assets/whitelist/logo.svg" alt="logo" className="h-[30px] lg:h-[auto]" />
          </div>
          <h1 className="w-[100%] font-[Forum] text-[35px] lg:text-[60px] leading-[40px] lg:leading-[65px] text-center mt-[40px] lg:mt-[70px] text-[#11111C]">
            Join Our Waitlist for Smarter Real Estate Management
          </h1>
          <p className="font-[DM Sans] text-[14px] lg:text-[16px] leading-[25px] text-center text-[rgba(17,17,28,0.52)] lg:text-[#11111C] mt-[10px]">
            Get early access to Zameen.app and stay ahead with AI-driven insights and automation.
          </p>

          <div className="w-[100%] flex flex-col lg:flex-row justify-center items-center mt-[34px] gap-[15px]">
            <input className="px-[15px] py-[10px] w-[100%] lg:w-[435px] border-[1px] border-[rgba(17,17,28,0.12)] text-[#11111C]" />
            <button className="w-[100%] lg:w-[auto] px-[53.2px] py-[13.5px] bg-[#11111C] rounded-[5px] font-[DM Sans] text-[16px] leading-[145%] text-center">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhitelistPage;
