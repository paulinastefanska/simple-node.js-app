process.stdin.setEncoding('utf-8'); //odpowiednie enkodowanie przyjmowanych danych

process.stdin.on('readable', function() { //ustawienie nasłuchiwania na zdarzenia odczytu
    //metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if(input !== null) { //funkcja warunkowa, która sprawdzająca, czy na wejściu podano jakąś wartość
        
        var instruction = input.toString().trim(); //metoda trim - pozbywamy się wszystkich spacji, tabulatory, entery - pozostaje sam czysty tekst
        switch (instruction) {
        	case '/exit':
	            process.stdout.write('Quitting app!\n');
	            process.exit();
	            break;
	        case '/version':
	        	process.stdout.write('Your node.js version is: ' + process.versions.node + '\n');
	        	process.exit();
	        	break;
	        case '/language':
	        	process.stdout.write('The language of your system is: ' + process.env.LANG + '\n');
	        	process.exit();
	        	break;	
	        default:
	            process.stderr.write('Wrong instruction!');
    	}
    }	
});