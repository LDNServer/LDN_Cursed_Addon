##load

scoreboard objectives add load dummy
scoreboard players add @a load 0

scoreboard objectives add exp_hc dummy
scoreboard players add @a exp_hc 0

##command

execute @a[scores={load=0}] ~ ~ ~ gamerule commandblockoutput false
execute @a[scores={load=0}] ~ ~ ~ gamerule sendcommandfeedback false
execute @a[scores={load=0}] ~ ~ ~ summon ldns:experimental_setting_checker ~ ~30 ~
tellraw @a[scores={load=60}] {"rawtext":[{"text":"新しい世界へようこそ！"}]}
tellraw @a[scores={load=60}] {"rawtext":[{"text":"カスタムバイオームの機能は有効にしましたか？この機能を有効にしていない場合、ワールドを作り直す必要があります。"}]}

execute @a[scores={exp_hc=1}] ~ ~ ~ tellraw @s[scores={load=60}] {"rawtext":[{"text":"[実験的機能] ホリデークリエイターの機能:§a有効"}]}
execute @a[scores={exp_hc=1}] ~ ~ ~ playsound random.levelup @s[scores={load=60}] ~ ~ ~ 2 1.8
execute @a[scores={exp_hc=0}] ~ ~ ~ tellraw @s[scores={load=60}] {"rawtext":[{"text":"[実験的機能] ホリデークリエイターの機能:§c無効"}]}
execute @a[scores={exp_hc=0}] ~ ~ ~ playsound random.toast @s[scores={load=60}] ~ ~ ~ 1

execute @a[scores={exp_hc=0}] ~ ~ ~ tellraw @s[scores={load=60}] {"rawtext":[{"text":"[エラー] ホリデークリエイターの機能が§c無効§rです。正常な動作にはホリデークリエイターの機能が有効である必要があります。"}]}

##load2
scoreboard players add @a[scores={load=0..60}] load 1
