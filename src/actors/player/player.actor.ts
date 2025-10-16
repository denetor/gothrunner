import {Actor, CollisionType, Color, Engine} from "excalibur";
import {KeybindingsService} from "@/services/keybindings.service";
import {Keybindings} from "@/enums/keybindings.enum";

export class PlayerActor extends Actor {
    // TODO add constant parameters



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
        // TODO add components
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
