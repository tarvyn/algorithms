export function computeChange(coins: number[], amount: number): Map<number, number> {
    const selectedCoins = new Map<number, number>(coins.map(coin => [coin, 0]));
    const sortedCoins = coins.sort((prev, next) => next - prev);
    let currentAmount: number = 0;
    let currentCoinIndex = 0;

    while (currentCoinIndex < sortedCoins.length && currentAmount < amount) {
        const currentCoin = sortedCoins[currentCoinIndex];

        if (currentAmount + currentCoin <= amount) {
            currentAmount += currentCoin;
            selectedCoins.set(currentCoin, selectedCoins.get(currentCoin) as number + 1);
        } else {
            currentCoinIndex += 1;
        }
    }

    return selectedCoins;
}

export function computeChangeBruteForce(coins: number[], amount: number): Map<number, number> {
    const results: Map<number, number>[] = [];

    for (let i = 0; i < coins.length; i++) {
        results.push(computeChange(coins.slice(i), amount));
    }

    const coinsCountResults = results.map((map) => Array.from(map.values()).reduce((sum, value) => sum + value, 0));
    const bestCoinsCountResult = Math.min(...coinsCountResults);

    return results[coinsCountResults.indexOf(bestCoinsCountResult)]
}
