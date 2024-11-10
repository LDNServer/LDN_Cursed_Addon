import { Entity,  system } from "@minecraft/server";
/**
 * @param {Entity} targetPlayer
 * @param {import("@minecraft/server").Vector3} playerlocation
 * @param {number} time
 */
export async function freeze(targetPlayer, playerlocation, time) {
    for (let i = 0; i < time; i++) {
        targetPlayer.teleport(playerlocation);
        await system.waitTicks(1);
    }
}