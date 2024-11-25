import { Player, system, world } from "@minecraft/server";
import { random } from "../util";
import { nonebrain_despawn_events, noneint_reset_event } from "./nonebrain_function";
let nonebrainchat = String(random(10000000, 99999999));
let random_message = ["NONE縺輔ｓ縺ｯ鄒弱＠縺�☆縺ｰ繧峨＠縺�〒縺�", "縺薙ｓ縺ｫ縺｡縺ｯ縲√♀荵�＠縺ｶ繧翫〒縺吶�NONE縺輔ｓ縲�", "NONE縺ｯ譛ｬ蠖薙↓蟄伜惠縺吶ｋ縺ｮ縺�繧阪≧縺�...��"];
let random_message_int = random(0, 6);
let tagevent = false;

world.afterEvents.dataDrivenEntityTrigger.subscribe(async (events) => {
    system.run(async () => {
        if (events.entity.typeId === "ldns:nonebrain") {
            if (events.eventId === "ldns:nonebrain_despawn_event") {
                let noneint = world.getDynamicProperty("noneint");
                if (noneint === undefined) {
                    world.setDynamicProperty("noneint", 1);
                }
                else if(events.entity.hasComponent("minecraft:scale")){
                    world.setDynamicProperty("noneint", noneint + 10);
                }
                else {
                    world.setDynamicProperty("noneint", noneint + 1);
                }
                // ノンブラインがデスポーンした数が一定数を超えたとき
                if (noneint >= 750) {
                    nonebrain_despawn_events();
                    world.setDynamicProperty("noneint", 0);
                }
            }
        }
    });
});

// エンティティが死亡したとき
world.afterEvents.entityDie.subscribe(async (events) => {
    system.run(async () => {
        const { damageSource, deadEntity } = events;
        if (!(damageSource.damagingEntity instanceof Player)) return;
        if (deadEntity.typeId === "ldns:nonebrain") {
            const items = damageSource.damagingEntity.runCommand('testfor @s[hasitem={item=ldns:pendant_of_twilight}]').successCount;
            if (items >= 1 && damageSource.damagingEntity.hasTag("nonebrainchats") && tagevent === true) {
                noneint_reset_event(damageSource.damagingEntity, nonebrainchat, random_message_int);
            }
        }
    });
});

system.runInterval(async () => {
    nonebrainchat = String(random(10000000, 99999999));
    random_message_int = random(0, 6);
}, 20 * 60);

export let nonebrain_chatsend = world.beforeEvents.chatSend.subscribe(async (events) => {
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
        if (events.message === nonebrainchat && tagevent === false) {
            let noneint = world.getDynamicProperty("noneint");
            world.sendMessage("繝弱Φ繝悶Λ繧､繝ｳ: " + String(noneint));
            events.sender.addTag("nonebrainchats");
            tagevent = true;
            await system.waitTicks(20 * 60);
            if (events.sender.hasTag("nonebrainchats") && tagevent === true) {
                nonebrain_despawn_events();
            }
            events.sender.removeTag("nonebrainchats");
            tagevent = false;
        }
    });
});