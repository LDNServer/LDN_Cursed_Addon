import { EquipmentSlot, Player, world } from '@minecraft/server';
import { MinecraftEffectTypes } from './lib/mojang-effect';

const errorTools = [
  'ldns:error_sword',
  'ldns:error_pickaxe',
  'ldns:error_axe',
  'ldns:error_shovel',
  'ldns:error_hoe',
];

/** @type {Record<string, { variant?: number | number[] }>} */
const targetEntities = {
  'ldns:killer_rabbit': {},
  'ldns:gray_enderman': {},
  'ldns:nullbrain': {},
  'ldns:strange_chicken': {},
  'ldns:head_only_sheep': {},
  'ldns:dr.naba': {},
  'ldns:onibi': {},
  'ldns:shadow_mob': {},
  'minecraft:zombie': { variant: 1 },
  'minecraft:skeleton': { variant: 1 },
  'minecraft:zombie_pigman': { variant: [1, 2] },
  'ldns:skele_zombie': {},
  'ldns:skeleton_trader': {},
  'ldns:pp': {},
  'ldns:yy': {}
}

world.afterEvents.entityHurt.subscribe(ev => {
  const { hurtEntity, damageSource: { damagingEntity } } = ev;
  if (!(damagingEntity instanceof Player)) return;
  const mainHand = damagingEntity.getComponent('minecraft:equippable').getEquipment(EquipmentSlot.Mainhand);
  if (!(errorTools.includes(mainHand?.typeId) && hurtEntity.typeId in targetEntities)) return;

  const conditions = targetEntities[hurtEntity.typeId];
  if ('variant' in conditions) {
    const variant = hurtEntity.getComponent('minecraft:variant')?.value;
    if (typeof conditions.variant === 'number' && conditions.variant !== variant) return;
    if (Array.isArray(conditions.variant) && !conditions.variant.includes(variant)) return;
  }
  hurtEntity.addEffect(MinecraftEffectTypes.Weakness, 10 * 20);
});
