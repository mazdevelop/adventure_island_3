import Entity from "./Entity.js";
import { loadHigginsSprites } from "./sprites.js";

export function createHiggins() {
    return loadHigginsSprites()
        .then(sprite => {
            const higgins = new Entity();

            higgins.draw = function drawHiggins(context) {
                sprite.draw('idle', context, this.pos.x, this.pos.y)
            }
            higgins.update = function updateHiggins(deltaTime) {
                this.pos.x += this.vel.x * deltaTime;
                this.pos.y += this.vel.y * deltaTime;
            }
            return higgins;
        })
}