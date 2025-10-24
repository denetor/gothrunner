import {Actor, CollisionType, Color, Engine, Ray, Shape, vec, Vector} from "excalibur";
import {KeybindingsService} from "@/services/keybindings.service";
import {Keybindings} from "@/enums/keybindings.enum";
import {XpComponent} from "@/components/xp.component";
import {PlayerLevelComponent} from "@/components/player-level.component";

export class PlayerActor extends Actor {
    onGround: boolean = false;



    constructor(config?: any) {
        super({
            ...config,
            collisionType: CollisionType.Active,
            width: 10,
            height: 10,
            color: Color.White,
            scale: vec(2.0, 2.0),
            weight: 80,
        });
    }



    onInitialize(engine: Engine) {
        super.onInitialize(engine);
        this.name = 'player';
        this.addTag('player');

        // components
        this.addComponent(new XpComponent());
        this.addComponent(new PlayerLevelComponent());

        // TODO add graphics
    }



    onPreUpdate(engine: Engine, elapsedMs: number) {
        super.onPreUpdate(engine, elapsedMs);

        // raycast to test if on ground
        const rayL = new Ray(vec(this.pos.x-4, this.pos.y), Vector.Down);
        const rayR = new Ray(vec(this.pos.x+4, this.pos.y), Vector.Down);
        const hitsL = engine.currentScene.physics.rayCast(rayL, {
            maxDistance: this.height,
        });
        const hitsR = engine.currentScene.physics.rayCast(rayR, {
            maxDistance: this.height,
        });
        const hits = ((hitsL && hitsL.length > 0) ? hitsL : []).concat((hitsR && hitsR.length > 0) ? hitsR : []);
        let hitGround = false;
        if (hits && hits.length > 0) {
            let i = 0;
            while (!hitGround && i < hits.length) {
                const hit = hits[i];
                if (hit && hit.collider && hit.collider.owner && hit.collider.owner.hasTag('walkable')) {
                    hitGround = true;
                }
                i++;
            }
        }
        this.onGround = hitGround;

        const keyboard = engine.input.keyboard;
        if (this.onGround && keyboard.isHeld(KeybindingsService.getKeyFor(Keybindings.PlayerRight))) {
            this.vel.x += 10;
        } else if (this.onGround && keyboard.isHeld(KeybindingsService.getKeyFor(Keybindings.PlayerLeft))) {
            this.vel.x -= 10;
        }
        if (this.onGround && keyboard.isHeld(KeybindingsService.getKeyFor(Keybindings.PlayerUp))) {
            this.vel.y = -100;
        } else if (keyboard.isHeld(KeybindingsService.getKeyFor(Keybindings.PlayerDown))) {
            // TODO duck and slide
        }

        // TODO add normal and special attacks
    }



}
