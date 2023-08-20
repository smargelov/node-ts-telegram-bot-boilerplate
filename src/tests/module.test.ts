/**
 * Jest Tests
 * =====================
 */
import m from '../functions/module'

test('show hello world', async () => {
	const { app } = await m({ text: 'hello-world' })
	expect(app()).toBe('hello-world')
})
