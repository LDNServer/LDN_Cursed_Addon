import { Player, world } from "@minecraft/server";
import { random } from './util';

world.afterEvents.entityHitEntity.subscribe((e) => {
    const { damagingEntity, hitEntity } = e;
    if (damagingEntity.typeId == "ldns:pp") ppdamage(hitEntity);
});

world.afterEvents.entityHurt.subscribe((e) => {
    const { damageSource, hurtEntity } = e;
    if (hurtEntity.typeId == "ldns:pp" || hurtEntity.typeId == "ldns:yy") ppyyhurt(hurtEntity, damageSource.damagingEntity);
});

// PPに攻撃されたとき
function ppdamage(targetPlayer) {
    if (!(targetPlayer instanceof Player)) return;
    const rand = random(0, 66);
    // PP画面
    if (rand <= 2) {
        targetPlayer.playSound("ldns.pp_spawn");
        targetPlayer.onScreenDisplay.setTitle("PPYYS");
    }
}
// エンティティが傷つけられたとき
function ppyyhurt(hurtEntity, damageSource) {
    if (!(damageSource instanceof Player)) return;
    const rand = random(0, 66);
    // PP画面
    if (hurtEntity.typeId == "ldns:pp" && rand < 2) {
        damageSource.playSound("ldns.pp_spawn");
        damageSource.onScreenDisplay.setTitle("PPYYS");
    }
    // YY画面
    if (hurtEntity.typeId == "ldns:yy" && rand <= 2) {
        damageSource.playSound("ldns.yy_spawn");
        damageSource.onScreenDisplay.setTitle("PPYYS");
    }
}