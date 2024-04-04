To je markdown dokument z vprašanji in odgovori na vprašanja katera smo doživeli pri gospodu Jožetu Štruclu. 

Nekaj info:
 - Za najboljšo izkušnjo brskajte po dokumentu z `ctrl + f` in kopirajte odgovore
 - Slike so v code blockih z namenom iskanja po tem kaj je na slikah napisano.
 - Dosti vprašanj se ponovi, ampak z drugimi slikami. V primeru slik, iščite po vsebini slik.
 - Pazi, da so vpršanja enaka saj obstajajo skrajšane verzije nekaterih vprašanj in imajo različne odgovore

# SUPPORT

|     Naloga     |        NUPt        | NUPp               | JAVA               |
| :------------: | :----------------: | ------------------ | ------------------ |
|     vaja01     | :white_check_mark: | :white_check_mark: | :white_check_mark: |
|     vaja02     | :white_check_mark: | :white_check_mark: | :white_check_mark: |
|     vaja03     | :white_check_mark: | :white_check_mark: | :white_check_mark: |
|     vaja04     | :white_check_mark: | :white_check_mark: | :white_check_mark: |
|     vaja05     | :white_check_mark: | :white_check_mark: | :white_check_mark: |
|     vaja06     | :white_check_mark: | :white_check_mark: | :white_check_mark: |
|     vaja07     |                    | :white_check_mark: |                    |
|     vaja08     |                    |                    |                    |
|     vaja09     |                    |                    |                    |
|     vaja10     |                    |                    | :white_check_mark: |
|     vaja11     |                    |                    | :white_check_mark: |
|     vaja12     |                    |                    | :white_check_mark: |
|     vaja13     |                    |                    | :white_check_mark: |
|     vaja14     |                    |                    |                    |
|     vaja15     |                    |                    |                    |
|     vaja16     |                    |                    |                    |
| 2. preveranjae |                    |                    | :white_check_mark: |

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
## 10. Tedensko Ocenjevanje

---
**VPRAŠANJE:**

Koliko novih objektov tvorimo v metodi main()?

```java
public class Vehicle {
	int maxSpeed;
	int wheels;
	String color;
	double fuelCapacity;

	void horn() {
		System.out.println("Beep!");
	}
}

class MyClass {
	public static void main(String[ ] args) {
		Vehicle v1 = new Vehicle();
		Vehicle v2 = new Vehicle();
		v1.color = "red";
		v2.horn();
	}
}
```

**ODGOVOR:**
```
2
```

---
**VPRAŠANJE:**

Za podano trditev izberi vse pravilne odgovore. Če niso izbrani vsi pravilni odgovor ni točk.

```
Getters and Setters are used to effectively protect your data, particularly when creating classes. For each variable, the get method returns its value, while the set method sets the value.
```

**ODGOVOR:**
```
Getters start with get, followed by the variable name, with the first letter of the variable name capitalized.
```
```
Setters start with set, followed by the variable name, with the first letter of the variable name capitalized.
```

---
**VPRAŠANJE:**

Koliko funkcij oziroma metod ima razred Vehicle?

```java
public class vehicle {
	int maxSpeed;
	int wheels;
	String color;
	double fuelCapacity;

	void horn() {
		System.out.println("Beep!");
	}
}
```

**ODGOVOR:**
```
1
```

---
**VPRAŠANJE:**

Object-Orientation A class defines... (choose two) Select All That Apply

**ODGOVOR:**
```
behaviour
```
```
attributes
```

---
**VPRAŠANJE:**

Za podano trditev izberi vse pravilne odgovore. Če niso izbrani vsi pravilni odgovor ni točk.

```
What would the name of the setter method for the class variable named "age" be?
```

**ODGOVOR:**
```
setAge
```

---
**VPRAŠANJE:**

