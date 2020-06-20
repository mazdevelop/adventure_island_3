import SpriteSheet from './SpriteSheet.js'
import { loadImage } from './loader.js'
const background = '/img/tiles.png';
const person = '/img/AdventureIsland2.gif';
export function loadBackgroundSprites() {
    return loadImage(background)
        .then(image => {
            const sprites = new SpriteSheet(image, 16, 16);
            sprites.defineTile('ground', 11, 8);
            sprites.defineTile('sky', 3, 23);
            return sprites;
        })
}

export function loadHigginsSprites() {
    return loadImage(person)
        .then(image => {
            const sprites = new SpriteSheet(image, 16, 30);
            sprites.define('idle', 114, 35, 16, 30);
            return sprites;
        })
}