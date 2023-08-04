tag @s[tag=ldns_no_chat] add ldns_temp1
tag @s[tag=!ldns_temp1] add ldns_no_chat
tag @s[tag=ldns_temp1] remove ldns_no_chat

tellraw @s[tag=ldns_temp1] {"rawtext":[{"translate":"message.ldns.enable_random_chat"}]}
tellraw @s[tag=ldns_no_chat] {"rawtext":[{"translate":"message.ldns.disable_random_chat"}]}

tag @s remove ldns_temp1