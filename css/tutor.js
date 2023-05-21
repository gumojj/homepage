// JavaScript Document

code1="public class Main{\n    public static void main(String[] args){\n        System.out.println(\"HelloWorld\");\n    }\n}";

function tojs(cod){
	var a = cod;
	while(a.indexOf("public ") != '-1'){
		a = a.replace("public ","\x3cspan style=\"color: #00af00;\">public\x3c/span> ");
	}
	while(a.indexOf("static ") != '-1'){
		a = a.replace("static ","\x3cspan style=\"color: #00afcf;\">static\x3c/span> ");
	}
	while(a.indexOf("void ") != '-1'){
		a = a.replace("void ","\x3cspan class=\"classname\">void\x3c/span> ");
	}
	while(a.indexOf("String[] ") != '-1'){
		a = a.replace("String[] ","\x3cspan class=\"classname\">String[]\x3c/span> ");
	}
	return a;
}/*
code1="<span style=\"color: #00af00;\">public</span> class Main{\n    <span style=\"color: #00af00;\">public</span>  static void main(String[] args){\n        System.out.println(\"HelloWorld\");\n    }\n}"*/

console.log(tojs(code1));
/* $(".code").html(tojs(code1))
$(".code").html( 
	"\x3cspan style=\"color: #00af00;\">public\x3c/span> class Main{\n    \x3cspan style=\"color: #00af00;\">public\x3c/span> \x3cspan style=\"color: #00af00;\">static\x3c/span> \x3cspan class=\"classname\">void\x3c/span> main(\x3cspan class=\"classname\">String[]\x3c/span> args){\n        System.out.println(\x3cspan style=\"color :#7EC906;\">\"Hello World\"\x3c/span>);\n    }\n}"
)*/
function tkeyword(c){
	return "\x3cspan style=\"color: #00af00;\">"+c+"\x3c/span> ";
}
function tclass(c){
	return "\x3cspan class=\"classname\">"+c+"\x3c/span> ";
}

function string(c){
	return "\x3cspan style=\"color: #7EC906;\">\""+c+"\"\x3c/span>";
}
code = "";
code += tkeyword("public");
code += tkeyword("class");
code += "Main{\n    ";
code += tkeyword("public");
code += tkeyword("static");
code += tclass("void");
code += "main{\n        ";
code += "System.out.println(";
code += string("Lorel ipsum some text hereLorel ipsum some text hereLorel ipsum some text hereLorel ipsum some text hereLorel ipsum some text hereLorel ipsum some text hereLorel ipsum some text here");
code += ")\n    }\n}";

$(".code").html(code);
$(".nav-item").mouseenter(function(){
	
	console.log($(this)[0].setAttribute("class","nav-item actived"));
});
$(".nav-item").mouseleave(function(){
	if ($(this)[0].getAttribute("id") != "now"){
		$(this)[0].setAttribute("class","nav-item");
	}
});