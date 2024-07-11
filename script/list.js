function displayAnswer(elementId) {
  if (elementId === '') {document.getElementById("text_a").value = "";}
else if (elementId === 'a1') {document.getElementById("text_a").value = "ls [option]";}
else if (elementId === 'a2') {document.getElementById("text_a").value = "cat [filename]";}
else if (elementId === 'a3') {document.getElementById("text_a").value = "cd /etc";}
else if (elementId === 'a4') {document.getElementById("text_a").value = "pwd";}
else if (elementId === 'a5') {document.getElementById("text_a").value = "whoami";}
else if (elementId === 'a6') {document.getElementById("text_a").value = "touch [filename]";}
else if (elementId === 'a7') {document.getElementById("text_a").value = "man [command]";}
else if (elementId === 'a7i') {document.getElementById("text_a").value = "whatis [command]";}
//usr grp
else if (elementId === 'a8') {document.getElementById("text_a").value = "passwd";}
else if (elementId === 'a9') {document.getElementById("text_a").value = "chage";}
else if (elementId === 'a10') {document.getElementById("text_a").value = "curr usr";}
else if (elementId === 'a11') {document.getElementById("text_a").value = "who";}
else if (elementId === 'a12') {document.getElementById("text_a").value = "useradd";}
else if (elementId === 'a13') {document.getElementById("text_a").value = "usermod";}
else if (elementId === 'a14') {document.getElementById("text_a").value = "userdel";}
else if (elementId === 'a15') {document.getElementById("text_a").value = "id";}
else if (elementId === 'a16') {document.getElementById("text_a").value = "groupadd";}
else if (elementId === 'a17') {document.getElementById("text_a").value = "groupmod";}
else if (elementId === 'a18') {document.getElementById("text_a").value = "groupdel";}
else if (elementId === 'a19') {document.getElementById("text_a").value = "su";}
else if (elementId === 'a20') {document.getElementById("text_a").value = "sudo";}
else if (elementId === 'a21') {document.getElementById("text_a").value = "pkexec";}
//permissions
else if (elementId === 'a22') {document.getElementById("text_a").value = "umask";}
else if (elementId === 'a23') {document.getElementById("text_a").value = "chmod";}
else if (elementId === 'a24') {document.getElementById("text_a").value = "chown :{newowner}";}
else if (elementId === 'a25') {document.getElementById("text_a").value = "chown {newowner}:{newgroup}";}
else if (elementId === 'a26') {document.getElementById("text_a").value = "chown :{newgroup}";}
else if (elementId === 'a27') {document.getElementById("text_a").value = "chgrp";}
else if (elementId === 'a28') {document.getElementById("text_a").value = "lsattr";}
else if (elementId === 'a29') {document.getElementById("text_a").value = "chattr";}
else if (elementId === 'a30') {document.getElementById("text_a").value = "getfacl";}
else if (elementId === 'a31') {document.getElementById("text_a").value = "setfacl";}
//file mgt
else if (elementId === 'a32') {document.getElementById("text_a").value = "stat";}
else if (elementId === 'a33') {document.getElementById("text_a").value = "file";}
else if (elementId === 'a34') {document.getElementById("text_a").value = "ln";}
else if (elementId === 'a35') {document.getElementById("text_a").value = "cd";}
else if (elementId === 'a36') {document.getElementById("text_a").value = "tree";}
else if (elementId === 'a37') {document.getElementById("text_a").value = "mkdir";}
else if (elementId === 'a38') {document.getElementById("text_a").value = "cp";}
else if (elementId === 'a39') {document.getElementById("text_a").value = "mv {location}";}
else if (elementId === 'a40') {document.getElementById("text_a").value = "mv {filename}";}
else if (elementId === 'a41') {document.getElementById("text_a").value = "rmdir";}
else if (elementId === 'a42') {document.getElementById("text_a").value = "rm";}
else if (elementId === 'a43') {document.getElementById("text_a").value = "head";}
else if (elementId === 'a44') {document.getElementById("text_a").value = "tail";}
else if (elementId === 'a45') {document.getElementById("text_a").value = "grep";}
else if (elementId === 'a46') {document.getElementById("text_a").value = "xargs";}
else if (elementId === 'a47') {document.getElementById("text_a").value = "tee";}
else if (elementId === 'a48') {document.getElementById("text_a").value = "find";}
else if (elementId === 'a49') {document.getElementById("text_a").value = "locate";}
else if (elementId === 'a50') {document.getElementById("text_a").value = "updatedb";}
else if (elementId === 'a51') {document.getElementById("text_a").value = "which";}
//author txt file
else if (elementId === 'a52') {document.getElementById("text_a").value = "tar";}
else if (elementId === 'a53') {document.getElementById("text_a").value = "gzip";}
else if (elementId === 'a54') {document.getElementById("text_a").value = "xz";}
else if (elementId === 'a55') {document.getElementById("text_a").value = "bzip2";}
else if (elementId === 'a56') {document.getElementById("text_a").value = "zip";}
//svc mgt
else if (elementId === 'a57') {document.getElementById("text_a").value = "rpm";}
else if (elementId === 'a58') {document.getElementById("text_a").value = "yum";}
else if (elementId === 'a59') {document.getElementById("text_a").value = "apt";}
else if (elementId === 'a60') {document.getElementById("text_a").value = "dpkg";}
else if (elementId === 'a61') {document.getElementById("text_a").value = "wget";}
else if (elementId === 'a62') {document.getElementById("text_a").value = "curl";}
//adm storage
else if (elementId === 'a63') {document.getElementById("text_a").value = "lsblk";}
else if (elementId === 'a64') {document.getElementById("text_a").value = "lsscsi";}
else if (elementId === 'a65') {document.getElementById("text_a").value = "fdisk";}
else if (elementId === 'a66') {document.getElementById("text_a").value = "parted";}
else if (elementId === 'a67') {document.getElementById("text_a").value = "mkfs";}
else if (elementId === 'a68') {document.getElementById("text_a").value = "mount";}
else if (elementId === 'a69') {document.getElementById("text_a").value = "umount";}
else if (elementId === 'a70') {document.getElementById("text_a").value = "df";}
else if (elementId === 'a71') {document.getElementById("text_a").value = "du";}
else if (elementId === 'a72') {document.getElementById("text_a").value = "e2label";}
else if (elementId === 'a73') {document.getElementById("text_a").value = "resize2fs";}
else if (elementId === 'a74') {document.getElementById("text_a").value = "tune2fs";}
else if (elementId === 'a75') {document.getElementById("text_a").value = "dumpe2fs";}
else if (elementId === 'a76') {document.getElementById("text_a").value = "cryptsetup";}
else if (elementId === 'a77') {document.getElementById("text_a").value = "shred";}
else if (elementId === 'a78') {document.getElementById("text_a").value = "iostat";}
else if (elementId === 'a79') {document.getElementById("text_a").value = "ioping";}
//mem & kernel
else if (elementId === 'a80') {document.getElementById("text_a").value = "hwinfo";}
else if (elementId === 'a81') {document.getElementById("text_a").value = "dmidecode";}
else if (elementId === 'a82') {document.getElementById("text_a").value = "lspci";}
else if (elementId === 'a83') {document.getElementById("text_a").value = "lsusb";}
else if (elementId === 'a84') {document.getElementById("text_a").value = "lscpu";}
else if (elementId === 'a85') {document.getElementById("text_a").value = "lsmem";}
else if (elementId === 'a86') {document.getElementById("text_a").value = "ps";}
else if (elementId === 'a87') {document.getElementById("text_a").value = "sar";}
else if (elementId === 'a88') {document.getElementById("text_a").value = "nohup";}
else if (elementId === 'a89') {document.getElementById("text_a").value = "mkswap";}
else if (elementId === 'a90') {document.getElementById("text_a").value = "swapon";}
else if (elementId === 'a91') {document.getElementById("text_a").value = "swapoff";}
else if (elementId === 'a92') {document.getElementById("text_a").value = "free";}
else if (elementId === 'a93') {document.getElementById("text_a").value = "vmstat";}
else if (elementId === 'a94') {document.getElementById("text_a").value = "modinfo";}
else if (elementId === 'a95') {document.getElementById("text_a").value = "insmod";}
else if (elementId === 'a96') {document.getElementById("text_a").value = "rmmod";}
else if (elementId === 'a97') {document.getElementById("text_a").value = "modprobe";}
else if (elementId === 'a98') {document.getElementById("text_a").value = "depmod";}
else if (elementId === 'a99') {document.getElementById("text_a").value = "sysctl";}
else if (elementId === 'a100') {document.getElementById("text_a").value = "dmesg";}
//svc mgt
else if (elementId === 'a101') {document.getElementById("text_a").value = "systemctl";}
else if (elementId === 'a102') {document.getElementById("text_a").value = "service";}
else if (elementId === 'a103') {document.getElementById("text_a").value = "chkconfig";}
else if (elementId === 'a104') {document.getElementById("text_a").value = "chkconfig [options]";}
else if (elementId === 'a105') {document.getElementById("text_a").value = "crontab";}
else if (elementId === 'a106') {document.getElementById("text_a").value = "at";}
else if (elementId === 'a107') {document.getElementById("text_a").value = "lpr";}
else if (elementId === 'a108') {document.getElementById("text_a").value = "date";}
else if (elementId === 'a109') {document.getElementById("text_a").value = "timedatectl";}
else if (elementId === 'a110') {document.getElementById("text_a").value = "localectl";}
//network config
else if (elementId === 'a111') {document.getElementById("text_a").value = "ip";}
else if (elementId === 'a112') {document.getElementById("text_a").value = "ifconfig";}
else if (elementId === 'a113') {document.getElementById("text_a").value = "iwconfig";}
else if (elementId === 'a114') {document.getElementById("text_a").value = "nmcli";}
else if (elementId === 'a115') {document.getElementById("text_a").value = "ethtool";}
else if (elementId === 'a116') {document.getElementById("text_a").value = "hostnamectl";}
else if (elementId === 'a117') {document.getElementById("text_a").value = "netcat";}
else if (elementId === 'a118') {document.getElementById("text_a").value = "iftop";}
else if (elementId === 'a119') {document.getElementById("text_a").value = "traceroute";}
else if (elementId === 'a120') {document.getElementById("text_a").value = "tracepath";}
else if (elementId === 'a121') {document.getElementById("text_a").value = "resolvectl";}
else if (elementId === 'a122') {document.getElementById("text_a").value = "dig";}
else if (elementId === 'a123') {document.getElementById("text_a").value = "nslookup";}
else if (elementId === 'a124') {document.getElementById("text_a").value = "host";}
else if (elementId === 'a125') {document.getElementById("text_a").value = "whois";}
else if (elementId === 'a126') {document.getElementById("text_a").value = "arp";}
//network security
else if (elementId === 'a127') {document.getElementById("text_a").value = "iptables";}
else if (elementId === 'a128') {document.getElementById("text_a").value = "firewall-cmd";}
else if (elementId === 'a129') {document.getElementById("text_a").value = "ufw";}
else if (elementId === 'a130') {document.getElementById("text_a").value = "ping";}
else if (elementId === 'a131') {document.getElementById("text_a").value = "traceroute";}
else if (elementId === 'a132') {document.getElementById("text_a").value = "tracepath";}
else if (elementId === 'a133') {document.getElementById("text_a").value = "mtr";}
else if (elementId === 'a134') {document.getElementById("text_a").value = "netstat";}
else if (elementId === 'a135') {document.getElementById("text_a").value = "ss";}
else if (elementId === 'a136') {document.getElementById("text_a").value = "tcpdump";}
else if (elementId === 'a137') {document.getElementById("text_a").value = "nmap";}
//security mgt
else if (elementId === 'a138') {document.getElementById("text_a").value = "md5sum";}
else if (elementId === 'a139') {document.getElementById("text_a").value = "sha#sum";}
else if (elementId === 'a140') {document.getElementById("text_a").value = "chcon";}
else if (elementId === 'a141') {document.getElementById("text_a").value = "apparmor_status";}
else if (elementId === 'a142') {document.getElementById("text_a").value = "aa-complain";}
else if (elementId === 'a143') {document.getElementById("text_a").value = "aa-enforce";}
else if (elementId === 'a144') {document.getElementById("text_a").value = "aa-disable";}
else if (elementId === 'a145') {document.getElementById("text_a").value = "aa-unconfined";}
//script
else if (elementId === 'a146') {document.getElementById("text_a").value = "awk";}
else if (elementId === 'a147') {document.getElementById("text_a").value = "sed";}
else if (elementId === 'a148') {document.getElementById("text_a").value = "find";}
else if (elementId === 'a149') {document.getElementById("text_a").value = "tee";}
else if (elementId === 'a150') {document.getElementById("text_a").value = "xargs";}
else if (elementId === 'a151') {document.getElementById("text_a").value = "export";}
else if (elementId === 'a152') {document.getElementById("text_a").value = "env";}
else if (elementId === 'a153') {document.getElementById("text_a").value = "alias";}
//IaC 
else if (elementId === 'a154') {document.getElementById("text_a").value = "git";}
//containers
else if (elementId === 'a155') {document.getElementById("text_a").value = "docker";}
else if (elementId === 'a156') {document.getElementById("text_a").value = "docker pull";}
else if (elementId === 'a156a') {document.getElementById("text_a").value = "docker run";}
else if (elementId === 'a156b') {document.getElementById("text_a").value = "docker run -d";}
else if (elementId === 'a156c') {document.getElementById("text_a").value = "docker start";}


else if (elementId === 'a157') {document.getElementById("text_a").value = "docker container";}
else if (elementId === 'a158') {document.getElementById("text_a").value = "push";}
else if (elementId === 'a159') {document.getElementById("text_a").value = "pull";}
//install linux
else if (elementId === 'a160') {document.getElementById("text_a").value = "mkinitrd";}
else if (elementId === 'a161') {document.getElementById("text_a").value = "grub2-install";}
else if (elementId === 'a162') {document.getElementById("text_a").value = "grub2-mkconfig";}

//else if (elementId === '') {document.getElementById("text_a").value = "";}

}