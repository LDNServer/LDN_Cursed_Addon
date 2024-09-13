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
        // 座標獲得
        const playerlocation = v.location;
        // グリッチ画面
        if (rand2 <= 10 && rand2 >= 0) {
            const rands = random(0, 2);
            const randh = random(0, 3);
            switch (rands) {
                case 0:
                    v.playSound("ldns.pp_spawn");
                    v.playSound("ldns.beep");
                    v.playSound("ldns.errormob_glitch");
                    break;
                case 1:
                    v.playSound("ldns.yy_spawn");
                    v.playSound("ldns.beep");
                    v.playSound("ldns.errormob_glitch");
                    break;
            }
            switch (randh) {
                case 0:
                    v.onScreenDisplay.setTitle("egn2");
                    break;
                case 1:
                    v.onScreenDisplay.setTitle("egn3");
                    break;
                case 2:
                    v.onScreenDisplay.setTitle("egn6");
                    break;
            }
        }
        // randが6<=rand<=66の時
        else if (rand <= 66 && rand >= 6) {
            // UTC 12~24時の時にPPが出る
            if (d.getHours() <= 24 && d.getHours() >= 12) {
                world.getDimension(v.dimension.id).runCommand("tellraw @a {\"rawtext\":[{\"text\":\"If the hand §oholding§r the leg §3trembles§r, cut §lthe leg off.§r§§\"}]}");
                v.playSound("ldns.pp_spawn");
                v.onScreenDisplay.setTitle("ppse");
                let inter = 0;
                let bindsinterval = system.runInterval(() => {
                    v.teleport(playerlocation);
                    inter++;
                    if (inter >= 100) {
                        system.clearRun(bindsinterval);
                    }
                }, 1);
                v.playSound("ldns.ppyy_spawn");
                world.getDimension(v.dimension.id).spawnEntity("ldns:pp", playerlocation);
            }
            // UTC 0~12時の時にYYが出る
            else if (d.getHours() <= 12 && d.getHours() >= 0) {
                world.getDimension(v.dimension.id).runCommand("tellraw @a {\"rawtext\":[{\"text\":\"I'm on your §lside§r, so I'll keep§l§o watching§r until that §6blood dries§r.\"}]}");
                v.playSound("ldns.yy_spawn");
                v.onScreenDisplay.setTitle("yyse");
                let inter = 0;
                let bindsinterval = system.runInterval(() => {
                    v.teleport(playerlocation);
                    inter++;
                    if (inter >= 90) {
                        system.clearRun(bindsinterval);
                    }
                }, 1);
                v.playSound("ldns.ppyy_spawn");
                world.getDimension(v.dimension.id).spawnEntity("ldns:yy", playerlocation);
            }
        }
        // randが67<=rand2<=79の時に謎の文字が出てくる
        else if (rand2 <= 79 && rand2 >= 67) {
            const rande = random(0, 4);
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
        // randが80~120の時に時刻によってLDかDNが出てくる
        else if (rand2 <= 120 && rand2 >= 80) {
            if (d.getHours() <= 24 || d.getHours() >= 12) v.runCommand("give @s ldns:dn3895");
            else if (d.getHours() <= 12 || d.getHours() >= 0) v.runCommand("give @s ldns:ld5987");
        }
        // フェイクダイアログ
        if (rand2 <= 139 && rand2 >= 121) {
            const randw = random(0, 2);
            v.playSound("ldns.errormob_errorwindow");
            switch (randw) {
                case 0:
                    v.onScreenDisplay.setTitle("ew1");
                    break;
                case 1:
                    v.onScreenDisplay.setTitle("ew2");
                    break;
            }
        }
        // randが1000~1200の時に無職の村人が出てくる
        else if (rand <= 1200 && rand >= 1000) {
            world.getDimension(v.dimension.id).spawnEntity("ldns:attacker_nitwit_villager", { x: v.location.x, y: v.location.y, z: v.location.z });
        }
        // randが2000~2200の時に謎のプレイヤーが出てくる
        else if (rand <= 2200 && rand >= 2000) {
            world.getDimension(v.dimension.id).spawnEntity("ldns:mysterious_players", { x: v.location.x, y: v.location.y, z: v.location.z });
        }
        // randが8000~8500の時にローテーション
        else if (rand2 <= 8500 && rand2 >= 8000) {
            v.runCommand("tp @s[m=0] ~ ~ ~ facing ^ ^360 ^");
            v.runCommand("tp @s[m=0] ~ ~ ~ facing ^ ^ ^-90");
            v.runCommand("tellraw @s[tag=debug_log] {\"rawtext\":[{\"text\":\"【ADD-ON】Debug - States (controller.animation.ldns.random_rotation) : ldns.rotation\"}]}");
            v.runCommand("tellraw @s[tag=debug_log] {\"rawtext\":[{\"text\":\"【ADD-ON】Debug - States (controller.animation.ldns.random_rotation) : default \"}]}");
        }
        // randが10000~11000の時に謎の音が鳴るように
        else if (rand2 <= 11000 && rand2 >= 10000) {
            v.playSound("player.ldns.random_step_1", { location: { x: v.location.x, y: v.location.y, z: v.location.z }, volume: 0.5 });
            v.runCommand("tellraw @s[tag=debug_log] {\"rawtext\":[{\"text\":\"【ADD-ON】Debug - States (controller.animation.ldns.random_step_1) : ldns.step_1\"}]}");
            v.runCommand("tellraw @s[tag=debug_log] {\"rawtext\":[{\"text\":\"【ADD-ON】Debug - States (controller.animation.ldns.random_step_1) : default \"}]}");
        }
    });
}, 3200);

// 繝｡繝｢繝ｪ繝ｼ繝ｬ繧､繝?Φ繧ｷ繝ｼ繧ｨ繝ｩ繝ｼ