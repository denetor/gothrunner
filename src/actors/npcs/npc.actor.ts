import {Actor, CollisionType, Color, Engine, vec} from "excalibur";
import {HpComponent} from "@/components/hp.component";
import {LivesComponent} from "@/components/lives.component";

export class NpcActor extends Actor {


    constructor(config?: any) {
        super({
            ...config,
            collisionType: config?.collisionType ?? CollisionType.Active,
            width: config?.width ?? 10,
            height: config?.height ?? 10,
            color: config?.color ?? Color.White,
            scale: config?.scale ?? vec(2.0, 2.0),
            weight: config?.weight ?? 80,
        });
    }


    onInitialize(engine: Engine, options?: any) {
        super.onInitialize(engine);
        this.name = options?.name ?? 'npc';
        this.addTag('creature');
        this.addTag('npc');

        this.addComponent(new HpComponent(options?.hp ?? 20));
        this.addComponent(new LivesComponent(options?.lives ?? 1));
    }
}
