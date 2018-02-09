module.exports.templateTags = [{
    name: 'env',
    displayName: 'System Environment Variable',
    description: 'Use an environment variable from the system.',
    args: [
        {
            displayName: 'Name',
            description: 'The name of the environment variable to use.',
            type: 'string',
            defaultValue: ''
        } 
    ],
    async run (context, name) {
    	let	value = process.env[name];
    	return ((value === undefined || value === null) ? '' : value);
    }
}];
