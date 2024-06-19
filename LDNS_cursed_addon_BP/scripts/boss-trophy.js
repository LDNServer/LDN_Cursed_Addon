import { world } from '@minecraft/server';
// ボストロフィーに使うイベント(コマンドを実行)
world.afterEvents.entitySpawn.subscribe((entityEvent) => {
    if (entityEvent.entity.typeId == "ldns:boss_trophy") {
        entityEvent.entity.runCommand("tp @s ~ ~ ~ facing @p")
        entityEvent.entity.runCommand("execute as @s[rym=-23,ry=22] at @s run tp @s ~ ~ ~ 0 ~")
        entityEvent.entity.runCommand("execute as @s[rym=22,ry=67] at @s run tp @s ~ ~ ~ 45 ~")
        entityEvent.entity.runCommand("execute as @s[rym=67,ry=112] at @s run tp @s ~ ~ ~ 90 ~")
        entityEvent.entity.runCommand("execute as @s[rym=112,ry=157] at @s run tp @s ~ ~ ~ 135 ~")
        entityEvent.entity.runCommand("execute as @s[rym=157,ry=-158] at @s run tp @s ~ ~ ~ 180 ~")
        entityEvent.entity.runCommand("execute as @s[rym=-158,ry=-113] at @s run tp @s ~ ~ ~ -135 ~")
        entityEvent.entity.runCommand("execute as @s[rym=-113,ry=-68] at @s run tp @s ~ ~ ~ -90 ~")
        entityEvent.entity.runCommand("execute as @s[rym=-68,ry=-23] at @s run tp @s ~ ~ ~ -45 ~")
    }
});

// 繝医Ο繝輔ぅ繝ｼ