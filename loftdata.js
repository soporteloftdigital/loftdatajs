
function loftDigitalForm( API_KEY ){
    var form_id = document.getElementById(API_KEY.ACTION);
    var objeto = [];
	if(form_id){
		form_id.addEventListener( "submit", function(event){
            event.preventDefault();
            var http = new XMLHttpRequest();
            var url = "https://preproduccion.loftdigital.cl/loftdata/";
            var a = 0;
            for (var i = 0; i < form_id.elements.length; i++) {
                if(form_id.elements[i].type != "submit" && form_id.elements[i].value != "")
                {
                    var temp_obj = {};
                    temp_obj["API_KEY"] =  API_KEY.API_KEY+"|"+API_KEY.ACTION;
                    temp_obj["nombre_campo"] = form_id.elements[i].name;
                    temp_obj["valor"] = encodeURIComponent(escape(form_id.elements[i].value));
                    objeto.push(temp_obj);
                }
            }
            //var formdata = new FormData(form_id);
            var json_upload = "form_collection=" + JSON.stringify(objeto);
            json_upload = String(json_upload);
            http.open("POST", url, true);
            http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            http.onreadystatechange = function() {
                if(http.readyState == 4 && http.status == 200) { 
                //aqui obtienes la respuesta de tu peticion
                console.log(http.responseText);
                }
            }
            http.send(json_upload);
            //this.submit();
        })
    }
}