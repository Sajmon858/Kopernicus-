
const WEBHOOK_URL='WSTAW_TUTAJ_WEBHOOK_DISCORD';

async function sendDiscord(){
 const data={
  content:`🚑 Nowa KMCR
Pacjent: ${imie.value} ${nazwisko.value}
Wiek: ${wiek.value}
Rozpoznanie: ${rozpoznanie.value}
Kierownik: ${kierownik.value}`
 };
 if(WEBHOOK_URL==='WSTAW_TUTAJ_WEBHOOK_DISCORD'){
   alert('Wstaw webhook Discord w js/app.js');
   return;
 }
 await fetch(WEBHOOK_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
 alert('Wysłano!');
}
