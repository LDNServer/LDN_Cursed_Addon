import { EquipmentSlot, Player, system, world } from '@minecraft/server';
import { random } from './util';
import { MinecraftEffectTypes } from './lib/mojang-effect';

const errorTools = [
    'ldns:error_sword',
    'ldns:error_pickaxe',
    'ldns:error_axe',
    'ldns:error_shovel',
    'ldns:error_hoe'
];

system.runInterval(() => {
    let targetPlayers = world.getPlayers();
    targetPlayers.forEach((targetPlayer) => {
        error_tool_damage(targetPlayer);
    })
}, 20)

/**
 * @param {Player} [targetPlayer] 
 * @returns { number }
 */
function error_tool_damage(targetPlayer) {
    if (!(targetPlayer instanceof Player)) return;
    const equippable = targetPlayer.getComponent('minecraft:equippable');
    const items = targetPlayer.runCommand('testfor @s[hasitem={item=ldns:pendant_of_twilight}]').successCount;
    let errortoolscount = 0;
    let erroritemscount = 0;
    const { container } = targetPlayer.getComponent('minecraft:inventory');
    for (let i = 0; i < container.size; i++) {
        const item = container.getItem(i);
        if (!item) continue;
        errorTools.forEach((tool) => {
            if (item.typeId === tool) errortoolscount += item.amount;
        })
        if (item.typeId === 'ldns:error_ingot') erroritemscount += item.amount;
    }
    let krx = 0;
    if (equippable.getEquipment(EquipmentSlot.Head)?.typeId === 'ldns:error_helmet') krx += 4;
    if (equippable.getEquipment(EquipmentSlot.Chest)?.typeId === 'ldns:error_chestplate') krx += 6;
    if (equippable.getEquipment(EquipmentSlot.Legs)?.typeId === 'ldns:error_leggings') krx += 4;
    if (equippable.getEquipment(EquipmentSlot.Feet)?.typeId === 'ldns:error_boots') krx += 2;
    if (erroritemscount >= 1 ||
        equippable.getEquipment(EquipmentSlot.Head)?.typeId === 'ldns:error_helmet' ||
        equippable.getEquipment(EquipmentSlot.Chest)?.typeId === 'ldns:error_chestplate' ||
        equippable.getEquipment(EquipmentSlot.Legs)?.typeId === 'ldns:error_leggings' ||
        equippable.getEquipment(EquipmentSlot.Feet)?.typeId === 'ldns:error_boots'
    ) {
        if (items <= 0) {
            if (Math.floor(random(0, (6666 / ((krx + (errortoolscount * 2) + (erroritemscount * 0.25)))))) === 0) {
                targetPlayer.applyDamage(2);
            }
            if (Math.floor(random(0, (6666 / ((krx + (errortoolscount * 2) + (erroritemscount * 0.25)))))) === 0) {
                targetPlayer.addEffect(MinecraftEffectTypes.Hunger, 10 * 20);
            }
            if (Math.floor(random(0, (6666 / ((krx + (errortoolscount * 2) + (erroritemscount * 0.25)))))) === 0) {
                targetPlayer.playSound('ldns.yy_spawn');
            }
            if (Math.floor(random(0, (6666 / ((krx + (errortoolscount * 2) + (erroritemscount * 0.25)))))) === 0) {
                targetPlayer.playSound('ldns.pp_spawn');
            }
            if (Math.floor(random(0, (6666 / ((krx + (errortoolscount * 2) + (erroritemscount * 0.25)))))) === 0) {
                targetPlayer.playSound('ldns.ppyy_spawn');
            }
        }
    }
}