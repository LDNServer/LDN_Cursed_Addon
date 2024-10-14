import { world } from '@minecraft/server';
import { random } from '../util';
world.afterEvents.entitySpawn.subscribe((entityEvent) => {
    if (entityEvent.entity.typeId == "ldns:mysterious_players") {
        // プレイヤーの名前を割り当て、小さい場合は0を
        const random_name = "mc" + random(0, 99999999).toString().padStart(8, "0");
        entityEvent.entity.nameTag = random_name;
    }
});

// 縺薙ｌ縺ｯ隱ｰ縺ｪ繧薙□繧阪≧