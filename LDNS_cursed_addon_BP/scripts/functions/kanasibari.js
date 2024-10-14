import { Entity,  system } from "@minecraft/server";
/**
 * @param {Entity} targetPlayer
 * @param {import("@minecraft/server").Vector3} playerlocation
 */
export async function freeze(targetPlayer, playerlocation) {
    for (let i = 0; i < 100; i++) {
        targetPlayer.teleport(playerlocation);
        await system.waitTicks(1);
    }
}