Vnesi besede, ki sestavljajo odgovor. Seveda je pomemben vrstni red besed in velikost črk. Ločiš jih vedno s samo enim presledkom med besedami. Presledkov na začetku in koncu ne sme biti.

```java
public [ ] A {
  public void test() {
    System.out.println("Hi");
  }
}

class B {
  public static void main(String args[ ]) {
    [ ] obj = [ ] A();
    obj.[ ];
  }
}
```

**ODGOVOR:**
```
class A new test()
```

---
**VPRAŠANJE:**

Vnesi besede, ki sestavljajo odgovor. Seveda je pomemben vrstni red besed in velikost črk. Ločiš jih vedno s samo enim presledkom med besedami. Presledkov na začetku in koncu ne sme biti.

**Methods**
Fill in the blanks to call the method "hello" from main:
```java
public static void main(String[ ] args) {
  [ ];
}

static void hello() {
  System.out.println("hi");
}
```

**ODGOVOR:**
```
hello()
```

---
**VPRAŠANJE:**

V katerih vrsticah  je napaka v prikazanem programu?

```java
public class Vehicle {
	private String color;

	// Getter
	public String getColor() {
		return this.color;
	}

	// Setter
	public void setColor(String c) {
		color = c;
	}
}

class Program {
	public static void main(String[ ] args) {
		Vehicle v1 = new Vehicle();
		v1.setColor("Red");
		System.out.println(v1.getColor());
	}
}
```

**ODGOVOR:**
```
0
```

---
**VPRAŠANJE:**

Za podano trditev izberi vse pravilne odgovore. Če niso izbrani vsi pravilni odgovor ni točk.

`The following choices are available for attributes and methods:`

**ODGOVOR:**
```
protected: Provides the same access as the default access modifier, with the addition that subclasses can access protected methods and variables of the superclass (Subclasses and superclasses are covered in upcoming lessons).
```
```
default: A variable or method declared with no access control modifier is available to any other class in the same package.
```
```
public: Accessible from any other class.
```
```
private: Accessible only within the declared class itself.
```

---
**VPRAŠANJE:**

Kaj izpiše naslednji program?

```java
public class Vehicle {
	private String color;

	// Getter
	public String getColor() {
		return color;
	}

	// Setter
	public void setColor(String c) {
		this.color = c;
	}
}

class Program {
	public static void main(String[ ] args) {
		Vehicle v1 = new Vehicle();
		v1.setColor("Red");
		System.out.println(v1.getColor());
	}
}
```

**ODGOVOR:**
```
Red
```

---
**VPRAŠANJE:**

Vnesi besede, ki sestavljajo odgovor. Seveda je pomemben vrstni red besed in velikost črk. Ločiš jih vedno s samo enim presledkom med besedami. Presledkov na začetku in koncu ne sme biti.

```java
public static void main(String[ ] args) {
  [ ] x = 10;
  test([ ]);
}

static void test(int x) {
  System.out.println(x);
}
```

**ODGOVOR:**
```
int x
```

---
**VPRAŠANJE:**

V katerih vrsticah  je napaka v prikazanem programu?

```java
public class Vehicle {
	private String color;

	// Getter
	public String getColor() {
		return color;
	}

	// Setter
	public void setColor(String c) {
		this.color = c;
	}
}

class Program {
	public static void main(String[ ] args) {
		Vehicle v1 = new Vehicle();
		v1.setColor("Red");
		System.out.println(v1.getColor());
	}
}
```

**ODGOVOR:**
```
0
```

---
**VPRAŠANJE:**

V katerih vrsticah  je napaka v prikazanem programu?

```java
class MyClass {

	static void sayHello() {
		System out prinln("Hello World!");
	}

	public static void main(String[ ] args) {
		sayHello();
		sayHello();
		sayHello();
	}
	
}
```

**ODGOVOR:**
```
4
```

---
**VPRAŠANJE:**

Za podano trditev izberi vse pravilne odgovore. Če niso izbrani vsi pravilni odgovor ni točk.

