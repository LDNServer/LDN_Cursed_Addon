// @ts-check

import { system, world } from '@minecraft/server';
import { MinecraftEffectTypes } from './lib/mojang-effect';
import * as util from './util';
import * as config from './config';

system.runInterval(() => {
  for (const player of world.getPlayers()) {
    // nTickに1回 m分の1の確率でeffect付与
    if (util.random(0, config.randomEffectRate - 1) === 0) {
      const effectId = util.randomValue(Object.values(MinecraftEffectTypes));
      const duration = util.random(config.randomEffectDuration[0], config.randomEffectDuration[1]);
      player.addEffect(effectId, duration);
    }
  }
}, config.randomEffectInterval);
