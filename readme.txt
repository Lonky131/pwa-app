https://pwa-app-nweb.herokuapp.com/

upute za instalaciju:
   npm i
   npm run serve
   za deploy:
   npm run build
   Ja sam osobno koristio "Web server for chrome" za pokretanje web servera preko deployanih datoteka

1. koristiti neki Native API: napravljeno
	jedina stranica sa geolocations api-em, radi preko api kljuca za google maps api.
2. biti installable: napravljeno
	u desnom kutu url bara postoji ikona "install pwa-app"
3. imati barem jednu caching strategiju: napravljeno
	src/service-worker.js:1-8
4. offline rad bar za app shell: napravljeno
	u devtools, aplication tab, klikom na offline. Aplikacija i dalje se poslužuje preko cachanih fileova, ali maps prikaz neće raditi jer se bazira na network api-u.
5.background sync: nije napravljeno
6.push notifikacija: nije napravljeno
7.demonstrirati barem na jednom primjeru progressive enhancement/gracefull degradation:nije napravljeno




