function FormaterRibNir(texte) {
	return strtr(texte.toString(),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","12345678912345678923456789");
}

function strtr (str, from, to) {
    // http://kevin.vanzonneveld.net
    // original by: Brett Zamir (http://brett-zamir.me)
    // example 1: $trans = {'hello' : 'hi', 'hi' : 'hello'}; strtr('hi all, I said hello', $trans); returns: 'hello all, I said hi'
    // example 2: strtr('�aaba�ccasde�oo', '���','aao'); returns: 'aaabaaccasdeooo'
    // example 3: strtr('��������', '�', 'a'); returns: 'aaaaaaaa'
    // example 4: strtr('http', 'pthxyz','xyzpth'); returns: 'zyyx'
    // example 5: strtr('zyyx', 'pthxyz','xyzpth'); returns: 'http'
    var fr = '', i = 0, j = 0, lenStr = 0, lenFrom = 0;
    var tmpFrom = [];
    var tmpTo   = [];
    var ret = '';
    var match = false;
    // Received replace_pairs?
    // Convert to normal from->to chars
    if (typeof from === 'object') {
        for (fr in from) {
            tmpFrom.push(fr);
            tmpTo.push(from[fr]);
        }
        from = tmpFrom;
        to = tmpTo;
    }
    // Walk through subject and replace chars when needed
    lenStr  = str.length;
    lenFrom = from.length;
    for (i = 0; i < lenStr; i++) {
        match = false;
        for (j = 0; j < lenFrom; j++) {
            if (str.substr(i, from[j].length) == from[j]) {
                match = true;
                // Fast forward
                i = (i + from[j].length)-1;
                break;
            }
        }
        if (false !== match) {
            ret += to[j];
        } else {
            ret += str[i];
        }
    }
    return ret;
}

module.exports = function rib(banque, guichet, compte, clef) {
	var txtBanqueSansLettre=FormaterRibNir(banque);
	var txtGuichetSansLettre=FormaterRibNir(guichet);
	var txtCompteSansLettre=FormaterRibNir(compte);
    var cle = 97 - ( ( 89 * parseInt(txtBanqueSansLettre,10) + 15 * parseInt(txtGuichetSansLettre,10) + 3 * parseInt(txtCompteSansLettre,10) ) % 97);
	console.log(cle);
	return clef == cle;
}