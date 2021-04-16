function saveCookie(email, password) {
    
    if(email.includes('@') && password){
        var expires = "";
        var days = 365;

        if(days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        document.cookie = "email" + "=" + email + expires + "; path=/";
    }
    else 
        alert("Log in please");
}

function fastCookie() {
    var expires = "";
    var days = 365;

    if(days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = "email" + "=" + "nordic.commerce@gmail.com" + expires + "; path=/";

    readCookie()
}

function readCookie()
{
	if(getCookie() != null)
		document.location.href = "math/math.html";
}

function getCookie() {
	var name = "email";
    var searchName = name + "=";
    var cookies = document.cookie.split(';');
    for(var i = 0; i < cookies.length; i++) {

        var c = cookies[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);

        if(c.indexOf(searchName) == 0)
            return c.substring(searchName.length, c.length);        
    }
    return null;
}