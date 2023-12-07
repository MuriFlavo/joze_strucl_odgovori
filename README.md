
# Praksa:

---
_vprašanje:_
```
Najmanj koliko ocen boš dobil pri predmetu kot celoti v posameznem ocenjevalnem obdobju. Torej najmanj koliko ocen bo potrebnih v redovalnici v eAsistentu v posameznem ocenjevalnem obdobju, da se ti bo lahko zaključila končna ocena za spričevalo? Mišljene so ocene tako pri teoriji, kot pri praksi. Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!
```
_odgovor:_
```
 3
```

---
_vprašanje:_
```
Kateri kriterij bo veljal za pridobitev ocene v posameznem ocenjevalnem obdobju za sprotne zagovore vaj pri praksi?
```
_odgovor:_
```
Na voljo je 100 točk. Kriterij: do 50t nzd(1), 50t zd(2), 65t db(3), 80t pd(4), 90t odl(5)
```

---
_vprašanje:_
```
Da boš posledično ob koncu ocenjevalnega obdobja pozitiven pri praksi kot celoti moraš biti... Izberi vse ustrezne trditve?
```
_odgovor:_
```
Pozitivno ocenjen samo pri praksi.
```

---
_vprašanje:_
```
Prikažite gostoto prebivalstva za Slovenijo. V glavi stolpca naj piše: Gostota prebivalstva za Slovenijo.
```
_odgovor:_
```
SELECT prebivalstvo/površina AS 'Gostota prebivalstva za Slovenijo' FROM države WHERE država = 'Slovenija';
```

---
_vprašanje:_
```
Izpišite imena vseh držav, ki so velike med 10.000 in 30.000 km2. Spisek uredite po abecednem vrstnem redu naraščajoče.
```
_odgovor:_
```
SELECT država FROM države WHERE površina BETWEEN 10000 AND 30000 ORDER BY država;
```

---
_vprašanje:_
```
Izpišite vse podatke za Slovenijo in Avstrijo.
```
_odgovor:_
```
SELECT * FROM države WHERE država='Slovenija' OR država='Avstrija';
```
```
SELECT * FROM države WHERE država IN ('Slovenija', 'Avstrija');
```

---
_vprašanje:_
```
Izpišite vse podatke o državah, katerih ime se prične s črko H.
```
_odgovor:_
```
SELECT * FROM države WHERE država LIKE 'H%';
```

---
_vprašanje:_
```
Izpišite vse podatke iz tabele države.
```
_odgovor:_
```
SELECT * FROM države;
```

---
_vprašanje:_
```
Izpišite imena vseh držav.
```
_odgovor:_
```
SELECT država FROM države;
```

---
_vprašanje:_
```
Prikažite gostoto prebivalstva za Italijo. V glavi stolpca naj piše: Gostota prebivalstva za Italijo.
```
_odgovor:_
```
SELECT prebivalstvo/površina AS 'Gostota prebivalstva za Italijo' FROM države WHERE država = 'Italija';
```

---
_vprašanje:_
```
Izpišite vse podatke o državah, katerih ime se ne prične s črko A.
```
_odgovor:_
```
SELECT * FROM države WHERE država NOT LIKE 'A%';
```

---
_vprašanje:_
```
Izpišite imena in površino vseh držav, ki so večje od 300.000 km2. Spisek uredite naraščajoče po velikosti držav.
```
_odgovor:_
```
SELECT država, površina FROM države WHERE površina > 300000 ORDER BY površina;
```

---
_vprašanje:_
```
Kateri SQL ukaz je avtor uporabil za rešitev prikazane naloge, oziroma katere izmed prikazanih poizvedb (A, B, C, D) vrne rezultat, ki je prikazan na sliki? Pazi, naloga je tipa izberi vse pravilne!
```
```
Kateri SQL ukaz je avtor uporabil za rešitev prikazane naloge, oziroma katere izmed prikazanih poizvedb (A, B, C, D) vrnejo rezultat, ki je prikazan na sliki?
```
_odgovor:_

> [!WARNING]
> POGLEJ SLIKO

```
SQL_Naloga_1 | poizvedbo A

SQL_Naloga_2 | poizvedbo B

SQL_Naloga_3 | poizvedbo C

SQL_Naloga_4 | poizvedbo D
```

