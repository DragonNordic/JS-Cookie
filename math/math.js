function onLoad() {
	if(document.cookie == '' || document.cookie == null)
		document.location.href = "../index.html";
	else
		task1();
}

function task1() {
    document.getElementById('task1').style.display = 'block';
	document.getElementById('task2').style.display = 'none';
	document.getElementById('task3').style.display = 'none';

	document.getElementById('Task1').style.display = 'block';
	document.getElementById('Task2').style.display = 'none';
	document.getElementById('Task3').style.display = 'none';
}

function task2() {
	document.getElementById('task1').style.display = 'none';
	document.getElementById('task2').style.display = 'block';
	document.getElementById('task3').style.display = 'none';

	document.getElementById('Task1').style.display = 'none';
	document.getElementById('Task2').style.display = 'block';
	document.getElementById('Task3').style.display = 'none';
}

function task3() {
    document.getElementById('task1').style.display = 'none';
	document.getElementById('task2').style.display = 'none';
	document.getElementById('task3').style.display = 'block';

	document.getElementById('Task1').style.display = 'none';
	document.getElementById('Task2').style.display = 'none';
	document.getElementById('Task3').style.display = 'block';
}

function Triangular() {
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	var c = document.getElementById('c').value;

    var output = document.getElementById('task1').getElementsByTagName('p')[0];

	if(Number(a) + Number(b) <= Number(c) || Number(a) + Number(c) <= Number(b) || Number(b) + Number(c) <= Number(a))
		output.innerHTML = "Triangular doesn`t exist";
	else 
        output.innerHTML = "Triangular exist";
}

function Tabulation() {
	var table = document.getElementById('tableSecond');
	var n = document.getElementById('N').value;
	var a = document.getElementById('Start').value;
	var b = document.getElementById('Finish').value;

	while(table.rows.length > 1) 
    	table.deleteRow(1);

	if(!(a == Number(a) && b == Number(b) && n == Number(n)))
	{
		alert("Error");
		return false;
	}
	
    var count = 0;
    for(var i = parseFloat(a); i < parseFloat(b); i += (b - a) / n) {
    	var tbody = document.getElementById('tableSecond').getElementsByTagName("TBODY")[0];
        var row = document.createElement("TR");
    	var td1 = document.createElement("TD");
    	var td2 = document.createElement("TD");

	    if(i**2 < 15)
	    	count++;

        var y = i * Math.log(5 + i);

	    td1.appendChild(document.createTextNode(i.toFixed(1)));
	    td2.appendChild(document.createTextNode(y.toFixed(2)));

        row.appendChild(td1);
        row.appendChild(td2);
        tbody.appendChild(row);    
    }

    document.getElementById('task2').getElementsByTagName('p')[0].innerHTML = "Amount x<sup>2</sup> < 15: " + count;
}

function System() {

	var table = document.getElementById('tableThird');
	var a = document.getElementById("thirdA").value;
	var b = document.getElementById("thirdB").value;
    var z = document.getElementById("thirdZ").value;	
	var begin = document.getElementById("begin").value;
	var end = document.getElementById("end").value;
	var delta = document.getElementById("deltaX").value;
     	
	while(table.rows.length > 1) 
    	table.deleteRow(1);

    var count = 0, y = 0;
	for(var i = parseFloat(begin); i < parseFloat(end); i += Number(delta)) {
		var tbody = document.getElementById('tableThird').getElementsByTagName("TBODY")[0];
    	var row = document.createElement("TR");
    	var td1 = document.createElement("TD");
    	var td2 = document.createElement("TD");

		if(i < 0)
			y = (Math.sin(i) / a) + (Math.log(i + z) / b);
		if(i <= 0 && i < 1)
			y = a * Math.log(a + i**2) / (1 - (Math.sin(i)**2));
		if(i >= 1)
			y = (a * i) / (Math.sqrt(a**2 + (b**2 * i)))  

		td1.appendChild(document.createTextNode(i.toFixed(2)));
	    td2.appendChild(document.createTextNode(y.toFixed(2)));

	    row.appendChild(td1);
	    row.appendChild(td2);
	    tbody.appendChild(row);

		count++;
	}
}

function makeCookie(name, value, days) {
    var expires = "";
    
    if(days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    
    document.cookie = name + "=" + value + expires + "; path=/";
}

function removeCookie() {
    makeCookie("email", "", -1);
    document.location.href = "../index.html";
}