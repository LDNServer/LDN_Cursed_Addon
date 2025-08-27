import { Entity, Player, system, world } from "@minecraft/server";
import { random } from '../util';
import { getTopmostBlockLocation } from '../functions/max_y';
import { event14 } from "../script_event/spawn";

system.runInterval(() => {
    world.getPlayers().forEach((v, i, a) => {
        let nearerror64 = world.getDimension("minecraft:overworld").getEntities({ type: "ldns:error64", location: v.location, maxDistance: 8.6 });
        nearerror64.forEach((e, ei, ea) => {
            e.remove();
            event14(v);
        });
    });
}, 3);

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
                await system.waitTicks(20 * 3);
                if (e.damageSource.damagingEntity.getDynamicProperty("LposX") == undefined || e.damageSource.damagingEntity.getDynamicProperty("LposY") == undefined || e.damageSource.damagingEntity.getDynamicProperty("LposZ")) {
                    e.damageSource.damagingEntity.teleport({ x: 0, y: getTopmostBlockLocation(e.damageSource.damagingEntity.dimension, 0, 0), z: 0 });
                } else {
                    e.damageSource.damagingEntity.teleport({ x: e.damageSource.damagingEntity.getDynamicProperty("LposX"), y: e.damageSource.damagingEntity.getDynamicProperty("LposY"), z: e.damageSource.damagingEntity.getDynamicProperty("LposZ") });
                }
                container.setItem(i, null);
                if (e.damageSource.damagingEntity.getDynamicProperty("longfixTag") == true) {
                    e.damageSource.damagingEntity.setDynamicProperty("longfixTag", false);
                }
                if (e.damageSource.damagingEntity.getDynamicProperty("longfixTag2") == true) {
                    e.damageSource.damagingEntity.setDynamicProperty("longfixTag2", false);
                }
                e.hurtEntity.remove();
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
    let RX = 0;
    let RZ = 0;
    player.teleport({ x: RX, y: getTopmostBlockLocation(player.dimension, RX, RZ) + 2, z: RZ });
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