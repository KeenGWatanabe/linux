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
else if(inputText.toLowerCase().indexOf("ls")>-1||inputText.toLowerCase().indexOf("list directory")>-1){document.getElementById("answer").innerHTML=` List the contents of the current directory.`;}

else if(inputText.toLowerCase().indexOf("cat")>-1||inputText.toLowerCase().indexOf("content")>-1){document.getElementById("answer").innerHTML=`cat [filename]: Display the contents of a text file on the screen`;}

else if(inputText.toLowerCase().indexOf("cd /etc")>-1||inputText.toLowerCase().indexOf("change directory")>-1||inputText.toLowerCase().indexOf("another")>-1&&inputText.toLowerCase().indexOf("directory")>-1){document.getElementById("answer").innerHTML=`cd /etc:  Change from one directory to another.`;}

else if(inputText.toLowerCase().indexOf("pwd")>-1||inputText.toLowerCase().indexOf("current")>-1&&inputText.toLowerCase().indexOf("directory")>-1){document.getElementById("answer").innerHTML=` pwd: Displays the present working directory.`;}	

else if(inputText.toLowerCase().indexOf("whoami")>-1||inputText.toLowerCase().indexOf("current")>-1&&inputText.toLowerCase().indexOf("user")>-1){document.getElementById("answer").innerHTML=`whoami: Displays the username of the current user.`;}

else if(inputText.toLowerCase().indexOf("touch")>-1||inputText.toLowerCase().indexOf("update")>-1&&inputText.toLowerCase().indexOf("file")>-1){document.getElementById("answer").innerHTML=`touch [file-name]: Create a new empty file or update the timestamp on an existing file`;}


else if(inputText.toLowerCase().indexOf("man")>-1||inputText.toLowerCase().indexOf("display help")>-1||inputText.toLowerCase().indexOf("help")>-1){document.getElementById("answer").innerHTML=`man [command]: Display manual, or help, pages for a specific command.`;}

