import {LevelSectionActor} from "@/actors/level-section.actor";
import {FlatSectionActor} from "@/actors/sections/flat-section.actor";
import {HoleSectionActor} from "@/actors/sections/hole-section.actor";
import {StairsSectionActor} from "@/actors/sections/stairs-section.actor";
import {ObstacleSectionActor} from "@/actors/sections/obstacle-section.actor";
import {TwoLevelsSectionActor} from "@/actors/sections/two-levels-section.actor";

export class SectionFactoryService {


    public static getSection(): LevelSectionActor {
        // return new FlatSectionActor();
        const r = Math.random();
        if ( r < 0.1) {
            return new HoleSectionActor();
        } else if ( r < 0.2) {
            return new StairsSectionActor();
        } else if ( r < 0.3) {
            return new ObstacleSectionActor();
        } else if ( r < 0.4) {
            return new TwoLevelsSectionActor();
        } else {
            return new FlatSectionActor();
        }

    }

}
