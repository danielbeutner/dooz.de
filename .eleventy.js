module.exports = function(config) {
	config.addWatchTarget('./src/assets')
	config.addPassthroughCopy('src/assets/*')
	// Base Config
	return {
		dir: {
			input: 'src',
			output: 'public',
		},
	}
}
