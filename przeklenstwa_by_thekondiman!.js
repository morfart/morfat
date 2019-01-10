#---------------------------------#
#	  Skrypt by THEkondiMAN	  #
#	thekondi.pl -  zapraszam  #
#	spis skryptów i pluginów! #
#---------------------------------#
# Zezwalam Na :                   #
# 1. Zmiane Wygladu Tagu          #
# 2. Zmiane Wygladu Wiadomosci    #
# 3. Zmiane Tresci Wiadomosci     #
# 				  #
# Nie Zezwalam Na :               #
# 1. Zmiane Nazwy Skryptu         #
# 2. Zmiane informacji o Tworcy   #
# 3. Zmiane Komendy               #
# Wszelkie Prawa Zastrzezone      #
# MPCForum - THEkondiPlaying      #
# Zakaz usuwania licencji!        # 
#---------------------------------#
options:
	nazwaskryptu: Przeklenstwa
	wersja: 1.2
	tag: &a[Przeklenstwa]&7
	tworca: &bTHEkondiMAN
	czas.bana: 24 hours
	czas.zdjecia.warna: 12 hours
variables:
	{warn.%player%} = 0
on chat:
	if player does not have permission "przeklenstwa.op":
		if {warn.%player%} < 3:
			message contains "kurwa" or "bitch" or "chuj" or "chuje" or "debil" or "pala" or "suka" or "pedal" or "gej" or "jebany" or "suko" or "debil" or "idiota" or "fuck" or "shit" or "ciota" or "kurw" or "pedale" or "kurwy" or "suki" or "dziwki" or "szmata" or "szmaciarz" or "szmaty" or "pierdole" or "japierdole" or "skurwysynie" or "sukinsynie" or "wkurwiony" or "wkurwiasz" or "pierdolony" or "pierdol" or "jeb" or "spierdalaj" or "wypierdalaj" or "huj" or "cpa" or "jep" or "sukinsyn" or "sukinsynie":
				replace all "kurwa", "bitch" and "chuj" and "chuje" and "debil" and "pala" and "suka" and "pedal" and "gej" and "jebany" and "suko" and "debil" and "idiota" and "fuck" and "shit" and "ciota" and "kurw" and "pedale" and "kurwy" and "suki" and "dziwki" and "szmata" and "szmaciarz" and "szmaty" and "pierdole" and "japierdole" and "skurwysynie" and "sukinsynie" and "wkurwiony" and "wkurwiasz" and "pierdolony" and "pierdol" and "jeb" and "spierdalaj" and "wypierdalaj" and "huj" and "cpa" and "jeb sie" and "sukinsyn" and "sukinsynie" with "****" in the message
				add 1 to {warn.%player%}
				execute console command "/playsound mob.blaze.breathe %player%"
				kick player due to "{@tag}&oZostales wywalony z serwera za wulgaryzmy ! Za 4 razem dostaniesz bana na 1 dzien!"
				broadcast "{@tag}&o%player% zostal wyrzucony za przeklenstwa!"
				wait {@czas.zdjecia.warna}
				remove 1 from {warn.%player%}
		else:
			kick player due to "{@tag}&bBan na dzien za przeklenstwa!"
			broadcast "{@tag}&o%player% zostal zbanowany na 1 dzien za przeklenstwa!"
			ban player
			wait {@czas.bana}
			unban player
			set {warn.%player%} to 0
on skript start:
	send "{@tag} &b- &aUruchomiono Skrypt!" to the console
on skript stop:
	send "{@tag} &b- &4Zakonczono dzialanie skryptu!" to the console
on join:
	send "&cMasz juz %{warn.%player%}%/3 ostrzezen za wulgaryzmy! Posiadanie powyzej trzech skonczy sie banem na {@czas.bana} !"
command /przeklenstwa [<text>] [<text>]:
	permission: przeklenstwa.op
	trigger:
		argument 1 is not set:
			argument 2 is not set:
				send "&b&l-=-=-=-=-=-=-&cPrzeklenstwa&b&l-=-=-=-=-=-=-" to player
				send "&6&lWersja &a>> &c{@wersja}" to player
				send "&6&lTworca &a>> {@tworca}" to player
				send "&6&lCzas bana po 3 ostrzezeniach &a>> {@czas.bana}" to player
				send "&cMasz juz %{warn.%player%}%/3 ostrzezen za wulgaryzmy!" to player
				send "&c/przeklenstwa odbanuj <nick> - odbanowywanie gracza!" to player
				send "&b&l-=-=-=-=-=-=-&cPrzeklenstwa&b&l-=-=-=-=-=-=-" to player
		argument 1 is "odbanuj":
			argument 2 is not empty:
				execute console command "/pardon %argument 2%"
				broadcast "{@tag}&o%argument 2% zostal odbanowany! (Powod bana: Wulgaryzmy!)"
				set {warn.%argument 2%} to 0