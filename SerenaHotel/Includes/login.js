
function formValidation()
{
var firstname = document.registration.firstname;
var lastname = document.registration.lastname;
var Password = document.registration.Password;
var Confirm = document.registration.Confirm;
var username = document.registration.username;
var country = document.registration.country;
var zip = document.registration.zip;
var email = document.registration.email;
var address=document.registration.address;


if(passid_validation(Password,5,30))
	{
		if(allLetter(username))
		{
			if(alphanumeric(address))
			{ 
				if(countryselect(country))
				{
					if(allnumeric(zip))
					{
						if(ValidateEmail(email))
						{
							if(firstname_validation(firstname,3,15))
							{
								if(lastname_validation(lastname,3,15))
								{
									if(Confirmation(Confirm,Password,5,30))
									{
											return false;
									}
										
								}
							}
							
						}
					}
				}	
			}
		}
	}
}





function firstname_validation(firstname,mx,my)
{
	var fname_len = firstname.value.length;
	if (fname_len == 0 || fname_len >= my || fname_len < mx)
	{
		alert("firstname should not be empty / length be between "+mx+" to "+my);
		firstname.focus();
		return false;
	}
	return true;
}




function lastname_validation(lastname,mx,my)
{
	var lname_len = lastname.value.length;
	if (lname_len == 0 || lname_len >= my || lname_len < mx)
	{
		alert("lastname should not be empty / length be between "+mx+" to "+my);
		lastname.focus();
		return false;
	}
	return true;
}


function passid_validation(Password,mx,my)
{
	var pass_len = Password.value.length;
	if (pass_len == 0 ||pass_len >= my || pass_len < mx)
	{
		alert("Password should not be empty / length be between "+mx+" to "+my);
		Password.focus();
		return false;
	}
	return true;
}





function allLetter(username)
{ 
	var letters = /^[A-Za-z]+$/;
	if(username.value.match(letters))
	{
		return true;
	}
	else
	{
		alert('Username must have alphabet characters only');
		username.focus();
		return false;
	}
}



function alphanumeric(address)
{ 
	var letters = /^[0-9a-zA-Z]+$/;
	if(address.value.match(letters))
	{
		return true;
	}
	else
	{
		alert('User address must have alphanumeric characters only');
		address.focus();
		return false;
	}
}




function countryselect(country)
{
	if(country.value == "Default")
	{
		alert('Select your country from the list');
		country.focus();
		return false;
	}
		else
	{
	return true;
	}
}

function allnumeric(zip)
{ 
	var numbers = /^[0-9]+$/;
	if(zip.value.match(numbers))
	{
		return true;
	}
	else
	{
		alert('ZIP code must have numeric characters only');
		zip.focus();
		return false;
	}
}

function ValidateEmail(email)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.value.match(mailformat))
	{
		return true;
	}
	else
	{
		alert("You have entered an invalid email address!");
		email.focus();
		return false;
	}
}

function Confirmation(Confirm,Password,mx,my)
{
	var confirm_len = Confirm.value.length;
	if (confirm_len == 0 ||confirm_len >= my || confirm_len < mx)
	{
		alert("Confirm Password should not be empty / length be between "+mx+" to "+my);
		Password.focus();
		return false;
	}
	if(Confirm.value!=Password.value)
	{
		alert("Sorry This Did Not Match The Password")
		Confirm.focus;
		return false;
	}
	else
	{
		return true;
	}
}






   document.getElementById('registrationn').submit();
        alert("Form Submitted Successfully...");