```
Which of the following are valid access modifiers?
Select All That Apply
```

**ODGOVOR:**
```
public
```
```
protected
```
```
private
```

---
**VPRAŠANJE:**

V katerih vrsticah  je napaka v prikazanem programu?

```java
public class Vehicle {
	private String color;

	// Getter
	public String getColor() {
		return this.color;
	}

	// Setter
	public void setColor(String c) {
		c = color;
	}
}

class Program {
	public static void main(String[ ] args) {
		Vehicle v1 = new Vehicle();
		v1.setColor("Red");
		System.out.println(v1.getColor());
	}
}
```

**ODGOVOR:**
```
11
```

---
**VPRAŠANJE:**

Vnesi besede, ki sestavljajo odgovor. Seveda je pomemben vrstni red besed in velikost črk. Ločiš jih vedno s samo enim presledkom med besedami. Presledkov na začetku in koncu ne sme biti.

```java
public class Vehicle {
	private String color;

	// Getter
	public String getColor() {
		return color;
	}

	// Setter
	public void setColor(String c) {
		this.color = c;
	}
}

The ...... method return the value of the attribute.
The ...... method takes a parameter and assigns it to
the attribute.

The keyword .... is used to refer to the current object.
Basically, this.color is the color attribute of the
current object.
}
```

**ODGOVOR:**
```
getter setter this
```

---
**VPRAŠANJE:**

Kaj izpiše naslednji program?

```java
class Program {

	public static void main(String[ ] args) {
		int res = madMax(7, 42);
		System.out.println(res);
	}

	static int madMax(int a, int b) {
		if(b > a) {
			return a;
		}
		else {
			return b;
		}
	}

}
```

**ODGOVOR:**
```
7
```

---
**VPRAŠANJE:**

Za podano trditev izberi vse pravilne odgovore. Če niso izbrani vsi pravilni odgovor ni točk.

`For classes, the available modifiers are public or default (left blank), as described below:`

**ODGOVOR:**
```
default: The class is accessible only by classes in the same package.
```
```
public: The class is accessible by any other class.
```

---
**VPRAŠANJE:**

V katerih vrsticah  je napaka v prikazanem programu?

```java
public class Vehicle {
	private String color;

	// Getter
	public String getColor() {
		return color;
	}

	// Setter
	public void setColor(int c) {
		this.color = c;
	}
}

class Program {
	public static void main(String[ ] args) {
		Vehicle v1 = new Vehicle();
		v1.setColor("Red");
		System.out.println(v1.getColor());
	}
}
```

**ODGOVOR:**
```
10
```

---
**VPRAŠANJE:**

V katerih vrsticah  je napaka v prikazanem programu?

```java
class MyClass {

	static void sayHello() {
		System.out.println("Hello World!")
	}

	public static void main(String[ ] args) {
		sayHello();
	}
	
}
```

**ODGOVOR:**
```
4
```

---
**VPRAŠANJE:**

Vnesi besede, ki sestavljajo odgovor. Seveda je pomemben vrstni red besed in velikost črk. Ločiš jih vedno s samo enim presledkom med besedami. Presledkov na začetku in koncu ne sme biti.

```java
class A {
	private int x;
	public [ ] getX() {
		return [ ];
	}

	public [ ] setX(int x) {
		this.x = x;
	}
}
```

**ODGOVOR:**
```
int x void
```

---
**VPRAŠANJE:**

Koliko metod je napisanih v naslednjem programu?

```java
class MyClass {

	static void sayHello() {
		System.out.println("Hello World!")
	}

	public static void main(String[ ] args) {
		sayHello();
	}
	
}
```

**ODGOVOR:**
```
2
```
## 11. Tedensko Ocenjevanje

---
**VPRAŠANJE:**

