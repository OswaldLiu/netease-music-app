export function throtDebounce(func, delay,interval) {
    //节流优化的防抖
    //delay是第一次动作的延时
    //interval是防抖间隙
    let last = 0;
    let timer = null;

    return function (...args) {
        let context = this;
        let now = +new Date();

        if (last === 0) {
            //第一次
            last = now;
        }
        if (now - last>=delay) {
            console.log()
            last = now;
            func.apply(context, args);
        }
        else {
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(context, args), interval);
        }
    }
}