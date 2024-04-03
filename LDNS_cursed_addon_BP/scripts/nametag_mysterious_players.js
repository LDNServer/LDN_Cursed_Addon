import { world } from '@minecraft/server';
import { random } from './util';
world.afterEvents.entitySpawn.subscribe((entityEvent) => {
    if (entityEvent.entity.typeId == "ldns:mysterious_players") {
        const random_name = "mc" + random(0, 99999999).toString().padStart(8, "0");
        entityEvent.entity.nameTag = random_name;
    }
});
