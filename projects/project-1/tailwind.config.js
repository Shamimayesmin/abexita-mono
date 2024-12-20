const sharedConfig = require("../shared-config/tailwind.config");

module.exports = {
	...sharedConfig,
	content: [...sharedConfig.content],
};
