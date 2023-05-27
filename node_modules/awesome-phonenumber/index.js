const exportedName = 'PhoneNumber$$module$src$index';

module.exports =
	require( './lib' )[ exportedName ] ||
	(
		typeof globalThis !== 'undefined' && globalThis
		|| typeof global !== 'undefined' && global
		|| typeof window !== 'undefined' && window
		|| typeof self !== 'undefined' && self
		|| this
	)[ exportedName ];

Object.defineProperty(
	module.exports,
	"__esModule",
	{
		value: true
	}
);

module.exports.default = module.exports;
