import {FlatSectionActor} from "@/actors/sections/flat-section.actor";
import {Actor, CollisionType, Color, Engine, vec} from "excalibur";
import {GameConstants} from "@/game-constants";
import {LevelSectionActor} from "@/actors/level-section.actor";



/**
 * Mini maze section
 * xxxxxxxxxxxxx
 * x           x
 * x           x
 * x  xxxx  xxxx
 * x     x
 * x     x
 * xxx   x  xxxx
 *       x     x
 *       x     x
 * =============
 */
export class MazeSectionActor extends LevelSectionActor {


    constructor() {
        super({
            width: 260,
            height: GameConstants.viewport.y,
            anchor: vec(0,0),
            color: Color.Transparent,
        });
    }


    onInitialize(engine: Engine) {
        super.onInitialize(engine);

        // horizontal segments
        const floor = new Actor({
            width: 260,
            height: 20,
            anchor: vec(0, 0),
            pos: vec(0, this.height * 0.75 - 20),
            collisionType: CollisionType.Fixed,
            color: Color.White,
        });
        floor.addTag('walkable');
        this.addChild(floor);
        const top = new Actor({
            width: 260,
            height: 20,
            anchor: vec(0, 0),
            pos: vec(0, this.height * 0.75 - 10 * 20),
            collisionType: CollisionType.Fixed,
            color: Color.White,
        });
        top.addTag('walkable');
        this.addChild(top);
        const firstFloorL = new Actor({
            width: 60,
            height: 20,
            anchor: vec(0, 0),
            pos: vec(0, this.height * 0.75 - 4 * 20),
            collisionType: CollisionType.Fixed,
            color: Color.White,
        });
        firstFloorL.addTag('walkable');
        this.addChild(firstFloorL);
        const firstFloorR = new Actor({
            width: 80,
            height: 20,
            anchor: vec(0, 0),
            pos: vec(9 * 20, this.height * 0.75 - 4 * 20),
            collisionType: CollisionType.Fixed,
            color: Color.White,
        });
        firstFloorR.addTag('walkable');
        this.addChild(firstFloorR);
        const secondFloorL = new Actor({
            width: 80,
            height: 20,
            anchor: vec(0, 0),
            pos: vec(3 * 20, this.height * 0.75 - 7 * 20),
            collisionType: CollisionType.Fixed,
            color: Color.White,
        });
        secondFloorL.addTag('walkable');
        this.addChild(secondFloorL);
        const secondFloorR = new Actor({
            width: 80,
            height: 20,
            anchor: vec(0, 0),
            pos: vec(9 * 20, this.height * 0.75 - 7 * 20),
            collisionType: CollisionType.Fixed,
            color: Color.White,
        });
        secondFloorR.addTag('walkable');
        this.addChild(secondFloorR);

        // vertical segments
        const left = new Actor({
            width: 20,
            height: 5 * 20,
            anchor: vec(0, 0),
            pos: vec(0, this.height * 0.75 - 9 * 20),
            collisionType: CollisionType.Fixed,
            color: Color.White,
        });
        left.addTag('walkable');
        this.addChild(left);
        const center = new Actor({
            width: 20,
            height: 5 * 20,
            anchor: vec(0, 0),
            pos: vec(6 * 20, this.height * 0.75 - 6 * 20),
            collisionType: CollisionType.Fixed,
            color: Color.White,
        });
        center.addTag('walkable');
        this.addChild(center);
        const rightB = new Actor({
            width: 20,
            height: 2 * 20,
            anchor: vec(0, 0),
            pos: vec(12 * 20, this.height * 0.75 - 3 * 20),
            collisionType: CollisionType.Fixed,
            color: Color.White,
        });
        rightB.addTag('walkable');
        this.addChild(rightB);
        const rightT = new Actor({
            width: 20,
            height: 2 * 20,
            anchor: vec(0, 0),
            pos: vec(12 * 20, this.height * 0.75 - 9 * 20),
            collisionType: CollisionType.Fixed,
            color: Color.White,
        });
        rightT.addTag('walkable');
        this.addChild(rightT);
    }
}
