function showCheck(a){
	var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
	ctx.clearRect(0,0,1000,1000);
	ctx.font = "80px 'Microsoft Yahei'";
	ctx.fillText(a,0,100);
	ctx.fillStyle = "#993366";
}
var code ;    
function createCode(){       
    code = "";      
    var codeLength = 4;
    var selectChar = new Array(1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');      
    for(var i=0;i<codeLength;i++) {
       var charIndex = Math.floor(Math.random()*60);      
      code +=selectChar[charIndex];
    }      
    if(code.length != codeLength){      
      createCode();      
    }
    showCheck(code);
}

function showCheck1(a){
    var c = document.getElementById("myCanvas1");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,1000,1000);
    ctx.font = "80px 'Microsoft Yahei'";
    ctx.fillText(a,0,100);
    ctx.fillStyle="#993366";
}
var code1 ;
function createCode1(){
    code1 = "";
    var codeLength = 4;
    var selectChar = new Array(1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');
    for(var i=0;i<codeLength;i++) {
        var charIndex = Math.floor(Math.random()*60);
        code1 +=selectChar[charIndex];
    }
    if(code1.length != codeLength){
        createCode1();
    }
    showCheck1(code1);
}
          
function validate () {
    var name = $(".name").val();
    var pass  =$(".password").val();
    if(name!=null && name!="" && name!="admin"){
       $(".name").val("");
        $(".name").attr("placeholder","账号错误");
    }else{
        $(".name").attr("placeholder","账号不为空");
    }

    if(pass!=null && pass!="" && pass!="0520"){
        $(".password").val("");
        $(".password").attr("placeholder","密码错误");
    }else{
        $(".password").attr("placeholder","密码不为空");
    }


    var inputCode = document.getElementById("J_codetext").value.toUpperCase();
    var codeToUp=code.toUpperCase();
    if(inputCode.length <=0) {
      document.getElementById("J_codetext").setAttribute("placeholder","输入验证码");
      createCode();
      return false;
    }
    else if(inputCode != codeToUp ){
      document.getElementById("J_codetext").value="";
      document.getElementById("J_codetext").setAttribute("placeholder","验证码错误");
      createCode();
      return false;
    }
    else {
  /*    window.open(document.getElementById("J_down").getAttribute("data-link"));
      document.getElementById("J_codetext").value="";
      createCode();*/
        if(name="admin"&&pass=="0520"){
            location.href="index.html";
        }

      return true;
    }

}