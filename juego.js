

/* JUEGO 1 */

var imagenesArray =[
'img/card/lavanda.png',
'img/card/anamucuadrado.png',
'img/card/arnicacuadra.png', 
'img/card/cannabis.png',
'img/card/cardo.png',
'img/card/diente.png',
'img/card/lechuga.png',
'img/card/mejorana.png',
'img/card/ortiga.png',
'img/card/ruda.png',
'img/card/tomillo.png',
]; //Array con todas las img que van pasando durante el juego

var opciones1Array = ['1. Sirve para dormir gracias a sus propiedades relajantes, ansiolíticos y sedantes. Sus propiedades antioxidantes la hacen útil para combatir problemas de la piel como el acné',
  '1. Es hipnótica, tranquilizante menor, sedante (infusión); Al igual que alcalinizante, refrescante, remineralizaste. Tiene cualidades hipnóticas, que ayudan a conciliar el sueño, presenta propiedades calmantes sobre la excitación nerviosa. También posee propiedades hipoglucemiantes (reduce el azúcar en sangre), lo que hace aconsejable su consumo por los diabéticos. Tratamiento del hígado graso por acumulación de triglicéridos y ácidos grasos. Se le atribuye un ligero efecto hipoglucemiante, como apoyo natural para disminuir los niveles de azúcar en sangre Es Cicatrizante, antiinflamatoria, analgésica y antineurálgica. Por vía tópica se usa en forma de infusión o tintura aplicada en compresas en caso de contusiones, inflamación por flebitis, hematomas y neuralgias.',
  '1. Para la tos y catarro; lombrices intestinales, desórdenes estomacales y dolores reumáticos. Antiescorbútico (previene los daños de la mucosa por falta de vitamina C. Uso Externo Afecciones de la piel (heridas, úlceras, verrugas, sarna, alergias); dolores reumáticos y musculares producto de torceduras. Usar en forma de lavados, baños o cataplasmas. Para estos usos también puede prepararse una decocción de la corteza, hirviendo 1 cucharada por 5 minutos.',
  '1. Tratamiento del hígado graso por acumulación de triglicéridos y ácidos grasos. Se le atribuye un ligero efecto hipoglucemiante, como apoyo natural para disminuir los niveles de azúcar en sangre Es Cicatrizante, antiinflamatoria, analgésica y antineurálgica. Por vía tópica se usa en forma de infusión o tintura aplicada en compresas en caso de contusiones, inflamación por flebitis, hematomas y neuralgias.',
  '1. Las ramas se usan para calmar los cólicos abdominales y eliminar parásitos intestinales; como estimulante del flujo menstrual en casos de reglas dolorosas, irregulares y débiles. En baños externos se emplea para calmar dolores reumáticos, curar sarna, psoriasis, conjuntivitis y como tratamiento natural de la pediculosis (piojos).',
  '1. El extracto de esta planta es tradicionalmente conocido por sus beneficios para hígado. El suplemento alimenticio a base esta planta  puede favorecer el mantenimiento de un flujo adecuado de bilis, al tiempo que estimula el funcionamiento del hígado y ayuda a la digestión (consumo en ensaladas). La corteza, hirviendo 1 cucharada por 5 minutos',
'1. Como planta medicinal es utilizado para la tos y catarro; lombrices intestinales, desórdenes estomacales y dolores reumáticos. Antiescorbútico (previene los daños de la mucosa por falta de vitamina C). Uso Externo Afecciones de la piel (heridas, úlceras, verrugas, sarna, alergias); dolores reumáticos y musculares producto de torceduras. Usar en forma de lavados, baños o cataplasmas. Para estos usos también puede prepararse una decocción de la corteza, hirviendo 1 cucharada por 5 minutos.',
'1. Alivia el dolor. Esto incluye distintos tipos de dolor crónico, incluso dolor por lesiones nerviosas. El uso más común es para las náuseas y los vómitos provocados por la quimioterapia para el cáncer. Hace que una persona sienta ganas de comer. Esto ayuda a personas que no comen suficiente y pierden peso debido a otras enfermedades, como el VIH/ SIDA y el cáncer. También el té de marihuana es una bebida relajante que proporciona un efecto tranquilizante y ayuda a conciliar el sueño.',
  '1. Está considerada un magnífico depurativo y diurético, además de astringente, mineralizante (alto contenido de hierro) y estimulante del sistema circulatorio; por vía oral, en infusión o el jugo recién expri- mido, se le emplea en afecciones de las vías urinarias, tratamiento de la anemia, en reumatismo y gota. En cocimiento y en aplicaciones locales o baños se emplea en dolores reumáticos, artritis, gota, neuralgias, hemorroides (pomada de ortiga), afecciones de la piel y del cuero cabelludo (caspa y caída del cabello; en este último caso mezclada con hojas de romero Castilla y toronjil cuyano).',
'3. Ha sido empleado para disminuir la inflamación y el dolor, fortalece el sistema inmune y combate algunas enfermedades crónicas. La planta se emplea en el tratamiento de estados gripales, dismenorrea, inflamaciones e infecciones bacterianas. Las hojas se usan como antiespasmódico, analgésico, hipoglicemiante, abortivo, sudorífico, diurético, sedante, antihelmíntico, emenagogo, anticancerígeno, antitusivo, cicatrizante, antimalárico, antipirético, antirreumático, insecticida y en tratamiento de enfermedades venéreas, desórdenes uterinos y gastrointestinales y afecciones de la piel.',
'1. Es Cicatrizante, antiinflamatoria, analgésica y antineurálgica. Por vía tópica se usa en forma de infusión o tintura aplicada en compresas en caso de contusiones, inflamación por flebitis, hematomas y neuralgias.'
  ]; //Array con todas las opc 1 del juego