Vnesi besede oziroma dele odgovora, ki sestavljajo odgovor. Seveda je pomemben vrstni red besed in velikost črk. Ločiš jih vedno s samo enim presledkom med besedami oziroma posameznimi deli odgovora. Presledkov na začetku in koncu ne sme biti.

`What keyword makes a variable a constant?`

**ODGOVOR:**
```
final
```

---
**VPRAŠANJE:**

Vnesi besede oziroma dele odgovora, ki sestavljajo odgovor. Seveda je pomemben vrstni red besed in velikost črk. Ločiš jih vedno s samo enim presledkom med besedami oziroma posameznimi deli odgovora. Presledkov na začetku in koncu ne sme biti.

`Drag and drop from the options below to create a valid constructor`

```java
class Person {
private int age;
public[ ]([ ] myage) {
age = myage;
}
}
```

**ODGOVOR:**
```
Person int
```

---
**VPRAŠANJE:**

Vnesi besede oziroma dele odgovora, ki sestavljajo odgovor. Seveda je pomemben vrstni red besed in velikost črk. Ločiš jih vedno s samo enim presledkom med besedami oziroma posameznimi deli odgovora. Presledkov na začetku in koncu ne sme biti.

```java
[ ] A
{
	private int x;
		public A([ ] val) {
			x = val;
		}
}
```

**ODGOVOR:**
```
calss int
```

---
**VPRAŠANJE:**

Vnesi besede oziroma dele odgovora, ki sestavljajo odgovor. Seveda je pomemben vrstni red besed in velikost črk. Ločiš jih vedno s samo enim presledkom med besedami oziroma posameznimi deli odgovora. Presledkov na začetku in koncu ne sme biti.

`Fill in the blank to declare a static variable.`

```java
public [ ] int x = 0;
```

**ODGOVOR:**
```
static
```

---
**VPRAŠANJE:**

Kaj izpiše naslednji program?

```java
class Person {
public static int pCount;
public static void main(String[] args){
	Person.pCount = 1;
	Person.pCount++;
	System.out.println(Person.pCount);
}
}
```

**ODGOVOR:**
```
2
```

---
**VPRAŠANJE:**

Vnesi besede, ki sestavljajo odgovor. Seveda je pomemben vrstni red besed in velikost črk. Ločiš jih vedno s samo enim presledkom med besedami. Presledkov na začetku in koncu ne sme biti.

`Fill in the blanks to create two objects from the class "People."`

```java
People obj1 = [ ] People();
People obj2 = new People[ ];
```

**ODGOVOR:**
```
new ()
```

---
**VPRAŠANJE:**

How many packages can be contained in a Java program?

**ODGOVOR:**
```
as many as you need
```

---
**VPRAŠANJE:**

True or false: **import samples**.*; will import all classes in the samples package.

**ODGOVOR:**
```
True
```

---
**VPRAŠANJE:**

True or false: The  **main** method must always be **static**.

**ODGOVOR:**
```
True
```
## 12. Tedensko Ocenjevanje

---
**VPRAŠANJE:**

Which access modifier explicitly says that a method or variable of an object can be accessed by code from outside of the class of that object?

**ODGOVOR:**
```
public
```

---
**VPRAŠANJE:**

True or false:  Methods and classes can also be marked **final**.

**ODGOVOR:**
```
True
```

---
**VPRAŠANJE:**

Vnesi besede oziroma dele odgovora, ki sestavljajo odgovor. Seveda je pomemben vrstni red besed in velikost črk. Ločiš jih vedno s samo enim presledkom med besedami oziroma posameznimi deli odgovora. Presledkov na začetku in koncu ne sme biti.

`Fill in the blank to inherit the Car class from the Vehicle class.`

```java
class Car [ ] Vehicle{}
```

**ODGOVOR:**
```
extends
```

---
**VPRAŠANJE:**

Vnesi besede oziroma dele odgovora, ki sestavljajo odgovor. Seveda je pomemben vrstni red besed in velikost črk. Ločiš jih vedno s samo enim presledkom med besedami oziroma posameznimi deli odgovora. Presledkov na začetku in koncu ne sme biti.

