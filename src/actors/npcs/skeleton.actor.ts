import {NpcActor} from "@/actors/npcs/npc.actor";
import {CollisionType, Color, Engine, vec} from "excalibur";

export class SkeletonActor extends NpcActor {


    constructor(config?: any) {
        super({
            pos: config?.pos ?? vec(0, 0),
            color: config?.color ?? Color.White.darken(0.25),
        });
    }


    onInitialize(engine: Engine, options?: any) {
        super.onInitialize(engine, {
            name: 'skeleton',
            hp: 50,
        });
    }


}
