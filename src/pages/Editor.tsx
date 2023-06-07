import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Logo from "../assets/icons/Logo icon.svg";
import { Pindicator, Timeline } from "../components";
import { useContext, useEffect, useState } from "react";
import {
  TimelineContext,
  TimelineContextType,
} from "../context/TimelineContext";

export function Editor() {
  const {
    value: { duration, currentPosition },
  } = useContext(TimelineContext) as TimelineContextType;

  const [position, setPosition] = useState(currentPosition);

  useEffect(() => {
    setPosition(currentPosition);
  }, [currentPosition]);

  return (
    <div>
      <div className="flex min-h-screen bg-cs-green-dark text-white">
        <div className="sidebar w-80 flex-shrink-0">
          <div className="placeholder bg-red-300"></div>
          <div className="content fixed inset-0 w-80 border-r border-r-cs-gray bg-cs-primary-green flex flex-col justify-between h-screen">
            <div className="header p-3 md:p-5">
              <Link to="/editor" className="flex items-center gap-2">
                <img src={Logo} alt="logo.svg" className="w-6 md:w-8" />
                <span className="logo-text text-lg md:text-2xl">
                  Timeline Editor
                </span>
              </Link>
            </div>

            <div className="media-library mt-5 h-72 overflow-hidden p-3 md:p-5 border-t">
              <div className="flex justify-between items-center mb-5">
                <h2>Media library</h2>

                <button className="flex gap-2 text-cs-gray hover:text-cs-gray-hover items-center text-sm">
                  Add <FaPlus />
                </button>
              </div>

              <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="main flex flex-col flex-1">
          <div className="p-5 text-5xl w-full grid text-cs-gray place-content-center mt-32">
            Media Player
          </div>

          <div className="grid relative timeline border-t border-cs-gray custom-scrollbar w-[calc(100vw-20rem)] bg-cs-primary-green max-w-full mt-auto overflow-x-scroll">
            <Pindicator />
            <Timeline durationInSecs={duration} />

            <div className="vid-dz h-20 border-b w-full border-cs-gray">
              Video
            </div>
            <div className="vid-dz h-20 border-b border-cs-gray">Video</div>
            <div className="vid-dz h-12 border-b border-cs-gray">Audio</div>
          </div>
        </div>
      </div>
    </div>
  );
}
