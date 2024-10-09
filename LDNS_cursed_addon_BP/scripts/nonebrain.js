import { Player, system, world } from "@minecraft/server";
import { random } from "./util";
let noneint = 0;
let nonebrainchat = String(random(10000000, 99999999));
let random_message = ["NONE縺輔ｓ縺ｯ鄒弱＠縺�☆縺ｰ繧峨＠縺�〒縺�", "縺薙ｓ縺ｫ縺｡縺ｯ縲√♀荵�＠縺ｶ繧翫〒縺吶�NONE縺輔ｓ縲�", "NONE縺ｯ譛ｬ蠖薙↓蟄伜惠縺吶ｋ縺ｮ縺�繧阪≧縺�...��"];
let random_message_int = random(0, 6);
world.afterEvents.dataDrivenEntityTrigger.subscribe(async (events) => {
    system.run(async () => {
        if (events.entity.typeId === "ldns:nonebrain") {
            if (events.eventId === "ldns:nonebrain_despawn_event") {
                noneint++;
                // ノンブラインがデスポーンした数が一定数を超えたとき
                if (noneint >= 533) {
                    nonebrain_despawn_events();
                    noneint = 0;
                }
            }
        }
    });
});

function nonebrain_despawn_events() {
    // 様々なイベントが起こる
    world.getPlayers().forEach(async (v, i, a) => {
        v.playSound("ldns.beep");
        v.onScreenDisplay.setTitle("nonebrain");
        await system.waitTicks(20 * 4);
        const playerlocation = v.location;
        const kanasibari = system.runInterval(async () => {
            v.teleport(playerlocation);
            v.playSound("ldns.errormob_glitch", { volume: 0.1, pitch: 0.666 });
            const { container } = v.getComponent("inventory");
            for (let i = 0; i < container.size; i++) {
                container.swapItems(i, random(0, container.size - 1), container);
            }
            v.selectedSlotIndex = random(0, 9);
            await system.waitTicks(1);
        });
        const rands = random(0, 2);
        const randh = random(0, 4);
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
            case 3:
                v.onScreenDisplay.setTitle("egn9");
                break;
        }
        await system.waitTicks(20 * 4);
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
        await system.waitTicks(20 * 4);
        v.playSound("ldns.time_mad");
        console.info("We is cursed");
        for (let i = 0; i < 160; i++) {
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
        await system.waitTicks(20 * 4);
        v.playSound("ldns.pp_spawn");
        v.playSound("ldns.yy_spawn");
        v.playSound("ldns.ppyy_spawn");
        v.onScreenDisplay.setTitle("ppse");
        await system.waitTicks(20 * 6);
        system.clearRun(kanasibari);
        for (i = 0; i < 120; i++) {
            v.teleport(playerlocation, { rotation: { x: random(0, 360), y: random(0, 360) } });
            v.playSound("ldns.errormob_glitch", { volume: 0.1, pitch: 0.666 });
            await system.waitTicks(1);
        }
        v.kill();
        v.runCommand("stopsound @s");
    });
}

// エンティティが死亡したとき
world.afterEvents.entityDie.subscribe(async (events) => {
    system.run(async () => {
        const { damageSource, deadEntity } = events;
        if (!(damageSource.damagingEntity instanceof Player)) return;
        if (deadEntity.typeId === "ldns:nonebrain") {
            const items = damageSource.damagingEntity.runCommand('testfor @s[hasitem={item=ldns:pendant_of_twilight}]').successCount;
            if (items >= 1 && damageSource.damagingEntity.hasTag("nonebrainchats")) {
                noneint = 0;
                damageSource.damagingEntity.playSound("random.totem", { pitch: 0.5, volume: 1.5 });
                damageSource.damagingEntity.runCommand("give @a ldns:cursed_soul 12");
                nonebrainchat = String(random(10000000, 99999999));
                random_message_int = random(0, 6);
                damageSource.damagingEntity.removeTag("nonebrainchats");
            }
        }
    });
});

system.runInterval(async () => {
    nonebrainchat = String(random(10000000, 99999999));
    random_message_int = random(0, 6);
}, 20 * 60);

world.beforeEvents.chatSend.subscribe(async (events) => {
    system.run(async () => {
        random_message.forEach(async (v, i, a) => {
            if (events.message === v) {
                if (random_message_int >= 3) {
                    world.sendMessage("oh");
                }
                else {
                    const messagesnone = random_message[random_message_int];
                    if (events.message === messagesnone) {
                        world.sendMessage(nonebrainchat);
                    }
                }
            }
        });
        if (events.message === nonebrainchat) {
            world.sendMessage("繝弱Φ繝悶Λ繧､繝ｳ: " + String(noneint));
            events.sender.addTag("nonebrainchats");
            await system.waitTicks(20 * 60);
            if (events.sender.hasTag("nonebrainchats")) {
                nonebrain_despawn_events();
            }
            events.sender.removeTag("nonebrainchats");
        }
    });
});