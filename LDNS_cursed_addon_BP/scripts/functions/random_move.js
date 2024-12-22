import { Entity, system } from "@minecraft/server";
import { random } from '../util';
/**
 * @param {Entity} targetPlayer
 * @param {import("@minecraft/server").Vector3} playerlocation
 * @param {number} time
 */
export async function random_move(targetPlayer, playerlocation, time) {
    for (let i = 0; i < time; i++) {
        targetPlayer.teleport({ x: playerlocation.x + random(-4, 4), y: playerlocation.y + random(0, 4), z: playerlocation.z + random(-4, 4) });
        await system.waitTicks(2);
    }
}