import { Entity, Player, system, world } from "@minecraft/server";
import { random } from '../util';
import { getTopmostBlockLocation } from '../functions/max_y';


world.afterEvents.entityHitEntity.subscribe((e) => {
    if (e.damagingEntity.typeId === "ldns:place") {
        if (!(e.hitEntity instanceof Player)) { return };
        place_event(e.damagingEntity, e.hitEntity);
    }
});
// Place(LongFix)が攻撃された時のイベント
world.afterEvents.entityHurt.subscribe(async (e) => {
    if (e.hurtEntity.typeId === "ldns:place") {
        if (!(e.damageSource.damagingEntity instanceof Player)) { return };
        // インベントリ獲得
        const { container } = e.damageSource.damagingEntity.getComponent("inventory");
        for (let i = 0; i < container.size; i++) {
            if (i == container.size - 1) {
                place_event(e.hurtEntity, e.damageSource.damagingEntity);
            }
            // アイテム獲得
            const item = container.getItem(i);
            if (!item) continue;
            // ペンダントの場合
            if (item.typeId === 'ldns:pendant_of_heat_sand') {
                e.damageSource.damagingEntity.runCommand("give @s minecraft:emerald 8");
                e.damageSource.damagingEntity.sendMessage("§0D§1o§2n§3'§4t §5r§6u§7n §8a§9w§aa§by§c.");
                let RX = e.damageSource.damagingEntity.getSpawnPoint().x;
                let RZ = e.damageSource.damagingEntity.getSpawnPoint().z;
                e.damageSource.damagingEntity.teleport({ x: RX, y: 120, z: RZ });
                await system.waitTicks(20 * 3);
                let maxY = getTopmostBlockLocation(e.damageSource.damagingEntity.dimension, RX, RZ);
                e.damageSource.damagingEntity.teleport({ x: RX, y: maxY + 2, z: RZ });
                container.setItem(i, null);
                break;
            }
        }
    }
});

/**
 * 
 * @param {Entity} entity 
 * @param {Player} player 
 */
async function place_event(entity, player) {
    if (!(player instanceof Player)) { return };
    let RX = random(-500, 500);
    let RZ = random(-500, 500);
    player.teleport({ x: RX, y: 120, z: RZ });
    await system.waitTicks(20 * 3);
    let maxY = getTopmostBlockLocation(player.dimension, RX, RZ);
    player.teleport({ x: RX, y: maxY + 2, z: RZ });
    await system.waitTicks(20);
    if (player.getDynamicProperty("longfixTag") == true) {
        player.setDynamicProperty("longfixTag", false);
    }
    if (player.getDynamicProperty("longfixTag2") == true) {
        player.setDynamicProperty("longfixTag2", false);
    }
    let kickcommand = player.runCommand("kick " + player.name + " §cI won't let you escape");
    if (kickcommand.successCount == 0) {
        player.kill();
    }
    entity.remove();
    player.playSound("ldns.publicvoid");
    player.playSound("ldns.binary444");
    player.playSound("ldns.herovoid");
}