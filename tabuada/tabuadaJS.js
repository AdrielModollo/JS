function calcular(){ 
     var n= new Number(document.fr.txtValor.value);
    var tabuada="<table align=center>";
   for (i = 0; i <= 10; i++){
         var p = n*i;
  tabuada = tabuada + "<tr><td>" + n + " x " + i + " = " + p;
  }
  tabuada = tabuada + "</table>";
  document.getElementById("resposta").innerHTML = tabuada;
}
