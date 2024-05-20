type QueueResult<T> = {
  queue: Array<T>;
  peek: () => T | undefined;
  push: (item: T) => void;
  pop: () => T | undefined;
};

export { QueueResult };
