import { system, world } from "@minecraft/server";
import { random } from "./util";
let noneint = 0;
let kanasibari;
let playerlocation;
world.afterEvents.dataDrivenEntityTrigger.subscribe(async (events) => {
    system.run(async () => {
        if (events.entity.typeId === "ldns:nonebrain") {
            if (events.eventId === "ldns:nonebrain_despawn_event") {
                noneint++;
                // ノンブラインがデスポーンした数が一定数を超えたとき
                if (noneint >= 2666) {
                    // 様々なイベントが起こる
                    world.getPlayers().forEach(async (v, i, a) => {
                        v.playSound("ldns.beep");
                        v.onScreenDisplay.setTitle("nonebrain");
                        await system.waitTicks(20 * 4);
                        playerlocation = v.location;
                        kanasibari = system.runInterval(async () => {
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
                    });
                    await system.waitTicks(20 * 12);
                    console.info("We is cursed");
                    for (let inter = 0; inter < 160; inter++) {
                        let titletextr = random(0, 6);
                        world.getPlayers().forEach(async (v, i, a) => {
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
                        });
                        world.setTimeOfDay(random(1, 23999));
                        await system.waitTicks(1);
                    }
                    world.getPlayers().forEach(async (v, i, a) => {
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
                    noneint = 0;
                }
            }
        }
    });
});