$.get("http://localhost:8080/api/collaborateurs", function(data) {
	var items = [];
	$.each(data, function(key, collab) {
		items.push("<tr>" + "<td>" + collab["matricule"] + "</td>" + "<td>"
				+ collab["nom"] + "</td>" + "<td>" + collab["prenom"] + "</td>"
				+ "<td>" + "<div class=\"form-check\">"
				+ "<input type=\"checkbox\" class=\"form-check-input\" value=\""
				+ collab["matricule"] + "\">" + "</div>" + "</td>" + "</tr>");
	});

	$("<tbody/>", {
		html : items.join("")
	}).appendTo("table");
});

function requestPut(url_add){
	$.ajax({
		dataType: 'json',
		type: 'PUT',
		url: url_add,
		headers: {
			"Content-Type": "application/json"
		},
		data:strData
	});
}

function putBanque(){

	var strData = JSON.stringify({
		"banque":{
			"banque": $("#banque").val() != ""? $("#banque").val():null, 
			"bic": $("#bic").val() != ""? $("#bic").val():null, 
			"iban": $("#iban").val() != ""? $("#iban").val():null}
		}
	);
	
	$('tbody input[type="checkbox"]:checked').each(function(){
		var url_add = 'http://localhost:8080/api/collaborateurs/' + $(this).val() + '/banque';
		requestPut(url_add);
	});
};

