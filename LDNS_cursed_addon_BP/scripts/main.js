// @ts-check
import { system, world } from '@minecraft/server';

import './random_effect';
import './dangerous_cactus';
import './random_time';

const timezoneOffset = 0;

system.runInterval(() => {
  let systemClock = world.scoreboard.getObjective('SystemClock');
  if (!systemClock) systemClock = world.scoreboard.addObjective('SystemClock');

  const d = new Date(Date.now() + ((new Date().getTimezoneOffset() + (timezoneOffset * 60)) * 60 * 1000));
  systemClock.setScore('day', d.getDate());
  systemClock.setScore('hour', d.getHours());
  systemClock.setScore('minute', d.getMinutes());
}, 20*60);