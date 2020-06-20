import Compositor from './Compositor.js'
import { loadLevel } from './loader.js'
import { loadBackgroundSprites } from './sprites.js'
import { createBackgroundLayer, createHigginsLayer } from './layers.js'
import { createHiggins } from './entities.js'
import Timer from './Timer.js'

const canvas = document.getElementById('screen')
const context = canvas.getContext('2d')





Promise.all([
    createHiggins(),
    loadBackgroundSprites(),
    loadLevel('1-1')
])
    .then(([higgins, sprites, level]) => {
        const comp = new Compositor();
        const backgroundLayer = createBackgroundLayer(level.backgrounds, sprites);
        comp.layers.push(backgroundLayer);
        const gravity = 30;
        higgins.pos.set(64, 180);
        higgins.vel.set(200, -600);

        const spriteLayer = createHigginsLayer(higgins);
        comp.layers.push(spriteLayer);

        const timer = new Timer(1 / 60);
        timer.update = function update(deltaTime) {
            comp.draw(context);
            higgins.update(deltaTime);
            higgins.vel.y += gravity;
        }
        timer.start();
    })

