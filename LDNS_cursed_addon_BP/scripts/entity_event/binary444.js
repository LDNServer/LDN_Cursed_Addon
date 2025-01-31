import { Entity, MinecraftDimensionTypes, Player, world } from "@minecraft/server";
import { random } from '../util';


world.afterEvents.entityHitEntity.subscribe((e) => {
    if (e.damagingEntity.typeId === "ldns:binary444") {
        if (!(e.hitEntity instanceof Player)) { return };
        binary444_event(e.damagingEntity, e.hitEntity);
    }
});
// PublicVoidが攻撃された時のイベント
world.afterEvents.entityHurt.subscribe((e) => {
    if (e.hurtEntity.typeId === "ldns:binary444") {
        if (!(e.damageSource.damagingEntity instanceof Player)) { return };
        binary444_event(e.hurtEntity, e.damageSource.damagingEntity);
    }
});

/**
 * 
 * @param {Entity} entity 
 * @param {Player} player 
 */
function binary444_event(entity, player) {
    if (!(player instanceof Player)) { return };
    switch (random(0, 48)) {
        case 0:
            let netherdimension = world.getDimension(MinecraftDimensionTypes.nether);
            let randomXn = random(player.location.x - 500, player.location.x + 500);
            let randomZn = random(player.location.z - 500, player.location.z + 500);
            let ranodmYn = random(60, 100);
            player.teleport({ x: randomXn, y: ranodmYn, z: randomZn }, { dimension: netherdimension });
            break;
    }
}