const Queue = <T>(initialQueue: Array<T> = []) => {
    const queue = [...initialQueue];
    const initalIndex = 0;
    const finalIndex = queue.length;

    const peek = () => {
        return queue[queue.length -1]
    }

    const push = (item: T) => {
        queue.push(item)
    }

    const pop = () => {
       return queue.shift()
    }

    return {
        queue,
        peek,
        push,
        pop
    }

}

export { Queue };

