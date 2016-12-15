function Mostrar()
{

var numeroRandom;
var cont1=0;
var cont2=0;
var cont3=0;
var cont4=0;
var cont5=0;
var cont6=0;
var cont7=0;
var cont8=0;
var cont9=0;
var cont10=0;
var iteraciones=0;
var total;
var contpar=0;
var contimpar=0;


while(iteraciones<10000)
	{
	iteraciones++;
	numeroRandom=Math.floor((Math.random() * 10) + 1);

	//console.log("el numero "+numeroRandom);

		switch(numeroRandom)
			{
				case 1:
				cont1++;
				break;
				
				case 2:
				cont2++;
				break;

				case 3:
				cont3++;
				break;

				case 4:
				cont4++;
				break;

				case 5:
				total=cont1+cont2+cont3+cont4+cont5+cont6+cont7+cont8+cont9+cont10;
				porc=cont5/total*100;
				if (porc<7)
				{
					cont5++;	
				}
				else
				{
					iteraciones--;
					continue;
				}
				break;

				case 6:
				cont6++;
				break;

				case 7:
				cont7++;
				break;

				case 8:
				cont8++;
				break;

				case 9:
				cont9++;
				break;

				case 10:
				cont10++;
				break;

			}//fin del switch
	
		if(numeroRandom%2==0)
		{
			contpar++;
		}
		else		
		{
			contimpar++;
		}//fin if
	
	}//fin del while

	



total=cont1+cont2+cont3+cont4+cont5+cont6+cont7+cont8+cont9+cont10;

console.log("% de pares :"+(contpar/total*100));
console.log("% de impares :"+(contimpar/total*100));
console.log("el total es :"+total);
console.log("el 1 salio "+cont1+" veces"+(cont1/total*100)+"%");
console.log("el 2 salio "+cont2+" veces"+(cont2/total*100)+"%");
console.log("el 3 salio "+cont3+" veces"+(cont3/total*100)+"%");
console.log("el 4 salio "+cont4+" veces"+(cont4/total*100)+"%");
console.log("el 5 salio "+cont5+" veces"+(cont5/total*100)+"%");
console.log("el 6 salio "+cont6+" veces"+(cont6/total*100)+"%");
console.log("el 7 salio "+cont7+" veces"+(cont7/total*100)+"%");
console.log("el 8 salio "+cont8+" veces"+(cont8/total*100)+"%");
console.log("el 9 salio "+cont9+" veces"+(cont9/total*100)+"%");
console.log("el 10 salio "+cont10+" veces"+(cont10/total*100)+"%");




}//FIN DE LA FUNCIÓN