var opciones2Array = 
['2. Tratamiento del hígado graso por acumulación de triglicéridos y ácidos grasos. Se le atribuye un ligero efecto hipoglucemiante, como apoyo natural para disminuir los niveles de azúcar en sangre Es Cicatrizante, antiinflamatoria, analgésica y antineurálgica. Por vía tópica se usa en forma de infusión o tintura aplicada en compresas en caso de contusiones, inflamación por flebitis, hematomas y neuralgias.', 
'2. Magnífico depurativo y diurético, además de astringente, mineralizante (alto contenido de hierro) y estimulante del sistema circulatorio; por vía oral, en infusión o el jugo recién expri- mido, se le emplea en afecciones de las vías urinarias, tratamiento de la anemia, en reumatismo y gota. En cocimiento y en aplicaciones locales o baños se emplea en dolores reumáticos, artritis, gota, neuralgias, hemorroides (pomada de ortiga), afecciones de la piel y del cuero cabelludo (caspa y caída del cabello; en este último caso mezclada con hojas de romero Castilla y toronjil cuyano)',
'2. Es Cicatrizante, antiinflamatoria, analgésica y antineurálgica. Por vía tópica se usa en forma de infusión o tintura aplicada en compresas en caso de contusiones, inflamación por flebitis, hematomas y neuralgias.',
'2. Alivia el dolor. Esto incluye distintos tipos de dolor crónico, incluso dolor por lesiones nerviosas. El uso más común es para las náuseas y los vómitos provocados por la quimioterapia para el cáncer. Hace que una persona sienta ganas de comer. Esto ayuda a personas que no comen suficiente y pierden peso debido a otras enfermedades, como el VIH/ SIDA y el cáncer. También el té de marihuana es una bebida relajante que proporciona un efecto tranquilizante y ayuda a conciliar el sueño.',
'2. Planta medicinal utilizada para la tos y catarro; lombrices intestinales, desórdenes estomacales y dolores reumáticos. Antiescorbútico (previene los daños de la mucosa por falta de vitamina C). Uso Externo Afecciones de la piel (heridas, úlceras, verrugas, sarna, alergias); dolores reumáticos y musculares producto de torceduras. Usar en forma de lavados, baños o cataplasmas. Para estos usos también puede prepararse una decocción de la corteza, hirviendo 1 cucharada por 5 minutos.',
'2. Esta planta contiene un tónico eficaz contra el dolor, ya sea en forma de jaquecas o molestias musculares y reumatismos. Se ha aconsejado en baños para rebajar el dolor de fracturas, contusiones o magulladuras. En uso externo; pomadas y aceites es indicado para aliviar las inflamaciones en las articulaciones. La infusión de mejorana se usa como bálsamo reparador sobre heridas cutáneas, herpes, alergias diversas, rinitis y sinusitis en forma de lavados, baños, loción o gargarismos. ',
'2. Es hipnótica, tranquilizante menor, sedante (infusión); Al igual que alcalinizante, refrescante, remineralizaste. Tiene cualidades hipnóticas, que ayudan a conciliar el sueño, presenta propiedades calmantes sobre la excitación nerviosa. También posee propiedades hipoglucemiantes (reduce el azúcar en sangre), lo que hace aconsejable su consumo por los diabéticos. Tratamiento del hígado graso por acumulación de triglicéridos y ácidos grasos. Se le atribuye un ligero efecto hipoglucemiante, como apoyo natural para disminuir los niveles de azúcar en sangre Es Cicatrizante, antiinflamatoria, analgésica y antineurálgica. Por vía tópica se usa en forma de infusión o tintura aplicada en compresas en caso de contusiones, inflamación por flebitis, hematomas y neuralgias.',
'2. Las ramas se usan para calmar los cólicos abdominales y eliminar parásitos intestinales; como estimulante del flujo menstrual en casos de reglas dolorosas, irregulares y débiles. En baños externos se emplea para calmar dolores reumáticos, curar sarna, psoriasis, conjuntivitis y como tratamiento natural de la pediculosis (piojos).',
'2. Ha sido empleado para disminuir la inflamación y el dolor, fortalece el sistema inmune y combate algunas enfermedades crónicas. La planta se emplea en el tratamiento de estados gripales, dismenorrea, inflamaciones e infecciones bacterianas. Las hojas se usan como antiespasmódico, analgésico, hipoglicemiante, abortivo, sudorífico, diurético, sedante, antihelmíntico, emenagogo, anticancerígeno, antitusivo, cicatrizante, antimalárico, antipirético, antirreumático, insecticida y en tratamiento de enfermedades venéreas, desórdenes uterinos y gastrointestinales y afecciones de la piel.',
'2. Esta planta contiene un tónico eficaz contra el dolor, ya sea en forma de jaquecas o molestias musculares y reumatismos. Se ha aconsejado en baños para rebajar el dolor de fracturas, contusiones o magulladuras. En uso externo; pomadas y aceites es indicado para aliviar las inflamaciones en las articulaciones. La infusión de mejorana se usa como bálsamo reparador sobre heridas cutáneas, herpes, alergias diversas, rinitis y sinusitis en forma de lavados, baños, loción o gargarismos.',
'2. Por sus propiedades antiespasmódica, expectorante y antiséptica, el tomillo está especialmente indicado en el tratamiento de ciertas afec- ciones de las vías respiratorias altas, particularmente las que cursan con tos irritativa, laringitis, bronquitis, asma, enfisema y gripe.']; //Array con todas las opc 2 del juego