`Fill in the blanks to create a class with the method called "myFunc" that takes no parameters, return void, and prints "Hi" to the screen.`
```
public [ ] MyClass [ ]
	public [ ] myFunc [] {
		System.out.println(''Hi'');
	}
}
```

**ODGOVOR:**
```
class { void ()
```

---
**VPRAŠANJE:**

4 How many packages can be contained in a Java program?

**ODGOVOR:**
```
as many as you need
```

---
**VPRAŠANJE:**

Vnesi besede oziroma dele odgovora, ki sestavljajo odgovor. Seveda je pomemben vrstni red besed in velikost črk. Ločiš jih vedno s samo enim presledkom med besedami oziroma posameznimi deli odgovora. Presledkov na začetku in koncu ne sme biti.

`Fill in the blanks to declare a method that takes one argument of type int.`
```java
public int myFunc([ ] x) [ ]
	return x*10;
[ ]
```

**ODGOVOR:**
```
int { }
```

---
**VPRAŠANJE:**

Vnesi besede oziroma dele odgovora, ki sestavljajo odgovor. Seveda je pomemben vrstni red besed in velikost črk. Ločiš jih vedno s samo enim presledkom med besedami oziroma posameznimi deli odgovora. Presledkov na začetku in koncu ne sme biti.

`Fill in the blank to define a method that does not return a value.`
```java
public [ ] calc()
```

**ODGOVOR:**
```
void
```

---
**VPRAŠANJE:**

Vnesi besede oziroma dele odgovora, ki sestavljajo odgovor. Seveda je pomemben vrstni red besed in velikost črk. Ločiš jih vedno s samo enim presledkom med besedami oziroma posameznimi deli odgovora. Presledkov na začetku in koncu ne sme biti.

`Fill in the blanks to inherit from the Animal class and call its method in main.`
```java
class Animal {
	public void makeSound {
	System.out.prinln(''Hi'');
	}
}
[ ] Dog [ ] Animal {
}
class A {
	public static void main(String args[ ]) {
	Dog dog = new Dog();
	[ ].makeSound();
	}
}
```

**ODGOVOR:**
```
class extends dog
```

---
**VPRAŠANJE:**

In summary, **encapsulation** provides the following benefits:   Select All That Apply

**ODGOVOR:**
```
More flexible and easily changed code
```
```
Ability to change one part of the code without affecting other parts
```
```
Control of the way data is accessed or modified
```

---
**VPRAŠANJE:**

Vnesi besede oziroma dele odgovora, ki sestavljajo odgovor. Seveda je pomemben vrstni red besed in velikost črk. Ločiš jih vedno s samo enim presledkom med besedami oziroma posameznimi deli odgovora. Presledkov na začetku in koncu ne sme biti.

`Drag and drop from the options below to create a valid Java code with encapsulation.`
```java
public class Person {
[ ] int age;
[ ] void setAge([ ] age) {
if (age > 0) {
this.age = age;
}
}
}
```

**ODGOVOR:**
```
private public int
```

---
**VPRAŠANJE:**

Vnesi besede oziroma dele odgovora, ki sestavljajo odgovor. Seveda je pomemben vrstni red besed in velikost črk. Ločiš jih vedno s samo enim presledkom med besedami oziroma posameznimi deli odgovora. Presledkov na začetku in koncu ne sme biti.

`Fill in the blanks to create a method that return the minimum of the two parameters.`
```java
public int minFunc(int n1, int n2 [ ] {
	int min;
	if (n1 > n2)
		min = [ ];
	[ ]
		min = n1;
	
	[ ] min;
}
```

**ODGOVOR:**
```
) n2 else return
```

---
**VPRAŠANJE:**

Private methods are inherited from the super class.

**ODGOVOR:**
```
false
```
## 13. Tedensko Ocenjevanje

