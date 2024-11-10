import * as mc from '@minecraft/server';

declare module '@minecraft/server' {
  interface Entity {
    getComponent<K extends keyof EntityComponentMap>(componentId: K): EntityComponentMap[K];
  }
}

interface EntityComponentMap {
  [mc.EntityHealthComponent.componentId]: mc.EntityHealthComponent;
  [mc.EntityEquippableComponent.componentId]: mc.EntityEquippableComponent;
  [mc.EntityVariantComponent.componentId]: mc.EntityVariantComponent;
}