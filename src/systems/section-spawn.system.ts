import {Scene, System, SystemPriority, SystemType, vec, World} from "excalibur";
import {LevelSectionActor} from "@/actors/level-section.actor";
import {GameConstants} from "@/game-constants";
import {SectionFactoryService} from "@/services/section-factory.service";
import {EnemiesFactoryService} from "@/services/enemies-factory.service";


/**
 * System that spawns a new level section when the currently rightmost is about
 * to completely appear on the screen.
 */
export class SectionSpawnSystem extends System {
    protected query: any;
    scene: Scene;
    public priority = SystemPriority.Average;
    public systemType = SystemType.Update;


    constructor(world: World) {
        super();
        this.query = world.queryTags(['section']);
        this.scene = world.scene;
    }


    public update(delta: number) {
        let maxXPosition = 0;
        if (this.query && this.query.entities && this.query.entities.length > 0) {
            // find the rightmost existing section edge
            for (const section of this.query.entities) {
                if (section && section.pos.x) {
                    maxXPosition = section.pos.x + section.width;
                }
            }
        }

        // spawn new sections until covered entire screen (plus a buffer)
        while (maxXPosition < GameConstants.viewport.x + 128) {
            const newSection = SectionFactoryService.getSection();
            newSection.pos.x = maxXPosition;
            newSection.vel = vec(-GameConstants.baseScrollSpeed, 0);
            this.scene.add(newSection);
            maxXPosition = newSection.pos.x + newSection.width;

            // add npcs to the new section
            const npcs = EnemiesFactoryService.getRandomEnemies(newSection);
            if (npcs && npcs.length > 0) {
                for (const npc of npcs) {
                    this.scene.add(npc);
                }
            }
        }
    }

}
