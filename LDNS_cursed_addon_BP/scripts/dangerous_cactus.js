import { EntityDamageCause, world } from '@minecraft/server';

world.afterEvents.entityHurt.subscribe(ev => {
  const { damageSource: { cause }, hurtEntity } = ev;

  if (cause === EntityDamageCause.contact) {
    hurtEntity.applyDamage(1000, { cause: EntityDamageCause.contact });
  }
});