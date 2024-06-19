import { Entity, Player, system, world } from "@minecraft/server";
import { random } from "./util";
import { MinecraftEffectTypes } from "./lib/mojang-effect";

// Nullbrainが死んだときのイベント
world.afterEvents.entityDie.subscribe((edae) => {
    const { damageSource, deadEntity } = edae;
    if (deadEntity.typeId === "ldns:nullbrain") nullbraindievent(damageSource.damagingEntity, deadEntity);
});

// Nullbrainが攻撃された時のイベント
world.afterEvents.entityHurt.subscribe((eh) => {
    const { damage, damageSource, hurtEntity } = eh;
    if (hurtEntity.typeId === "ldns:nullbrain") nullbrainhurtevent(damage, damageSource.damagingEntity, hurtEntity);
});

/**
 * @param {Entity} damagingEntity 
 * @param {Entity} deadEntity 
 */
function nullbraindievent(damagingEntity, deadEntity) {
    if (!(damagingEntity instanceof Player)) return;
    // 1/66の確立
    const rand = random(0, 66);
    // ペンダントを持っているときは無効
    const items = damagingEntity.runCommand('testfor @s[hasitem={item=ldns:pendant_of_twilight}]').successCount;
    if (items <= 0) {
        // randが2以下の時は爆発(1)
        if (rand <= 2) {
            deadEntity.dimension.createExplosion({ x: deadEntity.location.x, y: deadEntity.location.y, z: deadEntity.location.z }, 1.666);
            deadEntity.remove();
        }
        // randが60以上の時は攻撃した自身にエフェクトがつく(2)
        else if (rand >= 60) damagingEntity.addEffect(MinecraftEffectTypes.Weakness, 20 * 13, { amplifier: 255 });
        // randが6の時は(1)(2)両方起こる
        else if (rand === 6) {
            damagingEntity.addEffect(MinecraftEffectTypes.Weakness, 20 * 13, { amplifier: 255 });
            deadEntity.dimension.createExplosion({ x: deadEntity.location.x, y: deadEntity.location.y, z: deadEntity.location.z }, 1.666);
            deadEntity.remove();
        }
    }
}

/**
 * @param {number} damage
 * @param {Entity} damagingEntity 
 * @param {Entity} hurtEntity 
 */
function nullbrainhurtevent(damage, damagingEntity, hurtEntity) {
    if (!(damagingEntity instanceof Player)) return;
    // 1/66の確立
    const rand = random(0, 66);
    // ペンダントを持っているときは無効
    const items = damagingEntity.runCommand('testfor @s[hasitem={item=ldns:pendant_of_twilight}]').successCount;
    if (items <= 0) {
        // 与えたダメージが4以下のとき
        if (damage <= 4) {
            // randが2以下の時は爆発(1)
            if (rand <= 2) {
                hurtEntity.dimension.createExplosion({ x: hurtEntity.location.x, y: hurtEntity.location.y, z: hurtEntity.location.z }, 1.666);
                hurtEntity.remove();
            }
            // randが60以上の時は攻撃した自身にエフェクトがつく(2)
            else if (rand >= 60) damagingEntity.addEffect(MinecraftEffectTypes.Weakness, 20 * 13, { amplifier: 255 });
            // randが6の時は(1)が起きた後13秒後に(2)が起こる
            else if (rand === 6) {
                damagingEntity.addEffect(MinecraftEffectTypes.Weakness, 20 * 13, { amplifier: 255 });
                system.runTimeout(() => {
                    hurtEntity.dimension.createExplosion({ x: hurtEntity.location.x, y: hurtEntity.location.y, z: hurtEntity.location.z }, 1.666);
                    hurtEntity.remove();
                }, 20 * 13)
            }
        }
    }
}

// 縺薙＞縺､縺ｯ縺ｪ繧薙↑繧薙□窶ｦ