var opciones3Array = [
'3. Ha sido empleado para disminuir la inflamación y el dolor, fortalece el sistema inmune y combate algunas enfermedades crónicas. La planta se emplea en el tratamiento de estados gripales, dismenorrea, inflamaciones e infecciones bacterianas. Las hojas se usan como antiespasmódico, analgésico, hipoglicemiante, abortivo, sudorífico, diurético, sedante, antihelmíntico, emenagogo, anticancerígeno, antitusivo, cicatrizante, antimalárico, antipirético, antirreumático, insecticida y en tratamiento de enfermedades venéreas, desórdenes uterinos y gastrointestinales y afecciones de la pie',
'3. Ha sido empleado para disminuir la inflamación y el dolor, fortalece el sistema inmune y combate algunas enfermedades crónicas. La planta se emplea en el tratamiento de estados gripales, dismenorrea, inflamaciones e infecciones bacterianas. Las hojas se usan como antiespasmódico, analgésico, hipoglicemiante, abortivo, sudorífico, diurético, sedante, antihelmíntico, emenagogo, anticancerígeno, antitusivo, cicatrizante, antimalárico, antipirético, antirreumático, insecticida y en tratamiento de enfermedades venéreas, desórdenes uterinos y gastrointestinales y afecciones de la piel',
'3. Por sus propiedades antiespasmódica, expectorante y antiséptica, el tomillo está especialmente indicado en el tratamiento de ciertas afec- ciones de las vías respiratorias altas, particularmente las que cursan con tos irritativa, laringitis, bronquitis, asma, enfisema y gripe.',
'3. Es tradicionalmente conocido por sus beneficios para hígado. El suplemento alimenticio a base de esta planta  puede favorecer el mantenimiento de un flujo adecuado de bilis, al tiempo que estimula el funcionamiento del hígado y ayuda a la digestión (consumo en ensaladas). La corteza, hirviendo 1 cucharada por 5 minutos.',
'3. Tratamiento del hígado graso por acumulación de triglicéridos y ácidos grasos. Se le atribuye un ligero efecto hipoglucemiante, como apoyo natural para disminuir los niveles de azúcar en sangre Es Cicatrizante, antiinflamatoria, analgésica y antineurálgica. Por vía tópica se usa en forma de infusión o tintura aplicada en compresas en caso de contusiones, inflamación por flebitis, hematomas y neuralgias.',
'3. Ha sido empleado para disminuir la inflamación y el dolor, fortalece el sistema inmune y combate algunas enfermedades crónicas. La planta se emplea en el tratamiento de estados gripales, dismenorrea, inflamaciones e infecciones bacterianas. Las hojas se usan como antiespasmódico, analgésico, hipoglicemiante, abortivo, sudorífico, diurético, sedante, antihelmíntico, emenagogo, anticancerígeno, antitusivo, cicatrizante, antimalárico, antipirético, antirreumático, insecticida y en tratamiento de enfermedades venéreas, desórdenes uterinos y gastrointestinales y afecciones de la piel.',
'3. Sirve para dormir gracias a sus propiedades relajantes, ansiolíticos y sedantes. Sus propiedades antioxidantes la hacen útil para combatir problemas de la piel como el acné.',
'3. Esta planta contiene un tónico eficaz contra el dolor, ya sea en forma de jaquecas o molestias musculares y reumatismos. Se ha aconsejado en baños para rebajar el dolor de fracturas, contusiones o magulladuras. En uso externo; pomadas y aceites es indicado para aliviar las inflamaciones en las articulaciones. La infusión de mejorana se usa como bálsamo reparador sobre heridas cutáneas, herpes, alergias diversas, rinitis y sinusitis en forma de lavados, baños, loción o gargarismos. ',
'3. Como planta medicinal es utilizado para la tos y catarro; lombrices intestinales, desórdenes estomacales y dolores reumáticos. Antiescorbútico (previene los daños de la mucosa por falta de vitamina C). Uso Externo Afecciones de la piel (heridas, úlceras, verrugas, sarna, alergias); dolores reumáticos y musculares producto de torceduras. Usar en forma de lavados, baños o cataplasmas. Para estos usos también puede prepararse una decocción de la corteza, hirviendo 1 cucharada por 5 minutos.',
'3. Las ramas se usan para calmar los cólicos abdominales y eliminar parásitos intestinales; como estimulante del flujo menstrual en casos de reglas dolorosas, irregulares y débiles. En baños externos se emplea para calmar dolores reumáticos, curar sarna, psoriasis, conjuntivitis y como tratamiento natural de la pediculosis (piojos).',
'3. Ha sido empleado para disminuir la inflamación y el dolor, fortalece el sistema inmune y combate algunas enfermedades crónicas. La planta se emplea en el tratamiento de estados gripales, dismenorrea, inflamaciones e infecciones bacterianas. Las hojas se usan como antiespasmódico, analgésico, hipoglicemiante, abortivo, sudorífico, diurético, sedante, antihelmíntico, emenagogo, anticancerígeno, antitusivo, cicatrizante, antimalárico, antipirético, antirreumático, insecticida y en tratamiento de enfermedades venéreas, desórdenes uterinos y gastrointestinales y afecciones de la piel.']; //Array con todas las opc 3 del juego

