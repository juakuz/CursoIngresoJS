//Genero el número RANDOM entre 1 y 10 
function Mostrar()
{
	var nota;

	nota = Math.floor((Math.random() * 10) + 1); 
		
	console.log(nota);
		
		/*if (nota>=10) 
		{
				alert("EXELENTE");
		}	
		if (nota>=4) 
		{
			alert("APROBO");

		}
		if (nota<4) 
		{
			alert("Vamos, la proxima se puede");
		}*/	
		if (nota>8	) 
		{
			alert("EXELENTE");
		}else
		{
			if (nota<4) 
			{
				alert("Vamos, la proxima se puede");			
			}
			else
			{
				alert("APROBO");				
			}	
		}





}
//FIN DE LA FUNCIÓN