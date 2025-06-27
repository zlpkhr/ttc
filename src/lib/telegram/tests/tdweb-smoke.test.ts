import { describe, it, expect } from 'vitest';
import TdClient from 'tdweb';

describe('TdClient smoke test', () => {
	it('should instantiate and get version option', async () => {
		const tdclient = new TdClient({});

		const result = await tdclient.send({
			'@type': 'getOption',
			name: 'version'
		});

		expect(result).toBeDefined();
		expect(result).toMatchObject({
			'@type': 'optionValueString',
			value: expect.any(String)
		});
	});
});
