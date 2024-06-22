import { ItemStack, Player, world } from "@minecraft/server";
import { random } from './util';
import { MinecraftEffectTypes } from './lib/mojang-effect';

world.afterEvents.entityHitEntity.subscribe((e) => {
    const { damagingEntity, hitEntity } = e;
    if (damagingEntity.typeId == "ldns:errormob") errordamage(hitEntity);
});

function errordamage(targetPlayer) {
    if (!(targetPlayer instanceof Player)) return;
    const rand = random(0, 66);
    // 攻撃力低下(攻撃できなくなる)
    if (rand > 0 && rand < 6) {
        targetPlayer.addEffect(MinecraftEffectTypes.Weakness, 20 * 3, { amplifier: 255 });
    }
    // 暗闇
    else if (rand > 6 && rand < 12) {
        targetPlayer.addEffect(MinecraftEffectTypes.Darkness, 20 * 5);
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
    // テレポート
    /**
    else if (rand === 26) {
        if (!targetPlayer.getSpawnPoint()) return;
        else targetPlayer.teleport(targetPlayer.getSpawnPoint());
    }
    */
}