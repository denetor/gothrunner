import {Actor, CollisionType, Color, Engine} from "excalibur";
import {KeybindingsService} from "@/services/keybindings.service";
import {Keybindings} from "@/enums/keybindings.enum";
import {XpComponent} from "@/components/xp.component";
import {PlayerLevelComponent} from "@/components/player-level.component";

export class PlayerActor extends Actor {



    constructor(config?: any) {
        super({
            ...config,
            collisionType: CollisionType.Active,
            width: 10,
            height: 10,
            color: Color.White,
        });
    }



    onInitialize(engine: Engine) {
        super.onInitialize(engine);
        this.name = 'player';
        this.addTag('player');

        // components
        this.addComponent(new XpComponent());
        this.addComponent(new PlayerLevelComponent());

        // TODO add colliders
        // TODO add graphics
    }



    onPreUpdate(engine: Engine, elapsedMs: number) {
        super.onPreUpdate(engine, elapsedMs);

        // TODO add movement management
        const keyboard = engine.input.keyboard;
        if (keyboard.isHeld(KeybindingsService.getKeyFor(Keybindings.PlayerRight))) {

        } else if (keyboard.isHeld(KeybindingsService.getKeyFor(Keybindings.PlayerLeft))) {

        }
        if (keyboard.isHeld(KeybindingsService.getKeyFor(Keybindings.PlayerUp))) {

        } else if (keyboard.isHeld(KeybindingsService.getKeyFor(Keybindings.PlayerDown))) {

        }
    }



}
