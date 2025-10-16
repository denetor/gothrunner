export class LevelThresholdService {
    protected thresholds: Map<number, number>;


    constructor() {
        // initialize threshold values for each level
        this.thresholds = new Map<number, number>();
        const baseXp = 100;
        const multiplier = 1.61;
        this.thresholds.set(1, baseXp);
        for (let i = 2; i <= 10; i++) {
            this.thresholds.set(i, Math.trunc(this.thresholds.get(i-1) * multiplier));
        }
        // 100, 161, 259, 416, 669, 1077, 1733, 2790, 4491, 7230
    }


    /**
     * Determines if a level-up has occurred based on the provided experience points.
     *
     * @param {number} level - The new level of the entity.
     * @param {number} previousXp - The experience points before the latest update.
     * @param {number} currentXp - The experience points after the latest update.
     * @return {boolean} Returns true if a level-up has occurred, otherwise false.
     */
    public isLevelUp(level: number, previousXp: number, currentXp: number): boolean {
        const levelThreshold = this.thresholds.get(level);
        return levelThreshold && previousXp < levelThreshold && currentXp >= levelThreshold;
    }


}
