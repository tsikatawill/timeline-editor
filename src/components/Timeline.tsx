import { MinuteIndicator } from "../components";

type TimelineProps = {
  durationInSecs: number;
};

export const Timeline: React.FC<TimelineProps> = ({ durationInSecs }) => {
  const divisions = Math.ceil(durationInSecs / 60);

  return (
    <div className="sticky top-0 border-b flex items-center border-cs-gray h-10 bg-cs-primary-green">
      {Array.from(Array(divisions)).map((_item, idx) => (
        <MinuteIndicator key={idx} />
      ))}
    </div>
  );
};
