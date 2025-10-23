import {Scene, System, SystemPriority, SystemType, World} from "excalibur";


/**
 * Removes sections no more visible from the scene.
 */
export class FreePastSectionSystem extends System {
    protected query: any;
    scene: Scene;
    public priority = SystemPriority.Lowest;
    public systemType = SystemType.Update;


    constructor(world: World) {
        super();
        this.query = world.queryTags(['section']);
        this.scene = world.scene;
    }


    public update(delta: number) {
        if (this.query && this.query.entities && this.query.entities.length > 0) {
            for (const section of this.query.entities) {
                if (section && section.pos.x + section.width < -50) {
                    this.scene.remove(section);
                }
            }
        }
    }
}