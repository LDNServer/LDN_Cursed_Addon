import { Entity, ItemStack, Player, system, world } from "@minecraft/server";
import { random } from "../util";

const timezoneOffset = 0;

// 影のものが倒された時のイベント
world.afterEvents.entityDie.subscribe((edae) => {
    const { damageSource, deadEntity } = edae;
    if (!(damageSource.damagingEntity instanceof Player)) return;
    // インベントリ獲得
    const { container } = damageSource.damagingEntity.getComponent("inventory");
    // 時刻獲得
    const d = new Date(Date.now() + ((new Date().getTimezoneOffset() + (timezoneOffset * 60)) * 60 * 1000));
    // バイオーム
    // 影のものの時
    if (deadEntity.typeId === "ldns:shadow_mob_desert") {
        for (let i = 0; i < container.size; i++) {
            // アイテム獲得
            const item = container.getItem(i);
            if (!item) continue;
            // ペンダントの場合
            if (item.typeId === 'ldns:pendant_of_heat_sand') {
                if (random(0, 8) === 0) {
                    if (d.getHours() <= 24 || d.getHours() >= 12) { damageSource.damagingEntity.runCommand("give @s ldns:ld5987"); }
                    else if (d.getHours() <= 12 || d.getHours() >= 0) { damageSource.damagingEntity.runCommand("give @s ldns:dn3895"); }
                    container.setItem(i, null);
                    break;
                }
            }
        }
    }
});
