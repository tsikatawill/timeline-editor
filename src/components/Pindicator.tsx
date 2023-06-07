import { useContext, useEffect, useState } from "react";
import IndicatorIcon from "../assets/icons/pin 2.svg";
import { motion, useTransform, useMotionValue } from "framer-motion";
import {
  TimelineContext,
  TimelineContextType,
  getTlWidth,
} from "../context/TimelineContext";

export const Pindicator = () => {
  const { value, updateTimeline } = useContext(
    TimelineContext
  ) as TimelineContextType;
  return (
    <>
      <motion.div
        drag="x"
        dragElastic={false}
        onDragStart={(event: MouseEvent) => {
          //   console.log(event.clientX);
          updateTimeline({ ...value, currentPosition: event.clientX });
        }}
        dragConstraints={{ left: 0, right: getTlWidth(value.duration) }}
        className="absolute top-0 left-0 h-60 z-10"
      >
        <img
          src={IndicatorIcon}
          alt="indicator.png"
          className="h-full pointer-events-none"
        />
      </motion.div>
    </>
  );
};
