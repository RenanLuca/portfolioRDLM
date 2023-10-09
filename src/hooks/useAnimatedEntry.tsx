import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring } from "react-spring";


export function useAnimatedEntry() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const slideIn = useSpring({
    transform: inView ? "translatex(0%)" : "translateX(-150%)",
  });

  useEffect(() => {

  }, [inView]);

  return { ref, slideIn };
}