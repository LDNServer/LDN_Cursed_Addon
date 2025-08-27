import { Dimension, Entity, Player, system, world } from "@minecraft/server";
/**
 * @param {Dimension} dimension 
 * @param {number} x
 * @param {number} z
 */
export function getTopmostBlockLocation(dimension, x, z) {
    let ground = world.getDimension(dimension.id).getBlockBelow({ x: x, y: 200, z: z }, { includeLiquidBlocks: false });
    return ground.location.y
}