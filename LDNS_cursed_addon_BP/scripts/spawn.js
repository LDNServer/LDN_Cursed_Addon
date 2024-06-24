import { system, world } from "@minecraft/server";
import { random } from "./util";

const timezoneOffset = 0;

system.runInterval(() => {
    // ワールドのプレイヤーを獲得
    world.getPlayers().forEach((v, i, a) => {
        // ランダム
        const rand = random(0, 34670);
        // 時刻獲得
        const d = new Date(Date.now() + ((new Date().getTimezoneOffset() + (timezoneOffset * 60)) * 60 * 1000));
        // randが6の時
        if (rand === 6) {
            // UTC 12~24時の時にランダムにPPが出る
            if (d.getHours() <= 24 && d.getHours() >= 12) {
                world.getDimension(v.dimension.id).runCommand("tellraw @a {\"rawtext\":[{\"text\":\"If the hand §oholding§r the leg §3trembles§r, cut §lthe leg off.§r§§\"}]}");
                world.playSound("ldns.pp_spawn", { x: v.location.x + (v.getViewDirection().x * 2), y: v.location.y, z: v.location.z + (v.getViewDirection().z * 2) });
                world.playSound("ldns.ppyy_spawn", { x: v.location.x + (v.getViewDirection().x * 2), y: v.location.y, z: v.location.z + (v.getViewDirection().z * 2) });
                world.getDimension(v.dimension.id).spawnEntity("ldns:pp", { x: v.location.x + (v.getViewDirection().x * 2), y: v.location.y, z: v.location.z + (v.getViewDirection().z * 2) });
            }
            // UTC 12~24時の時にランダムにYYが出る
            else if (d.getHours() <= 12 && d.getHours() >= 0) {
                world.getDimension(v.dimension.id).runCommand("tellraw @a {\"rawtext\":[{\"text\":\"I'm on your §lside§r, so I'll keep§l§o watching§r until that §6blood dries§r.\"}]}");
                world.playSound("ldns.yy_spawn", { x: v.location.x + (v.getViewDirection().x * 2), y: v.location.y, z: v.location.z + (v.getViewDirection().z * 2) });
                world.playSound("ldns.ppyy_spawn", { x: v.location.x + (v.getViewDirection().x * 2), y: v.location.y, z: v.location.z + (v.getViewDirection().z * 2) });
                world.getDimension(v.dimension.id).spawnEntity("ldns:yy", { x: v.location.x + (v.getViewDirection().x * 2), y: v.location.y, z: v.location.z + (v.getViewDirection().z * 2) });
            }
        }
        // randが80~86の時に時刻によってLDかDNが出てくる
        else if (rand <= 86 && rand >= 80) {
            if (d.getHours() <= 24 || d.getHours() >= 12) v.runCommand("give @s ldns:dn3895");
            else if (d.getHours() <= 12 || d.getHours() >= 0) v.runCommand("give @s ldns:ld5987");
        }
        // randが666~676の時に無職の村人が出てくる
        else if (rand <= 676 && rand >= 666) {
            world.getDimension(v.dimension.id).spawnEntity("ldns:attacker_nitwit_villager", { x: v.location.x + (v.getViewDirection().x * 2), y: v.location.y, z: v.location.z + (v.getViewDirection().z * 2) });
        }
        // randが675~725の時に謎のプレイヤーが出てくる
        else if (rand <= 725 && rand >= 675) {
            world.getDimension(v.dimension.id).spawnEntity("ldns:mysterious_players", { x: v.location.x + (v.getViewDirection().x * 2), y: v.location.y, z: v.location.z + (v.getViewDirection().z * 2) });
        }
        // randが999~1166の時に雷が落ちてくるように
        else if (rand <= 1166 && rand >= 999) {
            v.addTag("ldns_lightning");
            v.runCommand("function system.lightning_trigger");
            v.runCommand("tellraw @s[tag=debug_log] {\"rawtext\":[{\"text\":\"【ADD-ON】Debug - States (controller.animation.ldns.random_lightning) : ldns.summon_lightning\"}]}");
            v.runCommand("tellraw @s[tag=debug_log] {\"rawtext\":[{\"text\":\"【ADD-ON】Debug - States (controller.animation.ldns.random_lightning) : default \"}]}");
            v.removeTag("ldns_lightning");
        }
        // randが2500~2666の時にローテーション
        else if (rand <= 2666 && rand >= 2500) {
            v.runCommand("tp @s[m=0] ~ ~ ~ facing ^ ^360 ^");
            v.runCommand("tp @s[m=0] ~ ~ ~ facing ^ ^ ^-90");
            v.runCommand("tellraw @s[tag=debug_log] {\"rawtext\":[{\"text\":\"【ADD-ON】Debug - States (controller.animation.ldns.random_rotation) : ldns.rotation\"}]}");
            v.runCommand("tellraw @s[tag=debug_log] {\"rawtext\":[{\"text\":\"【ADD-ON】Debug - States (controller.animation.ldns.random_rotation) : default \"}]}");
        }
        // randが2800~3200の時に謎の音が鳴るように
        else if (rand <= 3200 && rand >= 2800) {
            v.playSound("player.ldns.random_step_1", { location: { x: v.location.x + 10, y: v.location.y - 5, z: v.location.y + 4 }, volume: 0.3 });
            v.runCommand("tellraw @s[tag=debug_log] {\"rawtext\":[{\"text\":\"【ADD-ON】Debug - States (controller.animation.ldns.random_step_1) : ldns.step_1\"}]}");
            v.runCommand("tellraw @s[tag=debug_log] {\"rawtext\":[{\"text\":\"【ADD-ON】Debug - States (controller.animation.ldns.random_step_1) : default \"}]}");
        }
    });
}, 20 * 60);