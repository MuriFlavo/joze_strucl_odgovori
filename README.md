To je markdown dokument z vprašanji in odgovori na vprašanja katera smo doživeli pri gospodu Jožetu Štruclu. 

Nekaj info:
 - Za najboljšo izkušnjo brskajte po dokumentu z `ctrl + f` in kopirajte odgovore
 - Slike so v code blockih z namenom iskanja po tem kaj je na slikah napisano.
 - Dosti vprašanj se ponovi, ampak z drugimi slikami. V primeru slik, iščite po vsebini slik.
 - Pazi, da so vpršanja enaka saj obstajajo skrajšane verzije nekaterih vprašanj in imajo različne odgovore

# SUPPORT

| Verzija |        NUPt        | NUPp               | JAVA               |
| :-----: | :----------------: | ------------------ | ------------------ |
| vaja01  | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| vaja02  | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| vaja03  | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| vaja04  | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| vaja05  | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| vaja06  | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| vaja07  |                    | :white_check_mark: |                    |
| vaja08  |                    |                    |                    |
| vaja09  |                    |                    |                    |
| vaja10  |                    |                    |                    |
| vaja11  |                    |                    |                    |
| vaja12  |                    |                    |                    |
| vaja13  |                    |                    |                    |
| vaja14  |                    |                    |                    |
| vaja15  |                    |                    |                    |
| vaja16  |                    |                    |                    |

# NUPt
## 1. Tedensko Ocenjevanje

---
**VPRAŠANJE:**

Da boš posledično ob koncu ocenjevalnega obdobja pozitiven pri praksi kot celoti moraš biti... Izberi vse ustrezne trditve?

**ODGOVOR:**
```
Pozitivno ocenjen samo pri praksi.
```

---
**VPRAŠANJE:**

Najmanj koliko ocen boš dobil pri predmetu kot celoti v posameznem ocenjevalnem obdobju. Torej najmanj koliko ocen bo potrebnih v redovalnici v eAsistentu, da se ti bo lahko zaključila končna ocena za spričevalo? Mišljene so ocene tako pri teoriji, kot pri praksi. Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!

**ODGOVOR:**
```
3
```

---
**VPRAŠANJE:**

Kateri kriterij bo veljal za pridobitev ocene v posameznem ocenjevalnem obdobju za sprotne zagovore vaj pri praksi?

**ODGOVOR:**
```
Na voljo je 100 točk. Kriterij: do 50t nzd(1), 50t zd(2), 65t db(3), 80t pd(4), 90t odl(5)
```

---
**VPRAŠANJE:**

Kateri kriterij bo veljal za pridobitev ocene v posameznem ocenjevalnem obdobju za sprotno preverjanje znanja pri teoriji?

**ODGOVOR:**
```
Nobeden izmed naštetih
```

---
**VPRAŠANJE:**

Najmanj koliko ocen boš dobil pri praksi v posameznem ocenjevalnem obdobju, kot končno oceno za sprotno tedensko preverjanje znanja, ki ga bomo poimenovali kar sprotni zagovori vaj? Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!

**ODGOVOR:**
```
1
```

## 2. Tedensko Ocenjevanje

---
**VPRAŠANJE:**

Kaj pomeni kratica BNF?

**ODGOVOR:**
```
Backus–Naur form (often used to describe the syntax of languages used in computing)
```

---
**VPRAŠANJE:**

Vnesi angleško kratico za pojem "Jezik za rokovanje s podatki". Odgovoriti moraš z vnosom samih v velikih črk. Zapiši kot kratico s samimi velikimi črkami!

**ODGOVOR:**
```
DML
```

---
**VPRAŠANJE:**

Koliko stolpcev je v rezultatu naslednjega ukaza? SELECT EmployeeID AS Zaposleni, COUNT(*) AS 'Število naročil' FROM Orders GROUP BY EmployeeID; Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!

**ODGOVOR:**
```
2
```

## 3. Tedensko Ocenjevanje

---
**VPRAŠANJE:**

Katere trditve držijo za udeležbo pri šolskih urah, ki se izvajajo v računalniških učilnicah?

