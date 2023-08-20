/**
 * Node Module
 * =====================
 *
 * Show hello world text
 */
import type {
	IModuleInterface,
	IModuleResponseInterface
} from '@src/types/module.type'

/**
 * Hello World
 * =====================
 *
 * Print hello-world
 *
 * @param {string} {text} - input string
 *
 * @return {Promise<IModuleResponseInterface>} (async) app() function that return string
 *
 */
const m = async ({
	text
}: IModuleInterface): Promise<IModuleResponseInterface> => {
	const app = () => text

	return {
		app
	}
}

export default m
