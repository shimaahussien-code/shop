
///////////////////////////////////////////////////////////////////////////////////////////


  var allProducts = document.querySelectorAll(".skills-item .card ")
  var content = document.querySelector("#content")
  var pricecontent = document.querySelector("#pricecontent")
  var btncalc = document.querySelector("#btncalc")
  var btnreset = document.querySelector("#btnreset")
  var btnclose = document.querySelector("#btnclose")
  var btnshow = document.querySelector("#btnshow")
  var model = document.querySelector("#myModal")
var contentModel = document.querySelector("#contentModel")
var priceModel = document.querySelector("#priceModel")
var btndesc = document.querySelector("#btncalcModel")
var btnresetModel = document.querySelector("#btnresetModel")
var btncontinue = document.querySelector("#btncontinue")
var btnclosemodel = document.querySelector("#btnclosemodel")
var productNum = document.querySelector("#shopping")
 var Num = 0 
  var pricelist = document.querySelector(".skills .holder")
  var totalPrice = 0
  var descount =0
  
   allProducts.forEach( function (item){
    
   
        item.onclick = function (){
            if (content.innerHTML != "" ){
                
                pricelist.style.display = "block"
                
            }
            
Num++;
   productNum.innerHTML = Num
            totalPrice += +(item.getAttribute("price"))
            content.innerHTML += item.textContent + " <br/> "     
            pricecontent.innerHTML += item.getAttribute("price") + "$" +" <br/> "
            
            contentModel.innerHTML  += item.textContent + " <br/> "
            priceModel.innerHTML  += item.getAttribute("price") + "$" +" <br/> "
        }
   })
   
   btndesc.onclick = function () {
       descount= totalPrice- ( totalPrice*0.25 ) 
       priceModel.innerHTML= "Your balance now" + descount +"$";
   }
   btncalc.onclick = function (){
    pricecontent.innerHTML= "TOTAL :" + totalPrice +"$" +" <br/> "
   }
    btnreset.onclick = function(){
        content.innerHTML= "";
        pricecontent.innerHTML = ""
        totalPrice=0
        descount=0
        Num=0
        productNum.innerHTML = 0
     }
     btnresetModel.onclick = function(){
        contentModel.innerHTML= "";
        priceModel.innerHTML = ""
        descount=0
        Num=0
        productNum.innerHTML = 0
     }
    
   btnclose.onclick = function (){
    content.innerHTML= "";
    pricecontent.innerHTML = ""
    totalPrice=0 
    descount=0
    Num=0
    productNum.innerHTML = 0
    pricelist.style.display = "none"
}
btnclosemodel.onclick = function (){
    contentModel.innerHTML= "";
    priceModel.innerHTML = ""
    totalPrice=0 
    descount=0
    Num=0
    productNum.innerHTML = 0
    pricelist.style.display = "none"
}
    
////////////////////////////////////////////////////////////////////////////////

 


