import { Block, Direction, EquipmentSlot, GameMode, Player, system, world } from "@minecraft/server";

world.beforeEvents.worldInitialize.subscribe((event) => {
    // Error斧の時
    event.itemComponentRegistry.registerCustomComponent("ldns:error_axe_c", {
        // エンティティを殴ったとき
        onHitEntity(e) {
            const { attackingEntity, hadEffect, hitEntity, itemStack } = e;
            if (!(attackingEntity instanceof Player)) return;
            // クリエイティブ時のみ耐久値が減るのを防ぐ
            if (attackingEntity.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage += 1;
                attackingEntity.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        },
        // ブロックを壊したとき
        onMineBlock(e) {
            const { block, itemStack, minedBlockPermutation, source } = e;
            if (!(source instanceof Player)) return;
            // クリエイティブ時のみ耐久値が減るのを防ぐ
            if (source.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage += 1;
                source.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        },
        /**
        // ブロック上で右クリックしたとき
        onUseOn(e) {
            const { block, source, itemStack } = e;
            if (!(source instanceof Player)) return;
            // クリエイティブ時のみ耐久値が減るのを防ぐ
            if (source.getGameMode() !== GameMode.creative && block.hasTag("wood") && block.hasTag("log")) {
                // 音を鳴らす
                source.playSound("use.wood");
                let item = itemStack.getComponent("durability");
                item.damage += 1;
                source.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        }
        */
    });
    // Error鍬の時
    event.itemComponentRegistry.registerCustomComponent("ldns:error_hoe_c", {
        // エンティティを殴ったとき
        onHitEntity(e) {
            const { attackingEntity, hadEffect, hitEntity, itemStack } = e;
            if (!(attackingEntity instanceof Player)) return;
            // クリエイティブ時のみ耐久値が減るのを防ぐ
            if (attackingEntity.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage += 1;
                attackingEntity.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        },
        // ブロックを壊したとき
        onMineBlock(e) {
            const { block, itemStack, minedBlockPermutation, source } = e;
            if (!(source instanceof Player)) return;
            // クリエイティブ時のみ耐久値が減るのを防ぐ
            if (source.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage += 1;
                source.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        },
        /**
        // ブロック上で右クリックしたとき
        onUseOn(e) {
            const { block, blockFace, source, itemStack } = e;
            if (!(source instanceof Player)) return;
            // クリエイティブ時のみ耐久値が減るのを防ぐ
            if (source.getGameMode() !== GameMode.creative && block.hasTag("grass") && blockFace == Direction.Up) {
                // 音を鳴らす
                source.playSound("use.gravel");
                let item = itemStack.getComponent("durability");
                item.damage += 1;
                source.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        }
        */
    });
    // Errorツルハシの時
    event.itemComponentRegistry.registerCustomComponent("ldns:error_pickaxe_c", {
        // エンティティを殴ったとき
        onHitEntity(e) {
            const { attackingEntity, hadEffect, hitEntity, itemStack } = e;
            if (!(attackingEntity instanceof Player)) return;
            // クリエイティブ時のみ耐久値が減るのを防ぐ
            if (attackingEntity.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage += 1;
                // 更新
                attackingEntity.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        },
        // ブロックを壊したとき
        onMineBlock(e) {
            const { block, itemStack, minedBlockPermutation, source } = e;
            if (!(source instanceof Player)) return;
            // クリエイティブ時のみ耐久値が減るのを防ぐ
            if (source.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage += 1;
                // 更新
                source.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        }
    });
    // Errorシャベルの時
    event.itemComponentRegistry.registerCustomComponent("ldns:error_shovel_c", {
        // エンティティを殴ったとき
        onHitEntity(e) {
            const { attackingEntity, hadEffect, hitEntity, itemStack } = e;
            if (!(attackingEntity instanceof Player)) return;
            // クリエイティブ時のみ耐久値が減るのを防ぐ
            if (attackingEntity.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage += 1;
                // 更新
                attackingEntity.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        },
        // ブロックを壊したとき
        onMineBlock(e) {
            const { block, itemStack, minedBlockPermutation, source } = e;
            if (!(source instanceof Player)) return;
            // クリエイティブ時のみ耐久値が減るのを防ぐ
            if (source.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage += 1;
                // 更新
                source.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        },
        /**
        // ブロック上で右クリックしたとき
        onUseOn(e) {
            const { block, blockFace, source, itemStack } = e;
            if (!(source instanceof Player)) return;
            // 音を鳴らす
            source.playSound("use.grass");
            // クリエイティブ時のみ耐久値が減るのを防ぐ
            if (source.getGameMode() !== GameMode.creative && block.typeId == "minecraft:grass" && blockFace == Direction.Up) {
                let item = itemStack.getComponent("durability");
                item.damage += 1;
                // 更新
                source.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        }
        */
    });
    // Error剣の時
    event.itemComponentRegistry.registerCustomComponent("ldns:error_sword_c", {
        // エンティティを殴ったとき
        onHitEntity(e) {
            const { attackingEntity, hadEffect, hitEntity, itemStack } = e;
            if (!(attackingEntity instanceof Player)) return;
            // クリエイティブ時のみ耐久値が減るのを防ぐ
            if (attackingEntity.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage += 1;
                // 更新
                attackingEntity.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        },
        onMineBlock(e) {
            const { block, itemStack, minedBlockPermutation, source } = e;
            if (!(source instanceof Player)) return;
            // クリエイティブ時のみ耐久値が減るのを防ぐ
            if (source.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage += 1;
                // 更新
                source.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        }
    });
    // Entity787の鎌の時
    event.itemComponentRegistry.registerCustomComponent("ldns:entity787_scythe_c", {
        // エンティティを殴ったとき
        onHitEntity(e) {
            const { attackingEntity, hadEffect, hitEntity, itemStack } = e;
            if (!(attackingEntity instanceof Player)) return;
            // クリエイティブ時のみ耐久値が減るのを防ぐ
            if (attackingEntity.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage += 1;
                // 更新
                attackingEntity.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
            }
        },
        // 右クリックしたとき
        onUse(e) {
            const { itemStack, source } = e;
            // クリエイティブ時のみ耐久値が減るのを防ぐ
            if (source.getGameMode() !== GameMode.creative) {
                let item = itemStack.getComponent("durability");
                item.damage += 1;
            }
            source.playSound("fire.ignite");
            source.playSound("mob.witch.throw");
            // 電波動を出す
            const scythe_bullets = source.dimension.spawnEntity("ldns:scythe_bullet", { x: source.location.x + (source.getViewDirection().x * 2), y: source.location.y + 3, z: source.location.z + (source.getViewDirection().z * 3) });
            const projectiles = scythe_bullets.getComponent("minecraft:projectile");
            projectiles.airInertia = 1.15;
            projectiles.liquidInertia = 1.15;
            projectiles.gravity = 0.01;
            projectiles?.shoot({ x: source.getViewDirection().x * 2, y: source.getViewDirection().y * 2, z: source.getViewDirection().z * 2 });
            // 更新
            source.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
        }
    });
    // 松明を壊すブロック
    event.blockComponentRegistry.registerCustomComponent("ldns:replace_torch_block_c", {
        onTick: (e) => {
            const { block, dimension } = e;
            // 松明を壊すコマンド
            dimension.runCommand("fill " + block.x + " " + block.y + " " + block.z + " " + block.x + " " + block.y + " " + block.z + " " + " air 0 destroy");
        }
    });
    // ボマーのダンジョンのブロック
    event.blockComponentRegistry.registerCustomComponent("ldns:bomber_dungeon_player_checker_c", {
        onTick: (e) => {
            const { block, dimension } = e;
            // コマンド
            dimension.runCommand("summon ldns:bomber_dungeon_player_checker_entity " + block.x + " " + (block.y - 1) + " " + block.z);
        }
    });
    // 爆発深層岩の時
    event.blockComponentRegistry.registerCustomComponent("ldns:fake_deepslate_explosive_c", {
        // 壊したとき
        onPlayerDestroy: (e) => {
            const { player, block, dimension, destroyedBlockPermutation } = e;
            // 爆発コマンド
            dimension.runCommand("summon ldns:entity.fake_stone_explosive " + + block.x + " " + block.y + " " + block.z);
        }
    });
    // 爆発石の時
    event.blockComponentRegistry.registerCustomComponent("ldns:fake_stone_explosive_c", {
        // 壊したとき
        onPlayerDestroy: (e) => {
            const { player, block, dimension, destroyedBlockPermutation } = e;
            // 爆発コマンド
            dimension.runCommand("summon ldns:entity.fake_stone_explosive " + + block.x + " " + block.y + " " + block.z);
        }
    });
});

world.afterEvents.playerInteractWithBlock.subscribe((e) => {
    const { block, blockFace, itemStack, player } = e;
    if (itemStack?.typeId == "ldns:error_axe") {
        // 音を鳴らす
        player.playSound("use.wood");
        // クリエイティブ時のみ耐久値が減るのを防ぐ
        if (player.getGameMode() !== GameMode.creative) {
            let item = itemStack.getComponent("durability");
            item.damage += 1;
            // 更新
            player.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
        }
    }
    if (itemStack?.typeId == "ldns:error_hoe") {
        // 音を鳴らす
        player.playSound("use.gravel");
        // クリエイティブ時のみ耐久値が減るのを防ぐ
        if (player.getGameMode() !== GameMode.creative) {
            let item = itemStack.getComponent("durability");
            item.damage += 1;
            // 更新
            player.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
        }
    }
    if (itemStack?.typeId == "ldns:error_shovel") {
        // 音を鳴らす
        player.playSound("use.grass");
        // クリエイティブ時のみ耐久値が減るのを防ぐ
        if (player.getGameMode() !== GameMode.creative) {
            let item = itemStack.getComponent("durability");
            item.damage += 1;
            // 更新
            player.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
        }
    }
});