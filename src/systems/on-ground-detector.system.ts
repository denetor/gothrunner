import {Query, System, SystemPriority, SystemType, World} from "excalibur";
import {OnGroundDetectorComponent} from "@/components/on-ground-detector.component";

export class OnGroundDetectorSystem extends System {
    query: Query<typeof OnGroundDetectorComponent>;
    public priority = SystemPriority.Average;
    public systemType = SystemType.Update;


    constructor(world: World) {
        super();
        this.query = world.query([OnGroundDetectorComponent]);
    }


    public update(delta: number) {
        for (let actor of this.query.entities) {
            // TODO if ground sensor detects a collision, set onGround to true, elsa to false
        }
    }

}
