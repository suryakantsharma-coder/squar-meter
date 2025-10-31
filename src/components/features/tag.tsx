function Tags({ bgColor, text }: { bgColor: string; text: string }) {
  return (
    <div
      className="flex justify-center items-center px-[23.5px] py-[5px] rounded-[5px]"
      style={{ backgroundColor: bgColor }}
    >
      <p className="font-[DM-Sans-light] text-[12px] lg:text-[14px] leading-[25px] text-[#000000]">
        {text}
      </p>
    </div>
  );
}

export default Tags;
