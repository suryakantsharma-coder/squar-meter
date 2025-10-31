import Image from 'next/image';

function Tabs({
  title,
  description,
  selected,
  progress,
  info,
}: {
  title: string;
  description: string;
  selected: string;
  progress: { s0: string; s1: string };
  info: string;
}) {
  return (
    <div className="w-[100%] min-h-[615px]  p-[40px] overflow-x-hidden">
      <div className="maxw-[672px]">
        <h2 className="font-[DM-Sans-Medium] text-[28px] leading-[32px] text-[#11111C]">{title}</h2>
        <p className="mt-[10px] font-[DM-Sans-light] text-[16px] leading-[21px] text-[#11111C]">
          {description}
        </p>
      </div>

      <div className="w-[100%] lg:flex justify-between items-center gap-[84px] mt-[40px]">
        <div className="w-[100%] lg:w-[50%] flex justify-center item-start  gap-[30px]">
          <Image
            src={progress.s0 || '/assets/feature/booking-tracker/s0.svg'}
            alt="feature tab"
            className="w-[50%] rounded-[10px] object-contain scale-y-108"
            width={202}
            height={411}
            style={{ height: 411 }}
          />
          <Image
            src={progress?.s1 || '/assets/feature/booking-tracker/s1.svg'}
            alt="feature tab"
            className="w-[50%] rounded-[10px]  object-contain scale-y-108"
            width={202}
            height={411}
            style={{ height: 411 }}
          />
        </div>
        <div className="w-[100%] h-[411px] lg:w-[80%] flex justify-end items-center gap-[30px]">
          <Image
            style={{ objectFit: 'none', height: 411 }}
            src={info || '/assets/feature/booking-tracker/s2.svg'}
            alt="feature tab"
            className="w-[100%]"
            width={642}
            height={411}
          />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
