 let form=document.querySelector("form");
 let btn=document.querySelector(".btn");
let wrap=document.querySelector(".popup-wrapper");
let close=document.querySelector(".popup-close");

//for click me
clk=()=>{
    wrap.style.display="block";
}
btn.addEventListener("click",clk);
//for  close or cancel
closeClick=()=>{
 wrap.style.display="none";
}
close.addEventListener("click",closeClick);

window.onclick=function(e){
    if(e.target==wrap){
         wrap.style.display="none";
    }
}

// //let username=document.querySelector("#username");
//let btn=document.querySelector(".btn");
 let emailReg=/((^[a-z]{5,})[a-zA-Z0-9]+\@[a-z]{5}\.[a-z]{2,5})/;
 let passReg=/.[a-zA-Z0-9]{7}/
 let userReg=/(^[a-z]{5})[a-zA-Z0-9]{2,15}$/;
form.name.addEventListener("keyup",()=>{
     event.preventDefault();
    if(userReg.test(form.name.value)){
       form.name.classList.add("is-valid");
        form.name.classList.remove("is-invalid");
        btn.removeAttribute("disabled");
   } else{
       form.name.classList.remove("is-valid");
       form.name.classList.add("is-invalid");
       btn.setAttribute("disabled","disabled");
   }
 });

 form.email.addEventListener("keyup",()=>{
    event.preventDefault();
   if(emailReg.test(form.email.value)){
      form.email.classList.add("is-valid");
       form.email.classList.remove("is-invalid");
       btn.removeAttribute("disabled");
  } else{
      form.email.classList.remove("is-valid");
      form.email.classList.add("is-invalid");
      btn.setAttribute("disabled","disabled");
  }
});
form.password.addEventListener("keyup",()=>{
    event.preventDefault();
   if(passReg.test(form.password.value)){
      form.password.classList.add("is-valid");
       form.password.classList.remove("is-invalid");
       btn.removeAttribute("disabled");
  } else{
      form.password.classList.remove("is-valid");
      form.password.classList.add("is-invalid");
      btn.setAttribute("disabled","disabled");
  }
});
 
