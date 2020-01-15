function translator() {
	
	// Get language and loop between results
	var radios = document.getElementsByName("language");
	var radio_selected;
	console.log(radios);
	for (var i = 0; i < radios.length; i++)
	{
		if(radios[i].checked) {
			radio_selected = radios[i].value;
			console.log(radio_selected);
			if (radio_selected == "albhed")
			{
				bhedTester();
			} else {
				binaryConvert();
			}
		}
	}

	// Al Bhed Translator
	function bhedTester() {
		norm = document.getElementById("in").value.toLowerCase();
		bhed = "ypltavkrezgmshubxncdijfqow";
		convert = bhed.replace(/[^a-z]/g,""); 

		btext = "";
		var re = /[a-z]/;
		
		for (i = 0; i < norm.length; i++) {
		if(re.test(norm.charAt(i)))
		btext += bhed.charAt(norm.charCodeAt(i)-97);
		else
		btext += norm.charAt(i);
		}
		document.getElementById("c").value = btext; 
	}

	//Binary Convertor
	function binaryConvert() {
		norm = document.getElementById("in").value;
		uni = norm.split('');
		convert = "";
		for (i = 0; i < uni.length; i++) {
			convert += 0 + uni[i].charCodeAt(0).toString(2) + " ";
		}
		document.getElementById("c").value = convert;
	}
}
//