---
_vprašanje:_
```
Najmanj koliko ocen boš dobil pri praksi v posameznem ocenjevalnem obdobju, kot končno oceno za sprotno tedensko preverjanje znanja, ki ga bomo poimenovali kar sprotni zagovori vaj? Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!
```
_odgovor:_
```
1
```

---
_vprašanje:_
```
Koliko rezerviranih besed jezika SQL (torej koliko ključnih besed jezika SQL) je uporabljenih v splošni obliki zapisa (sintaksa ukaza) ukaza SELECT za povezovanje z ukazom JOIN? (Znak za enačaj ne štejemo kot ključno besedo!) Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!
```
_odgovor:_
```
4
```

---
_vprašanje:_
```
Koliko rezerviranih besed jezika SQL (torej koliko ključnih besed jezika SQL) je uporabljenih v splošni obliki zapisa (sintaksa ukaza) ukaza SELECT za povezovanje z enačajem? (Znak za enačaj ne štejemo kot ključno besedo!) Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!
```
_odgovor:_
```
3
```

---
_vprašanje:_
```
Imamo dve tabeli, ki sta povezani preko ustreznih dveh polj. Izberi vse ustrezne trditve? Pazi, točke dobiš le za nalogo z vsemi pravilnimi rešitvami.
```
_odgovor:_

> [!warning] :warning: VEČ NALOG Z ISTIM VPRAŠANJEM, IMA 2 ODGOVORA

```
SQL SELECT ukaz, kjer uporabimo povezovanje z LEFT JOIN nam vrne največje število vrstic
```
```
SQL SELECT ukaz, kjer uporabimo povezovanje z enačajem nam lahko vrne enako število vrstic, kot če uporabimo povezovanje z LEFT JOIN
```
```
SQL SELECT ukaz, kjer uporabimo povezovanje z LEFT JOIN lahko vedno enakovredno zamenjamo z enakovrednim ukazom z RIGHT JOIN
```
```
SQL SELECT ukaz, kjer uporabimo povezovanje z RIGHT JOIN lahko vedno enakovredno zamenjamo z enakovrednim ukazom z LEFT JOIN
```

---
_vprašanje:_
```
Besedilo Vaje7: podan program, ki izpiše prve tri stoplce iz tabele Artikel v podani bazi spremni tako, da: 1. Izpiše vse podatke iz tabel Račun, Postavka in Artikel. (Opomba: Besedilo Vaje 13 za 15 teden v spodnji nalogi beri kot "Besedilo Vaje 7".)
```
_odgovor:_
```
3
```

---
_vprašanje:_
```
Besedilo Vaje 7: podan program, ki izpiše prve tri stoplce iz tabele Artikel v podani bazi spremni tako, da: 1. Izpiše vse podatke iz tabel Račun, Postavka in Artikel. (Opomba: Besedilo Vaje 13 za 15 teden v spodnji nalogi beri kot "Besedilo Vaje 7".)
```
_odgovor:_
```
1
```

---
# Teorija:

---
_vprašanje:_
```
Kateri kriterij bo veljal za pridobitev ocene v posameznem ocenjevalnem obdobju za sprotno preverjanje znanja pri teoriji?
```
_odgovor:_
```
Nobeden izmed naštetih
```

---
_vprašanje:_
```
Najmanj koliko ocen boš dobil pri predmetu kot celoti v posameznem ocenjevalnem obdobju. Torej najmanj koliko ocen bo potrebnih v redovalnici v eAsistentu, da se ti bo lahko zaključila končna ocena za spričevalo? Mišljene so ocene tako pri teoriji, kot pri praksi. Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!
```
_odgovor:_
```
3
```

---
_vprašanje:_
```
Vnesi angleško kratico za pojem "Jezik za rokovanje s podatki". Odgovoriti moraš z vnosom samih v velikih črk. Zapiši kot kratico s samimi velikimi črkami!
```
_odgovor:_
```
DML
```

---
_vprašanje:_
```
Kaj pomeni kratica BNF?
```
_odgovor:_
```
Backus–Naur form (often used to describe the syntax of languages used in computing)
```

---
_vprašanje:_
```
Koliko stolpcev je v rezultatu naslednjega ukaza? SELECT EmployeeID AS Zaposleni, COUNT(*) AS 'Število naročil' FROM Orders GROUP BY EmployeeID; Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!
```
_odgovor:_
```
2
```

---
_vprašanje:_
```
Katere trditve držijo za udeležbo pri šolskih urah, ki se izvajajo v računalniških učilnicah?
```
_odgovor:_
```
VSI ODGOVORI
```

