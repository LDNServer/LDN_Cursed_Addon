import { Entity, EquipmentSlot, Player, world } from '@minecraft/server';
import { MinecraftEffectTypes } from './lib/mojang-effect';
import { targetEntities } from './lib/ldns_entity';

world.afterEvents.entityHitEntity.subscribe(ev => {
    const { hitEntity, damagingEntity } = ev;
    applyItemEffect(hitEntity, damagingEntity)
});

/**
 * @param {Entity} hitEntity
 * @param {Entity} [damagingEntity] 
 */

function applyItemEffect(hitEntity, damagingEntity) {
    if (!(damagingEntity instanceof Player)) return;
    const items = damagingEntity.runCommand('testfor @s[hasitem={item=ldns:pendant_of_twilight}]').successCount;
    if (!((items >= 1) && hitEntity.typeId in targetEntities)) return;
    const conditions = targetEntities[hitEntity.typeId];
    if ('variant' in conditions) {
        const variant = hitEntity.getComponent('minecraft:variant')?.value;
        if (typeof conditions.variant === 'number' && conditions.variant !== variant) return;
        if (Array.isArray(conditions.variant) && !conditions.variant.includes(variant)) return;
    }
    damagingEntity.addEffect(MinecraftEffectTypes.Strength, 10 * 20);
}