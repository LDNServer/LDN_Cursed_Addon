import { Entity, Player, world } from "@minecraft/server";
import { random } from './util';

world.afterEvents.entityHitEntity.subscribe((e) => {
    const { damagingEntity, hitEntity } = e;
    if (damagingEntity.typeId == "ldns:errormob") errordamage(hitEntity);
});

world.afterEvents.entityHurt.subscribe((e) => {
    const { damageSource, hurtEntity } = e;
    if (hurtEntity.typeId == "ldns:errormob") errorhurt(damageSource.damagingEntity);
});

/**
 * @param {Entity} targetPlayer
 */
function errordamage(targetPlayer) {
    if (!(targetPlayer instanceof Player)) return;
    const rand = random(0, 80);
    // Error画面
    if (rand === 6) {
        targetPlayer.playSound("ldns.error_the_error");
        targetPlayer.onScreenDisplay.setTitle("繧ｨ繝ｩ繝ｼ");
    }
    // フェイクダイアログ
    else if (rand === 7) {
        const randw = random(0, 2);
        targetPlayer.playSound("ldns.errormob_errorwindow");
        switch (randw) {
            case 0:
                targetPlayer.onScreenDisplay.setTitle("ew1");
                break;
            case 1:
                targetPlayer.onScreenDisplay.setTitle("ew2");
                break;
        }
    }
    // グリッチ画面
    else if (rand === 8) {
        const rands = random(0, 2);
        const randh = random(0, 3);
        switch (rands) {
            case 0:
                targetPlayer.playSound("ldns.pp_spawn");
                targetPlayer.playSound("ldns.beep");
                targetPlayer.playSound("ldns.errormob_glitch");
                break;
            case 1:
                targetPlayer.playSound("ldns.yy_spawn");
                targetPlayer.playSound("ldns.beep");
                targetPlayer.playSound("ldns.errormob_glitch");
                break;
        }
        switch (randh) {
            case 0:
                targetPlayer.onScreenDisplay.setTitle("egn2");
                break;
            case 1:
                targetPlayer.onScreenDisplay.setTitle("egn3");
                break;
            case 2:
                targetPlayer.onScreenDisplay.setTitle("egn6");
                break;
        }
    }
    // アイテムが置き換えられる
    else if (rand === 13) {
        // インベントリ
        const { container } = targetPlayer.getComponent("inventory");
        for (let i = 0; i < container.size; i++) {
            // アイテムを置き換える
            container.swapItems(i, random(0, container.size - 1), container);
        }
    }
    // レベルリセット
    else if (rand === 16) targetPlayer.resetLevel();
    // スポーンポイント設定
    else if (rand === 22) {
        targetPlayer.setSpawnPoint({ dimension: targetPlayer.dimension, x: targetPlayer.location.x, y: targetPlayer.location.y, z: targetPlayer.location.z });
        targetPlayer.runCommand("tellraw @s {\"rawtext\":[{\"text\":\"§4Set Spawn\"}]}");
    }
    // ノックバック
    else if (rand === 30) {
        targetPlayer.applyKnockback(targetPlayer.getViewDirection().x * 5, targetPlayer.getViewDirection().z * 5, 1.5, 1.5)
    }
}
/**
 * @param {Entity} damageSource
 */
// エンティティが傷つけられたとき
function errorhurt(damageSource) {
    if (!(damageSource instanceof Player)) return;
    // ペンダントを持っているときのカウント
    const items = damageSource.runCommand('testfor @s[hasitem={item=ldns:pendant_of_twilight}]').successCount;
    const rand = random(0, 96);
    // Error画面
    // 夕焼けのペンダントを持っていないときに発動
    if (items <= 0) {
        if (rand === 6) {
            damageSource.playSound("ldns.error_the_error");
            damageSource.onScreenDisplay.setTitle("繧ｨ繝ｩ繝ｼ");
        }
    }
    // グリッチ画面
    else if (rand === 8) {
        const rands = random(0, 2);
        const randh = random(0, 3);
        switch (rands) {
            case 0:
                damageSource.playSound("ldns.pp_spawn");
                damageSource.playSound("ldns.beep");
                damageSource.playSound("ldns.errormob_glitch");
                break;
            case 1:
                damageSource.playSound("ldns.yy_spawn");
                damageSource.playSound("ldns.beep");
                damageSource.playSound("ldns.errormob_glitch");
                break;
        }
        switch (randh) {
            case 0:
                damageSource.onScreenDisplay.setTitle("egn2");
                break;
            case 1:
                damageSource.onScreenDisplay.setTitle("egn3");
                break;
            case 2:
                damageSource.onScreenDisplay.setTitle("egn6");
                break;
        }
    }
}