---
_vprašanje:_
```
Izpišite imena in površino vseh držav, ki so manjše od 300.000 km2. Spisek uredite naraščajoče po velikosti držav.
```
_odgovor:_
```
SELECT država, površina FROM države WHERE površina < 300000 ORDER BY površina;
```

---
_vprašanje:_
```
Izpišite vse podatke o državah, katerih ime se prične s črko A ali s črko H.
```
_odgovor:_
```
SELECT * FROM države WHERE država LIKE 'A%' OR država LIKE 'H%'
```

---
_vprašanje:_
```
Prikažite ime države in gostoto prebivalstva za Slovenijo in Italijo. V glavi drugega stolpca naj piše: Gostota prebivalstva.
```
_odgovor:_
```
SELECT država, prebivalstvo/površina AS 'Gostota prebivalstva' FROM države WHERE država = 'Italija' OR država = 'Slovenija';
```

---
_vprašanje:_
```
Koliko je vseh kosov v naročilu?? Izberi vse pravilne rešitve.
```
_odgovor:_
```
SELECT SUM(kosi) FROM naročilo;
```

---
_vprašanje:_
```
Koliko je različnih vrst izdelkov? Izberi vse pravilne rešitve.
```
_odgovor:_
```
SELECT COUNT(DISTINCT vrsta_izdelka) FROM naročilo
```

---
_vprašanje:_
```
Koliko je zapisov v tabeli naročilo? Izberi vse pravilne rešitve.
```
_odgovor:_
```
SELECT COUNT(*) FROM naročilo;
```
```
SELECT COUNT(ime_izdelka) FROM naročilo;
```

---
_vprašanje:_
```
Koliko različnih oblik SELECT ukaza za povezovanje tabel je opisanih v gradivu? Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!
```
_odgovor:_
```
3
```

---
_vprašanje:_
```
Izberi vse pravilne trditve. (LEFT JOIN)
```
_odgovor:_
```
LEFT JOIN nam vrne tudi tiste zapise iz »leve« tabele, ki nimajo povezave z »desno« tabelo.
```
```
LEFT JOIN nam vrne tudi vse zapise iz »leve« tabele.
```
```
LEFT JOIN nam vrne tudi tiste zapise iz »desne« tabele, ki imajo povezavo z »levo« tabelo.
```
```
LEFT JOIN nam vrne vse zapise iz »leve« tabele in samo tiste zapise iz »desne« tabele, ki imajo povezavo z »levo« tabelo.
```
```
Rezultat leve zunanje združitve vrne enako ali več vrstic, kot rezultat notranje združitve.
```
```
Možno je, da rezultat leve zunanje združitve vrne enako vrstic, kot rezultat notranje združitve.
```
```
Možno je, da rezultat leve zunanje združitve vrne enako vrstic, kot rezultat desne zunanje združitve.
```

---
_vprašanje:_
```
Ali stavek SELECT omogoča, da povežemo dve tabeli?
```
_odgovor:_
```
DA
```

---
_vprašanje:_
```
Izberi vse pravilne trditve. (RIGHT JOIN)
```
_odgovor:_
```
RIGHT JOIN nam vrne tudi vse zapise iz »desne« tabele.
```
```
RIGHT JOIN nam vrne tudi tiste zapise iz »leve« tabele, ki imajo povezavo z »desno« tabelo.
```
```
RIGHT JOIN nam vrne vse zapise iz »desne« tabele in samo tiste zapise iz »leve« tabele, ki imajo povezavo z »ldesno« tabelo.
```
```
Rezultat desne zunanje združitve vrne enako ali več vrstic, kot rezultat notranje združitve.
```
```
Možno je, da rezultat desne zunanje združitve vrne enako vrstic, kot rezultat notranje združitve.
```
```
Možno je, da rezultat desne zunanje združitve vrne enako vrstic, kot rezultat leve zunanje združitve.
```

---
_vprašanje:_
```
Ali stavek SELECT omogoča, da povežemo več kot dve tabeli?
```
_odgovor:_
```
DA
```

---
_vprašanje:_
```
Izberi vse pravilne trditve. (SHORT)
```
_odgovor:_
```
Če zamenjamo vrstni red tabel, lahko prevedemo RIGHT JOIN v LEFT JOIN in obratno.
```
```
Če želimo, lahko prevedemo LEFT JOIN v RIGHT JOIN.
```
```
Če želimo, lahko prevedemo RIGHT JOIN v LEFT JOIN.
```

