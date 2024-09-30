import { ItemStack, system, world } from "@minecraft/server";
import { random } from "./util";

const timezoneOffset = 0;

let names = ["James", "Olivia", "Liam", "Emma", "Noah", "Ava", "William", "Sophia", "Elijah", "Isabella", "Benjamin", "Mia", "Lucas", "Charlotte", "Henry", "Amelia", "Alexander", "Harper", "Michael", "Evelyn"]

system.runInterval(() => {
    // ランダム
    const rand = random(0, 28800);
    const playerall = world.getPlayers();
    const playerlength = playerall.length;
    // ワールドのプレイヤーを獲得
    playerall.forEach(async (v, i, a) => {
        // ランダム2
        const rand2 = random(0, 28800);
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
                for (let inter = 0; inter < 120; i++) {
                    v.teleport(playerlocation);
                    inter++;
                    await system.waitTicks(1);
                }
                v.playSound("ldns.ppyy_spawn");
                world.getDimension(v.dimension.id).spawnEntity("ldns:pp", playerlocation);
            }
            // UTC 0~12時の時にYYが出る
            else if (d.getHours() <= 12 && d.getHours() >= 0) {
                world.getDimension(v.dimension.id).runCommand("tellraw @a {\"rawtext\":[{\"text\":\"I'm on your §lside§r, so I'll keep§l§o watching§r until that §6blood dries§r.\"}]}");
                v.playSound("ldns.yy_spawn");
                v.onScreenDisplay.setTitle("yyse");
                for (let inter = 0; inter < 120; i++) {
                    v.teleport(playerlocation);
                    inter++;
                    await system.waitTicks(1);
                }
                v.playSound("ldns.ppyy_spawn");
                await system.waitTicks(20 * 5);
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
        else if (rand2 <= 139 && rand2 >= 121) {
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
        // 突然時間がランダムに変わり、謎の文字が出てくる
        else if (rand <= 149 && rand >= 140) {
            a.forEach(async (vs, is, as) => {
                vs.playSound("ldns.time_mad");
                console.info("We is cursed");
                for (let inter = 0; inter < 160; inter++) {
                    let titletextr = random(0, 6);
                    switch (titletextr) {
                        case 0:
                            vs.onScreenDisplay.setTitle("あなたは呪われてない", { stayDuration: 2, fadeInDuration: 0, fadeOutDuration: 0, subtitle: String(random(0, 999999999)) });
                            break;
                        case 1:
                            vs.onScreenDisplay.setTitle("あなたは呪われている", { stayDuration: 2, fadeInDuration: 0, fadeOutDuration: 0, subtitle: String(random(0, 999999999)) });
                            break;
                        case 2:
                            vs.onScreenDisplay.setTitle("縺ゅ↑縺溷測繧上ｌ縺ｦ", { stayDuration: 2, fadeInDuration: 0, fadeOutDuration: 0, subtitle: String(random(0, 999999999)) });
                            break;
                        case 3:
                            vs.onScreenDisplay.setTitle("縺ゅ↑縺溷測繧上ｌ縺ｾ", { stayDuration: 2, fadeInDuration: 0, fadeOutDuration: 0, subtitle: String(random(0, 999999999)) });
                            break;
                        case 4:
                            vs.onScreenDisplay.setTitle("We is Cursed.", { stayDuration: 2, fadeInDuration: 0, fadeOutDuration: 0, subtitle: String(random(0, 999999999)) });
                            break;
                        case 5:
                            vs.onScreenDisplay.setTitle("They am Cursed.", { stayDuration: 2, fadeInDuration: 0, fadeOutDuration: 0, subtitle: String(random(0, 999999999)) });
                            break;
                    }
                    world.setTimeOfDay(random(1, 23999));
                    await system.waitTicks(1);
                }
            });
        }
        // 突然誰かがみんなにチャットして何かが起こる
        else if (rand <= 159 && rand >= 150) {
            const randp = random(0, 6);
            const randps = random(0, a.length);
            const psplayer = a[randps];
            const items = random(0, 2);
            if (a.length <= 1 || psplayer === v) {
                const dummyname = names[random(0, names.length)];
                switch (randp) {
                    case 0:
                        world.sendMessage("<" + v.name + "> " + "Hello?, " + dummyname);
                        break;
                    case 1:
                        world.sendMessage("<" + v.name + "> " + dummyname + ", Are they cursed?");
                        break;
                    case 2:
                        world.sendMessage("<" + v.name + "> " + dummyname + ", What do you think?");
                        break;
                    case 3:
                        world.sendMessage("<" + v.name + "> " + "Have you become 縺ゅｌ?");
                        break;
                    case 4:
                        world.sendMessage("<" + v.name + "> " + dummyname + ", what's wrong?");
                        break;
                    case 5:
                        world.sendMessage("<" + v.name + "> " + dummyname + "'s Error Computer Information:\n CEU: Erutel Corse i6 666K 6Curse 6Curshreads 6.66GHz\n ERM: DDR6-6666 66GB\n Errorcards: Errvidia Gerrorforce ETX 666 Ei 6GB\n ES: Errorsoft Errdows 666");
                        break;
                }
            }
            else {
                switch (randp) {
                    case 0:
                        world.sendMessage("<" + v.name + "> " + "Hello?, " + psplayer.name);
                        await system.waitTicks(20 * 5);
                        v.teleport(psplayer.location);
                        break;
                    case 1:
                        world.sendMessage("<" + v.name + "> " + psplayer.name + ", Are they cursed?");
                        await system.waitTicks(20 * 3);
                        switch (items) {
                            case 0:
                                psplayer.runCommand("give @s ldns:error_ingot");
                                break;
                            case 1:
                                psplayer.runCommand("give @s ldns:heavy_stone");
                                break;
                        }
                        break;
                    case 2:
                        world.sendMessage("<" + v.name + "> " + psplayer.name + ", What do you think?");
                        await system.waitTicks(20 * 3);
                        psplayer.runCommand("give @s ldns:cursed_soul");
                        break;
                    case 3:
                        world.sendMessage("<" + v.name + "> " + "Have you become 縺ゅｌ?");
                        break;
                    case 4:
                        world.sendMessage("<" + v.name + "> " + psplayer.name + ", what's wrong?");
                        await system.waitTicks(20 * 3);
                        switch (items) {
                            case 0:
                                psplayer.runCommand("give @s ldns:ld5987");
                                break;
                            case 1:
                                psplayer.runCommand("give @s ldns:dn3895");
                                break;
                        }
                        break;
                    case 5:
                        world.sendMessage("<" + v.name + "> " + psplayer.name + "'s Error Computer Information:\n CEU: Erutel Corse i6 666K 6Curse 6Curshreads 6.66GHz\n ERM: DDR6-6666 66GB\n Errorcards: Errvidia Gerrorforce ETX 666 Ei 6GB\n ES: Errorsoft Errdows 666");
                        await system.waitTicks(20 * 3);
                        psplayer.addExperience(66);
                        break;
                }
            }
        }
        // randが1000~1200の時に無職の村人が出てくる
        else if (rand <= 1200 && rand >= 1000) {
            world.getDimension(v.dimension.id).spawnEntity("ldns:attacker_nitwit_villager", v.location);
        }
        // randが2000~2200の時に謎のプレイヤーが出てくる
        else if (rand <= 2200 && rand >= 2000) {
            world.getDimension(v.dimension.id).spawnEntity("ldns:mysterious_players", v.location);
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
            v.playSound("player.ldns.random_step_1", { location: v.location, volume: 0.5 });
            v.runCommand("tellraw @s[tag=debug_log] {\"rawtext\":[{\"text\":\"【ADD-ON】Debug - States (controller.animation.ldns.random_step_1) : ldns.step_1\"}]}");
            v.runCommand("tellraw @s[tag=debug_log] {\"rawtext\":[{\"text\":\"【ADD-ON】Debug - States (controller.animation.ldns.random_step_1) : default \"}]}");
        }
    });
}, 3200);

world.afterEvents.buttonPush.subscribe(async (e) => {
    const button = e.block;
    const buttoname = button.typeId;
    // PPスポーン
    if ((buttoname === "minecraft:acacia_button" || buttoname === "minecraft:crimson_button" || buttoname === "minecraft:mangrove_button") && button.permutation.getState("facing_direction") === 0) {
        if (button.offset({ x: 0, y: 1, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: 1, z: -1 }).typeId === "minecraft:redstone_block" &&
            button.offset({ x: 0, y: 1, z: 1 }).typeId === "minecraft:nether_wart_block" &&
            button.offset({ x: 0, y: 0, z: -1 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: 0, z: 1 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: -1, z: -1 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: -1, z: 1 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: 2, z: -1 }).typeId === "minecraft:carved_pumpkin") {
            button.dimension.spawnParticle("ldns:error_particle", button.location);
            await system.waitTicks(20 * 2.5);
            button.setType("air");
            button.offset({ x: 0, y: 1, z: 0 }).setType("air");
            button.offset({ x: 0, y: 1, z: -1 }).setType("air");
            button.offset({ x: 0, y: 1, z: 1 }).setType("air");
            button.offset({ x: 0, y: 0, z: -1 }).setType("air");
            button.offset({ x: 0, y: 0, z: 1 }).setType("air");
            button.offset({ x: 0, y: -1, z: -1 }).setType("air");
            button.offset({ x: 0, y: -1, z: 1 }).setType("air");
            button.offset({ x: 0, y: 2, z: -1 }).setType("air");
            button.dimension.spawnEntity("ldns:pp", button.location);
        }
        else if (button.offset({ x: 0, y: 1, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: 1, z: 1 }).typeId === "minecraft:redstone_block" &&
            button.offset({ x: 0, y: 1, z: -1 }).typeId === "minecraft:nether_wart_block" &&
            button.offset({ x: 0, y: 0, z: 1 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: 0, z: -1 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: -1, z: 1 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: -1, z: -1 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: 2, z: 1 }).typeId === "minecraft:carved_pumpkin") {
            button.dimension.spawnParticle("ldns:error_particle", button.location);
            await system.waitTicks(20 * 2.5);
            button.setType("air");
            button.offset({ x: 0, y: 1, z: 0 }).setType("air");
            button.offset({ x: 0, y: 1, z: 1 }).setType("air");
            button.offset({ x: 0, y: 1, z: -1 }).setType("air");
            button.offset({ x: 0, y: 0, z: 1 }).setType("air");
            button.offset({ x: 0, y: 0, z: -1 }).setType("air");
            button.offset({ x: 0, y: -1, z: 1 }).setType("air");
            button.offset({ x: 0, y: -1, z: -1 }).setType("air");
            button.offset({ x: 0, y: 2, z: 1 }).setType("air");
            button.dimension.spawnEntity("ldns:pp", button.location);
        }
        else if (button.offset({ x: 0, y: 1, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: 1, y: 1, z: 0 }).typeId === "minecraft:redstone_block" &&
            button.offset({ x: -1, y: 1, z: 0 }).typeId === "minecraft:nether_wart_block" &&
            button.offset({ x: 1, y: 0, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: -1, y: 0, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: 1, y: -1, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: -1, y: -1, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: 1, y: 2, z: 0 }).typeId === "minecraft:carved_pumpkin") {
            button.dimension.spawnParticle("ldns:error_particle", button.location);
            await system.waitTicks(20 * 2.5);
            button.setType("air");
            button.offset({ x: 0, y: 1, z: 0 }).setType("air");
            button.offset({ x: 1, y: 1, z: 0 }).setType("air");
            button.offset({ x: -1, y: 1, z: 0 }).setType("air");
            button.offset({ x: 1, y: 0, z: 0 }).setType("air");
            button.offset({ x: -1, y: 0, z: 0 }).setType("air");
            button.offset({ x: 1, y: -1, z: 0 }).setType("air");
            button.offset({ x: -1, y: -1, z: 0 }).setType("air");
            button.offset({ x: 1, y: 2, z: 0 }).setType("air");
            button.dimension.spawnEntity("ldns:pp", button.location);
        }
        else if (button.offset({ x: 0, y: 1, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: -1, y: 1, z: 0 }).typeId === "minecraft:redstone_block" &&
            button.offset({ x: 1, y: 1, z: 0 }).typeId === "minecraft:nether_wart_block" &&
            button.offset({ x: -1, y: 0, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: 1, y: 0, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: -1, y: -1, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: 1, y: -1, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: -1, y: 2, z: 0 }).typeId === "minecraft:carved_pumpkin") {
            button.dimension.spawnParticle("ldns:error_particle", button.location);
            await system.waitTicks(20 * 2.5);
            button.setType("air");
            button.offset({ x: 0, y: 1, z: 0 }).setType("air");
            button.offset({ x: -1, y: 1, z: 0 }).setType("air");
            button.offset({ x: 1, y: 1, z: 0 }).setType("air");
            button.offset({ x: -1, y: 0, z: 0 }).setType("air");
            button.offset({ x: 1, y: 0, z: 0 }).setType("air");
            button.offset({ x: -1, y: -1, z: 0 }).setType("air");
            button.offset({ x: 1, y: -1, z: 0 }).setType("air");
            button.offset({ x: -1, y: 2, z: 0 }).setType("air");
            button.dimension.spawnEntity("ldns:pp", button.location);
        }
    }
    if ((buttoname === "minecraft:acacia_button" || buttoname === "minecraft:crimson_button" || buttoname === "minecraft:mangrove_button") && button.permutation.getState("facing_direction") === 1) {
        if (button.offset({ x: 0, y: 0, z: -1 }).typeId === "minecraft:redstone_block" &&
            button.offset({ x: 0, y: 0, z: 1 }).typeId === "minecraft:nether_wart_block" &&
            button.offset({ x: 0, y: 0, z: -2 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: 0, z: 2 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: 1, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: -1, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: -1, z: -2 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: -1, z: 2 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: 1, z: -2 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: 1, z: 2 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: 2, z: -2 }).typeId === "minecraft:carved_pumpkin" &&
            button.offset({ x: 0, y: 2, z: 2 }).typeId === "minecraft:carved_pumpkin") {
            button.dimension.spawnParticle("ldns:error_particle", button.location);
            await system.waitTicks(20 * 2.5);
            button.setType("air");
            button.offset({ x: 0, y: 0, z: -1 }).setType("air");
            button.offset({ x: 0, y: 0, z: 1 }).setType("air");
            button.offset({ x: 0, y: 0, z: -2 }).setType("air");
            button.offset({ x: 0, y: 0, z: 2 }).setType("air");
            button.offset({ x: 0, y: 1, z: 0 }).setType("air");
            button.offset({ x: 0, y: -1, z: 0 }).setType("air");
            button.offset({ x: 0, y: -1, z: -2 }).setType("air");
            button.offset({ x: 0, y: -1, z: 2 }).setType("air");
            button.offset({ x: 0, y: 1, z: -2 }).setType("air");
            button.offset({ x: 0, y: 1, z: 2 }).setType("air");
            button.offset({ x: 0, y: 2, z: -2 }).setType("air");
            button.offset({ x: 0, y: 2, z: 2 }).setType("air");
            button.dimension.spawnEntity("ldns:yy", button.location);
        }
        else if (button.offset({ x: 0, y: 0, z: 1 }).typeId === "minecraft:redstone_block" &&
            button.offset({ x: 0, y: 0, z: -1 }).typeId === "minecraft:nether_wart_block" &&
            button.offset({ x: 0, y: 0, z: 2 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: 0, z: -2 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: 1, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: -1, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: -1, z: 2 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: -1, z: -2 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: 1, z: 2 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: 1, z: -2 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: 2, z: 2 }).typeId === "minecraft:carved_pumpkin" &&
            button.offset({ x: 0, y: 2, z: -2 }).typeId === "minecraft:carved_pumpkin") {
            button.dimension.spawnParticle("ldns:error_particle", button.location);
            await system.waitTicks(20 * 2.5);
            button.setType("air");
            button.offset({ x: 0, y: 0, z: 1 }).setType("air");
            button.offset({ x: 0, y: 0, z: -1 }).setType("air");
            button.offset({ x: 0, y: 0, z: 2 }).setType("air");
            button.offset({ x: 0, y: 0, z: -2 }).setType("air");
            button.offset({ x: 0, y: 1, z: 0 }).setType("air");
            button.offset({ x: 0, y: -1, z: 0 }).setType("air");
            button.offset({ x: 0, y: -1, z: 2 }).setType("air");
            button.offset({ x: 0, y: -1, z: -2 }).setType("air");
            button.offset({ x: 0, y: 1, z: 2 }).setType("air");
            button.offset({ x: 0, y: 1, z: -2 }).setType("air");
            button.offset({ x: 0, y: 2, z: 2 }).setType("air");
            button.offset({ x: 0, y: 2, z: -2 }).setType("air");
            button.dimension.spawnEntity("ldns:yy", button.location);
        }
        else if (button.offset({ x: -1, y: 0, z: 0 }).typeId === "minecraft:redstone_block" &&
            button.offset({ x: 1, y: 0, z: 0 }).typeId === "minecraft:nether_wart_block" &&
            button.offset({ x: -2, y: 0, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: 2, y: 0, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: 1, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: -1, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: -2, y: -1, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: 2, y: -1, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: -2, y: 1, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: 2, y: 1, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: -2, y: 2, z: 0 }).typeId === "minecraft:carved_pumpkin" &&
            button.offset({ x: 2, y: 2, z: 0 }).typeId === "minecraft:carved_pumpkin") {
            button.dimension.spawnParticle("ldns:error_particle", button.location);
            await system.waitTicks(20 * 2.5);
            button.setType("air");
            button.offset({ x: -1, y: 0, z: 0 }).setType("air");
            button.offset({ x: 1, y: 0, z: 0 }).setType("air");
            button.offset({ x: -2, y: 0, z: 0 }).setType("air");
            button.offset({ x: 2, y: 0, z: 0 }).setType("air");
            button.offset({ x: 0, y: 1, z: 0 }).setType("air");
            button.offset({ x: 0, y: -1, z: 0 }).setType("air");
            button.offset({ x: -2, y: -1, z: 0 }).setType("air");
            button.offset({ x: 2, y: -1, z: 0 }).setType("air");
            button.offset({ x: -2, y: 1, z: 0 }).setType("air");
            button.offset({ x: 2, y: 1, z: 0 }).setType("air");
            button.offset({ x: -2, y: 2, z: 0 }).setType("air");
            button.offset({ x: 2, y: 2, z: 0 }).setType("air");
            button.dimension.spawnEntity("ldns:yy", button.location);
        }
        else if (button.offset({ x: 1, y: 0, z: 0 }).typeId === "minecraft:redstone_block" &&
            button.offset({ x: -1, y: 0, z: 0 }).typeId === "minecraft:nether_wart_block" &&
            button.offset({ x: 2, y: 0, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: -2, y: 0, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: 1, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: 0, y: -1, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: 2, y: -1, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: -2, y: -1, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: 2, y: 1, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: -2, y: 1, z: 0 }).typeId === "ldns:error_block" &&
            button.offset({ x: 2, y: 2, z: 0 }).typeId === "minecraft:carved_pumpkin" &&
            button.offset({ x: -2, y: 2, z: 0 }).typeId === "minecraft:carved_pumpkin") {
            button.dimension.spawnParticle("ldns:error_particle", button.location);
            await system.waitTicks(20 * 2.5);
            button.setType("air");
            button.offset({ x: 1, y: 0, z: 0 }).setType("air");
            button.offset({ x: -1, y: 0, z: 0 }).setType("air");
            button.offset({ x: 2, y: 0, z: 0 }).setType("air");
            button.offset({ x: -2, y: 0, z: 0 }).setType("air");
            button.offset({ x: 0, y: 1, z: 0 }).setType("air");
            button.offset({ x: 0, y: -1, z: 0 }).setType("air");
            button.offset({ x: 2, y: -1, z: 0 }).setType("air");
            button.offset({ x: -2, y: -1, z: 0 }).setType("air");
            button.offset({ x: 2, y: 1, z: 0 }).setType("air");
            button.offset({ x: -2, y: 1, z: 0 }).setType("air");
            button.offset({ x: 2, y: 2, z: 0 }).setType("air");
            button.offset({ x: -2, y: 2, z: 0 }).setType("air");
            button.dimension.spawnEntity("ldns:yy", button.location);
        }
    }
});

// 繝｡繝｢繝ｪ繝ｼ繝ｬ繧､繝?Φ繧ｷ繝ｼ繧ｨ繝ｩ繝ｼ

// テスト用
/**
world.beforeEvents.chatSend.subscribe((e) => {
    if (e.message === "tests") {
        system.run(() => {
            world.getPlayers().forEach(async (v, i, a) => {
                v.playSound("ldns.time_mad");
                console.info("We is cursed");
                for (let inter = 0; inter < 160; inter++) {
                    let titletextr = random(0, 6);
                    switch (titletextr) {
                        case 0:
                            v.onScreenDisplay.setTitle("あなたは呪われてない", { stayDuration: 2, fadeInDuration: 0, fadeOutDuration: 0, subtitle: String(random(0, 999999999)) });
                            break;
                        case 1:
                            v.onScreenDisplay.setTitle("あなたは呪われている", { stayDuration: 2, fadeInDuration: 0, fadeOutDuration: 0, subtitle: String(random(0, 999999999)) });
                            break;
                        case 2:
                            v.onScreenDisplay.setTitle("縺ゅ↑縺溷測繧上ｌ縺ｦ", { stayDuration: 2, fadeInDuration: 0, fadeOutDuration: 0, subtitle: String(random(0, 999999999)) });
                            break;
                        case 3:
                            v.onScreenDisplay.setTitle("縺ゅ↑縺溷測繧上ｌ縺ｾ", { stayDuration: 2, fadeInDuration: 0, fadeOutDuration: 0, subtitle: String(random(0, 999999999)) });
                            break;
                        case 4:
                            v.onScreenDisplay.setTitle("We is Cursed.", { stayDuration: 2, fadeInDuration: 0, fadeOutDuration: 0, subtitle: String(random(0, 999999999)) });
                            break;
                        case 5:
                            v.onScreenDisplay.setTitle("They am Cursed.", { stayDuration: 2, fadeInDuration: 0, fadeOutDuration: 0, subtitle: String(random(0, 999999999)) });
                            break;
                    }
                    world.setTimeOfDay(random(1, 23999));
                    await system.waitTicks(1);
                }
            });
        });
    }
    else if (e.message === "tests2") {
        system.run(() => {
            world.getPlayers().forEach(async (v, i, a) => {
                const randp = random(0, 6);
                const randps = random(0, a.length);
                const psplayer = a[randps];
                const items = random(0, 2);
                if (a.length <= 1 || psplayer === v) {
                    const dummyname = names[random(0, names.length)];
                    switch (randp) {
                        case 0:
                            world.sendMessage("<" + v.name + "> " + "Hello?, " + dummyname);
                            break;
                        case 1:
                            world.sendMessage("<" + v.name + "> " + dummyname + ", Are they cursed?");
                            break;
                        case 2:
                            world.sendMessage("<" + v.name + "> " + dummyname + ", What do you think?");
                            break;
                        case 3:
                            world.sendMessage("<" + v.name + "> " + "Have you become 縺ゅｌ?");
                            break;
                        case 4:
                            world.sendMessage("<" + v.name + "> " + dummyname + ", what's wrong?");
                            break;
                        case 5:
                            world.sendMessage("<" + v.name + "> " + dummyname + "'s Error Computer Information:\n CEU: Erutel Corse i6 666K 6Curse 6Curshreads 6.66GHz\n ERM: DDR6-6666 66GB\n Errorcards: Errvidia Gerrorforce ETX 666 Ei 6GB\n ES: Errorsoft Errdows 666");
                            break;
                    }
                }
                else {
                    switch (randp) {
                        case 0:
                            world.sendMessage("<" + v.name + "> " + "Hello?, " + psplayer.name);
                            await system.waitTicks(20 * 5);
                            v.teleport(psplayer.location);
                            break;
                        case 1:
                            world.sendMessage("<" + v.name + "> " + psplayer.name + ", Are they cursed?");
                            await system.waitTicks(20 * 3);
                            switch (items) {
                                case 0:
                                    psplayer.runCommand("give @s ldns:error_ingot");
                                    break;
                                case 1:
                                    psplayer.runCommand("give @s ldns:heavy_stone");
                                    break;
                            }
                            break;
                        case 2:
                            world.sendMessage("<" + v.name + "> " + psplayer.name + ", What do you think?");
                            await system.waitTicks(20 * 3);
                            psplayer.runCommand("give @s ldns:cursed_soul");
                            break;
                        case 3:
                            world.sendMessage("<" + v.name + "> " + "Have you become 縺ゅｌ?");
                            break;
                        case 4:
                            world.sendMessage("<" + v.name + "> " + psplayer.name + ", what's wrong?");
                            await system.waitTicks(20 * 3);
                            switch (items) {
                                case 0:
                                    psplayer.runCommand("give @s ldns:ld5987");
                                    break;
                                case 1:
                                    psplayer.runCommand("give @s ldns:dn3895");
                                    break;
                            }
                            break;
                        case 5:
                            world.sendMessage("<" + v.name + "> " + psplayer.name + "'s Error Computer Information:\n CEU: Erutel Corse i6 666K 6Curse 6Curshreads 6.66GHz\n ERM: DDR6-6666 66GB\n Errorcards: Errvidia Gerrorforce ETX 666 Ei 6GB\n ES: Errorsoft Errdows 666");
                            await system.waitTicks(20 * 3);
                            psplayer.addExperience(66);
                            break;
                    }
                }
            });
        });
    }
});
*/