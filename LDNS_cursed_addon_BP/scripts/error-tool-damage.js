import { EquipmentSlot, Player, system, world } from '@minecraft/server';
import { random } from './util';
import { MinecraftEffectTypes } from './lib/mojang-effect';

const errorTools = [
    'ldns:error_sword',
    'ldns:error_pickaxe',
    'ldns:error_axe',
    'ldns:error_shovel',
    'ldns:error_hoe',
];

system.runInterval(() => {
    let targetPlayers = world.getPlayers();
    targetPlayers.forEach((targetPlayer) => {
        error_tool_damage(targetPlayer);
    })
}, 20)

/**
 * @param {Player} [targetPlayer] 
 */
function error_tool_damage(targetPlayer) {
    if (!(targetPlayer instanceof Player)) return;
    const equippable = targetPlayer.getComponent('minecraft:equippable');
    let kr = 6;
    let krx = 0;
    if (errorTools.includes(equippable.getEquipment(EquipmentSlot.Mainhand)?.typeId)) {
        krx += 1;
    }
    if (equippable.getEquipment(EquipmentSlot.Head)?.typeId === 'ldns:error_helmet') {
        krx += 1;
    }
    if (equippable.getEquipment(EquipmentSlot.Chest)?.typeId === 'ldns:error_chestplate') {
        krx += 1;
    }
    if (equippable.getEquipment(EquipmentSlot.Legs)?.typeId === 'ldns:error_leggings') {
        krx += 1;
    }
    if (equippable.getEquipment(EquipmentSlot.Feet)?.typeId === 'ldns:error_boots') {
        krx += 1;
    }
    if (errorTools.includes(equippable.getEquipment(EquipmentSlot.Mainhand)?.typeId) ||
        equippable.getEquipment(EquipmentSlot.Head)?.typeId === 'ldns:error_helmet' ||
        equippable.getEquipment(EquipmentSlot.Chest)?.typeId === 'ldns:error_chestplate' ||
        equippable.getEquipment(EquipmentSlot.Legs)?.typeId === 'ldns:error_leggings' ||
        equippable.getEquipment(EquipmentSlot.Feet)?.typeId === 'ldns:error_boots'
    ) {
        let rand = Math.floor(random(0, (6666 / (kr * krx))));
        if (rand === 78) {
            targetPlayer.applyDamage(2);
        }
        if (rand === 66) {
            targetPlayer.addEffect(MinecraftEffectTypes.Hunger, 10 * 20);
        }
        if (rand === 33) {
            targetPlayer.playSound('ldns.ppyy_spawn')
        }
    }
}