---
**VPRAŠANJE:**

V katerih vrsticah  je napaka v prikazanem programu?

```java
public class Vehicle {
	private String color;

	Vehicle() {
		this.setColor("Red");
	}
	Vehicle(String c){
		this.setColor(c);
	}

	// Setter
	public setColor(String c) {
		this.color = c;
	}

	// Getter
	public String getColor() {
		return color;
	}
}

public class Program {
	public static void main(String[] args) {
	//color will be "Red"
	Vehicle v1 = Vehicle();

	//color will be "Green"
	Vehicle v2 = new Vehicle("Green");

	System.out.println(v1.getColor());
	}
}
```

**ODGOVOR:**
```
12 25
```

---
**VPRAŠANJE:**

Koliko funkcij oziroma metod ima razred Vehicle? Vsak konstruktor štej kot eno metodo.

```java
public class Vehicle {
	private String color;

	Vehicle() {
		this.setColor("Red");
	}
	Vehicle(String c){
		this.setColor(c);
	}

	// Setter
	public void setColor(String c) {
		this.color = c;
	}

	// Getter
	public String getColor() {
		return color;
	}
}

public class Program {
	public static void main(String[] args) {
	//color will be "Red"
	Vehicle v1 = new Vehicle();

	//color will be "Green"
	Vehicle v2 = new Vehicle("Green");

	System.out.println(v1.getColor());
	}
}
```

**ODGOVOR:**
```
5
```

---
**VPRAŠANJE:**

Izberi vse pravilne trditve.

**ODGOVOR:**
```
You can think of constructors as methods that will set up your class by default, so you don’t need to repeat the same code every time.
```
```
Constructors are special methods invoked when an object is created and are used to initialize them.
```
```
A constructor can be used to provide initial values for object attributes.
```
```
A constructor can also take parameters to initialize attributes.
```
```
A constructor must have no explicit return type.
```
```
A constructor name must be same as its class name.
```

---
**VPRAŠANJE:**

Izberi pravilno trditev.

`True of false: The constructor must have the same name as the class.`

**ODGOVOR:**
```
True
```

---
**VPRAŠANJE:**

Izberi vse pravilne trditve.

**ODGOVOR:**
```
The setter methods inside the constructors can be used to set the attribute values.
```
```
The constructor is called when you create an object using the new keyword.
```
```
A single class can have multiple constructors with different numbers of parameters.
```
```
Java automatically provides a default constructor, so all classes have a constructor, whether one is specifically defined or not.
```

---
**VPRAŠANJE:**

Izberi vse pravilne trditve.

**ODGOVOR:**
```
A constructor must have no explicit return type.
```
```
Constructors are special methods invoked when an object is created and are used to initialize them.
```
```
A constructor name must be same as its class name.
```
```
A constructor can be used to provide initial values for object attributes.
```
## Priprava na 2. Pisni preizkus znanja

---
**VPRAŠANJE:**

Izberi vse pravilne trditve. Kako zagotavljamo kvalitetno izvorno kodo programa, ki je pregledna in posledično pomeni, da bomo program lažje razumeli in spreminjali oziroma vzdrževali? Povedano drugače, kako hitro napišemo dobro delujoč program?

**ODGOVOR:**
```
VSI ODGOVORI
```

---
**VPRAŠANJE:**

Kaj izpiše naslednji program?

```java
What is the output of this code?
public static void main(String[ ] args) {
  int x = 4;
  square(x);
  System.out.println(x);

static void square(int x) {
  x = x*x;
}
```

**ODGOVOR:**
```
4
```

---
**VPRAŠANJE:**

Za podano trditev izberi vse pravilne odgovore. Če niso izbrani vsi pravilni odgovor ni točk.

```
What would the name of the setter method for the class variable named "age" be?
```

**ODGOVOR:**
```
setAge
```

---
**VPRAŠANJE:**

