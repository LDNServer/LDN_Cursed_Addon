import { EquipmentSlot, Player, system, world } from '@minecraft/server';
import { random } from './util';

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
    if (
        (
            errorTools.includes(equippable.getEquipment(EquipmentSlot.Mainhand)?.typeId) ||
            equippable.getEquipment(EquipmentSlot.Head)?.typeId === 'ldns:error_helmet' ||
            equippable.getEquipment(EquipmentSlot.Chest)?.typeId === 'ldns:error_chestplate' ||
            equippable.getEquipment(EquipmentSlot.Legs)?.typeId === 'ldns:error_leggings' ||
            equippable.getEquipment(EquipmentSlot.Feet)?.typeId === 'ldns:error_boots'
        ) && random(0, 666) === 78
    ) {
        targetPlayer.applyDamage(1);
    }
}