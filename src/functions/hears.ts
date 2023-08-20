/**
 * Telegraf Hears
 * =====================
 */
import bot from '@src/functions/telegraf'

/**
 * hears: any taxt
 * =====================
 * Listen any text user write
 *
 */
const text = async (): Promise<void> => {
	bot.on('text', (ctx) => {
		ctx.telegram.sendMessage(
			ctx.message.chat.id,
			`Your text --> ${ctx.update.message.text}`
		)
	})
}

export { text }
export default text
