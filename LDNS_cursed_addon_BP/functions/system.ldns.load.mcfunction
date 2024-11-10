##load

scoreboard objectives add load dummy
scoreboard players add @a load 0

scoreboard objectives add exp_hc dummy
scoreboard players add @a exp_hc 0

##command

execute as @a[scores={load=0}] at @s run gamerule commandblockoutput false
execute as @a[scores={load=0}] at @s run gamerule sendcommandfeedback false
execute as @a[scores={load=0}] at @s run summon ldns:experimental_setting_checker ~ ~30 ~
tellraw @a[scores={load=60}] {"rawtext":[{"text":"新しい世界へようこそ！"}]}
tellraw @a[scores={load=60}] {"rawtext":[{"text":"カスタムバイオームの機能は有効にしましたか？この機能を有効にしていない場合、ワールドを作り直す必要があります。"}]}

execute as @a[scores={exp_hc=0}] at @s run tellraw @s[scores={load=60}] {"rawtext":[{"text":"[実験的機能] ホリデークリエイターの機能:§a無効"}]}
execute as @a[scores={exp_hc=0}] at @s run playsound random.levelup @s[scores={load=60}] ~ ~ ~ 2 1.8
execute as @a[scores={exp_hc=1}] at @s run tellraw @s[scores={load=60}] {"rawtext":[{"text":"[実験的機能] ホリデークリエイターの機能:§c有効"}]}
execute as @a[scores={exp_hc=1}] at @s run playsound random.toast @s[scores={load=60}] ~ ~ ~ 1

execute as @a[scores={exp_hc=1}] at @s run tellraw @s[scores={load=60}] {"rawtext":[{"text":"[エラー] ホリデークリエイターの機能が§c有効§rです。正常な動作にはホリデークリエイターの機能が無効である必要があります。"}]}

##load2
scoreboard players add @a[scores={load=0..60}] load 1