var respuestasArray = ['opc1','opc3','opc2','opc2','opc3','opc1','opc2','opc3','opc1','opc3','opc2']; //Array con todas las respuestas correctas

var pistaArray = ['opc2','opc1','opc3','opc1','opc2','opc2','opc3','opc1','opc3','opc1','opc3']; //Array con todas las opciones incorrectas que nos da la pista

var msjeArray = ['Ánimo, Explorador Botánico. Aunque tu puntaje sea más bajo de lo esperado, cada respuesta incorrecta es una oportunidad para aprender. No te desanimes, sigue explorando el fascinante mundo de las plantas medicinales. Aprender sobre el abuso de la industria farmacéutica y la lucha por la conservación de especies es esencial para comprender el contexto más amplio. ¡Anímate a seguir cultivando tu conocimiento y a desentrañar los secretos curativos de la naturaleza!',
'¡Bien hecho, Aprendiz de las Hierbas! Tu puntaje refleja un esfuerzo constante por conocer las propiedades medicinales de las plantas. Recuerda que cada paso cuenta en este viaje de descubrimiento. Al profundizar en la relación entre la industria farmacéutica, el sistema capitalista y la conservación de especies, estás construyendo un entendimiento más completo. Continúa desafiándote a ti mismo y expande tu conocimiento. ¡Sigue amando y respetando las plantas como lo haces!',
'¡Felicidades, Experto en Plantas! Con tu destacado puntaje, demuestras un profundo conocimiento de los usos medicinales de las plantas. Tu sabiduría es una luz en el camino hacia la comprensión de las propiedades curativas de la naturaleza. Continúa explorando y compartiendo tu amor por las plantas medicinales. Recuerda que el saber ancestral es invaluable, y tu dedicación es un tributo a la riqueza de nuestras tradiciones.']; //Array con los tres mensajes posibles

