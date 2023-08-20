/**
 * Telegraf Commands
 * =====================
 */
import bot from '@src/functions/telegraf'

/**
 * command: /quit
 * =====================
 * If user exit from bot
 *
 */
const quit = async (): Promise<void> => {
	bot.command('quit', (ctx) => {
		ctx.telegram.leaveChat(ctx.message.chat.id)
		ctx.leaveChat()
	})
}

/**
 * command: /start
 * =====================
 * Send welcome message
 *
 */
const start = async (): Promise<void> => {
	bot.start((ctx) => {
		ctx.telegram.sendMessage(
			ctx.message.chat.id,
			`Welcome! How can I help you?`
		)
	})
}

/**
 * Run bot
 * =====================
 * Send welcome message
 *
 */
const launch = async (): Promise<void> => {
	bot.launch()
}

export { launch, quit, start }
export default launch