---
_vprašanje:_
```
Kateremu besedilu ustreza prikazan SQL ukaz?
```
_odgovor:_

> [!warning] :warning: VPRAŠANJA IMAJO ENAKO IME, GLEJ SLIKICE

![slika1](štrucl_slike/kateremu_besedilu_ustreza_prikazan_sql_ukaz/1.png)
```
Kolikšen je BDP na prebivalca v posamezni regiji?
```

![slika2](štrucl_slike/kateremu_besedilu_ustreza_prikazan_sql_ukaz/2.png)
```
Koliko je vseh regij? Stolpec poimenujte: Število vseh regij
```

![slika3](štrucl_slike/kateremu_besedilu_ustreza_prikazan_sql_ukaz/3.png)
```
Kolikšen je BDP na prebivalca v evropski regiji?
```

![slika4](štrucl_slike/kateremu_besedilu_ustreza_prikazan_sql_ukaz/4.png)
```
Izpiši št, državo, regijo in BDP na prebivalca za vse države, ki imajo višji BDP na prebivalca od Slovenije. Prikazane naj bodo od naraščajoče po BDP na prebivalca.
```

![slika5](štrucl_slike/kateremu_besedilu_ustreza_prikazan_sql_ukaz/5.png)
```
Izpiši št, državo, regijo in BDP na prebivalca za državo z najnižjim in za državo z najvišjim BDP na prebivalca (prikazani naj bosta v navedenem vrstnem redu).
```

![slika6](štrucl_slike/kateremu_besedilu_ustreza_prikazan_sql_ukaz/6.png)
```
Izpiši državo, regijo in površino najmanjše države v vsaki regiji. Prikazane naj bodo od največje do najmanjše.
```

---
_vprašanje:_
```
Kaj naredi naslednji SQL ukaz?
```
_odgovor:_

> [!warning] :warning: VPRAŠANJA IMAJO ENAKO IME, GLEJ SLIKICE

![slika1](štrucl_slike/kaj_naredi_naslednji_sql_ukaz/1.png)
```
če je to mogoče, vstavi novo vrstico in nastavi vrednosti na privzete vrednosti
```

![slika2](štrucl_slike/kaj_naredi_naslednji_sql_ukaz/2.png)
```
če je to mogoče, podvoji vse zapise v tabeli
```

---
_vprašanje:_
```
Vnesi besede, ki sestavljajo odgovor. Seveda je pomemben vrstni red besed in velikost črk. Ločiš jih vedno s samo enim presledkom med besedami. Presledkov na začetku in koncu ne sme biti.
```
_odgovor:_

> [!warning] :warning: VPRAŠANJA IMAJO ENAKO IME, GLEJ SLIKICE. TO JE DEL TEORIJE, JAVA IMA SVOJ DEL

![](štrucl_slike/pisni_preizkus_1/1.png)
```
MIN (Price)
```
![](štrucl_slike/pisni_preizkus_1/2.png)
```
INSERT INTO VALUES
```
![](štrucl_slike/pisni_preizkus_1/3.png)
```
SELECT
```
![](štrucl_slike/pisni_preizkus_1/4.png)
```
PostalCode IS NOT NULL
```
![](štrucl_slike/pisni_preizkus_1/5.png)
```
PostalCode IS NULL
```
![](štrucl_slike/pisni_preizkus_1/6.png)
```
MAX (Price)
```
![](štrucl_slike/pisni_preizkus_1/7.png)
```
AVG (Price)
```
![](štrucl_slike/pisni_preizkus_1/8.png)
```
COUNT WHERE
```
![](štrucl_slike/pisni_preizkus_1/9.png)
```
VALUES ()
```
![](štrucl_slike/pisni_preizkus_1/10.png)
```
SELECT *
```
![](štrucl_slike/pisni_preizkus_1/11.png)
```
INSERT INTO VALUES
```
![](štrucl_slike/pisni_preizkus_1/12.png)
```
FROM WHERE
```
![](štrucl_slike/pisni_preizkus_1/13.png)
```
SUM (Price)
```
![](štrucl_slike/pisni_preizkus_1/14.png)
```
UPDATE SET WHERE
```
![](štrucl_slike/pisni_preizkus_1/15.png)
```
UPDATE SET , Country
```
![](štrucl_slike/pisni_preizkus_1/16.png)
```
UPDATE SET WHERE
```
![](štrucl_slike/pisni_preizkus_1/17.png)
```
INSERT INTO ( ) VALUES ( )
```
![](štrucl_slike/pisni_preizkus_1/18.png)
```
INSERT VALUES (
```
![](štrucl_slike/pisni_preizkus_1/19.png)
```
UPDATE SET
```
![](štrucl_slike/pisni_preizkus_1/20.png)
```
DELETE FROM WHERE
```

