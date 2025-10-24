import {LevelSectionActor} from "@/actors/level-section.actor";
import {FlatSectionActor} from "@/actors/sections/flat-section.actor";
import {HoleSectionActor} from "@/actors/sections/hole-section.actor";
import {StairsSectionActor} from "@/actors/sections/stairs-section.actor";
import {ObstacleSectionActor} from "@/actors/sections/obstacle-section.actor";
import {TwoLevelsSectionActor} from "@/actors/sections/two-levels-section.actor";
import {MazeSectionActor} from "@/actors/sections/maze-section.actor";

export class SectionFactoryService {


    /**
     * Generates and returns a section actor for a level based on randomized probability.
     *
     * @param {boolean} newStart - Determines if the section generation corresponds to a new start for the level.
     * @return {LevelSectionActor} A specific type of LevelSectionActor, chosen randomly from available section actors.
     */
    public static getSection(newStart: boolean): LevelSectionActor {
        if (newStart) {
            return new FlatSectionActor();
        }
        const r = Math.random();
        if ( r < 0.1) {
            return new HoleSectionActor();
        } else if ( r < 0.2) {
            return new StairsSectionActor();
        } else if ( r < 0.3) {
            return new ObstacleSectionActor();
        } else if ( r < 0.4) {
            return new TwoLevelsSectionActor();
        } else if ( r < 0.5) {
            return new MazeSectionActor();
        } else {
            return new FlatSectionActor();
        }

    }

}
