<?

		// Dirección de mail a la que se envía el mensaje
		$sendto  = 'lasmasvagabundas<@gmail.com'; 
		// Asunto del mensaje
		$subject = "Formulario de contacto - Las mas vagabundas"; 
	
		// Contenido del mensaje
		// El caracter \n indica un salto de línea
		$corps="Nombre: ".$_REQUEST['nombre']."\n".
		"Email: ".$_REQUEST['email']."\n".
		"Mensaje: ".$_REQUEST['mensaje']."\n"."\n";
	
		// Datos de quien envía el mensaje, para poder responder al mismo mensaje recibido
		$From = "From: ".$_REQUEST['nombre']." <".$_REQUEST['email'].">\n";
		$From .= "Reply-To: ".$_REQUEST['nombre']." <".$_REQUEST['email'].">\n";

		// Comando para enviar el mail 
		@mail($sendto,$subject,$corps,$From);

?>
