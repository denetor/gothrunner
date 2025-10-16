import {Color, DisplayMode, Engine, FadeInOut, SolverStrategy, vec} from "excalibur";
import {loader} from "./resources";
import {MyLevel} from "./level";
import {GameConstants} from "@/game-constants";
import {RunScene} from "@/scenes/run.scene";

// Goal is to keep main.ts small and just enough to configure the engine

const game = new Engine({
    width: GameConstants.viewport.x, // Logical width and height in game pixels
    height: GameConstants.viewport.y,
    // displayMode: DisplayMode.FitScreenAndFill, // Display mode tells excalibur how to fill the window
    displayMode: DisplayMode.FitScreen,
    pixelArt: true, // pixelArt will turn on the correct settings to render pixel art without jaggies or shimmering artifacts
    antialiasing: false,
    suppressHiDPIScaling: true,
    suppressPlayButton: true,
    physics: {
        solver: SolverStrategy.Arcade,
        gravity: vec(0, 3),
    },
    // physics: {
    //   solver: SolverStrategy.Realistic,
    //   substep: 5 // Sub step the physics simulation for more robust simulations
    // },
    // fixedUpdateTimestep: 16 // Turn on fixed update timestep when consistent physic simulation is important
});


const scenes = {
    run: new RunScene(),
};
game.addScene('runScene', scenes.run);


game.start('start', { // name of the start scene 'start'
    loader, // Optional loader (but needed for loading images/sounds)
    inTransition: new FadeInOut({ // Optional in transition
        duration: 1000,
        direction: 'in',
        color: Color.ExcaliburBlue
    })
}).then(() => {
    // Do something after the game starts
    game.goToScene('runScene');
});
