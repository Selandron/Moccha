module.exports = function secu(num) {
	var key = parseInt(num.substring(13, 15));
	return key == (97 - (parseInt(num.substring(0, 13)) % 97)) && num.length == 15;
	/*myPattern = '/^[1-2][0-9]{2}[0-1][0-9](2[A-B]|[0-9]{2})[0-9]{3}[0-9]{3}[0-9]{2}$/x';
	var patt = new RegExp(myPattern);
	console.log(patt.test(num));
	return patt.test(num);*/
}