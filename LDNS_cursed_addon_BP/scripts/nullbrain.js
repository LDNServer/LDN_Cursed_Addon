import { Entity, Player, system, world } from "@minecraft/server";
import { random } from "./util";
import { MinecraftEffectTypes } from "./lib/mojang-effect";

world.afterEvents.entityDie.subscribe((edae) => {
    const { damageSource, deadEntity } = edae;
    if (deadEntity.typeId === "ldns:nullbrain") nullbraindievent(damageSource.damagingEntity, deadEntity);
});

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
    const rand = random(0, 66);
    const items = damagingEntity.runCommand('testfor @s[hasitem={item=ldns:pendant_of_twilight}]').successCount;
    if (items <= 0) {
        if (rand <= 2) {
            deadEntity.dimension.createExplosion({ x: deadEntity.location.x, y: deadEntity.location.y, z: deadEntity.location.z }, 1.666);
            deadEntity.remove();
        }
        else if (rand >= 60) damagingEntity.addEffect(MinecraftEffectTypes.Weakness, 20 * 13, { amplifier: 255 });
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
    const items = damagingEntity.runCommand('testfor @s[hasitem={item=ldns:pendant_of_twilight}]').successCount;
    if (items <= 0) {
        if (damage <= 4) {
            const rand = random(0, 66);
            if (rand <= 2) {
                hurtEntity.dimension.createExplosion({ x: hurtEntity.location.x, y: hurtEntity.location.y, z: hurtEntity.location.z }, 1.666);
                hurtEntity.remove();
            }
            else if (rand >= 60) damagingEntity.addEffect(MinecraftEffectTypes.Weakness, 20 * 13, { amplifier: 255 });
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