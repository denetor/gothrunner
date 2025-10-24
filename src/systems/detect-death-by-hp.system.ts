import {Query, System, SystemPriority, SystemType, World} from "excalibur";
import {HpComponent} from "@/components/hp.component";
import {LivesComponent} from "@/components/lives.component";


/**
 * DetectDeathByHpSystem is a system that monitors entities with `HpComponent` and `LivesComponent`.
 * It reduces the number of lives when an entity's health points (HP) reach zero or below.
 * If the number of lives also drops to zero or below, it handles the entity's "death" by logging a message.
 *
 * This system is part of the update phase and runs with a lower priority.
 *
 * @extends System
 */
export class DetectDeathByHpSystem extends System {
    query: Query<typeof HpComponent | typeof LivesComponent>;
    public priority = SystemPriority.Lower;
    public systemType = SystemType.Update;


    constructor(world: World) {
        super();
        this.query = world.query([HpComponent, LivesComponent]);
    }


    public update(delta: number) {
        for (let actor of this.query.entities) {
            const hpComponent = actor.get(HpComponent);
            const livesComponent = actor.get(LivesComponent);
            if (hpComponent.hp <= 0) {
                livesComponent.lives--;
                console.log('Player dead: out of HPs!');
                if (livesComponent.lives <= 0) {
                    console.log('Game over: out of lives!');
                }
            }
        }
    }
}
