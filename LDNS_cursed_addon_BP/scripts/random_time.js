import { TimeOfDay, system, world } from '@minecraft/server';
import * as config from './config';
import * as util from './util';

let dayChecked = false;
let nightChecked = false;
system.runInterval(() => {
  const time = world.getTimeOfDay();

  // at day
  if (!dayChecked && 0 < time && time < TimeOfDay.Night) {
    nightChecked = false;
    if (util.random(0, config.skipDayRate - 1) === 0) {
      world.setTimeOfDay(TimeOfDay.Night);
    } else {
      dayChecked = true;
    }
  }

  if (!nightChecked && TimeOfDay.Night < time) {
    dayChecked = false;
    if (util.random(0, config.skipNightRate - 1) === 0) {
      world.setTimeOfDay(TimeOfDay.Sunrise);
    } else {
      nightChecked = true;
    }
  }
}, 20);

// 譎る俣繧貞､ｧ縺帙▽縺ｫ