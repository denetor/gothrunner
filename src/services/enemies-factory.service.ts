import {SkeletonActor} from "@/actors/npcs/skeleton.actor";
import {LevelSectionActor} from "@/actors/level-section.actor";
import {NpcActor} from "@/actors/npcs/npc.actor";
import {vec} from "excalibur";

export class EnemiesFactoryService {


    /**
     * Generate an array of enemies to be added to a level section.
     * Temporarily it generates at most one enemy per section.
     *
     * @param levelSection
     */
    public static getRandomEnemies(levelSection: LevelSectionActor): NpcActor[] {
        const enemies = [];
        const r = Math.random();
        if (r < 0.5) {
            enemies.push(new SkeletonActor({
                pos: vec(
                    levelSection.pos.x + levelSection.width / 2,
                    levelSection.pos.y + levelSection.height / 2,
                    ),
            }));
        }
        return enemies;
    }
}
