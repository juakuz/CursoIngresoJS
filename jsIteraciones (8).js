function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	while (respuesta=="si")
	
	{
		contador++;
		numeroIngresa=prompt("ingrese un numero");
		console.log(contador);
		if(numeroIngresa<0)
		{
				negativo=negativo*numeroIngresa;
		}
		else
			{
				positivo=positivo+parseInt(numeroIngresa);
			}
		

		respuesta=prompt("desea continuar, s o n");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN