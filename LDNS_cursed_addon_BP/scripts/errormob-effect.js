import { EquipmentSlot, ItemStack, Player, world } from "@minecraft/server";
import { random } from './util';
import { MinecraftEffectTypes } from './lib/mojang-effect';

world.afterEvents.entityHitEntity.subscribe((e) => {
    const { damagingEntity, hitEntity } = e;
    if (damagingEntity.typeId == "ldns:errormob") errordamage(hitEntity);
});

function errordamage(targetPlayer) {
    if (!(targetPlayer instanceof Player)) return;
    // ペンダントを持っているときのカウント
    const rand = random(0, 66);

    // 攻撃力低下(攻撃できなくなる)
    if (rand > 0 && rand < 6) {
        targetPlayer.addEffect(MinecraftEffectTypes.Weakness, 20 * 3, { amplifier: 255 });
    }
    // 暗闇
    if (rand > 6 && rand < 12) {
        targetPlayer.addEffect(MinecraftEffectTypes.Darkness, 20 * 5);
    }
    // アイテムが置き換えられる
    if (rand === 4) {
        let randomitem = null;
        const randitem = random(0, 3);
        // 切り替えるアイテムを選択
        if (randitem === 0) randomitem = new ItemStack("ldns:error_ingot", random(1, 6));
        else if (randitem === 1) randomitem = new ItemStack("ldns:heavy_stone", random(1, 6));
        else if (randitem === 2) randomitem = new ItemStack("ldns:ld5987", 1);
        else if (randitem === 3) randomitem = new ItemStack("ldns:dn3895", 1);
        // インベントリ
        const { container } = targetPlayer.getComponent("inventory");
        for (let i = 0; i < container.size; i++) {
            // コンテナが空の時
            if (!container.getItem(i)) {
                continue;
            }
            // アイテムを置き換える
            else {
                let rand2 = random(0, 120);
                if (rand2 === 6) container.setItem(i, randomitem);
            }
        }
    }
}