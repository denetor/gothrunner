# Goth Runner

## Run
```shell
nvm use 24
npm run start
```

## Design concept ideas
- Side running, frenetic action, with unstoppable scrolling
- Infinite self-generating level
- Game becomes progressively more difficult: more enemies, more obstacles, new scenery background
- Big pixels and low-color graphics (idea is a sort of ASCII quality, 
  with white, black, grey and at most one or two trim colors)
- Main character mostly single color, with as low pixels as possible
 

### Tech ideas
- Player can use melee attack or ranged attack as unique weapon
- Advancing and killing enemies give XP
- XP unlock better powerups randomly placed
- Level is formed by sections, with different lengths (multiple of the minimum section length)
- Each section is random generated based on player level
- Each section has a budget difficulty points called DP
- Part of section DPs is used to "buy" section parts, choosen from a pool and depending on the player level
- Remaining DPs are used to "buy" random enemies, choosen from a pool and depending on player level 
- Each level-up gives a special power, that replaces previous special power
