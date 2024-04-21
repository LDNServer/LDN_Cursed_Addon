import { Entity, EquipmentSlot, Player, world } from '@minecraft/server';
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
  'ldns:yy': {},
  "ldns:entity787": {}
}

world.afterEvents.entityHurt.subscribe(ev => {
  const { hurtEntity, damageSource: { damagingEntity } } = ev;
  applyToolEffects(hurtEntity, damagingEntity);
  applyArmorEffects(hurtEntity, damagingEntity);
});

/**
 * @param {Entity} hurtEntity
 * @param {Entity} damagingEntity 
 */
function applyArmorEffects(hurtEntity, damagingEntity) {
  if (!(hurtEntity instanceof Player)) return;
  const equippable = hurtEntity.getComponent('minecraft:equippable');
  if (
    damagingEntity.typeId.startsWith('ldns:') &&
    equippable.getEquipment(EquipmentSlot.Head)?.typeId === 'ldns:error_helmet' &&
    equippable.getEquipment(EquipmentSlot.Chest)?.typeId === 'ldns:error_chestplate' &&
    equippable.getEquipment(EquipmentSlot.Legs)?.typeId === 'ldns:error_leggings' &&
    equippable.getEquipment(EquipmentSlot.Feet)?.typeId === 'ldns:error_boots'
  ) {
    hurtEntity.addEffect(MinecraftEffectTypes.Resistance, 5 * 20);
  }
}

/**
 * @param {Entity} hurtEntity
 * @param {Entity} damagingEntity 
 */
function applyToolEffects(hurtEntity, damagingEntity) {
  if (!(damagingEntity instanceof Player)) return;
  const equippable = damagingEntity.getComponent('minecraft:equippable');
  const mainHand = equippable.getEquipment(EquipmentSlot.Mainhand);
  if (!(errorTools.includes(mainHand?.typeId) && hurtEntity.typeId in targetEntities)) return;

  const conditions = targetEntities[hurtEntity.typeId];
  if ('variant' in conditions) {
    const variant = hurtEntity.getComponent('minecraft:variant')?.value;
    if (typeof conditions.variant === 'number' && conditions.variant !== variant) return;
    if (Array.isArray(conditions.variant) && !conditions.variant.includes(variant)) return;
  }
  hurtEntity.addEffect(MinecraftEffectTypes.Weakness, 10 * 20);
}