else if(inputText.toLowerCase().indexOf("whatis")>-1||inputText.toLowerCase().indexOf("describe")>-1&&inputText.toLowerCase().indexOf("command")>-1){document.getElementById("answer").innerHTML=`whatis [command]:  Provides a brief description of the specified command.`;}
// cmd-basic***
//usr grp cmd
else if(inputText.toLowerCase().indexOf("passwd")>-1||inputText.toLowerCase().indexOf("usr pw")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`passwd [username] > manage user passwords`;}
else if(inputText.toLowerCase().indexOf("chage")>-1||inputText.toLowerCase().indexOf("pw settings")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`chage -options > Manage password settings`;}
else if(inputText.toLowerCase().indexOf("w")>-1||inputText.toLowerCase().indexOf("curr usr")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`w > Display current users on system`;}
else if(inputText.toLowerCase().indexOf("who")>-1||inputText.toLowerCase().indexOf("sys usr")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`who > Display current users on the system`;}
else if(inputText.toLowerCase().indexOf("useradd")>-1||inputText.toLowerCase().indexOf("add usr")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`useradd > Add a user`;}
else if(inputText.toLowerCase().indexOf("usermod")>-1||inputText.toLowerCase().indexOf("modify usr")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`usermod >  Modify a user`;}
else if(inputText.toLowerCase().indexOf("userdel")>-1||inputText.toLowerCase().indexOf("delete usr")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`userdel > Delete a user`;}
else if(inputText.toLowerCase().indexOf("id")>-1||inputText.toLowerCase().indexOf("acct info")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`id > Gather and display account info`;}
else if(inputText.toLowerCase().indexOf("groupadd")>-1||inputText.toLowerCase().indexOf("create grp")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`groupadd > Create a new group.`;}
else if(inputText.toLowerCase().indexOf("groupmod")>-1||inputText.toLowerCase().indexOf("modify grp")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`groupmod > Modify an existing group.`;}
else if(inputText.toLowerCase().indexOf("groupdel")>-1||inputText.toLowerCase().indexOf("remove grp")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`groupdel > Remove an existing group.`;}
else if(inputText.toLowerCase().indexOf("su")>-1||inputText.toLowerCase().indexOf("switch usr")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`su > Switch user to the specified user or account name.`;}
else if(inputText.toLowerCase().indexOf("sudo")>-1||inputText.toLowerCase().indexOf("delegate privileges")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`sudo > Exercise delegated privileges.`;}
else if(inputText.toLowerCase().indexOf("pkexec")>-1||inputText.toLowerCase().indexOf("authorize usr")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`pkexec >  Allows an authorized user to execute an action`;}
//usr grp cmd***
//permissions cmd
else if(inputText.toLowerCase().indexOf("umask")>-1||inputText.toLowerCase().indexOf("alter default")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`umask >  Alter the default permissions on newly created files and directories.`;}
else if(inputText.toLowerCase().indexOf("chmod")>-1||inputText.toLowerCase().indexOf("modify permissions")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`chmod > Modify the permissions of a file or directory.`;}
else if(inputText.toLowerCase().indexOf("chown :{newowner}")>-1||inputText.toLowerCase().indexOf("change owner")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`chown :{newowner} > Change the owner but not the group:`;}
else if(inputText.toLowerCase().indexOf("chown {newowner}:{newgroup}")>-1||inputText.toLowerCase().indexOf("change owner+grp")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`chown {newowner}:{newgroup} > Change both the owner and the group`;}
else if(inputText.toLowerCase().indexOf("chown :{newgroup}")>-1||inputText.toLowerCase().indexOf("change grp")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`chown :{newgroup} > Change the group but not the owner`;}
else if(inputText.toLowerCase().indexOf("chgrp")>-1||inputText.toLowerCase().indexOf("chg grp ownership")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`chgrp > Change the group ownership of a file or directory.`;}
else if(inputText.toLowerCase().indexOf("lsattr")>-1||inputText.toLowerCase().indexOf("list attributes")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`lsattr >  List attributes of a file or a directory.`;}
else if(inputText.toLowerCase().indexOf("chattr")>-1||inputText.toLowerCase().indexOf("chg attributes")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`chattr >  Change attributes of a file or a directory.`;}
else if(inputText.toLowerCase().indexOf("getfacl")>-1||inputText.toLowerCase().indexOf("retrieve ACL")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`getfacl > Retrieve the ACLs of files and directories.`;}
else if(inputText.toLowerCase().indexOf("setfacl")>-1||inputText.toLowerCase().indexOf("chg ACL permission")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`setfacl > Change the permissions associated with the ACL of a file or directory`;}
//permissions***
//file mgt 
else if(inputText.toLowerCase().indexOf("stat")>-1||inputText.toLowerCase().indexOf("file metadata")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`stat > Display file metadata in a relatively user-friendly structure. `;}
else if(inputText.toLowerCase().indexOf("file")>-1||inputText.toLowerCase().indexOf("file info")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`file >  Display file information based on the file type.`;}
else if(inputText.toLowerCase().indexOf("ln")>-1||inputText.toLowerCase().indexOf("create links")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`ln > Create links, either hard or symbolic`;}
else if(inputText.toLowerCase().indexOf("cd")>-1||inputText.toLowerCase().indexOf("chg dir")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`cd > Move your present working directory to another directory.`;}
else if(inputText.toLowerCase().indexOf("tree")>-1||inputText.toLowerCase().indexOf("filesystem")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`tree >  Display the filesystem in a hierarchical structure, perhaps making it easier to understand a directory’s location relative to other directories.`;}
else if(inputText.toLowerCase().indexOf("mkdir")>-1||inputText.toLowerCase().indexOf("create dir")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`mkdir > Create directories along the specified path`;}
else if(inputText.toLowerCase().indexOf("cp")>-1||inputText.toLowerCase().indexOf("copy file")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`cp > Copy a file into a new location while retaining the source file in its original location`;}
else if(inputText.toLowerCase().indexOf("mv {location}")>-1||inputText.toLowerCase().indexOf("move file")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`mv >  Place the file elsewhere in the filesystem.`;}
else if(inputText.toLowerCase().indexOf("mv {filename}")>-1||inputText.toLowerCase().indexOf("rename file")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`mv > The rename command in Bash.`;}
else if(inputText.toLowerCase().indexOf("rmdir")>-1||inputText.toLowerCase().indexOf("delete dir")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`rmdir > Remove (delete) a directory with no files in it`;}
else if(inputText.toLowerCase().indexOf("rm")>-1||inputText.toLowerCase().indexOf("remove dir")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`rm >  Remove (delete) a file or a non-empty directory.`;}
else if(inputText.toLowerCase().indexOf("head")>-1||inputText.toLowerCase().indexOf("file front")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`head > Display the first 10 lines of a file.`;}
else if(inputText.toLowerCase().indexOf("tail")>-1||inputText.toLowerCase().indexOf("file end")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`tail > Display the last 10 lines of a file`;}
else if(inputText.toLowerCase().indexOf("grep")>-1||inputText.toLowerCase().indexOf("search strings")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`grep > Search for strings of characters within a data stream. Grep is case-sensitive unless the -i option is used`;}
else if(inputText.toLowerCase().indexOf("xargs")>-1||inputText.toLowerCase().indexOf("exec each argument")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`xargs >  Read from standard input and executes a command for each argument provided.`;}
else if(inputText.toLowerCase().indexOf("tee")>-1||inputText.toLowerCase().indexOf("send output")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`tee >  Read the standard input, sends the output to the default output device (the CLI), and also copies the output to each specified file`;}
else if(inputText.toLowerCase().indexOf("find")>-1||inputText.toLowerCase().indexOf("search match")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`find >  Search the filesystem for files that match the given parameters.`;}
else if(inputText.toLowerCase().indexOf("locate")>-1||inputText.toLowerCase().indexOf("search path")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`locate > Search for files and directories along a specified path.`;}
else if(inputText.toLowerCase().indexOf("updatedb")>-1||inputText.toLowerCase().indexOf("update database")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`updatedb > Build and update a database of files based on the /etc/updatedb.conf file.`;}
else if(inputText.toLowerCase().indexOf("which")>-1||inputText.toLowerCase().indexOf("complete path")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`which > Display complete path of a specified command.`;}
//file mgt***
//author txt files
else if(inputText.toLowerCase().indexOf("tar")>-1||inputText.toLowerCase().indexOf("bundle files")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("gzip")>-1||inputText.toLowerCase().indexOf("reduce size zip")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("xz")>-1||inputText.toLowerCase().indexOf("reduce size")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("bzip2")>-1||inputText.toLowerCase().indexOf("compression")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("zip")>-1||inputText.toLowerCase().indexOf("archive")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
//author txt files***
//sw mgt
else if(inputText.toLowerCase().indexOf("rpm")>-1||inputText.toLowerCase().indexOf("pkg Rhel")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("yum")>-1||inputText.toLowerCase().indexOf("sw pkg Rhel")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("apt")>-1||inputText.toLowerCase().indexOf("pkg debian")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("dpkg")>-1||inputText.toLowerCase().indexOf("sw older debian")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("wget")>-1||inputText.toLowerCase().indexOf("download from sites")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("curl")>-1||inputText.toLowerCase().indexOf("download from site2")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=``;}
//sw mgt***
//adm storage
else if(inputText.toLowerCase().indexOf("lsblk")>-1||inputText.toLowerCase().indexOf("storage device")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("lsscsi")>-1||inputText.toLowerCase().indexOf("SCSI devices")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("fdisk")>-1||inputText.toLowerCase().indexOf("partitions")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("parted")>-1||inputText.toLowerCase().indexOf("resize partition")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("mkfs")>-1||inputText.toLowerCase().indexOf("format")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("mount")>-1||inputText.toLowerCase().indexOf("attach FHS")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("umount")>-1||inputText.toLowerCase().indexOf("detach FHS")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("df")>-1||inputText.toLowerCase().indexOf("display device storage")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("du")>-1||inputText.toLowerCase().indexOf("display device usage")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("e2label")>-1||inputText.toLowerCase().indexOf("labels")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("resize2fs")>-1||inputText.toLowerCase().indexOf("chg ext2/3/4")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("tune2fs")>-1||inputText.toLowerCase().indexOf("config ext2/3/4")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("dumpe2fs")>-1||inputText.toLowerCase().indexOf("dump ext2/3/4")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("cryptsetup")>-1||inputText.toLowerCase().indexOf("encrypt")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("shred")>-1||inputText.toLowerCase().indexOf("wipe storage device")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("iostat")>-1||inputText.toLowerCase().indexOf("display CPU storage")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("ioping")>-1||inputText.toLowerCase().indexOf("report latency")>-1){document.getElementById("answer").innerHTML=``;}
//adm storage***
//mem and kernel
else if(inputText.toLowerCase().indexOf("hwinfo")>-1||inputText.toLowerCase().indexOf("hardware")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("dmidecode")>-1||inputText.toLowerCase().indexOf("current devices")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("lspci")>-1||inputText.toLowerCase().indexOf("devices attached")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("lsusb")>-1||inputText.toLowerCase().indexOf("specific busses")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("lscpu")>-1||inputText.toLowerCase().indexOf("cpu")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("lsmem")>-1||inputText.toLowerCase().indexOf("memory blocks")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("ps")>-1||inputText.toLowerCase().indexOf("process status")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("sar")>-1||inputText.toLowerCase().indexOf("system usage")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("nohup")>-1||inputText.toLowerCase().indexOf("prevent ending")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("mkswap")>-1||inputText.toLowerCase().indexOf("swap space")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("swapon")>-1||inputText.toLowerCase().indexOf("activate swap")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("swapoff")>-1||inputText.toLowerCase().indexOf("deactivate swap")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("free")>-1||inputText.toLowerCase().indexOf("free unused")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("vmstat")>-1||inputText.toLowerCase().indexOf("virtual memory")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("modinfo")>-1||inputText.toLowerCase().indexOf("kernel module")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("insmod")>-1||inputText.toLowerCase().indexOf("install module")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("rmmod")>-1||inputText.toLowerCase().indexOf("remove module")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("modprobe")>-1||inputText.toLowerCase().indexOf("add remove module")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("depmod")>-1||inputText.toLowerCase().indexOf("build module")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("sysctl")>-1||inputText.toLowerCase().indexOf("kernel parameters")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("dmesg")>-1||inputText.toLowerCase().indexOf("kernel message buffer")>-1){document.getElementById("answer").innerHTML=``;}
//mem and kernel***
//svc mgt 
else if(inputText.toLowerCase().indexOf("systemctl")>-1||inputText.toLowerCase().indexOf("startup")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("service")>-1||inputText.toLowerCase().indexOf("enabling")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("chkconfig")>-1||inputText.toLowerCase().indexOf("control services")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("chkconfig [options]")>-1||inputText.toLowerCase().indexOf("start stop service")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("crontab")>-1||inputText.toLowerCase().indexOf("edit crontab file")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("at")>-1||inputText.toLowerCase().indexOf("task specific time")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("lpr")>-1||inputText.toLowerCase().indexOf("printing")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("date")>-1||inputText.toLowerCase().indexOf("print date")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("timedatectl")>-1||inputText.toLowerCase().indexOf("system date time")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("localectl")>-1||inputText.toLowerCase().indexOf("system locale")>-1){document.getElementById("answer").innerHTML=``;}
//svc mgt***
//network config
else if(inputText.toLowerCase().indexOf("ip")>-1||inputText.toLowerCase().indexOf("IP address")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("ifconfig")>-1||inputText.toLowerCase().indexOf("NIC")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("iwconfig")>-1||inputText.toLowerCase().indexOf("wireless NIC")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("nmcli")>-1||inputText.toLowerCase().indexOf("network setting")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("ethtool")>-1||inputText.toLowerCase().indexOf("network config")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("hostnamectl")>-1||inputText.toLowerCase().indexOf("hostname")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("netcat")>-1||inputText.toLowerCase().indexOf("test connectivity")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("iftop")>-1||inputText.toLowerCase().indexOf("bandwidth")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("traceroute")>-1||inputText.toLowerCase().indexOf("source destination route")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("tracepath")>-1||inputText.toLowerCase().indexOf("source destination path")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("resolvectl")>-1||inputText.toLowerCase().indexOf("name resolution")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("dig")>-1||inputText.toLowerCase().indexOf("test name resolution")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("nslookup")>-1||inputText.toLowerCase().indexOf("info lookup")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("host")>-1||inputText.toLowerCase().indexOf("info host")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("whois")>-1||inputText.toLowerCase().indexOf("display given host")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("arp")>-1||inputText.toLowerCase().indexOf("discover MAC")>-1){document.getElementById("answer").innerHTML=``;}
//network config***
//network security
else if(inputText.toLowerCase().indexOf("iptables")>-1||inputText.toLowerCase().indexOf("packet filtering stateful")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("firewall-cmd")>-1||inputText.toLowerCase().indexOf("firewall")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("ufw")>-1||inputText.toLowerCase().indexOf("nftables")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("ping")>-1||inputText.toLowerCase().indexOf("response")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("traceroute")>-1||inputText.toLowerCase().indexOf("each hop route")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("tracepath")>-1||inputText.toLowerCase().indexOf("each hop path")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("mtr")>-1||inputText.toLowerCase().indexOf("packet loss")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("netstat")>-1||inputText.toLowerCase().indexOf("TCP connection")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("ss")>-1||inputText.toLowerCase().indexOf("TCP simple output")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("tcpdump")>-1||inputText.toLowerCase().indexOf("traffic")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("nmap")>-1||inputText.toLowerCase().indexOf("detailed info")>-1){document.getElementById("answer").innerHTML=``;}
//network security***
//security mgt
else if(inputText.toLowerCase().indexOf("md5sum")>-1||inputText.toLowerCase().indexOf("MD5")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("sha#sum")>-1||inputText.toLowerCase().indexOf("SHA")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("chcon")>-1||inputText.toLowerCase().indexOf("SELinux")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("apparmor_status")>-1||inputText.toLowerCase().indexOf("status AppArmor")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("aa-complain")>-1||inputText.toLowerCase().indexOf("AppArmor complain")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("aa-enforce")>-1||inputText.toLowerCase().indexOf("AppArmor enforce")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("aa-disable")>-1||inputText.toLowerCase().indexOf("AppArmor upload")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("aa-unconfined")>-1||inputText.toLowerCase().indexOf("open network sockets")>-1){document.getElementById("answer").innerHTML=``;}
//security mgt***
//script
else if(inputText.toLowerCase().indexOf("awk")>-1||inputText.toLowerCase().indexOf("search specified")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("sed")>-1||inputText.toLowerCase().indexOf("modify text file")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("find")>-1||inputText.toLowerCase().indexOf("search file criteria")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("tee")>-1||inputText.toLowerCase().indexOf("verify output")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("xargs")>-1||inputText.toLowerCase().indexOf("operate each result")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("export")>-1||inputText.toLowerCase().indexOf("set value")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("env")>-1||inputText.toLowerCase().indexOf("modified environment")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("alias")>-1||inputText.toLowerCase().indexOf("customize environment")>-1){document.getElementById("answer").innerHTML=``;}
//script***
//IaC 
else if(inputText.toLowerCase().indexOf("git")>-1||inputText.toLowerCase().indexOf("manage git")>-1){document.getElementById("answer").innerHTML=``;}
//IaC***
//containers
else if(inputText.toLowerCase().indexOf("docker")>-1||inputText.toLowerCase().indexOf("docker container")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("docker pull")>-1||inputText.toLowerCase().indexOf("pull image")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("docker container")>-1||inputText.toLowerCase().indexOf("manage attribute")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("push")>-1||inputText.toLowerCase().indexOf("upload image")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("pull")>-1||inputText.toLowerCase().indexOf("download image")>-1){document.getElementById("answer").innerHTML=``;}
//containers***
//install linux
else if(inputText.toLowerCase().indexOf("mkinitrd")>-1||inputText.toLowerCase().indexOf("create initrd")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("grub2-install")>-1||inputText.toLowerCase().indexOf("GRUB2")>-1){document.getElementById("answer").innerHTML=``;}
else if(inputText.toLowerCase().indexOf("grub2-mkconfig")>-1||inputText.toLowerCase().indexOf("grub config")>-1){document.getElementById("answer").innerHTML=` grub2-mkconfig 
[-o {filename}]<br />
Generate a new grub.cfg configuration file, or update an existing one.`;}
//install linux***

//else if(inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`.Reference from SLSS manual`;}
	
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