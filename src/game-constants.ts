export const GameConstants = {
    viewport: {
        x: 640,
        y: 400,
    },
    screenCenter: {
        x: 320,
        y: 200,
    },
    baseScrollSpeed: 100,
    physics: {
        gravity: 512,
    },
    player: {
        jumpVelocity: 320,
        speedIncrements: 10,
    }
} as const;
