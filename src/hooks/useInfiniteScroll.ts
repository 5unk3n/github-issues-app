import { useEffect, RefObject } from 'react';

const useInfiniteScroll = <T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void
): void => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        callback();
      }
    });

    const target = ref.current;
    if (!target) return;

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [ref, callback]);
};

export default useInfiniteScroll;