Koliko novih objektov tvorimo v metodi main()?

```java
public class Vehicle {
	int maxSpeed;
	int wheels;
	String color;
	double fuelCapacity;

	void horn() {
		System.out.println("Beep!");
	}
}

class MyClass {
	public static void main(String[ ] args) {
		Vehice v1 = new Vehicle();
		Vehicle v2 = new Vehicle();
		v1.color = "red";
		v2.horn();
	}
}
```

**ODGOVOR:**
```
2
```

---
**VPRAŠANJE:**

Prikazana je koda razreda Lettuce. Kdo nariše solato, če dejansko koda tega razreda ne počne nič? Izberi vse pravilne trditve!

```java
import greenfoot.*; // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Lettuce here.
 *
 * @author (your name)
 * @version (a version number or date)
 */
public class Lettuce extends Actor
{
	/**
	 * Act - do whatever the Lettuce wants to do. This method is called whenever
	 * the 'Act' or 'Run' button gets pressed in the evnironment.
	 */
	public void ac ()
	{
		// Add your action code here.
	}
}
```

**ODGOVOR:**
```
Samo okolje Greenfoot, ki sproti v zanki izrisuje grafično podobo vseh likov (objektov), ki so potomci razredov Actor in World
```

---
**VPRAŠANJE:**

V katerih vrsticah  je napaka v prikazanem programu?

```java
class MyClass {

	static void sayHello() {
		System out println("Hello World!");
	}

	public static void main(String[ ] args) {
		sayHello();
		sayHello();
		sayHello();
	}
	
}
```

**ODGOVOR:**
```
4
```

---
**VPRAŠANJE:**

Izberi vse pravilne trditve.

**ODGOVOR:**
```
The constructor is called when you create an object using the new keyword.
```

---
**VPRAŠANJE:**

Koliko novih objektov tvorimo v metodi main()?

```java
public class Vehicle {
	private String color;

	Vehicle() {
		this.setColor("Red");
	}
	Vehicle(String c){
		this.setColor(c);
	}

	// Setter
	public void setColor(String c) {
		this.color = c;
	}

	// Getter
	public String getColor() {
		return color;
	}
}

public class Program {
	public static void main(String[] args) {
	//color will be "Red"
	Vehicle v1 = new Vehicle();

	//color will be "Green"
	Vehicle v2 = new Vehicle("Green");

	System.out.println(v1.getColor());
	}
}
```

**ODGOVOR:**
```
2
```

---
**VPRAŠANJE:**

True or false:  Methods and classes can also be marked **final**.

**ODGOVOR:**
```
True
```

---
**VPRAŠANJE:**

True or false: The constructor must have the same name as the class.

**ODGOVOR:**
```
True
```

---
**VPRAŠANJE:**

Vnesi besede, ki sestavljajo odgovor. Seveda je pomemben vrstni red besed in velikost črk. Ločiš jih vedno s samo enim presledkom med besedami. Presledkov na začetku in koncu ne sme biti.

```
Drag and drop from the options below to define a class with these attributes: age of type integer, height as a double, and name as a string.

[ ] Person {
 [ ] age;
 [ ] height;
 [ ] name;
}
```

**ODGOVOR:**
```
class int double String
```

---
**VPRAŠANJE:**

Izberi vse pravilne trditve. Prikazan je del kode razreda Snake.

```java
public class Snake extends Animal
{
	public void act ()
	{
		move (4);
		randomTurn ();
		turnAtEdge ();
		tryToEatTurtle ();
	}

	/**
	 * With a 10% probability, turn a bit right or left.
	 */
	public void randomTurn()
	{
		if ( Greenfoor.getRandomNumber(100) < 10 )
		{
			turn( Greenfoot.getRandomNumber(40)-20 );
		}
	}
}
```

**ODGOVOR:**
```
Metoda getRandomNumber() je statična metoda.
```
```
Prikazana metoda randomTurn() je metoda razreda Snake.
```
```
Prikazana metoda act() je metoda razreda Snake.
```

