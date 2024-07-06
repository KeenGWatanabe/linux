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
else if(inputText.toLowerCase().indexOf("ls [option]")>-1||inputText.toLowerCase().indexOf("list directory")>-1){document.getElementById("answer").innerHTML=` List the contents of the current directory.`;}

else if(inputText.toLowerCase().indexOf("cat [filename]")>-1||inputText.toLowerCase().indexOf("content")>-1){document.getElementById("answer").innerHTML=`cat [filename]: Display the contents of a text file on the screen`;}

else if(inputText.toLowerCase().indexOf("cd /etc")>-1||inputText.toLowerCase().indexOf("change directory")>-1||inputText.toLowerCase().indexOf("another")>-1&&inputText.toLowerCase().indexOf("directory")>-1){document.getElementById("answer").innerHTML=`cd /etc:  Change from one directory to another.`;}

else if(inputText.toLowerCase().indexOf("pwd")>-1||inputText.toLowerCase().indexOf("current")>-1&&inputText.toLowerCase().indexOf("directory")>-1){document.getElementById("answer").innerHTML=` pwd: Displays the present working directory.`;}	

else if(inputText.toLowerCase().indexOf("whoami")>-1||inputText.toLowerCase().indexOf("current")>-1&&inputText.toLowerCase().indexOf("user")>-1){document.getElementById("answer").innerHTML=`whoami: Displays the username of the current user.`;}

else if(inputText.toLowerCase().indexOf("touch [filename]")>-1||inputText.toLowerCase().indexOf("update")>-1&&inputText.toLowerCase().indexOf("file")>-1){document.getElementById("answer").innerHTML=`touch [file-name]: Create a new empty file or update the timestamp on an existing file`;}


else if(inputText.toLowerCase().indexOf("man [command]")>-1||inputText.toLowerCase().indexOf("display help")>-1||inputText.toLowerCase().indexOf("help")>-1){document.getElementById("answer").innerHTML=`man [command]: Display manual, or help, pages for a specific command.`;}

else if(inputText.toLowerCase().indexOf("whatis [command]")>-1||inputText.toLowerCase().indexOf("describe")>-1&&inputText.toLowerCase().indexOf("command")>-1){document.getElementById("answer").innerHTML=`whatis [command]:  Provides a brief description of the specified command.`;}
// cmd-basic***
//usr grp cmd
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("usr pw")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("pw settings")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("curr usr")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("sys usr")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("add usr")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("modify usr")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("delete usr")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("acct info")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("create grp")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("modify grp")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("remove grp")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("switch usr")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("delegate privileges")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("authorize usr")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
//usr grp cmd***
//permissions cmd
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("alter default")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("modify permissions")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("change owner")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("change owner+grp")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("change grp")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("chg grp ownership")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("list attributes")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("chg attributes")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("retrieve ACL")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("chg ACL permission")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
//permissions***
//file mgt 
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("file metadata")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("file info")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("create links")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("chg dir")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("filesystem")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("create dir")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("copy file")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("move file")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("rename file")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("delete dir")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("remove dir")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("file front")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("file end")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("search strings")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("exec each argument")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("send output")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("search match")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("search path")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("update database")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("complete path")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
//file mgt***
//author txt files
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("bundle files")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("reduce size zip")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("reduce size")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("compression")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("archive")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
//author txt files***
//sw mgt
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("pkg Rhel")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("sw pkg Rhel")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("pkg debian")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("sw older debian")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("download from sites")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("download from site2")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
//sw mgt***
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}

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