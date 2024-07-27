import { system, world } from "@minecraft/server";
import { random } from "./util";

const timezoneOffset = 0;

system.runInterval(() => {
    // ランダム
    const rand = random(0, 25600);
    // ワールドのプレイヤーを獲得
    world.getPlayers().forEach((v, i, a) => {
        // ランダム2
        const rand2 = random(0, 25600);
        // 時刻獲得
        const d = new Date(Date.now() + ((new Date().getTimezoneOffset() + (timezoneOffset * 60)) * 60 * 1000));
        // randが6の時
        if (rand <= 66 && rand >= 6) {
            // UTC 12~24時の時にPPが出る
            if (d.getHours() <= 24 && d.getHours() >= 12) {
                world.getDimension(v.dimension.id).runCommand("tellraw @a {\"rawtext\":[{\"text\":\"If the hand §oholding§r the leg §3trembles§r, cut §lthe leg off.§r§§\"}]}");
                world.playSound("ldns.pp_spawn", { x: v.location.x + (v.getViewDirection().x * 2), y: v.location.y, z: v.location.z + (v.getViewDirection().z * 2) });
                world.playSound("ldns.ppyy_spawn", { x: v.location.x + (v.getViewDirection().x * 2), y: v.location.y, z: v.location.z + (v.getViewDirection().z * 2) });
                world.getDimension(v.dimension.id).spawnEntity("ldns:pp", { x: v.location.x + (v.getViewDirection().x * 2), y: v.location.y, z: v.location.z + (v.getViewDirection().z * 2) });
            }
            // UTC 12~24時の時にYYが出る
            else if (d.getHours() <= 12 && d.getHours() >= 0) {
                world.getDimension(v.dimension.id).runCommand("tellraw @a {\"rawtext\":[{\"text\":\"I'm on your §lside§r, so I'll keep§l§o watching§r until that §6blood dries§r.\"}]}");
                world.playSound("ldns.yy_spawn", { x: v.location.x + (v.getViewDirection().x * 2), y: v.location.y, z: v.location.z + (v.getViewDirection().z * 2) });
                world.playSound("ldns.ppyy_spawn", { x: v.location.x + (v.getViewDirection().x * 2), y: v.location.y, z: v.location.z + (v.getViewDirection().z * 2) });
                world.getDimension(v.dimension.id).spawnEntity("ldns:yy", { x: v.location.x + (v.getViewDirection().x * 2), y: v.location.y, z: v.location.z + (v.getViewDirection().z * 2) });
            }
        }
        // randが68<=rand<=79の時に謎の文字が出てくる
        else if (rand2 <= 79 && rand2 >= 67) {
            const rande = random(0, 7);
            if (rande === 0) {
                v.playSound("ldns.beep");
                v.onScreenDisplay.setTitle("Error1");
            }
            else if (rande === 1) {
                v.playSound("ldns.beep");
                v.onScreenDisplay.setTitle("Error2");
            }
            else if (rande === 2) {
                v.playSound("ldns.beep");
                v.onScreenDisplay.setTitle("Cursed1");
            }
            else if (rande === 3) {
                v.playSound("ldns.beep");
                v.onScreenDisplay.setTitle("Cursed2");
            }
        }
        // randが80~86の時に時刻によってLDかDNが出てくる
        else if (rand2 <= 200 && rand2 >= 80) {
            if (d.getHours() <= 24 || d.getHours() >= 12) v.runCommand("give @s ldns:dn3895");
            else if (d.getHours() <= 12 || d.getHours() >= 0) v.runCommand("give @s ldns:ld5987");
        }
        // randが666~676の時に無職の村人が出てくる
        else if (rand <= 1500 && rand >= 1000) {
            world.getDimension(v.dimension.id).spawnEntity("ldns:attacker_nitwit_villager", { x: v.location.x + (v.getViewDirection().x * 2), y: v.location.y, z: v.location.z + (v.getViewDirection().z * 2) });
        }
        // randが675~725の時に謎のプレイヤーが出てくる
        else if (rand <= 2500 && rand >= 2000) {
            world.getDimension(v.dimension.id).spawnEntity("ldns:mysterious_players", { x: v.location.x + (v.getViewDirection().x * 2), y: v.location.y, z: v.location.z + (v.getViewDirection().z * 2) });
        }
        // randが2500~2666の時にローテーション
        else if (rand2 <= 8500 && rand2 >= 8000) {
            v.runCommand("tp @s[m=0] ~ ~ ~ facing ^ ^360 ^");
            v.runCommand("tp @s[m=0] ~ ~ ~ facing ^ ^ ^-90");
            v.runCommand("tellraw @s[tag=debug_log] {\"rawtext\":[{\"text\":\"【ADD-ON】Debug - States (controller.animation.ldns.random_rotation) : ldns.rotation\"}]}");
            v.runCommand("tellraw @s[tag=debug_log] {\"rawtext\":[{\"text\":\"【ADD-ON】Debug - States (controller.animation.ldns.random_rotation) : default \"}]}");
        }
        // randが2800~3200の時に謎の音が鳴るように
        else if (rand2 <= 12000 && rand2 >= 10000) {
            v.playSound("player.ldns.random_step_1", { location: { x: v.location.x, y: v.location.y, z: v.location.z }, volume: 0.5 });
            v.runCommand("tellraw @s[tag=debug_log] {\"rawtext\":[{\"text\":\"【ADD-ON】Debug - States (controller.animation.ldns.random_step_1) : ldns.step_1\"}]}");
            v.runCommand("tellraw @s[tag=debug_log] {\"rawtext\":[{\"text\":\"【ADD-ON】Debug - States (controller.animation.ldns.random_step_1) : default \"}]}");
        }
    });
}, 3200);

// 繝｡繝｢繝ｪ繝ｼ繝ｬ繧､繝?Φ繧ｷ繝ｼ繧ｨ繝ｩ繝ｼ