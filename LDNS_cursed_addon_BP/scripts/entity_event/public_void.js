import { Entity, Player, world } from "@minecraft/server";
import { random } from '../util';


world.afterEvents.entityHitEntity.subscribe((e) => {
    if (e.damagingEntity.typeId === "ldns:public_void") {
        if (!(e.hitEntity instanceof Player)) { return };
        public_void_event(e.damagingEntity, e.hitEntity);
    }
});
// PublicVoidが攻撃された時のイベント
world.afterEvents.entityHurt.subscribe((e) => {
    if (e.hurtEntity.typeId === "ldns:public_void") {
        if (!(e.damageSource.damagingEntity instanceof Player)) { return };
        public_void_event(e.hurtEntity, e.damageSource.damagingEntity);
    }
});

/**
 * 
 * @param {Entity} entity 
 * @param {Player} player 
 */
function public_void_event(entity, player){
    if (!(player instanceof Player)) { return };
    if (random(0, 48) == 0) {
        let kickcommand = player.runCommand("kick " + player.name + " §cI am you maybe...I am you maybe...I am you maybe...I am you maybe...");
        if(kickcommand.successCount == 0){
            player.kill();
        }
        player.playSound("ldns.publicvoid");
    }
}