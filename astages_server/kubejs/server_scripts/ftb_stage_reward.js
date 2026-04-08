// рабочий скрипт на смену эпохи через достижение

// Выдача каменного века

FTBQuestsEvents.completed('3E00475FA68C8ADF', event => { // 3E00475FA68C8ADF - ID квеста который отвечает за добавление эпохи игроку
    // функция получения имени игрока который инициировал выполнение квеста
    const player = event.player   
    // команда которая применяет нужную стадию игроку 
    // (stone_age - имя заранее определённой эпохи в файле astages.js)
    // event.server.runCommandSilent(`execute as ${player.username} run astages remove_all ${player.username}`)
    event.server.runCommandSilent(`execute as ${player.username} run astages add ${player.username} stone_age`)
    // event.server.tell('done') тестовая заглушка, в финальной версии не нужна
})

// Выдача индустриальной эпохи
FTBQuestsEvents.completed('3B6033FAED28429B', event => {  
    const player = event.player   
    event.server.runCommandSilent(`execute as ${player.username} run astages add ${player.username} steam_age`)
})

// Выдача сумеречного леса
FTBQuestsEvents.completed('5B07D75D8155E1E5', event => {  
    const player = event.player   
    event.server.runCommandSilent(`execute as ${player.username} run astages add ${player.username} twilight`)
})

// Выдача нефтяной эпохи
FTBQuestsEvents.completed('510004A25926780F', event => {  
    const player = event.player   
    event.server.runCommandSilent(`execute as ${player.username} run astages add ${player.username} oil_age`)
})

// Выдача космической эпохи
FTBQuestsEvents.completed('0994F9F379FC0CA2', event => {  
    const player = event.player   
    event.server.runCommandSilent(`execute as ${player.username} run astages add ${player.username} space_age`)
})

// Выдача военной эпохи
FTBQuestsEvents.completed('2567FD3748E33D02', event => {  
    const player = event.player   
    event.server.runCommandSilent(`execute as ${player.username} run astages add ${player.username} war_age`)
})