var responde; // Guardamos usando un parámetro la opción que el jugador responda al hacer click
var usoPista; // Para saber si en una pregunta, el usuario usó o no la pista
var actual; // Número de pregunta actual del usuario a medida que avanza el juego
var puntaje; // Acumulador de puntaje


function iniciarJuego1()
{
actual=0;
puntaje=0; // Reiniciamos vbles

document.getElementById('j1p1').style.display='none';
document.getElementById('j1p2').style.display='block';
document.getElementById('j1p3').style.display='none'; // Cuando reinicio el juego, esta pantalla no se tiene que seguir viendo

document.getElementById('opc1').innerHTML=opciones1Array[actual];
document.getElementById('opc2').innerHTML=opciones2Array[actual];
document.getElementById('opc3').innerHTML=opciones3Array[actual];
document.getElementById('j1img').src=imagenesArray[actual]; // Me muestra las tres opciones + la img correspondientes a la pregunta actual

document.getElementById('siguiente1').innerHTML='SIGUIENTE'; //Este botón tiene la opción de ser "SIGUIENTE" ó "TERMINAR", cuando reiniciamos el juego queremos que vuelva a ser "SIGUIENTE"

}

function usarPista()
{
document.getElementById(pistaArray[actual]).style.backgroundColor='red';
document.getElementById(pistaArray[actual]).disabled=true; // Acá tomamos el valor de la opción como pista según la pregunta, la coloreamos de rojo y la deshabilitamos

document.getElementById('pista1').disabled=true; // Deshabilitamos el botón de pista, ya que se puede usar una vez por pregunta

usoPista=true; // Si usó la pista, esta vble se vuelve verdadera y la usamos para el puntaje
}

