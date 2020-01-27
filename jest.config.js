module.exports = {
	transform: {
		'.(ts|tsx)': 'ts-jest',
	},
	testPathIgnorePatterns: [ '/node_modules/', '/lib' ],
	testRegex: '(/test/.*|\\.(test|spec))\\.(ts|js)$',
	moduleFileExtensions: [ 'test', 'js', 'json' ],
};
