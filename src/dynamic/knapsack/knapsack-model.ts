export interface KnapsackItem {
    name: string;
    value: number;
    weight: number;
}

export interface Knapsack {
    items: KnapsackItem[];
    value: number;
    weight: number;
}
