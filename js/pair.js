module.exports = function pair(value) {
	if (typeof value !== 'number')
		throw new Error('Value not integer');
	return (value % 2 == 0);
} 