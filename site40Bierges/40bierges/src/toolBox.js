exports.readCookie = (cname) => {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length)
        }
    }
    return undefined;
}

exports.checkIfConnected = () => {
    let token = this.readCookie("Token")
    if (token !== undefined) {
        return true;
    }
    return false;
}

exports.API_URL = "https://api-express-iota-flax.vercel.app"
//exports.API_URL = "http://localhost:3001"