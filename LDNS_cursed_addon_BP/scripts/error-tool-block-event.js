import { Block, Direction, EnchantmentType, EquipmentSlot, GameMode, ItemStack, Player, system, world } from "@minecraft/server";

world.beforeEvents.worldInitialize.subscribe((event) => {
    // Error斧の時
    event.itemComponentRegistry.registerCustomComponent("ldns:error_axe_c", {
        // エンティティを殴ったとき
        onHitEntity(e) {
            const { attackingEntity, hadEffect, hitEntity, itemStack } = e;
            if (!(attackingEntity instanceof Player)) return;
            // アイテム耐久値の関数
            durabilitys(attackingEntity, itemStack);
        },
        // ブロックを壊したとき
        onMineBlock(e) {
            const { block, itemStack, minedBlockPermutation, source } = e;
            if (!(source instanceof Player)) return;
            // アイテム耐久値の関数
            durabilitys(source, itemStack);
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
            // アイテム耐久値の関数
            durabilitys(attackingEntity, itemStack);
        },
        // ブロックを壊したとき
        onMineBlock(e) {
            const { block, itemStack, minedBlockPermutation, source } = e;
            if (!(source instanceof Player)) return;
            // アイテム耐久値の関数
            durabilitys(source, itemStack);
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
            // アイテム耐久値の関数
            durabilitys(attackingEntity, itemStack);
        },
        // ブロックを壊したとき
        onMineBlock(e) {
            const { block, itemStack, minedBlockPermutation, source } = e;
            if (!(source instanceof Player)) return;
            // アイテム耐久値の関数
            durabilitys(source, itemStack);
        }
    });
    // Errorシャベルの時
    event.itemComponentRegistry.registerCustomComponent("ldns:error_shovel_c", {
        // エンティティを殴ったとき
        onHitEntity(e) {
            const { attackingEntity, hadEffect, hitEntity, itemStack } = e;
            if (!(attackingEntity instanceof Player)) return;
            // アイテム耐久値の関数
            durabilitys(attackingEntity, itemStack);
        },
        // ブロックを壊したとき
        onMineBlock(e) {
            const { block, itemStack, minedBlockPermutation, source } = e;
            if (!(source instanceof Player)) return;
            // アイテム耐久値の関数
            durabilitys(source, itemStack);
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
            // アイテム耐久値の関数
            durabilitys(attackingEntity, itemStack);
        },
        onMineBlock(e) {
            const { block, itemStack, minedBlockPermutation, source } = e;
            if (!(source instanceof Player)) return;
            // アイテム耐久値の関数
            durabilitys(source, itemStack);
        }
    });
    // Entity787の鎌の時
    event.itemComponentRegistry.registerCustomComponent("ldns:entity787_scythe_c", {
        // エンティティを殴ったとき
        onHitEntity(e) {
            const { attackingEntity, hadEffect, hitEntity, itemStack } = e;
            if (!(attackingEntity instanceof Player)) return;
            // アイテム耐久値の関数
            durabilitys(attackingEntity, itemStack);
        },
        // 右クリックしたとき
        onUse(e) {
            const { itemStack, source } = e;
            source.playSound("fire.ignite");
            source.playSound("mob.witch.throw");
            // 電波動を出す
            const scythe_bullets = source.dimension.spawnEntity("ldns:scythe_bullet", { x: source.location.x + (source.getViewDirection().x * 2), y: source.location.y + 3, z: source.location.z + (source.getViewDirection().z * 3) });
            const projectiles = scythe_bullets.getComponent("minecraft:projectile");
            projectiles.airInertia = 1.15;
            projectiles.liquidInertia = 1.15;
            projectiles.gravity = 0.01;
            projectiles?.shoot({ x: source.getViewDirection().x * 2, y: source.getViewDirection().y * 2, z: source.getViewDirection().z * 2 });
            // アイテム耐久値の関数
            durabilitys(source, itemStack);
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
        // アイテム耐久値の関数
        durabilitys(player, itemStack);
    }
    if (itemStack?.typeId == "ldns:error_hoe") {
        // 音を鳴らす
        player.playSound("use.gravel");
        // アイテム耐久値の関数
        durabilitys(player, itemStack);
    }
    if (itemStack?.typeId == "ldns:error_shovel") {
        // 音を鳴らす
        player.playSound("use.grass");
        // アイテム耐久値の関数
        durabilitys(player, itemStack);
    }
});

/**
 * 
 * @param {Player} player 
 * @param {ItemStack} itemStack 
 */
function durabilitys(player, itemStack) {
    // クリエイティブ時のみ耐久値が減るのを防ぐ
    if (player.getGameMode() !== GameMode.creative) {
        let itemdurability = itemStack.getComponent("durability");
        // 壊れた時
        if (itemdurability.damage >= (itemdurability.maxDurability - 1)) {
            player.playSound("random.break", { pitch: 1, location: player.location, volume: 1 });
            player.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, new ItemStack("minecraft:air", 1));
        }
        // 通常時
        else {
            // 耐久力エンチャントがついているとき
            if (itemStack.getComponent("enchantable").hasEnchantment("minecraft:unbreaking")) {
                let itemunbreakinglevel = itemStack.getComponent("enchantable").getEnchantment("minecraft:unbreaking").level;
                itemdurability.damage += Number(Math.round(Math.random() * 100) <= itemdurability.getDamageChance(itemunbreakinglevel));
            }
            // ついていない場合
            else {
                itemdurability.damage += 1;
            }
            // 更新
            player.getComponent("equippable").setEquipment(EquipmentSlot.Mainhand, itemStack);
        }
    }
}