---
# Java:

---
_vprašanje:_
```
Da boš posledično ob koncu ocenjevalnega obdobja pozitiven pri predmetu kot celoti moraš biti... Izberi vse ustrezne trditve?
```
_odgovor:_
```
Pozitivno ocenjen vsaj pri pisnem preizkusu znanja.
```

---
_vprašanje:_
```
Najmanj koliko ocen boš dobil pri predmetu v posameznem ocenjevalnem obdobju, kot končno oceno za sprotno tedensko preverjanje znanja? Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!
```
_odgovor:_
```
1
```

---
_vprašanje:_
```
Najmanj koliko ocen boš dobil pri predmetu kot celoti v posameznem ocenjevalnem obdobju. Torej najmanj koliko ocen bo potrebnih v redovalnici v eAsistentu, da se ti bo lahko zaključila končna ocena za ocenjevalno obdobje kot pozitivna? Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!
```
_odgovor:_
```
2
```

---
_vprašanje:_
```
Kateri kriterij bo veljal za pridobitev ocene v posameznem ocenjevalnem obdobju pri pisnem preverjanju znanja?
```
_odgovor:_
```
Na voljo je 100 točk. Kriterij: do 50t nzd(1), 50t zd(2), 65t db(3), 80t pd(4), 90t odl(5)
```

---
_vprašanje:_
```
Ali si komentarji obvezni?

Ali so komentarji obvezni?
```
_odgovor:_
```
NE
```

---
_vprašanje:_

> [!warning] :warning: NASLEDNJI DVE VPRAŠANJI STA SI PODOBNI PAZ, DA JE NAPISANO ČISTO ENAKO

```
Koliko vrstic izpiše program na sliki? Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka! Pazi! Štejejo se tudi morebitne prazne vrstice v izpisu programa.
```
_odgovor:_
```
7
```

---
_vprašanje:_
```
Koliko vrstic izpiše program na sliki? Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!
```
_odgovor:_
```
3
```

---
_vprašanje:_

> [!warning] :warning: NASLEDNJI DVE VPRAŠANJI STA SI PODOBNI PAZ, DA JE NAPISANO ČISTO ENAKO

```
Koliko spremenljivk je uporabljenih v programu na sliki? Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka! Argumenta metode main() ne štej za spremenljivko.
```
_odgovor:_
```
1
```

---
_vprašanje:_
```
Koliko spremenljivk je uporabljenih v programu na sliki? Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!
```
_odgovor:_
```
5
```

---
_vprašanje:_
```
Izberi vse pravilne trditve. Ena sama napaka pomeni 0 točk. (GREEN FOOT)
```
_odgovor:_

> [!warning] :warning: TUKAJ STA DVE NALOGI, KI STA SI ZELO PODOBNI, TREBA JE UPORABIT VSE MOŽNOSTI, KI JIH LAHKO V VSAKI NALOGI (NEKATERE ODGOVORE SI DELITA)

```
Michael Kölling je vodja razvojne skupine za okolje Greenfoot
```
```
Greenfoot okolje podpira razvoj programov s podporo za enostavno 2D grafiko.
```
```
Greenfoot okolje podpira razvoj objektno zasnovanih programov
```
```
The Joy Of Code je vadnica (tutorial) objektnega programiranja.
```
```
The Joy Of Code is a programming tutorial.
```
```
Greenfoot okolje podpira tako razvoj programov za enostavne igrice kot razvoj programov za enostavne simulacije
```
```
Greenfoot okolje podpira razvoj programov v programskem jeziku Java
```
```
James Gosling je vodilni oblikovalec programskega jezika Java.
```
```
Greenfoot je izobraževalno razvojno okolje, ki je specializirano za razvoj vzorčnih grafičnih programov, s poudarkom na razvoju enostavni iger in simulacij.
```
```
The Joy Of Code govori o programiranju v okolju Greenfoot z javo.
```

---
_vprašanje:_
```
Podana je naslednja naloga. Izberi vse pravilne trditve. Ena sama napaka pomeni 0 točk.
```
_odgovor:_

