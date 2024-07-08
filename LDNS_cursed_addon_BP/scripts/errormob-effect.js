import { ItemStack, Player, world } from "@minecraft/server";
import { random } from './util';
import { MinecraftEffectTypes } from './lib/mojang-effect';

world.afterEvents.entityHitEntity.subscribe((e) => {
    const { damagingEntity, hitEntity } = e;
    if (damagingEntity.typeId == "ldns:errormob") errordamage(hitEntity);
});

world.afterEvents.entityHurt.subscribe((e) => {
    const { damageSource, hurtEntity } = e;
    if (hurtEntity.typeId == "ldns:errormob") errorhurt(damageSource.damagingEntity);
});

function errordamage(targetPlayer) {
    if (!(targetPlayer instanceof Player)) return;
    const rand = random(0, 66);
    // 攻撃力低下(攻撃できなくなる)
    if (rand > 0 && rand < 6) {
        targetPlayer.addEffect(MinecraftEffectTypes.Weakness, 20 * 3, { amplifier: 255 });
    }
    // Error画面
    else if (rand > 6 && rand < 9) {
        targetPlayer.playSound("ldns.error_the_error");
        targetPlayer.onScreenDisplay.setTitle("繧ｨ繝ｩ繝ｼ");
    }
    // アイテムが置き換えられる
    else if (rand === 13) {
        // インベントリ
        const { container } = targetPlayer.getComponent("inventory");
        for (let i = 0; i < container.size; i++) {
            // アイテムを置き換える
            container.swapItems(i, random(0, container.size - 1), container);
        }
    }
    // レベルリセット
    else if (rand === 16) targetPlayer.resetLevel();
    // スポーンポイント設定
    else if (rand === 22) {
        targetPlayer.setSpawnPoint({ dimension: targetPlayer.dimension, x: targetPlayer.location.x, y: targetPlayer.location.y, z: targetPlayer.location.z });
        targetPlayer.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§4Set Spawn\"}]}");
    }
    else if (rand === 30) {
        targetPlayer.applyKnockback(targetPlayer.getViewDirection().x * 5, targetPlayer.getViewDirection().z * 5, 1.5, 1.5)
    }
    // テレポート
    /**
    else if (rand === 26) {
        if (!targetPlayer.getSpawnPoint()) return;
        else targetPlayer.teleport(targetPlayer.getSpawnPoint());
    }
    */
}
// エンティティが傷つけられたとき
function errorhurt(damageSource) {
    if (!(damageSource instanceof Player)) return;
    // ペンダントを持っているときのカウント
    const items = damageSource.runCommand('testfor @s[hasitem={item=ldns:pendant_of_twilight}]').successCount;
    const rand = random(0, 66);

    // Error画面
    // 夕焼けのペンダントを持っていないときに発動
    if (items <= 0) {
        if (rand > 6 && rand < 9) {
            damageSource.playSound("ldns.error_the_error");
            damageSource.onScreenDisplay.setTitle("繧ｨ繝ｩ繝ｼ");
        }
    }
}