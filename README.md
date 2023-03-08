<!-- Output copied to clipboard! -->

<!-----

Yay, no errors, warnings, or alerts!

Conversion time: 0.333 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β34
* Wed Mar 08 2023 11:20:00 GMT-0800 (PST)
* Source doc: Inlämningsuppgift - Star Wars Trivia のコピー
----->



# Inlämningsuppgift  - Star Wars Trivia (G/VG)

**Beskrivning:** Du ska med hjälp av ett API skapa en applikation där användaren kan jämföra olika Star Wars-karaktärer och deras egenskaper med varandra!

Använd följande API: [https://swapi.dev](https://swapi.dev/)

**Krav:**



* Skapa en klass som du döper till Character med egenskaperna för name, gender, height, mass,hairColor, height, skinColor, eyeColor, movies samt pictureUrl.
* Användaren ska kunna välja två karaktärer (Karaktär 1 & 2) med hjälp av varsin lista. Listorna ska bestå av minst sex namn på karaktärer från Star Wars-universumet som finns i API:et.
* Användaren ska sedan kunna klicka på en knapp för att hämta data om karaktärerna. När datat har hämtats, skapa två instanser av Character-klassen, och ge egenskaperna i klassen värden utifrån det hämtade datat. OBS! API:et ger dig inga bilder - Så dessa behöver du ta fram på egen hand.
* Rendera nu ut Karaktär 1 och Karaktär 2 i DOM:en - De ska visas ut med en bild samt namn.
* Skapa en knapp med texten “Compare characters” som i sin tur skriver ut följande information om karaktärerna:
    * Hårfärg
    * Längd
    * Vikt
    * Kön
    * Hudfärg
    * Ögonfärg
    * Antal filmer hen medverkat i.
* Det ska även framgå visuellt (text och/eller färg):
    * Vem av karaktärerna som är längst.
    * Vem som väger mest.
    * Vem som medverkat i flest filmer.
    * Om karaktärerna är av samma kön.
    * Om karaktärerna har samma hårfärg.
    * Om karaktärerna har samma hudfärg.

**<span style="text-decoration:underline;">VG</span>**

Utöver ovanstående ska du även göra följande:



* Skapa en meddelanderuta i DOM:en, här ska användaren kunna få reda på extra information om karaktärerna. 
* I din Character-klass ska du nu även skapa följande metoder där du skriver ut resultaten i meddelanderutan.
    * Metod för att hämta vilket datum karaktären först visades på film.
    * Metod för att skriva ut namnet på filmerna som bägge valda karaktärer medverkar i.
    * Metod för att jämföra karaktärens hemplanet med en annan karaktär. Skriv ut namnen på bägge karaktärernas hemplanet, om de delar samma hemplanet ska detta skrivas ut.
    * Metod för att skriva ut namnet på karaktärens dyraste fordon (jämför både starships och vehicles, men bara ett fordon ska skrivas ut).
* Kopplar karaktärens metoder till knappar som användaren kan klicka på för att få svar på följande. OBS! Skriv tydliga meddelanden i meddelanderutan t.ex “Luke Skywalker first appeared in a movie 1990-05-25”, inte endast “1990-05-25”.

**Deadline 16 mars 23:59. Inlämning sker i form av publikt Github-repo alternativt .zip-fil.**

**Lycka till! May the force be with you 🙂**

**/B**
