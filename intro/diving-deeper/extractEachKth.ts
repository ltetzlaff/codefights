function extractEachKth(a: number[], k: number): number[] {
    return a.filter((e, i) => i % k !== k - 1)
}