---
**VPRAŠANJE:**

Za podano trditev izberi vse pravilne odgovore. Če niso izbrani vsi pravilni odgovor ni točk.

`The following choices are available for attributes and methods:`

**ODGOVOR:**
```
private: Accessible only within the declared class itself.
```
```
default: A variable or method declared with no access control modifier is available to any other class in the same package.
```
```
public: Accessible from any other class.
```
```
protected: Provides the same access as the default access modifier, with the addition that subclasses can access protected methods and variables of the superclass (Subclasses and superclasses are covered in upcoming lessons).
```

---
**VPRAŠANJE:**

Koliko metod je napisanih v naslednjem programu? Vsak konstruktor štej kot eno metodo.

```java
public class Vehicle {
	private String color;

	Vehicle() {
		this.setColor("Red");
	}
	Vehicle(String c){
		this.setColor(c);
	}

	// Setter
	public void setColor(String c) {
		this.color = c;
	}

	// Getter
	public String getColor() {
		return color;
	}
}

public class Program {
	public static void main(String[] args) {
	//color will be "Red"
	Vehicle v1 = new Vehicle();

	//color will be "Green"
	Vehicle v2 = new Vehicle("Green");

	System.out.println(v1.getColor());
	}
}
```

**ODGOVOR:**
```
5
```

---
**VPRAŠANJE:**

Ali rešitev naloge za podano besedilo deluje, torej nima napak, ali ne deluje, torej ima napake? Na kratko, ali podan program deluje skladno s podanim besedilom?

```java
/**
 * Napišite kodo za algorite, ki uporabniku omogoči vnos števila.
 * Če je prebrano število enomestno (od 0 do 9),
 * se na standardni izhod izpiše besedilo "Število je enomestno.",
 * v nasprotnem pa "Število je večmestno.".
 * Vnos negativnih števil nas ne zanima in ga odmislimo!
 */

import java.util.Scanner;
public class Naloga_Dx {

	public static void main(String[] args) {
		System.out.print("Vnesite število: ");
		Scanner vhod = new Scanner(System.in);
		int vnos = vhod.nextInt();
		if(vnos<10)
			System.out.println("Število je enomestno.");
		else
			System.out.println("Število je večmestno.");
		vhod.close();
	}
	
}
```

**ODGOVOR:**
```
DA
```

---
**VPRAŠANJE:**

Object-Orientation A class defines... (choose two) Select All That Apply

**ODGOVOR:**
```
attributes
```
```
behaviour
```

---
**VPRAŠANJE:**

Vnesi besede oziroma dele odgovora, ki sestavljajo odgovor. Seveda je pomemben vrstni red besed in velikost črk. Ločiš jih vedno s samo enim presledkom med besedami oziroma posameznimi deli odgovora. Presledkov na začetku in koncu ne sme biti.

```
Fill in the blanks to create a class with a single method called "test".

public [ ] A {
  public void [ ] {
    System.out.println("Hi");
  }
}
```

**ODGOVOR:**
```
class test
```

---
**VPRAŠANJE:**

Vnesi besede, ki sestavljajo odgovor. Seveda je pomemben vrstni red besed in velikost črk. Ločiš jih vedno s samo enim presledkom med besedami. Presledkov na začetku in koncu ne sme biti.

```java
public static void main(String[ ] args) {
	[ ] x = 10;
	test([ ]);
	
}

static void test(int x) {

	System.out.println(x);
	
}
```

**ODGOVOR:**
```
int x
```

---
**VPRAŠANJE:**

Which of the following are valid access modifiers? Select All That Apply

**ODGOVOR:**
```
public
```
```
protected
```
```
private
```

---
**VPRAŠANJE:**

What is the value of the following expression?

`Math.abs(Math.min(-6,3));`

**ODGOVOR:**
```
6
```