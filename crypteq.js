
function crypteq(known, user) {
	// if(!known || !user) {
	// 	throw new TypeError('crypteq: Two non-empty arguments are required');
	// }
  if(typeof known.length !== 'number' || typeof user.length !== 'number') {
      throw new TypeError('crypteq: Both arguments should be of type String or Array of bytes');
  }

  // Size and algorithm choice are not secret - no weakness in returning fast here.
  if(known.length !== user.length) return false;

  let ret = 0;
	if(typeof known === 'string') {
		if(typeof user !== 'string') {
			throw new TypeError('crypteq: Second argument not of type String');
		}

    for(let i = known.length; i--;) {
      ret |= known.charCodeAt(i) ^ user.charCodeAt(i);
    }
	}
  else {
    if(typeof user === 'string') {
      throw new TypeError('crypteq: Second argument not of type Array');
    }

    for(let i = known.length; i--;) {
      ret |= known[i] ^ user[i];
    }
  }

  return !ret;
}

if(typeof module === 'object' && module.exports) {
  module.exports = crypteq;
}
