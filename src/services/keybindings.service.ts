import {Keybindings} from "@/enums/keybindings.enum";
import {Keys} from "excalibur";

export class KeybindingsService {


    /**
     * Retrieves the key binding associated with the specified action.
     *
     * @param {string} action - The name of the action for which to retrieve the key binding.
     * @return {Keys|null} The key binding corresponding to the action, or null if the action is not recognized.
     */
    public static getKeyFor(action: Keybindings): Keys {
        switch (action) {
            case Keybindings.PlayerUp:
                return Keys.ArrowUp;
            case Keybindings.PlayerDown:
                return Keys.ArrowDown;
            case Keybindings.PlayerLeft:
                return Keys.ArrowLeft;
            case Keybindings.PlayerRight:
                return Keys.ArrowRight;
            case Keybindings.PrimaryAction:
                return Keys.A;
            case Keybindings.SecondaryAction:
                return Keys.Z;
            default:
                return undefined as any as Keys;
        }
    }
}