![](štrucl_slike/java/1.png)
```
Nalogo je mogoče rešiti z rabo zanke while.
```
```
Nalogo je mogoče rešiti tudi brez rabe zanke, vendar je taka rešitev zelo slaba.
```
```
Nalogo je mogoče rešiti z rabo zanke for.
```
```
Nalogo je mogoče rešiti z rabo zanke do while.
```

---
_vprašanje:_

> [!warning] :warning: TUKAJ IMAMO 3 PODOBNE SLIKE NA KATERA SE NANAŠA NEKAJ VPRAŠANJ (ODGOVORI SO ZAPISANI V ENAKEM ZAPOREDJU, KOT SO NAVEDENA VPRAŠANJA)

```
Ali je ta program brez napak in bi dejansko deloval?

----------------------------------------------------------------------------------------

Koliko vrstic dejansko prebere prikazan program, če vnesemo več kot eno vrstico? Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!
```
_odgovor:_
```
Poglej ali na 8. liniji piše "String userName = vnos.nextLine();", če ja potem je prav drugače je narobe. 
```
```
1
```

---
_vprašanje:_
```
Podana je naslednja koda programa. Izberi vse pravilne trditve. Ena sama napaka pomeni 0 točk. (Naloga_D3)
```
_odgovor:_

> [!warning] :warning: NALOGA D3 IMA DVE PODOBNI SLIKI

![](štrucl_slike/java/2.png)
```
Če vnesemo 7 program izpiše 7
```
```
Če vnesemo 10 program izpiše 10
```
```
Če vnesemo 100 program izpiše 100
```
```
Program ima logično napako in ne deluje pravilno
```

![](štrucl_slike/java/3.png)
```
Če vnesemo 7 program izpiše 7
```
```
Če vnesemo 100 program izpiše 100
```

---
_vprašanje:_
```
Koliko vrstic se izpiše med izvedbo programa na sliki? Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!
```
_odgovor:_

> [!warning] :warning: POGLEJ PUBLIC CLASS (NALOGA_D1 IN NALOGA_D2)

![](štrucl_slike/java/4.png)
![](štrucl_slike/java/5.png)
```
2
```

---
_vprašanje:_
```
Ali je prikazana koda programa pravilna rešitev opisanega problema?
```
_odgovor:_
```
Bot | NE

Celsius to Fahrenheit | NE

Feet to Inches COnverter | NE
```

---
_vprašanje:_
```
Vnesi besede, ki sestavljajo odgovor. Seveda je pomemben vrstni red besed in velikost črk. Ločiš jih vedno s samo enim presledkom med besedami. Presledkov na začetku in koncu ne sme biti.
```
_odgovor:_

> [!warning] :warning: VPRAŠANJA IMAJO ENAKO IME, GLEJ SLIKICE. TO JE DEL JAVE, TEORIJA IMA SVOJ DEL

![](štrucl_slike/java/6.png)
```
static shoot () ;
```

![](štrucl_slike/java/7.png)
```
()
```

![](štrucl_slike/java/8.png)
```
void
```

![](štrucl_slike/java/9.png)
```
int * doubleNum
```

![](štrucl_slike/java/10.png)
```
int a sum ,
```

![](štrucl_slike/java/11.png)
```
int num x return
```

![](štrucl_slike/java/12.png)
```
boolean if true return
```

![](štrucl_slike/java/13.png)
```
int , return sum
```

![](štrucl_slike/java/14.png)
```
static area , out res
```

![](štrucl_slike/java/15.png)
```
static void login
```

![](štrucl_slike/java/16.png)
```
void { name else
```

---
_vprašanje:_
```
Kaj izpiše naslednji program?
```
_odgovor:_
```
50
```

---
_vprašanje:_
```
Which of the following specifies that a method does not return any value?
```
_odgovor:_
```
void
```

---
_vprašanje:_
```
What is the return type of the following method?
```
_odgovor:_
```
String
```

---
_vprašanje:_
```
Koliko vrstic izpiše naslednji program?
```
_odgovor:_

> [!warning] :warning: ISTO VPRAŠANJE DRUGA SLIKICA

![](štrucl_slike/java/17.png)
```
4
```

![](štrucl_slike/java/18.png)
```
9
```

---
_vprašanje:_
```
Vnesi pravilen odgovor!
```
_odgovor:_

![](štrucl_slike/java/19.png)
```
2
```

---
