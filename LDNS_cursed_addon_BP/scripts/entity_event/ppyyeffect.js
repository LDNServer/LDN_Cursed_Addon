import { Entity, Player, world } from "@minecraft/server";
import { random } from '../util';

world.afterEvents.entityHitEntity.subscribe((e) => {
    const { damagingEntity, hitEntity } = e;
    if (damagingEntity.typeId == "ldns:pp") ppdamage(hitEntity);
});

world.afterEvents.entityHurt.subscribe((e) => {
    const { damageSource, hurtEntity } = e;
    if (hurtEntity.typeId == "ldns:pp" || hurtEntity.typeId == "ldns:yy") ppyyhurt(hurtEntity, damageSource.damagingEntity);
});

world.afterEvents.entityDie.subscribe((e) => {
    const { damageSource, deadEntity } = e;
    if (deadEntity.typeId == "ldns:pp" || deadEntity.typeId == "ldns:yy") ppyydead(deadEntity);
});

/**
 * @param {Entity} targetPlayer
 */
// PPに攻撃されたとき
function ppdamage(targetPlayer) {
    if (!(targetPlayer instanceof Player)) return;
    const rand = random(0, 86);
    // PP画面
    if (rand <= 2) {
        targetPlayer.playSound("ldns.pp_spawn");
        targetPlayer.onScreenDisplay.setTitle("PPYYS");
    }
}
/**
 * @param {Entity} hurtEntity
 * @param {Entity} damageSource
 */
// エンティティが傷つけられたとき
function ppyyhurt(hurtEntity, damageSource) {
    if (!(damageSource instanceof Player)) return;
    const rand = random(0, 120);
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

/**
 * @param {Entity} deadEntity
 */
// エンティティが死亡したとき
function ppyydead(deadEntity) {
    const rand = random(0, 66);
    //値を設定
    const entitylocation = deadEntity.location;
    const dimensions = deadEntity.dimension;
    // PPDeadExplosion
    if (deadEntity.typeId == "ldns:pp" && rand == 0) {
        deadEntity.remove();
        dimensions.createExplosion(entitylocation, 2);
    }
    // YYDeadExplosion
    if (deadEntity.typeId == "ldns:yy" && rand == 0) {
        deadEntity.remove();
        dimensions.createExplosion(entitylocation, 2);
    }
}