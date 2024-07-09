import { Entity, Player, world } from "@minecraft/server";
import { random } from './util';
import { MinecraftEffectTypes } from './lib/mojang-effect';

world.afterEvents.entityHurt.subscribe((e) => {
    const { damageSource, hurtEntity } = e;
    if (hurtEntity.typeId == "ldns:entity787") entity787hurt(hurtEntity, damageSource.damagingEntity);
});

// エンティティが傷つけられたとき
function entity787hurt(hurtEntity, damageSource) {
    if (!(damageSource instanceof Player)) return;
    if (!(hurtEntity instanceof Entity)) return;
    // ペンダントを持っているときのカウント
    const items = damageSource.runCommand('testfor @s[hasitem={item=ldns:pendant_of_twilight}]').successCount;
    const rand = random(0, 66);
    // 攻撃力低下(攻撃できなくなる)
    if (rand >= 0 && rand <= 4) {
        damageSource.addEffect(MinecraftEffectTypes.Weakness, 20 * 3, { amplifier: 255 });
    }
    // 夕焼けのペンダントを持っていないときに発動
    if (items <= 0) {
        // Error画面
        if (rand === 6) {
            damageSource.playSound("ldns.error_the_error");
            damageSource.onScreenDisplay.setTitle("繧ｨ繝ｩ繝ｼ");
        }
        // PPYY画面
        else if (rand === 7) {
            damageSource.playSound("ldns.pp_spawn");
            damageSource.onScreenDisplay.setTitle("PPYYS");
        }
    }
    // アイテムが置き換えられる
    else if (rand === 13) {
        // インベントリ
        const { container } = damageSource.getComponent("inventory");
        for (let i = 0; i < container.size; i++) {
            // アイテムを置き換える
            container.swapItems(i, random(0, container.size - 1), container);
        }
    }
    // 夕焼けのペンダントを持っているときに発動 Entity787がランダムに回復と強化をする
    else if ((rand >= 8 && rand <= 10) && items > 0) {
        damageSource.playSound("firework.blast");
        hurtEntity.addEffect(MinecraftEffectTypes.HealthBoost, 20 * 5, { amplifier: 3 });
        hurtEntity.addEffect(MinecraftEffectTypes.Strength, 20 * 3, { amplifier: 2 });
    }
}