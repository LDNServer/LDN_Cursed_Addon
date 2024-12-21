tag @a[tag=ldns_no_chat] add ldns_temp1
tag @a[tag=!ldns_temp1] add ldns_no_chat
tag @a[tag=ldns_temp1] remove ldns_no_chat

tellraw @a[tag=ldns_temp1] {"rawtext":[{"translate":"message.ldns.enable_random_chat"}]}
tellraw @a[tag=ldns_no_chat] {"rawtext":[{"translate":"message.ldns.disable_random_chat"}]}

tag @a remove ldns_temp1