**ODGOVOR:**
```
VSE
```

---
**VPRAŠANJE:**

Izpišite imena in površino vseh držav, ki so manjše od 300.000 km2. Spisek uredite naraščajoče po velikosti držav.

**ODGOVOR:**
```
SELECT država, površina FROM države WHERE površina < 300000 ORDER BY površina;
```

---
**VPRAŠANJE:**

Izpišite vse podatke o državah, katerih ime se prične s črko A ali s črko H.

**ODGOVOR:**
```
SELECT * FROM države WHERE država LIKE 'A%' OR država LIKE 'H%'
```

---
**VPRAŠANJE:**

Izpišite imena vseh držav.

**ODGOVOR:**
```
SELECT država FROM države;
```

---
**VPRAŠANJE:**

Izpišite vse podatke za Slovenijo in Avstrijo.

**ODGOVOR:**
```
SELECT * FROM države WHERE država='Slovenija' OR država='Avstrija';
```
```
SELECT * FROM države WHERE država IN ('Slovenija', 'Avstrija');
```

---
**VPRAŠANJE:**

Prikažite ime države in gostoto prebivalstva za Slovenijo in Italijo. V glavi drugega stolpca naj piše: Gostota prebivalstva.

**ODGOVOR:**
```
SELECT država, prebivalstvo/površina AS 'Gostota prebivalstva' FROM države WHERE država = 'Italija' OR država = 'Slovenija';
```
## 4. Tedensko Ocenjevanje

#tabela_naročilo

| ime_izdelka | vrsta_izdelka  | kosi | cena |
| ----------- | -------------- | ---- | ---- |
| Jogurt      | Mlečni izdelki | 2    | 0,50 |
| Rogljiček   | Sladice        | 5    | 1,00 |
| Salama      | Mesni izdelki  | 1    | 4,99 |
| Mleko       | Mlečni izdelki | 3    | 0,80 |
| Sir         | Mlečni izdelki | 1    | 2,00 |
| Klobasa     | Mesni izdelki  | 2    | 3,00 |
| Torta       | Sladice        | 1    | 9,50 |

---
**VPRAŠANJE:**

