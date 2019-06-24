var slideIndexN = 0;
window.addEventListener("load",showSlides2,true);

function showSlides2() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndexN++;
    if (slideIndexN> slides.length) {slideIndexN = 1}
    slides[slideIndexN-1].style.display = "block";
    setTimeout(showSlides2, 5000); // Change image every 5 seconds
}
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});

//------------------------------------------------------validate Form------------------------------------------//
function validateForm() {
    var letters = /[A-Za-z]/;
    var numbers = /\d/;
    var format = "mm/dd/yyyy";
    var at ="@";
    var Name = document.getElementById("name").value;
    var Email = document.getElementById("email").value;
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" ) {
        alert("Fill All Fields !");
    }else if (!Name.match(letters)) {
        window.alert("Name must be Letters only");
    }
    else if (!Email.match(at)) {
            window.alert("Please type an email with the right format");
        }
     else {
        document.getElementById('form').submit();
        alert("Form Submitted Successfully...");
    }

}




		
		
		
//------------------------------------------------------Room------------------------------------------//
		
		

// Get the modal
var modal = document.getElementById('myModal');


// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
	
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var counter=0;
setInterval("timer()",500);
function timer()
{
	counter++;
	$('#counter').text("Users Booking Right Now :"+counter);
}









//------------------------------------------------------Jquery-----------------------------------------//


$(document).ready(function(){
    $("button").click(function(){
        $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
    });
});


//------------------------------------------------------Home-----------------------------------------//

var slideIndex = 0;
window.addEventListener("load",showSlides,true);


function showSlides() {
	
    var i;
    var slides = document.getElementsByClassName("ImageSlide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides2, 5000);
}

//------------------------------------------------------Admin----------------------------------------//
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
