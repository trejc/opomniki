window.addEventListener('load', function() {
	//stran nalozena
	
	var izvediPrijavo = function(event) {
		var uporabnik = document.querySelector("#uporabnisko_ime").value;
		document.querySelector("#uporabnik").innerHTML=uporabnik;
		document.querySelector(".pokrivalo").style.display="none";
	}
	
	var dodajOpomnik = function(event) {
		var naziv = document.querySelector("#naziv_opomnika").value;
		var cas = document.querySelector("#cas_opomnika").value;
		
		document.querySelector("#naziv_opomnika").value = "";
		document.querySelector("#cas_opomnika").value = "";
		
		document.querySelector("#opomniki").innerHTML += 
		"<div class=\"opomnik rob senca\"> \
			<p>"+naziv+"<p> \
			<p>Opomnik čez <span>"+cas+"</span> sekund<p> \
		</div>";
	}

	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
			if(cas === 0) {
				var naziv = opomnik.querySelector("p").innerHTML;
				document.querySelector("#opomniki").removeChild(opomnik);
				document.querySelector("#opomniki").innerHTML +=
				"<div class=\"opozorilo rob senca\" > \
					<p>Opomnik!\n\nZadolžitev "+naziv+" je potekla!<p> \
				</div>";
			}else {
				cas = cas - 1;
				opomnik.querySelector("span").innerHTML = cas;
			}
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
	document.querySelector("#prijavniGumb").addEventListener("click", izvediPrijavo);
	document.querySelector("#dodajGumb").addEventListener("click", dodajOpomnik);
});