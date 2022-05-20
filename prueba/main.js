
 const btnCalcular=document.createElement('button');
 const btnPagos=document.createElement('button');
 const spanMensual=document.createElement('span');
 const divMensual=document.createElement('div');
 const spanToralI=document.createElement('span');
 const divTotalI=document.createElement('div');
 const spanPagos=document.createElement('span');
 const divPagos=document.createElement('div');



function loadForm(){
    
    const root=document.getElementById("root");
    const content=document.createElement('div');
    const form=document.createElement('form');
    const h1=document.createElement('h1');
    const divTitle=document.createElement('div');
    const spanPrincipal=document.createElement('span');
    const inputPrincipal=document.createElement('input');
    const spanPlazo=document.createElement('span');
    const inputPlazo=document.createElement('input');
    const spanInteres=document.createElement('span');
    const inputInteres=document.createElement('input');
   
   
    form.className="col-8 row"
    spanPrincipal.className="col-5 h4 ";
    spanPrincipal.innerHTML="Principal:";
    inputPrincipal.className="col-4 ";
    inputPlazo.className="col-4 ";
    spanPlazo.className="col-5 h4 ";
    spanPlazo.innerHTML="Plazo en meses:";
    inputInteres.className="col-4";
    spanInteres.className="col-5 h4";
    spanInteres.innerHTML="Taza de interés mensual:";
    btnCalcular.className="btn btn-primary col-4 m-4";
    btnCalcular.innerHTML="Calcular"
    btnPagos.className="btn btn-primary col-4 m-4";
    btnPagos.innerHTML="Reset"
    divMensual.className="col-4";
    spanMensual.className="col-5 h4";
    spanMensual.innerHTML="Pago mensual:";
    divTotalI.className="col-4";
    spanToralI.className="col-5 h4";
    spanToralI.innerHTML="Total interés:";
    divPagos.className="col-4";
    spanPagos.className="col-5 h4";
    spanPagos.innerHTML="Total pagos:";
    content.className="container";
    h1.innerHTML="Amortización Sistema Francés";
    h1.className="text-center bg-dark text-white";
    inputInteres.type="number";
    inputPrincipal.type="number";
    inputPlazo.type="number";
    inputPlazo.max="12";
    inputPlazo.min="1";
  

    
    inputPrincipal.id="Id_Principal";
    inputPlazo.id="Id_Plazo";
    inputInteres.id="Id_Interes";
    
    divTitle.appendChild(h1);
    form.appendChild(divTitle)
    form.appendChild(spanPrincipal)
    form.appendChild(inputPrincipal)
    form.appendChild(spanPlazo)
    form.appendChild(inputPlazo)
    form.appendChild(spanInteres)
    form.appendChild(inputInteres)
    form.appendChild(btnPagos)
    form.appendChild(btnCalcular)
    form.appendChild(spanMensual)
    form.appendChild(divMensual)
    
    form.appendChild(spanToralI)
    form.appendChild(divTotalI)
    form.appendChild(spanPagos)
    form.appendChild(divPagos)
    content.appendChild(form);
    root.appendChild(content);
    
    
}

document.addEventListener('DOMContentLoaded',loadForm);

btnCalcular.addEventListener('click',(e)=>{
    const root=document.getElementById("root");
    const content=document.createElement('div');
    content.className="container";
    const table=document.createElement('table');
    const th=document.createElement('th');
    const tr=document.createElement('tr');
    const thead=document.createElement('thead');
    const th1head=document.createElement('th');
    const th2head=document.createElement('th');
    const th3head=document.createElement('th');
    const th4head=document.createElement('th');
    const th5head=document.createElement('th');
    const tBody=document.createElement('tbody');
    table.className="table";
    th.scope="row";
    th1head.scope="col";
    th1head.innerHTML="Parc";
    th2head.scope="col";
    th2head.innerHTML="Amort";
    th3head.scope="col";
    th3head.innerHTML="Interés";
    th4head.scope="col";
    th4head.innerHTML="Pagos";
    th5head.scope="col";
    th5head.innerHTML="Saldo";
    console.log("funciona")
    let principalValue=Number(document.getElementById("Id_Principal").value);
    let plazoValue=Number(document.getElementById("Id_Plazo").value);
    let interesValue=Number(document.getElementById("Id_Interes").value);

    let cuota=principalValue*(Math.pow((1+interesValue/100),plazoValue))*(interesValue/100)/(Math.pow((1+interesValue/100),plazoValue)-1);
    let interes=0;
    let descInteres=0;
    let TotalInt=0;
   
   for(let i=1;i<=plazoValue;i++){ 
       
    const tr1=document.createElement('tr');      
    interes=(principalValue*0.050);
    descInteres=(cuota-interes);
    principalValue=(principalValue-descInteres);
    TotalInt+=interes;
    console.log(TotalInt);
    console.log(principalValue);
    
    tr1.innerHTML=`
    <td>${i}</td>
    <td>${descInteres.toFixed(2)}</td>
    <td>${interes.toFixed(2)}</td>
    <td>${cuota.toFixed(2)}</td>
    <td>${principalValue.toFixed(2)}</td>
    `
    tBody.appendChild(tr1);
   }
  

   tr.appendChild(th1head);
   tr.appendChild(th2head);
   tr.appendChild(th3head);
   tr.appendChild(th4head);
   tr.appendChild(th5head);
   table.appendChild(thead);
   thead.appendChild(tr)
   content.appendChild(table);
   root.appendChild(content);
   table.appendChild(tBody);

    divMensual.innerHTML= (cuota).toFixed(2);
    divTotalI.innerHTML=(TotalInt).toFixed(2);
    divPagos.innerHTML=(cuota*plazoValue).toFixed(2);
    e.preventDefault();
})