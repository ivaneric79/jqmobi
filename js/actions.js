//funcionalidad
$(document).ready(function(e){
	document.addEventListener("deviceready", function(){
	
		var src="";
		$('#main ul li a').tap(function(){
			src=$(this).attr('rel');
			$('#descargar').attr('title',$(this).text());
		});
		$('#descargar a').tap(function(){
			alert(src);
			if($(this).text()=='Descargar'){
				//Descarga de archivos con transaction
				var fileTransfer = new FileTransfer();
var uri = encodeURI(src);

fileTransfer.download(
    uri,
    'file:///mnt/miarchivo.mp3',
    function(entry) {
        alert("download complete: " + entry.fullPath);
    },
    function(error) {
       alert("download error source " + error.source);
        alert("download error target " + error.target);
        alert("upload error code" + error.code);
    }
);

				
				
			}
			if($(this).text()=='Probar'){
				//Play de media
				// Create Media object from src
				my_media = new Media(src, null, function(){
					alert('Error');
				});
	
				// Play audio
				my_media.play();
			}
		});
	}, false);
});