Koliko je vseh kosov v naročilu?? Izberi vse pravilne rešitve. [tabela](#tabela_naročilo)

**ODGOVOR:**
```
SELECT SUM(kosi) FROM naročilo;
```

---
**VPRAŠANJE:**

Koliko je različnih vrst izdelkov? Izberi vse pravilne rešitve. [tabela](#tabela_naročilo)

**ODGOVOR:**
```
SELECT COUNT(DISTINCT vrsta_izdelka) FROM naročilo
```

---
**VPRAŠANJE:**

Koliko je zapisov v tabeli naročilo? Izberi vse pravilne rešitve. [tabela](#tabela_naročilo)

**ODGOVOR:**
```
SELECT COUNT(*) FROM naročilo;
```
```
SELECT COUNT(ime_izdelka) FROM naročilo;
```
## 5. Tedensko Ocenjevanje

---
**VPRAŠANJE:**

Koliko različnih oblik SELECT ukaza za povezovanje tabel je opisanih v gradivu? Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!

**ODGOVOR:**
```
3
```
## 6. Tedensko Ocenjevanje

---
**VPRAŠANJE:**

Izberi vse pravilne trditve.

**ODGOVOR:**
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
ALI
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
ALI
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
**VPRAŠANJE:**

Ali stavek SELECT omogoča, da povežemo dve tabeli?

**ODGOVOR:**
```
DA
```

---
**VPRAŠANJE:**

Ali stavek SELECT omogoča, da povežemo več kot dve tabeli?

**ODGOVOR:**
```
DA
```

---
**VPRAŠANJE:**

Kateremu besedilu ustreza prikazan SQL ukaz?

```sql
SELECT regija, ROUND((SUM(BDP) / SUM(prebivalstvo)), 0)
AS 'BDP na prebivalca v regiji',
SUM(BDP) , SUM(prebivalstvo)
FROM države
GROUP BY regija;
```

**ODGOVOR:**
```
Kolikšen je BDP na prebivalca v posamezni regiji?
```

---
**VPRAŠANJE:**

Kateremu besedilu ustreza prikazan SQL ukaz?

```sql
SELECT COUNT (DISTINCT regija) AS 'Število vseh regija' FROM države
ORDER BY regija;
```

**ODGOVOR:**
```
Koliko je vseh regij? Stolpec poimenujte: Število vseh regij
```

---
**VPRAŠANJE:**

Kateremu besedilu ustreza prikazan SQL ukaz?

```sql
SELECT ROUND((SELECT SUM(BDP)
FROM države
WHERE regija='Evropa')
/ (SELECT SUM(prebivalstvo)
FROM države
WHERE regija='Evropa'), 0) AS 'BDP na prebivalca v evropski regiji';
```

**ODGOVOR:**
```
Kolikšen je BDP na prebivalca v evropski regiji?
```

---
**VPRAŠANJE:**

Kateremu besedilu ustreza prikazan SQL ukaz?

```sql
SELECT št, država, regija, BDP/prebivalstvo AS 'BDP na prebivalca'
FROM države
WHERE BDP/prebivalstvo > (SELECT BDP/prebivalstvo
FROM države WHERE država = 'Slovenija')
ORDER BY BDP/prebivalstvo;
```

**ODGOVOR:**
```
Izpiši št, državo, regijo in BDP na prebivalca za vse države, ki imajo višji BDP na prebivalca od Slovenije. Prikazane naj bodo od naraščajoče po BDP na prebivalca.
```

---
**VPRAŠANJE:**

Ali lahko izpišemo državo, regijo in površino za največjo državo, ne da bi uporabili funkcijo MAX?

**ODGOVOR:**
```
DA
```

---
**VPRAŠANJE:**

Kateremu besedilu ustreza prikazan SQL ukaz?

```sql
(SELECT št, država, regija, BDP/prebivalstvo AS 'BDP na prebivalca'
FROM države
ORDER BY BDP/prebivalstvo
LIMIT 1)
UNION
(SELECT št, država, regija, BDP/prebivalstvo AS 'BDP na prebivalca'
FROM države
ORDER BY BDP/prebivalstvo DESC
LIMIT 1)
```

**ODGOVOR:**
```
Izpiši št, državo, regijo in BDP na prebivalca za državo z najnižjim in za državo z najvišjim BDP na prebivalca (prikazani naj bosta v navedenem vrstnem redu).
```

---
**VPRAŠANJE:**

Kateremu besedilu ustreza prikazan SQL ukaz?
```sql
SELECT država, regija, površina
FROM države
WHERE (regija, površina) IN (SELECT regija, MIN (površina)
FROM države
GROUP BY regija)
ORDER BY površina DESC;
```

**ODGOVOR:**
```
Izpiši državo, regijo in površino najmanjše države v vsaki regiji. Prikazane naj bodo od največje do najmanjše.
```

---
**VPRAŠANJE:**

Kaj naredi naslednji SQL ukaz?

```sql
INSERT INTO ime_tabele ()
VALUES ();
```

**ODGOVOR:**
```
če je to mogoče, vstavi novo vrstico in nastavi vrednosti na privzete vrednosti
```

---
**VPRAŠANJE:**

Kaj naredi naslednji SQL ukaz?

```sql
INSERT INTO ime_tabele
SELECT *
FROM ime_tabele;
```

**ODGOVOR:**
```
če je to mogoče, podvoji vse zapise v tabeli
```

# NUPp
## 1. Tedensko Ocenjevanje

---
**VPRAŠANJE:**

Najmanj koliko ocen boš dobil pri predmetu kot celoti v posameznem ocenjevalnem obdobju. Torej najmanj koliko ocen bo potrebnih v redovalnici v eAsistentu v posameznem ocenjevalnem obdobju, da se ti bo lahko zaključila končna ocena za spričevalo? Mišljene so ocene tako pri teoriji, kot pri praksi. Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!

**ODGOVOR:**
```
3
```
## 2. Tedensko Ocenjevanje
---
**VPRAŠANJE:**

Prikažite gostoto prebivalstva za Slovenijo. V glavi stolpca naj piše: Gostota prebivalstva za Slovenijo.

**ODGOVOR:**
```
SELECT prebivalstvo/površina AS 'Gostota prebivalstva za Slovenijo' FROM države WHERE država = 'Slovenija';
```

---
**VPRAŠANJE:**

Izpišite imena vseh držav, ki so velike med 10.000 in 30.000 km2. Spisek uredite po abecednem vrstnem redu naraščajoče.

**ODGOVOR:**
```
SELECT država FROM države WHERE površina BETWEEN 10000 AND 30000 ORDER BY država;
```

---
**VPRAŠANJE:**

Izpišite vse podatke o državah, katerih ime se prične s črko H.

**ODGOVOR:**
```
SELECT * FROM države WHERE država LIKE 'H%';
```

---
**VPRAŠANJE:**

Izpišite vse podatke iz tabele države.

**ODGOVOR:**
```
SELECT * FROM države;
```
## 3. Tedensko Ocenjevanje

---
**VPRAŠANJE:**

Prikažite gostoto prebivalstva za Italijo. V glavi stolpca naj piše: Gostota prebivalstva za Italijo.

**ODGOVOR:**
```
SELECT prebivalstvo/površina AS 'Gostota prebivalstva za Italijo' FROM države WHERE država = 'Italija';
```

---
**VPRAŠANJE:**

Izpišite vse podatke o državah, katerih ime se ne prične s črko A.

**ODGOVOR:**
```
SELECT * FROM države WHERE država NOT LIKE 'A%';
```

---
**VPRAŠANJE:**

Izpišite imena in površino vseh držav, ki so večje od 300.000 km2. Spisek uredite naraščajoče po velikosti držav.

**ODGOVOR:**
```
SELECT država, površina FROM države WHERE površina > 300000 ORDER BY površina;
```
## 4. Tedensko Ocenjevanje

---
**VPRAŠANJE:**

Katere trditve držijo za udeležbo pri šolskih urah, ki se izvajajo v računalniških učilnicah?

**ODGOVOR:**
```
VSE
```

---
**VPRAŠANJE:**

Kateri SQL ukaz je avtor uporabil za rešitev prikazane naloge, oziroma katere izmed prikazanih poizvedb (A, B, C, D) vrnejo rezultat, ki je prikazan na sliki?

**ODGOVOR:**
```
Poglejte okence na levi strani, ki je slika tabele.
SQL_Naloga_1 | A
SQL_Naloga_2 | B
SQL_Naloga_3 | C
SQL_Naloga_4 | D
```
## 5. Tedensko Ocenjevanje
Nič novega.
## 6. Tedensko Ocenjevanje

---
**VPRAŠANJE:**

Koliko rezerviranih besed jezika SQL (torej koliko ključnih besed jezika SQL) je uporabljenih v splošni obliki zapisa (sintaksa ukaza) ukaza SELECT za povezovanje z ukazom JOIN? (Znak za enačaj ne štejemo kot ključno besedo!) Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!

**ODGOVOR:**
```
4
```

---
**VPRAŠANJE:**

Koliko rezerviranih besed jezika SQL (torej koliko ključnih besed jezika SQL) je uporabljenih v splošni obliki zapisa (sintaksa ukaza) ukaza SELECT za povezovanje z enačajem? (Znak za enačaj ne štejemo kot ključno besedo!) Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!

**ODGOVOR:**
```
3
```

---
**VPRAŠANJE:**

Imamo dve tabeli, ki sta povezani preko ustreznih dveh polj. Izberi vse ustrezne trditve? Pazi, točke dobiš le za nalogo z vsemi pravilnimi rešitvami.

**ODGOVOR:**
```
SQL SELECT ukaz, kjer uporabimo povezovanje z LEFT JOIN nam vrne največje število vrstic
```
```
SQL SELECT ukaz, kjer uporabimo povezovanje z enačajem nam lahko vrne enako število vrstic, kot če uporabimo povezovanje z LEFT JOIN
```
ALI
```
SQL SELECT ukaz, kjer uporabimo povezovanje z LEFT JOIN lahko vedno enakovredno zamenjamo z enakovrednim ukazom z RIGHT JOIN
```
```
SQL SELECT ukaz, kjer uporabimo povezovanje z RIGHT JOIN lahko vedno enakovredno zamenjamo z enakovrednim ukazom z LEFT JOIN
```
## 7. Tedensko Ocenjevanje

---
**VPRAŠANJE:**

Kateri SQL ukaz je avtor uporabil za rešitev prikazane naloge, oziroma katere izmed prikazanih poizvedb (A, B, C, D) vrne rezultat, ki je prikazan na sliki? Pazi, naloga je tipa izberi vse pravilne!

**ODGOVOR:**
```
Poglejte okence na levi strani, ki je slika tabele.
SQL_Naloga_1 | A
SQL_Naloga_2 | B
SQL_Naloga_3 | C
SQL_Naloga_4 | D
```

---
**VPRAŠANJE:**

Besedilo Vaje7: podan program, ki izpiše prve tri stoplce iz tabele Artikel v podani bazi spremni tako, da: 1. Izpiše vse podatke iz tabel Račun, Postavka in Artikel. (Opomba: Besedilo Vaje 13 za 15 teden v spodnji nalogi beri kot "Besedilo Vaje 7".)

```
Besedilo Vaje 13 za 15 teden: podan program, ki izpiše prve tri stoplce iz tabele
Artikel v podani bazi spremni tako, da:
1. Izpiše vse podatke iz tabel Račun, Postavka in Artikel.

Najmanj kolikokrat moramo v programu, ki je rešitev navedene naloge, napisati in
uporabiti SOL ukaz? Z drugimi besedami, najmanj koliko različnih SQL ukazov moramo
napisati in uporabiti, da rešimo nalogo?

Odgovori z vnosom celega števila (ne z besedo, Primer: 0 -za nikoli, 1 - za enkrat,
2 - za dvakrat, ...). Vneseš samo številko!
```

**ODGOVOR:**
```
3
```

---
**VPRAŠANJE:**

Besedilo Vaje 7: podan program, ki izpiše prve tri stoplce iz tabele Artikel v podani bazi spremni tako, da: 1. Izpiše vse podatke iz tabel Račun, Postavka in Artikel. (Opomba: Besedilo Vaje 13 za 15 teden v spodnji nalogi beri kot "Besedilo Vaje 7".)

```
Besedilo Vaje 13 za 15 teden: podan program, ki izpiše prve tri stoplce iz tabele
Artikel v podani bazi spremni tako, da:
1. Izpiše vse podatke iz tabel Račun, Postavka in Artikel.

Najmanj kolikokrat moramo v programu, ki je rešitev navedene naloge, uporabiti naslednji izraz (namesto E:/NUP_20 je seveda lahko druga pravilna pot):

DriverManager.getConnection("jdbc:ucanaccess://E:/Nup_20/Račun.accdb")

Odgovori z vosom celega števila (ne z besedo, Primer: 0 - za nikoli, 1 - za enkrat,
2 - za dvakrat, ...). Vneseš samo številko!
```

**ODGOVOR:**
```
1
```
# JAVA
## 1. Tedensko Ocenjevanje

---
**VPRAŠANJE:**

Da boš posledično ob koncu ocenjevalnega obdobja pozitiven pri predmetu kot celoti moraš biti... Izberi vse ustrezne trditve?

**ODGOVOR:**
```
Pozitivno ocenjen vsaj pri pisnem preizkusu znanja.
```

---
**VPRAŠANJE:**

Kateri kriterij bo veljal za pridobitev ocene v posameznem ocenjevalnem obdobju pri pisnem preverjanju znanja?

**ODGOVOR:**
```
Na voljo je 100 točk. Kriterij: do 50t nzd(1), 50t zd(2), 65t db(3), 80t pd(4), 90t odl(5)
```

---
**VPRAŠANJE:**

Najmanj koliko ocen boš dobil pri predmetu v posameznem ocenjevalnem obdobju, kot končno oceno za sprotno tedensko preverjanje znanja? Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!

**ODGOVOR:**
```
1
```

---
**VPRAŠANJE:**

Najmanj koliko ocen boš dobil pri predmetu kot celoti v posameznem ocenjevalnem obdobju. Torej najmanj koliko ocen bo potrebnih v redovalnici v eAsistentu, da se ti bo lahko zaključila končna ocena za ocenjevalno obdobje kot pozitivna? Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!

**ODGOVOR:**
```
2
```
## 2. Tedensko Ocenjevanje

---
**VPRAŠANJE:**

Koliko spremenljivk je uporabljenih v programu na sliki? Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka! Argumenta metode main() ne štej za spremenljivko.

```java
/* P1: Napiši program, ki izpiše števila 1 do 5.
Vsako število naj bo v svoji vrstici.
Uporabiti moraš zanko? */

class Myclass {
    public static void main(String[ ] args) {
        
        System.out.printIn("To se naredi tako.\n");
            for(int i=1; i<= 5; i++) { 
                System.out.println(i);
            }
    }
}
```

**ODGOVOR:**
```
1
```

---
**VPRAŠANJE:**

Ali so komentarji obvezni?

**ODGOVOR:**
```
NE
```

---
**VPRAŠANJE:**

Koliko vrstic izpiše program na sliki? Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka! Pazi! Štejejo se tudi morebitne prazne vrstice v izpisu programa.

```java
/* P1: Napiši program, ki izpiše števila 1 do 5.
Vsako število naj bo v svoji vrstici.
Uporabiti moraš zanko? */

class Myclass {
    public static void main(String[ ] args) {
        
        System.out.printIn("To se naredi tako.\n");
            for(int i=1; i<= 5; i++) { 
                System.out.println(i);
            }
    }
}
```

**ODGOVOR:**
```
7
```
## 3. Tedensko Ocenjevanje

java_slika
```java
/* P1: Napiši program, ki izpiše števila 1 do 5.
Vsako število naj bo v svoji vrstici.
Uporabiti moraš zanko? */

class Myclass {
    public static void main(String[ ] args) {
        
        System.out.printIn("To se naredi tako.\n");
            for(int i=1; i<= 5; i++) { 
                System.out.println(i);
            }
    }
}
```

java_slika2
```java
public class Program_v1 {
    
    public static void main(String[] args) {
        // Zamislimo si dve 2D točki
        double xA = 1.0, yA = 1.0;
        double xB = 3.0, yB = 3.0;
        // Izpišemo dve 2D točki
        System.out.print("Točka A(");
        System.out.print(xA + "," + yA + ")");
        System.out.println();
        System.out.print("Točka B(");
        System.out.print (×B + "," + yB + ")");
        // Izpišemo še razdaljo med tčckama
        double razdalja = Math.sqrt(Math.pow(xB-xA, 2) + Math.pow(yB-yA, 2));
        System.out.print("\nRazdalja AB = " + razdalja);
    }
    
}
```

---
**VPRAŠANJE:**

Katere trditve držijo za udeležbo pri šolskih urah, ki se izvajajo v računalniških učilnicah?

**ODGOVOR:**
```
VSE
```

---
**VPRAŠANJE:**

Koliko vrstic izpiše program na sliki? Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!

```java
public class Program_v1 {
    
    public static void main(String[] args) {
        // Zamislimo si dve 2D točki
        double xA = 1.0, yA = 1.0;
        double xB = 3.0, yB = 3.0;
        // Izpišemo dve 2D točki
        System.out.print("Točka A(");
        System.out.print(xA + "," + yA + ")");
        System.out.println();
        System.out.print("Točka B(");
        System.out.print (×B + "," + yB + ")");
        // Izpišemo še razdaljo med tčckama
        double razdalja = Math.sqrt(Math.pow(xB-xA, 2) + Math.pow(yB-yA, 2));
        System.out.print("\nRazdalja AB = " + razdalja);
    }
    
}
```

**ODGOVOR:**
```
3
```

---
**VPRAŠANJE:**

Koliko spremenljivk je uporabljenih v programu na sliki? Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!

```java
public class Program_v1 {
    
    public static void main(String[] args) {
        // Zamislimo si dve 2D točki
        double xA = 1.0, yA = 1.0;
        double xB = 3.0, yB = 3.0;
        // Izpišemo dve 2D točki
        System.out.print("Točka A(");
        System.out.print(xA + "," + yA + ")");
        System.out.println();
        System.out.print("Točka B(");
        System.out.print (×B + "," + yB + ")");
        // Izpišemo še razdaljo med tčckama
        double razdalja = Math.sqrt(Math.pow(xB-xA, 2) + Math.pow(yB-yA, 2));
        System.out.print("\nRazdalja AB = " + razdalja);
    }
    
}
```

**ODGOVOR:**
```
5
```

---
**VPRAŠANJE:**

Ali si komentarji obvezni?

**ODGOVOR:**
```
NE
```
## 4. Tedensko Ocenjevanje

---
**VPRAŠANJE:**

Izberi vse pravilne trditve. Ena sama napaka pomeni 0 točk.

**ODGOVOR:**
```
The Joy Of Code is a programming tutorial.
```
```
The Joy Of Code govori o programiranju v okolju Greenfoot z javo.
```
```
The Joy Of Code je vadnica (tutorial) objektnega programiranja.
```
```
Greenfoot je izobraževalno razvojno okolje, ki je specializirano za razvoj vzorčnih grafičnih programov, s poudarkom na razvoju enostavni iger in simulacij.
```
```
Michael Kölling je vodja razvojne skupine za okolje Greenfoot
```
```
James Gosling je vodilni oblikovalec programskega jezika Java.
```
ALI
```
The Joy Of Code is a programming tutorial.
```
```
The Joy Of Code je vadnica (tutorial) objektnega programiranja.
```
```
Greenfoot okolje podpira razvoj programov s podporo za enostavno 2D grafiko.
```
```
Michael Kölling je vodja razvojne skupine za okolje Greenfoot
```
```
Greenfoot okolje podpira tako razvoj programov za enostavne igrice kot razvoj programov za enostavne simulacije
```
```
Greenfoot okolje podpira razvoj programov v programskem jeziku Java
```
```
Greenfoot okolje podpira razvoj objektno zasnovanih programov
```
## 5. Tedensko Ocenjevanje

---
**VPRAŠANJE:**

Podana je naslednja naloga. Izberi vse pravilne trditve. Ena sama napaka pomeni 0 točk.

```
2. V okolju Eclipse napiši program, ki v deset zaporednih vrstic izpiše razdaljo med
desetimi pari točk med dvema premicama:
y = 2x + 7
y = -3x + 10

Zanima nas razdalja med tema dvema premicama na desetih zaporednih točkah, ki
imajo x koordinato med 1 in 10, s korakom povečvanja 1.
```

**ODGOVOR:**
```
Nalogo je mogoče rešiti tudi brez rabe zanke, vendar je taka rešitev zelo slaba.
```
```
Nalogo je mogoče rešiti z rabo zanke for.
```
```
Nalogo je mogoče rešiti z rabo zanke do while.
```
```
Nalogo je mogoče rešiti z rabo zanke while.
```

---
**VPRAŠANJE:**

Koliko vrstic dejansko prebere prikazan program, če vnesemo več kot eno vrstico? Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!

```java
import java.util.Scanner; // Import the Scanner class

public class Program_User_Input {
    public static void main (String[] args) {
        Scanner vnos = new Scanner(System.in); // Create a Scanner object
        System.out.println("Enter username");
        
        String userName = vnos.nextLine(); // Read user input
        System.out.println("Username is: " + userName); // Output user input
    }
}
```

**ODGOVOR:**
```
1
```

---
**VPRAŠANJE:**

Ali je ta program brez napak in bi dejansko deloval?

```java
import java.util.Scanner; // Import the Scanner class

public class Program_User_Input {
    public static void main(String[] args) {
        Scanner vnos = new Scanner(System.in); // Create a Scanner object
        System.out.println("Enter username");
        
        String userName = myObj.nextLine(); // Read user input
        System.out.println("Username is: " + userName); // Output user input
    }
}
```

**ODGOVOR:**
```
NE
```

---
**VPRAŠANJE:**

Ali je ta program brez napak in bi dejansko deloval?

```java
import java.util.Scanner; // Import the Scanner class

public class Program_User_Input {
    public static void main (String[] args) {
        Scanner vnos = new Scanner(System.in); // Create a Scanner object
        System.out.println("Enter username");
        
        String userName = vnos.nextLine(); // Read user input
        System.out.println("Username is: " + userName); // Output user input
    }
}
```

**ODGOVOR:**
```
DA
```

---
## 6. Tedensko Ocenjevanje

**VPRAŠANJE:**

Podana je naslednja koda programa. Izberi vse pravilne trditve. Ena sama napaka pomeni 0 točk.

>[!WARNING] 2 Sliki skoraj identični poglej *2. if* za < | >
```java
import java.util.Scanner;
public class Naloga_D3 {

    public static void main(String[] args) {
        // Rešitev naloge D3
        System.out.print("D3 - Vnesite število: ");;
        Scanner vhod = new Scanner(System.in);
        int vnos = vhod.nextInt();
        if(vnos<10){
            System.out.println(vnos);}
        else{
            if (vnos<100){
                System.out.println("Število je dvomestno.");
            }
            else{
                System.out.println(vnos);
            }
        }
    }
    
}
```

**ODGOVOR:**
```
Če vnesemo 7 program izpiše 7
```
```
Če vnesemo 100 program izpiše 100
```

---
**VPRAŠANJE:**

Koliko vrstic se izpiše med izvedbo programa na sliki? Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!

```java
import java.util.Scanner;
public class Naloga_D1 {
    public static void main(String[] args) {
    // Rešitev naloge Naloga_D1
    System.out.print("D1 - Vnesite število: ");
    Scanner vhod = new Scanner(System.in);
    int vnos = vhod.nextInt ();
    if (vnos<10)
        System.out.println("Število je enomestno.");
    else
        System.out.println("Število je večmestno.");
    }
    
}
```

**ODGOVOR:**
```
2
```

---
**VPRAŠANJE:**

Podana je naslednja koda programa. Izberi vse pravilne trditve. Ena sama napaka pomeni 0 točk.

>[!WARNING] 2 Sliki skoraj identični poglej v *2. if* za < | >
```java
import java.util.Scanner;
public class Naloga_D3 {

    public static void main(String[] args) {
        // Rešitev naloge D3
        System.out.print("D3 - Vnesite število: ");;
        Scanner vhod = new Scanner(System.in);
        int vnos = vhod.nextInt();
        if(vnos<10){
            System.out.println(vnos);}
        else{
            if (vnos>100){
                System.out.println("Število je dvomestno.");
            }
            else{
                System.out.println(vnos);
            }
        }
    }
    
}
```

**ODGOVOR:**
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

---
**VPRAŠANJE:**

Koliko vrstic se izpiše med izvedbo programa na sliki? Odgovoriti moraš z vnosom ene številke. Zapiši kot število, ne kot besedo s črkami. Pravilna je samo ena številka!

```java
import java.util.Scanner;
public class Naloga_D2 {

	public static void main(String[] args) {
		// Rešitev naloge Naloga_D2
		System.out.print("D2 - Vnesite število: ");;
		Scanner vhod = new Scanner(System.in);
		int vnos = vhod.nextInt();
		if(vnos<10){
			System.out.println("Število je enomestno.");}
		else{
		if(vnos<100){
			System.out.println("Število je dvomestno.");
		}
		else{
			System.out.println("Število je večmestno.");
			｝
		}
	}
	
}
```

**ODGOVOR:**
```
2
```