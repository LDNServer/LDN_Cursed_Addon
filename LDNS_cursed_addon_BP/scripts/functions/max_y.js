import { Dimension, Entity, Player, system, world } from "@minecraft/server";
/**
 * @param {Dimension} dimension 
 * @param {number} x
 * @param {number} z
 */
export function getTopmostBlockLocation(dimension, x, z) {
    let y = 319;
    while (y >= -64) {
        if (!dimension.getBlock({ x, y, z }).matches("air")) {
            return y;
        }
        y--;
    }
    return 120;
}