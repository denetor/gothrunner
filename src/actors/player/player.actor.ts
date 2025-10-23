import {Actor, CollisionType, Color, Engine, Shape, vec} from "excalibur";
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

        // child actor to detect when actor is on ground
        const groundSensor = new Actor({
            width: 10,
            height: 2,
            pos: vec(0, 5),
            collisionType: CollisionType.Passive,
            color: Color.fromRGB(255, 255, 0, 0.5),
        });
        groundSensor.on('collisionstart', (ev) => {
            console.log(ev.other.owner.tags);
            if (ev?.other?.owner?.tags && ev.other.owner.tags.has('walkable')) {
                console.log('on ground');
                this.onGround = true;
            }
        });
        groundSensor.on('collisionend', (ev) => {
            if (ev?.other?.owner?.tags && ev.other.owner.tags.has('walkable')) {
                console.log('off ground');
                this.onGround = false;
            }
        });
        this.addChild(groundSensor);

        // TODO add graphics
    }



    onPreUpdate(engine: Engine, elapsedMs: number) {
        super.onPreUpdate(engine, elapsedMs);

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

        // TODO ass normal and special attacks
    }



}
