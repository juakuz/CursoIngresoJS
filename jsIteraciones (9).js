function Mostrar()
{

	var contador=0;
	// declarar variables
	var minimo=0;
	var maximo;
	var respuesta="si";

	while(respuesta!="no")
	{
		contador++;
		numeroIngresa=prompt("ingrese un numero");
		numeroIngresa=parseInt(numeroIngresa);
		if(contador==1)
		{
			maximo=numeroIngresa;
			minimo=numeroIngresa;
		}

		else
		{
			if(numeroIngresa<minimo)
			{
			minimo=numeroIngresa;
			}
			
			if(numeroIngresa>maximo)
			{
				maximo=numeroIngresa;
			}
		}
	respuesta=prompt("desea continuar, si o no");
	}
document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;



}//FIN DE LA FUNCIÓN