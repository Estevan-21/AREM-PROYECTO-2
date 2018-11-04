 /*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ConvertControllerModule = (function () {
    var convert = function(){
         
        var currency1 =document.getElementById('id').options[document.getElementById('id').selectedIndex].value;
        var currency2 =document.getElementById('id2').options[document.getElementById('id2').selectedIndex].value;
        var value=document.getElementById('amount').value;
        console.log(currency1+"--"+currency2+"--"+value);

        var callback = {
            
            onSuccess: function(response){                    
                    console.log(response);

                    var data = document.getElementById('result');
                    var texto='<label for="Text1" class="p-3 mb-2 bg-primary text-white text-center" style="position: absolute; top: 310px; left: 200px;  width: 805px">';
                    var datos=JSON.stringify(response); 
                    datos=datos.split(",");
                    var val=datos[4];
                    val=val.replace('"        \\"5. Exchange Rate\\": \\"',"");
                    val=val.replace("\\","");
                    val=val.replace("\"","");
                    val=val.split(":");
                    val[1]=val[1].replace("\"","");
                    val[1]=val[1].replace("\"","");
                    var c=parseFloat(val[1]);

                    var d=document.getElementById('amount').value;
                    c=c*d;
                    c=parseFloat(c);

                    texto+="Conversion for: "+d+" "+currency1+" is: "+ c+" "+currency2;

                    texto+="</label>"
                    data.innerHTML=texto;                    
                    data.innerHTML=texto;


            },
            onFailed: function(exception){
                console.log(exception);
                alert("There is a problem with our servers. We apologize for the inconvince, please try again later");  
            }
         };
        ConvertRestControllerModule.convert(callback,currency1,currency2,value);

    };
   
  

  return {
    convert: convert
  };
})();

var ListControllerModule = (function () {
    var getList = function(){                 

        var callback2 = {
            
            onSuccess: function(response){
                    console.log("BIEN");
                    var datos=JSON.stringify(response);
                    console.log(datos);
                    datos=datos.split(",");
                    console.log(datos);
                var tablas=document.getElementById('table');
                datos[0]=datos[0].replace("{","");
                var textoHTML='<table class="table table-striped table-sm" style="position: absolute; top: 380px; left: 400px;  width: 505px"> <thead> <tr> <th class="text-center">Exchange Rates</th> <th class="text-center">Value (1USD)</th></tr> </thead> <tbody id="OrdersBody">';
                    for (i=0;i < datos.length;i++){
                        datos[i]=datos[i].replace("\"    ","");
                        datos[i]=datos[i].replace('\\\ ',"");
                        datos[i]=datos[i].replace("\\","");
                        datos[i]=datos[i].replace("\\","");
                        datos[i]=datos[i].replace("\"","");
                        datos[i]=datos[i].replace("\"","");
                        datos[i]=datos[i].split(":");
                        textoHTML+= '<tr> <td class="text-center">';
                        textoHTML+=datos[i][0];
                        textoHTML+='</td> <td class="text-center">';
                        textoHTML+=datos[i][1];
                        textoHTML+="</td> </tr>"; 
                    }                   
                    textoHTML+="</tbody> </table>"            
                    tablas.innerHTML+=textoHTML;
            },
            onFailed: function(exception){
                console.log(exception);
                alert("There is a problem with our servers. We apologize for the inconvince, please try again later");  
            }
         };
        ListRestControllerModule.getList(callback2);

    };
   
  

  return {
    getList: getList
  };
})();