function eligeOpcion(opcion)
{
responde = opcion; // El parámetro "opcion" puede ser "opc1", "opc2", "opc3", según sea la respuesta del usuario

document.getElementById('siguiente1').disabled=false; // Habilitamos la opción de avanzar a la próxima pregunta
document.getElementById('pista1').disabled=true; // Deshabilitamos el botón de pista
document.getElementById('opc1').disabled=true;
document.getElementById('opc2').disabled=true;
document.getElementById('opc3').disabled=true; // Deshabilitamos todas las opciones


validar(); // Validamos para sumar el puntaje correspondiente
}

function validar()
{
if (responde==respuestasArray[actual]) //Si la respuesta del usuario coincide con la correcta
{
document.getElementById(respuestasArray[actual]).style.backgroundColor='green'; // Pintamos respuesta de verde
  if(usoPista==true) // Si usó pista
  {
  puntaje++; // Sumamos 1 pto
  } else // Si no utilizó la pista
  {
  puntaje= puntaje +2; // Sumamos 2 ptos
  }
} else // Si la respuesta del usuario no coincide con la correcta
{
document.getElementById(responde).style.backgroundColor='red'; // La opción elegida por el usuario se pinta de rojo
document.getElementById(respuestasArray[actual]).style.backgroundColor='green'; // La opción correcta se pinta de verde
puntaje = puntaje; // El puntaje lo mantenemos igual
}



}

function cambiarPregunta()
{
actual++; // Pasamos a la pregunta que sigue
usoPista=false; // Reiniciamos el uso de la pista

if(actual==opciones1Array.length-1) // Si la pregunta es la última
{
document.getElementById('siguiente1').innerHTML='TERMINAR'; // El botón "SIGUIENTE" se convierte en "TERMINAR"
}
if(actual==opciones1Array.length) // Si ya respondimos la última pregunta
{
terminar(); // Terminamos el juego
}

document.getElementById('opc1').style.backgroundColor='#2e2e2b';
document.getElementById('opc2').style.backgroundColor='#2e2e2b';
document.getElementById('opc3').style.backgroundColor='#2e2e2b'; // Restauramos los botones con sus colores correspondientes



document.getElementById('opc1').innerHTML=opciones1Array[actual];
document.getElementById('opc2').innerHTML=opciones2Array[actual];
document.getElementById('opc3').innerHTML=opciones3Array[actual];
document.getElementById('j1img').src=imagenesArray[actual]; // Cambiamos opciones + img según la pregunta actual

document.getElementById('siguiente1').disabled=true;
document.getElementById('pista1').disabled=false;
document.getElementById('opc1').disabled=false;
document.getElementById('opc2').disabled=false;
document.getElementById('opc3').disabled=false; // Habilitamos o deshabilitamos botones según corresponda
}

function terminar()
{
document.getElementById('j1p2').style.display='none';
document.getElementById('j1p3').style.display='block'; // Mostramos la pantalla del puntaje

document.getElementById('puntaje1').innerHTML='OBTUVISTE ' + puntaje + '/24 PUNTOS'; // Mostramos el puntaje

if(puntaje>=0 && puntaje <8)
{
document.getElementById('msjefinal1').innerHTML=msjeArray[0];
} else if (puntaje>=8 && puntaje<16)
{
document.getElementById('msjefinal1').innerHTML=msjeArray[1];
} else 
{
document.getElementById('msjefinal1').innerHTML=msjeArray[2];
} // Mostramos los mensajes
}