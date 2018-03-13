/**
 * ------------------------------------------------------------------------------
 * Application Object
 * ------------------------------------------------------------------------------
 */
var App = function () {
	this.validOTP = 1987;

	this.countElement = function ($el) {
		var c = $el.length;
		return c;
	};

	this.removeDomElement = function (el) {
		$(el).remove();
	};

	this.regEx = {
		user_id: /^[0-9\sA-Za-z\u00C0-\u00FF\~\#\";\/!@$%^&*()_\+\{\}\?\-\[\]\\,.\u0152\u0153\u20A0\u20A3\u0178\u20AC\u2013\u2014\u00C6\u00E6\u00C4\u00E4\u20A3]{5,32}$/,
		password: /^[^|]{6,32}$/,
		email: /^(?!.*([.])\1{1})([\w\.\-\+\<\>\{\}\=\`\|\?]+)@(?![.-])([a-zA-Z\d.-]+)\.([a-zA-Z.][a-zA-Z]{1,6})$/,
		create_user_id: /^[0-9\sA-Za-z\!@$%^*()_\+\{\}\?\-\[\]\\,.]{5,32}$/,
		four_consecutive_digits: /\d{4}/,
		create_password: /^(?=(?:.*?[0-9]){2})(?=.*[a-zA-Z])[0-9\sA-Za-z\!@\#$%^&*()_\+\{\}?\-\[\]\\,.]{6,32}$/,
		checkpoint_response: /^[0-9\sA-Za-z\?\#,.:;\\<|>!=@\#$%^*_\-\+\{\}\[\]]{1,}$/,
		formatted_date: /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/,
		formatted_date_with_stars_pattern: /^(0[1-9]|1[012]|\*\*)[- /.](0[1-9]|[12][0-9]|3[01]|\*\*)[- /.](((19|20)\d\d)|(\*\*\*\*))$/,
		cvv: /^\d{3,4}$/,
		last_four_digits: /^\d{4}$/,
		card_number_length: /^.{9,16}$/,
		card_number_format: /^[0-9]*$/,
		card_name: /^[a-zA-Z\s\-'\.]{4,30}$/,
		aba_routing: /^\d{1,9}$/,
		account_number: /^\d{1,17}$/,
		currency: /^\d{1,10}(\.\d{0,2})?$|^\.\d{1,2}$/,
		nickname: /^[\s\dA-Za-z\u00C0-\u00FF\!@\#$%^&\*\(\)_\+\{\}\?\-\=\[\]\,\.\u0152\u0153\u20A0\u20A3\u0178\u20AC\u00C6\u00E6\u00C4\u00E4\u20A3]{0,30}$/,
		card_nickname: /^[\s\dA-Za-z\u00C0-\u00FF\!@\#$%^&\*\(\)_\+\{\}\?\-\[\]\,\~\\\\|\/u0152\u0153\u20A0\u20A3\u0178\u20AC\u00C6\u00E6\u00C4\u00E4\u20A3]{0,30}$/,
		three_repeating_characters: /(.)\1{2,}/,
		phone_number_US: /^\d{10}$/,
		has_a_number: /\d/,
		security_question_format: /^[0-9\sA-Za-z\u00C0-\u00FF0-9\u0152\u0153\u20A0\u0178\u20A3\u20AC\<\>\!@\#$%^*_\+\{\}|:\?\-\=\[\]\\;/.]*$/,
		whole_number: /^([1-9][0-9]*)$/,
		name: /^[A-Za-z\.\-\'\s,]*$/,
		name_with_latin_characters: /^[A-Za-z\.\-\'\s,\u00C0-\u00FF\u0152\u0153\u20A0\u20A3\u0178\u20AC\u00C6\u00E6\u00C4\u00E4\u20A3]*$/,
		numeric_only: /^[0-9]*$/,
		numeric_only_with_spaces: /^[0-9\s]*$/,
		numeric_two_decimal_places: /^\d+(\.\d{1,2})?$/,
		alpha_only: /^[A-Za-z]*$/,
		alpha_upper: /^[A-Z]*$/,
		alpha_lower: /^[a-z]*$/,
		is_special_char: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/,
		alpha_with_spaces: /^[A-Za-z\s]*$/,
		alpha_numeric_only: /^[0-9A-Za-z]*$/,
		alphanumeric_with_spaces: /^[A-Za-z0-9\s]*$/,
		balance_transfer_city: /^[A-Za-z\u00C0-\u00FF\u0152\u0153\u20A0\u20A3\u0178\u20AC\u00C6\u00E6\u00C4\u00E4\u20A3\s\.]{1,18}$/,
		zipcode: /^[0-9]{5,5}$/,
		postal_code: /^[A-Za-z][0-9][A-Za-z]\s[0-9][A-Za-z][0-9]$/,
		consecutive_spaces: /\s\s/,
		leading_or_trailing_spaces: /^[\s]+|[\s]+$/,
		activation_code: /^[A-Za-z0-9]{8}$/,
		dispute_charge_text: /^[^<>\"%]*$/,
		message_subject: /^[^=\"'<>]*$/,
		message_body: /^[^=\"'<>]*$/
	};

	this.countStringStrength = function (str) {
		var i = 0;
		var total_strength = 0;
		var strData = {
			string: str,
			length: str.length,
			strength: { value: 0, displayText: '', css: '' },
			upper: { count: 0, strength: 0 },
			lower: { count: 0, strength: 0 },
			numeric: { count: 0, strength: 0 },
			special: { count: 0, strength: 0 },
		}

		while (i < str.length) {
			var strChar = str.charAt(i);
			i++;
			if (myapp.regEx.alpha_upper.test(strChar)) {
				strData.upper.count++;
				strData.upper.strength++;
				total_strength += 2;
				strData.strength.value = total_strength;
			}
			else if (myapp.regEx.alpha_lower.test(strChar)) {
				strData.lower.count++;
				strData.lower.strength++;
				//total_strength++;
				strData.strength.value = total_strength;
			}
			else if (myapp.regEx.numeric_only.test(strChar)) {
				strData.numeric.count++;
				strData.numeric.strength++;
				total_strength += 2;
				strData.strength.value = total_strength;
			}
			else if (myapp.regEx.is_special_char.test(strChar)) {
				strData.special.count++;
				strData.special.strength++;
				total_strength += 4;
				strData.strength.value = total_strength;
			}
		}

		//strength indicator		
		if (strData.length < 8 || (strData.strength.value >= 8 && strData.strength.value < 14)) {
			strData.strength.displayText = 'Very Weak';
			strData.strength.css = 'danger';
		}
		if (strData.length >= 8 && strData.strength.value == 6) {
			strData.strength.displayText = 'Weak';
			strData.strength.css = 'warning';
		}
		if (strData.length >= 8 && strData.strength.value > 6) {
			strData.strength.displayText = 'Strong';
			strData.strength.css = 'success';
		}
		return strData;
	};

	this.getPasswordEntropy = function (password) {
		var strPassword = password;
		var strPasswordLength = strPassword.length;
		var minPasswordLength = 8;
		var initScore = 0, totalScore = 0;

		var strData = {};
		strData.value = strPassword;
		strData.excess = 0;
		strData.upper = 0;
		strData.numbers = 0;
		strData.symbols = 0;
		strData.score = {};
		strData.score.excess = 3;
		strData.score.upper = 4;
		strData.score.numbers = 5;
		strData.score.symbols = 5;
		strData.score.combo = 0;
		strData.score.flatLower = 0;
		strData.score.flatNumber = 0;
		strData.score.indicator = {};
		strData.score.indicator.totalScore = totalScore;
		strData.score.indicator.text = '';
		strData.score.indicator.css = '';


		if (strPasswordLength >= minPasswordLength) {
			for (i = 0; i < strPasswordLength; i++) {
				if (strPassword[i].match(/[A-Z]/g)) { strData.upper++; }
				if (strPassword[i].match(/[0-9]/g)) { strData.numbers++; }
				if (strPassword[i].match(/(.*[!,@,#,$,%,^,&,*,?,_,~])/)) { strData.symbols++; }
			}
			strData.excess = strPassword.length - minPasswordLength;

			if (strData.upper && strData.numbers && strData.symbols) {
				strData.score.combo = 25;
			}
			else if ((strData.upper && strData.numbers) || (strData.upper && strData.symbols) || (strData.numbers && strData.symbols)) {
				strData.score.combo = 15;
			}
			if (strPassword.match(/^[\sa-z]+$/)) {
				strData.score.flatLower = -15;
			}
			if (strPassword.match(/^[\s0-9]+$/)) {
				strData.score.flatNumber = -35;
			}
			initScore = 50;
		}
		else {
			initScore = 0;
		}

		totalScore = initScore + (strData.excess * strData.score.excess) + (strData.upper * strData.score.upper) + (strData.numbers * strData.score.numbers) + (strData.symbols * strData.score.symbols) + strData.score.combo + strData.score.flatLower + strData.score.flatNumber;
		strData.score.indicator.totalScore = totalScore;

		//UI indicator
		if (strData.value == "") {
			strData.score.indicator.text = 'Please enter a password';
			strData.score.indicator.css = 'default';
		}
		else if (strPassword.length < minPasswordLength) {
			strData.score.indicator.text = 'Minimum ' + minPasswordLength + ' chars require';
			strData.score.indicator.css = 'danger';
		}
		else if (totalScore < 50) {
			strData.score.indicator.text = 'Weak';
			strData.score.indicator.css = 'warning';
		}
		else if (totalScore >= 50 && totalScore < 75) {
			strData.score.indicator.text = 'Strong';
			strData.score.indicator.css = 'success';
		}
		else if (totalScore >= 75 && totalScore < 100) {
			strData.score.indicator.text = 'Stronger';
			strData.score.indicator.css = 'success';
		}
		else if (totalScore >= 100) {
			strData.score.indicator.text = 'Strongest';
			strData.score.indicator.css = 'success';
		}
		return strData;
	};

	this.readMultipleFiles = function (evt) {
		//Retrieve all the files from the FileList object
		var files = evt.target.files;
		if (files) {
			for (var i = 0, f; f = files[i]; i++) {
				var r = new FileReader();
				r.onload = (function (f) {
					return function (e) {
						var contents = e.target.result;
						var html = "Got the file.</br>";
						html += "Name: " + f.name + "</br>";
						html += "Type: " + f.type + "</br>";
						html += "Size: " + f.size + " bytes </br>";
						//html+="Content starts with: " + contents.substr(1, contents.indexOf("n"));
						html += "Content starts with: <embed type='" + f.type + "'>" + contents + "</embed>";
						$('#file_read_result').html(html);
					};
				})(f);

				r.readAsText(f);
			}
		} else {
			alert("Failed to load files");
		}
	};

	this.renderInput = function (arr) {
		var html = '';
		html += '<input ';
		for (var key in arr) {
			//console.log("key " + key + " has value " + arr[key]);
			html += key;
			html += '="' + arr[key] + '" ';
		}
		html += '>';
		return html;
	};

	this.scrollToBottom = function (el) {
		var $scrollableArea = $('.scrollable-b');
		$scrollableArea.scrollTop($scrollableArea[0].scrollHeight);
	}
};



/**
 * ------------------------------------------------------------------------------
 * DOM Interaction (Ready/Load, Click, Hover, Change)
 * ------------------------------------------------------------------------------
 */
var myapp = new App();


//var options = {target: document.getElementByTagName('bar_holder'),}
//var nanobar = new Nanobar(options);
var nanobar = new Nanobar(); // Init Nanobar ajax loader

$(initPage); // Document Ready Handler

function initPage() {
	nanobar.go(100);//show nanobar	

		
	//Render HTML Control on checkbox click
	$('.rc-checkbox').on('click', function () {
		var el = $(this);
		var checkedCb = el.prop(':checked');
		var checkedCb = myapp.countElement(checkedCb);
		var contolType = $(this).attr('data-controltype');
		if ($(this).prop('checked') === true) {
			var html = myapp.renderInput(contolType);
			$('#control-container').append(html);
		} else {
			$('.control-' + contolType).remove();
		}
	});

	//On init scrol chat messeges conversation to bottom
	myapp.scrollToBottom();
}

//-----------------------------------------------//
// Crypto JS Eample
//-----------------------------------------------//
function encryptDecryptTest() {
	var originalValue = $('input[name="originalValue"]').val();
	var secretPhrase = $('input[name="secretPhrase"]').val();
	encryptedData = CryptoJS.AES.encrypt(originalValue, secretPhrase);
	decryptedData = CryptoJS.AES.decrypt(encryptedData.toString(), secretPhrase);

	$("#originalValueStr").html("Original String = " + originalValue);
	$("#secretPhraseStr").html("Secret Phrase = " + secretPhrase);
	$("#encryptedDataStr").html("Encrypted Data = " + encryptedData.toString());
	$("#decryptedDataStr").html("Decrypted Data = " + decryptedData.toString(CryptoJS.enc.Utf8));
}
$("#encryptBtn").on("click", encryptDecryptTest);

//-----------------------------------------------//
//Validate OTP Form
//-----------------------------------------------//
var otp = myapp.validOTP;
//Auto move to next textbox
$('.form-control-custom').on('keyup', function (e) {
	var len = $(this).val();
	if (len) {
		$(this).next('.form-control-custom').focus();
	}
});

$('#btn-validate-otp').on('click', function (e) {
	var pin = '';
	$('.pin').each(function () {
		pin += $(this).val();
	});
	console.log(pin);
	if (pin != otp) {
		alert("Invalid OTP");
		$('.pin').val('');
	} else {
		alert('Successful ! Proceed to next action.');
	}
});



//-----------------------------------------------//
// Render HTML Control 
//-----------------------------------------------//
$(document).on('click', 'a.remove-control', function (e) {
	var domObj = $(this).parents('div[class*="control-"]');
	myapp.removeDomElement(domObj);
});


//-----------------------------------------------//
// Read File Content
//-----------------------------------------------//
$('#fileinput').on('change', function (e) {
	myapp.readMultipleFiles(e);
});

//-----------------------------------------------//
// String Strength Count
//-----------------------------------------------//
$('#btn-count-strength').on('click', function (e) {
	var username = $('#username').val();
	if (username.length > 0) {
		var strData = myapp.countStringStrength(username);
		$('#username_strength').html(JSON.stringify(strData));
	}

});

$('#password_strength input[name="password"]').on('keyup', function (e) {
	var strData = myapp.getPasswordEntropy($(this).val());
	//var strData = myapp.countStringStrength($(this).val());	
	$('#password_str_strength').html(JSON.stringify(strData));

	/*if(strData.length<=0){
		$('#str_strength_indicator').html('');
	}else{
		$('#str_strength_indicator').html('<button class="btn btn-block btn-xs btn-'+strData.strength.css+'">'+strData.strength.displayText+'</button>');
	}	*/

	$('#str_strength_indicator').html('<button class="btn btn-block btn-xs btn-' + strData.score.indicator.css + '">' + strData.score.indicator.text + '</button>');

});


//-----------------------------------------------//
// Chrome Input Type NUmber Issue
//-----------------------------------------------//
$('#numberInputChromeIssue #annualIncome').on('keyup', function (e) {
	var maxAllowed = $(this).attr('data-maxlength');
	var length = $(this).val().length;
	console.log(length + '/' + maxAllowed);
	try {
		if (length == maxAllowed) {
			e.preventDefault();
		}
	}
	catch (error) {
		console.log("###########Error" + error.message);
	}
});


//-----------------------------------------------//
// How to use AJAX 
//-----------------------------------------------//
function deleteFile() {
	var xhr = new Ajax();
	xhr.type = 'POST';
	xhr.url = SITE_URL + ROUTER_DIRECTORY + ROUTER_CLASS + '/delete_file';
	xhr.data = { id: upload_id, file_path: file_path };
	var promise = xhr.init();

	promise.done(function (data) {
		if (data == 'success') {
			data_row.remove();
		}
	});
	promise.done(function (data) {
		//do more
	});
	promise.done(function (data) {
		//do another task
	});
	promise.fail(function () {
		//show failure message
	});
	promise.always(function () {
		//always will be executed whether success or failue
		//do some thing
	});
	promise.always(function () {
		//do more on complete
	});
}
