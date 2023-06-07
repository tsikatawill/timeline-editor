import { createContext, useState } from "react";

export type TimelineValues = {
  duration: number;
  initialPosition: number;
  currentPosition: number;
  width: number;
};

export type TimelineContextType = {
  value: TimelineValues;
  updateTimeline: (value: TimelineValues) => void;
};

const defaultTimelineState: TimelineValues = {
  duration: 200,
  currentPosition: 0,
  initialPosition: 0,
  width: 1220,
};

export const TimelineContext = createContext<TimelineContextType | null>(null);

type ProviderProps = {
  children: React.ReactNode;
};

export const TimelineProvider: React.FC<ProviderProps> = ({ children }) => {
  const [timelineState, setTimelineState] =
    useState<TimelineValues>(defaultTimelineState);

  const updateTimeline = (value: TimelineValues) => {
    return;
  };

  return (
    <TimelineContext.Provider
      value={{
        value: timelineState,
        updateTimeline,
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
};

export const getTlWidth = (duration: number): number => {
  const width = Math.ceil(duration / 60) * 300 + Math.ceil(duration / 60) * 5;
  return width;
};
