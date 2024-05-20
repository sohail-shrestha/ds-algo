import { QueueResult } from "./types";

const Queue: <T>(initialQueue?: Array<T>) => QueueResult<T> = <T>(
  initialQueue: Array<T> = [],
) => {
  const queue = [...initialQueue];

  const peek = (): T | undefined => {
    return queue[queue.length - 1];
  };

  const push = (item: T): void => {
    queue.push(item);
  };

  const pop = (): T | undefined => {
    return queue.shift();
  };

  return {
    queue,
    peek,
    push,
    pop,
  };
};

export { Queue };
