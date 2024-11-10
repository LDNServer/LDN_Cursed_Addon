#setup
scoreboard objectives add is_daytime dummy
scoreboard objectives add half_timer dummy

#timer
scoreboard players add @a half_timer 1
execute as @a[scores={half_timer=2..}] at @s run scoreboard players set @a half_timer 0

#long_night
execute as @r[scores={half_timer=1},c=1] at @s run execute as @s[scores={is_daytime=1}] at @s run time add -1

#debug
# execute as @a[scores={half_timer=1},c=1] at @s run execute as @s[scores={is_daytime=1}] at @s run title @s actionbar time-1

#このfunctionは常時実行されます
#このfunctionはcontroller.animation.ldns.long_night.jsonと連動しています
