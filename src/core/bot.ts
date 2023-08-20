import * as command from '@src/functions/commands'
import * as hears from '@src/functions/hears'

/**
 * Start bot
 * =====================
 */
;(async () => {
	await command.quit()
	await command.start()
	await hears.text()
	await command.launch()
})()
