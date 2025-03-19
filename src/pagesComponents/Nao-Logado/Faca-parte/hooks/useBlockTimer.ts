import { useState, useEffect } from "react";
import { BLOCK_DURATION, BLOCK_TIMER_SECONDS } from "../constants";

export const useBlockTimer = () => {
  const [isBlocked, setIsBlocked] = useState(false);
  const [blockTimer, setBlockTimer] = useState(0);

  useEffect(() => {
    const blockedUntil = localStorage.getItem("joinTeamBlockedUntil");
    if (blockedUntil) {
      const timeLeft = parseInt(blockedUntil) - Date.now();
      if (timeLeft > 0) {
        setIsBlocked(true);
        setBlockTimer(Math.ceil(timeLeft / 1000));
      } else {
        localStorage.removeItem("joinTeamBlockedUntil");
      }
    }
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isBlocked && blockTimer > 0) {
      interval = setInterval(() => {
        setBlockTimer((prev) => {
          if (prev <= 1) {
            setIsBlocked(false);
            localStorage.removeItem("joinTeamBlockedUntil");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isBlocked, blockTimer]);

  const blockUser = () => {
    const blockedUntil = Date.now() + BLOCK_DURATION;
    localStorage.setItem("joinTeamBlockedUntil", blockedUntil.toString());
    setIsBlocked(true);
    setBlockTimer(BLOCK_TIMER_SECONDS);
  };

  return { isBlocked, blockTimer, blockUser };
};
