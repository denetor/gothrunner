import {NpcActor} from "@/actors/npcs/npc.actor";
import {CollisionType, Color, vec} from "excalibur";

export class SkeletonActor extends NpcActor {


    constructor(config?: any) {
        super({
            pos: config?.pos ?? vec(0, 0),
            color: config?.color ?? Color.White.darken(0.25),
        });
    }


}
