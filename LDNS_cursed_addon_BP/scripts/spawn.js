import { system, world } from "@minecraft/server";
import { random } from "./util";

const timezoneOffset = 0;

system.runInterval(() => {
    world.getPlayers().forEach((v, i, a) => {
        const rand = random(0, 46730);
        const d = new Date(Date.now() + ((new Date().getTimezoneOffset() + (timezoneOffset * 60)) * 60 * 1000));
        if (rand === 6) {
            if (d.getHours() <= 24 || d.getHours() >= 12) {
                world.getDimension(v.dimension.id).runCommand("tellraw @a {\"rawtext\":[{\"text\":\"If the hand §oholding§r the leg §3trembles§r, cut §lthe leg off.§r§§\"}]}");
                world.playSound("ldns.pp_spawn", { x: v.location.x + (v.getViewDirection().x * 2), y: v.location.y, z: v.location.z + (v.getViewDirection().z * 2) });
                world.playSound("ldns.ppyy_spawn", { x: v.location.x + (v.getViewDirection().x * 2), y: v.location.y, z: v.location.z + (v.getViewDirection().z * 2) });
                world.getDimension(v.dimension.id).spawnEntity("ldns:pp", { x: v.location.x + (v.getViewDirection().x * 2), y: v.location.y, z: v.location.z + (v.getViewDirection().z * 2) });
            }
            else if (d.getHours() <= 12 || d.getHours() >= 0) {
                world.getDimension(v.dimension.id).runCommand("tellraw @a {\"rawtext\":[{\"text\":\"I'm on your §lside§r, so I'll keep§l§o watching§r until that §6blood dries§r.\"}]}");
                world.playSound("ldns.yy_spawn", { x: v.location.x + (v.getViewDirection().x * 2), y: v.location.y, z: v.location.z + (v.getViewDirection().z * 2) });
                world.playSound("ldns.ppyy_spawn", { x: v.location.x + (v.getViewDirection().x * 2), y: v.location.y, z: v.location.z + (v.getViewDirection().z * 2) });
                world.getDimension(v.dimension.id).spawnEntity("ldns:yy", { x: v.location.x + (v.getViewDirection().x * 2), y: v.location.y, z: v.location.z + (v.getViewDirection().z * 2) });
            }
        }
        if (rand <= 86 || rand >= 80) {
            if (d.getHours() <= 24 || d.getHours() >= 12) v.runCommand("give @s ldns:dn3895");
            else if (d.getHours() <= 12 || d.getHours() >= 0) v.runCommand("give @s ldns:ld5987");
        }
        if (rand <= 676 || rand >= 666) world.getDimension(v.dimension.id).spawnEntity("ldns:attacker_nitwit_villager", { x: v.location.x + (v.getViewDirection().x * 2), y: v.location.y, z: v.location.z + (v.getViewDirection().z * 2) });
        if (rand <= 725 || rand >= 675) world.getDimension(v.dimension.id).spawnEntity("ldns:mysterious_players", { x: v.location.x + (v.getViewDirection().x * 2), y: v.location.y, z: v.location.z + (v.getViewDirection().z * 2) });
    });
}, 20 * 666);