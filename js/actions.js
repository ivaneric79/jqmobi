//funcionalidad
/*$(document).ready(function(e) {
	document.addEventListener("deviceready", function() {

		var src = "";
		$('#main ul li a').tap(function() {
			src = $(this).attr('rel');
			$('#descargar').attr('title', $(this).text());
		});
		$('#descargar a').tap(function() {
			alert(src);
			if ($(this).text() == 'Descargar') {
				//Descarga de archivos con transaction
				var fileTransfer = new FileTransfer();
				var uri = encodeURI(src);

				fileTransfer.download(uri, 'file:///mnt/sdcard/miarchivo.mp3', function(entry) {
					alert("download complete: " + entry.fullPath);
				}, function(error) {
					alert("download error source " + error.source);
					alert("download error target " + error.target);
					alert("upload error code" + error.code);
				});

			}
			if ($(this).text() == 'Probar') {
				//Play de media
				// Create Media object from src
				my_media = new Media(src, null, function() {
					alert('Error');
				});

				// Play audio
				my_media.play();
			}
		});
	}, false);
});*/

$(document).ready(function() {
	document.addEventListener("deviceready", function() {
		var src = "";
		$('#main ul li a').tap(function() {

			src = $(this).attr('rel');
			$('#descargar').attr('title', $(this).text());
			alert(src);
		});

		var audio = document.getElementById('Reproductor');
		$('#descargar a').tap(function() {
			if ($(this).text() == 'Descargar') {
				  window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){
				  	var ruta = fileSystem.root.fullpath;
				  }, null);

				
				var fileTransfer = new FileTransfer();
				var uri = encodeURI(src);

				fileTransfer.download(uri, ruta+'ringtoneApp/archivo.mp3', function(entry) {
					alert("download complete: " + entry.fullPath);
				}, function(error) {
					alert("download error source " + error.source);
					alert("download error target " + error.target);
					alert("upload error code" + error.code);
				});

				//Accion descargar
			} else {

				//Accion reproducir
				audio.src = src;
				audio.play();

			}

		});
	}, false);
});
