import { SecondIndicator } from "./SecondIndicator";

export const MinuteIndicator = () => {
  return (
    <div className="flex-shrink-0 flex items-center pr-[5px] border-purple-500 border-r-2 h-full">
      {Array.from(Array(60)).map((_sec, idx) => (
        <SecondIndicator key={idx} />
      ))}
    </div>
  );
};
