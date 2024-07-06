//const Fuse = require('fuse.js');\
const inputElement = document.getElementById("text_a");
  const answerElement = document.getElementById("answer");

// >-1 means any character after accepted, "i " must be only I in a sentence, "small caps", big caps undetectable
function question() {
	//const inputText = document.getElementById("text_a").value.trim();
	const inputText = inputElement.value;
  	if(inputText === "") { 
	document.getElementById("answer").innerHTML="Your input is blank";}
else if(inputText.toLowerCase().indexOf("thank you")>-1){
			document.getElementById("answer").innerHTML="You are welcome.不用客气。";}

//cmd ref-basic*
else if(inputText.toLowerCase().indexOf("list")>-1&&inputText.toLowerCase().indexOf("directory")>-1){document.getElementById("answer").innerHTML=`ls [option]:  List the contents of the 
current directory.`;}

else if(inputText.toLowerCase().indexOf("display content")>-1||inputText.toLowerCase().indexOf("content")>-1){document.getElementById("answer").innerHTML=`cat  
[file-name]: Display the contents of 
a text file on the screen`;}

else if(inputText.toLowerCase().indexOf("change directory")>-1||inputText.toLowerCase().indexOf("directory")>-1||inputText.toLowerCase().indexOf("another")>-1&&inputText.toLowerCase().indexOf("directory")>-1){document.getElementById("answer").innerHTML=`cd /etc:  Change from one directory to another.`;}

else if(inputText.toLowerCase().indexOf("display")>-1&&inputText.toLowerCase().indexOf("current")>-1||inputText.toLowerCase().indexOf("current")>-1&&inputText.toLowerCase().indexOf("directory")>-1){document.getElementById("answer").innerHTML=` pwd: Displays the present working directory.`;}	

else if(inputText.toLowerCase().indexOf("display")>-1&&inputText.toLowerCase().indexOf("user")>-1||inputText.toLowerCase().indexOf("current")>-1&&inputText.toLowerCase().indexOf("user")>-1){document.getElementById("answer").innerHTML=`whoami: Displays the username of the current user.`;}

else if(inputText.toLowerCase().indexOf("create")>-1&&inputText.toLowerCase().indexOf("file")>-1||inputText.toLowerCase().indexOf("update")>-1&&inputText.toLowerCase().indexOf("file")>-1){document.getElementById("answer").innerHTML=`touch [file-name]: Create a new empty file or update the timestamp on an existing file`;}


else if(inputText.toLowerCase().indexOf("display")>-1&&inputText.toLowerCase().indexOf("manual")>-1||inputText.toLowerCase().indexOf("display help")>-1||inputText.toLowerCase().indexOf("help")>-1){document.getElementById("answer").innerHTML=`man [command]: Display manual, or help, pages for a specific command.`;}

else if(inputText.toLowerCase().indexOf("describe")>-1&&inputText.toLowerCase().indexOf("cmd")>-1||inputText.toLowerCase().indexOf("describe")>-1&&inputText.toLowerCase().indexOf("command")>-1){document.getElementById("answer").innerHTML=`whatis [command]:  Provides a brief description of the  
specified command.`;}
// cmd-basic***


//RAMS***
//*s8-syllabus**

//s8-life saving syllabus***
//else if(inputText.toLowerCase().indexOf("")>-1&&inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`.Reference from SLSS manual`;}
	
//	document.getElementById("answer").innerHTML=`<a href="">mt</a>`;}
//else if(/\bx\b/.test(inputText.toLowerCase())&&inputText.toLowerCase().indexOf("x")>-1){document.getElementById("answer").innerHTML=``;}
	
//else if(inputText.toLowerCase().indexOf("xxx")>-1){
//		document.getElementById("answer").innerHTML=`<a href="" target="_blank">link1</a><br><a href="" target="_blank">link2</a><br>`; 	
////sample codes***
//"separation' keyword prompt*()

//"chinese' keyword prompt*




	 else {
		answerElement.innerHTML = `I do not understand your input '${inputText}', perhaps you could click our "topics" button above or check your spelling.<br>Or email us what was your question for us to update an appropriate response.<br><a href="mailto:tonboswimmers@gmail.com?&subject=Lifeguard%20ChatBot%20Enquiry&body=Thank%20you%20for%20your%20email%20to%20Tonboswimmers", target="_blank">email</a>`;
		      
	}
}
document.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    lky(); // Call the function to handle form submission
  });