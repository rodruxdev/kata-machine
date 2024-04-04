export default function two_crystal_balls(breaks: boolean[]): number {
    const jump = Math.floor(Math.sqrt(breaks.length));

    let i = 0;
    for (; i < breaks.length; i = i + jump) {
        if (breaks[i]) {
            break;
        }
    }
    for (let j: number = i - jump; j < breaks.length && j <= i; j++) {
        if (breaks[j]) {
            return j;
        }
    }
    return -1;
}
