import { EquipmentSlot, GameMode, Player, world } from "@minecraft/server";

world.beforeEvents.worldInitialize.subscribe((event) => {
    event.itemComponentRegistry.registerCustomComponent("ldns:error_axe_c", {
        onHitEntity(e) {
            const { attackingEntity, hadEffect, hitEntity, itemStack } = e;
            if (!(attackingEntity instanceof Player)) return;
            if (attackingEntity.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage = 1;
                attackingEntity.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        },
        onMineBlock(e) {
            const { block, itemStack, minedBlockPermutation, source } = e;
            if (!(source instanceof Player)) return;
            if (source.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage = 1;
                source.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        },
        onUse(e) {
            const { itemStack, source } = e;
            source.playSound("use.wood");
            if (source.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage = 1;
                source.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        }
    });
    event.itemComponentRegistry.registerCustomComponent("ldns:error_hoe_c", {
        onHitEntity(e) {
            const { attackingEntity, hadEffect, hitEntity, itemStack } = e;
            if (!(attackingEntity instanceof Player)) return;
            if (attackingEntity.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage = 1;
                attackingEntity.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        },
        onMineBlock(e) {
            const { block, itemStack, minedBlockPermutation, source } = e;
            if (!(source instanceof Player)) return;
            if (source.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage = 1;
                source.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        },
        onUse(e) {
            const { itemStack, source } = e;
            source.playSound("use.gravel");
            if (source.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage = 1;
                source.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        }
    });
    event.itemComponentRegistry.registerCustomComponent("ldns:error_pickaxe_c", {
        onHitEntity(e) {
            const { attackingEntity, hadEffect, hitEntity, itemStack } = e;
            if (!(attackingEntity instanceof Player)) return;
            if (attackingEntity.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage = 1;
                attackingEntity.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        },
        onMineBlock(e) {
            const { block, itemStack, minedBlockPermutation, source } = e;
            if (!(source instanceof Player)) return;
            if (source.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage = 1;
                source.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        }
    });
    event.itemComponentRegistry.registerCustomComponent("ldns:error_shovel_c", {
        onHitEntity(e) {
            const { attackingEntity, hadEffect, hitEntity, itemStack } = e;
            if (!(attackingEntity instanceof Player)) return;
            if (attackingEntity.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage = 1;
                attackingEntity.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        },
        onMineBlock(e) {
            const { block, itemStack, minedBlockPermutation, source } = e;
            if (!(source instanceof Player)) return;
            if (source.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage = 1;
                source.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        },
        onUse(e) {
            const { itemStack, source } = e;
            source.playSound("use.grass");
            if (source.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage = 1;
                source.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        }
    });
    event.itemComponentRegistry.registerCustomComponent("ldns:error_sword_c", {
        onHitEntity(e) {
            const { attackingEntity, hadEffect, hitEntity, itemStack } = e;
            if (!(attackingEntity instanceof Player)) return;
            if (attackingEntity.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage = 1;
                attackingEntity.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        },
        onMineBlock(e) {
            const { block, itemStack, minedBlockPermutation, source } = e;
            if (!(source instanceof Player)) return;
            if (source.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage = 1;
                source.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        }
    });
    event.itemComponentRegistry.registerCustomComponent("ldns:entity787_scythe_c", {
        onHitEntity(e) {
            const { attackingEntity, hadEffect, hitEntity, itemStack } = e;
            if (!(attackingEntity instanceof Player)) return;
            if (attackingEntity.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage = 1;
                attackingEntity.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        },
        onUse(e) {
            const { itemStack, source } = e;
            if (source.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage = 1;
                source.playSound("fire.ignite");
                source.playSound("mob.witch.throw");
            }
            const scythe_bullets = source.dimension.spawnEntity("ldns:scythe_bullet", { x: source.location.x + (source.getViewDirection().x * 2), y: source.location.y + 3, z: source.location.z + (source.getViewDirection().z * 3) });
            const projectiles = scythe_bullets.getComponent("minecraft:projectile");
            projectiles.airInertia = 1.15;
            projectiles.liquidInertia = 1.15;
            projectiles.gravity = 0.01;
            projectiles?.shoot({ x: source.getViewDirection().x * 2, y: source.getViewDirection().y * 2, z: source.getViewDirection().z * 2 });
            source.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
        }
    });
    event.blockTypeRegistry.registerCustomComponent("ldns:replace_torch_block_c", {
        onTick: (e) => {
            const { block, dimension } = e;
            dimension.runCommand("fill " + block.x + " " + block.y + " " + block.z + " " + block.x + " " + block.y + " " + block.z + " " + " air 0 destroy");
        }
    });
    event.blockTypeRegistry.registerCustomComponent("ldns:bomber_dungeon_player_checker_c", {
        onTick: (e) => {
            const { block, dimension } = e;
            dimension.runCommand("summon ldns:bomber_dungeon_player_checker_entity " + block.x + " " + (block.y - 1) + " " + block.z);
        }
    });
    event.blockTypeRegistry.registerCustomComponent("ldns:fake_deepslate_explosive_c", {
        onPlayerDestroy: (e) => {
            const { player, block, dimension, destroyedBlockPermutation } = e;
            dimension.runCommand("summon ldns:entity.fake_stone_explosive " + + block.x + " " + block.y + " " + block.z);
        }
    });
    event.blockTypeRegistry.registerCustomComponent("ldns:fake_stone_explosive_c", {
        onPlayerDestroy: (e) => {
            const { player, block, dimension, destroyedBlockPermutation } = e;
            dimension.runCommand("summon ldns:entity.fake_stone_explosive " + + block.x + " " + block.y + " " + block.z);
        }
    });
})