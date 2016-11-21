function Mostrar()
{
//tomo la edad  
	var estadoCivil;
	var edad;

	estadoCivil=document.getElementById('estadoCivil').value;
	edad=document.getElementById('edad').value;

	if (edad<18 && estadoCivil!="Soltero")
	{
		alert("Es muy pequeño");
	}

}//FIN DE LA FUNCIÓN