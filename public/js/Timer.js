export default class Timer {
    constructor(deltaTime = 1 / 60) {
        let accumulatedTime = 0;
        let LastTime = 0;

        this.updateProxy = (time) => {
            accumulatedTime += (time - LastTime) / 1000;
            while (accumulatedTime > deltaTime) {
                this.update(deltaTime);
                accumulatedTime -= deltaTime;
            }
            LastTime = time;
            this.enqueue();
        }
    }
    enqueue() {
        requestAnimationFrame(this.updateProxy);
    }
    start() {
        this.enqueue();
    }
}