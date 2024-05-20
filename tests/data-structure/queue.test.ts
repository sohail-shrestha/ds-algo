import { Queue } from "data-structure/queue";

describe("Unit Tests for Peek in Queue", () => {
  describe("test empty queue", () => {
    const queue = Queue<number>([]);

    test("Peek", () => {
      expect(queue.peek()).toEqual(undefined);
    });
  });

  describe("peek non empty queue", () => {
    test("Input: [2,3,3,4]", () => {
      const queue = Queue<number>([2, 3, 3, 4]);
      expect(queue.peek()).toEqual(4);
    });

    test("Input: [1]", () => {
      const queue = Queue<number>([1]);
      expect(queue.peek()).toEqual(1);
    });

    test("Input: [1,2]", () => {
      const queue = Queue<number>([1, 2]);
      expect(queue.peek()).toEqual(2);
    });
  });

  describe("Push Items", () => {
    test("Pushing to empty queue", () => {
      const queue = Queue<number>();
      queue.push(1);
      expect(queue.peek()).toBe(1);
    });

    test("Pushing to empty queue", () => {
      const queue = Queue<number>();
      queue.push(1);
      queue.push(2);
      expect(queue.peek()).toBe(2);
    });

    test("Push array list", () => {
      const queue = Queue<number>();
      queue.push(1);
      queue.push(2);
      expect(queue.queue).toEqual([1, 2]);
    });
  });

  describe("Pop items in queue", () => {
    test("pop items in queue", () => {
      const queue = Queue<number>([1, 2, 3]);
      expect(queue.pop()).toEqual(1);
    });

    test("pop items in queue", () => {
      const queue = Queue<number>([1, 2, 3]);

      queue.pop();
      queue.pop();
      queue.pop();
      queue.pop();
      queue.pop();
      expect(queue.pop()).toEqual(undefined);
    });

    test("pop items in empty queue", () => {
      const queue = Queue<number>();
      expect(queue.pop()).toEqual(undefined);
    });
  });
});
