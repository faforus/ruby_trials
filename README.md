Wykorzystywane biblioteki:
react-router (https://reactrouter.com/)

Stwórz nową aplikację reactową. Dodaj do niej nawigację przy pomocy biblioteki react-router. Dodaj menu nawigacji po lewej stronie ekranu, które otwierać będzie się po najechaniu na nie myszką. Powinno wyświetlać w sobie kilka przykładowych zakładek (ikona + nazwa), między którymi możliwa będzie nawigacja. W zminimalizowanej formie menu nawigacji powinno być cienkim paskiem, wyświetlającym tylko ikony zakładek. Zakładki powinny wyświetlać swoją nazwę. Ta sama nazwa powinna też być częścią adresu url w przeglądarce, który będzie zmieniać się podczas przechodzenia między zakładkami.

Wykorzystywane biblioteki:
redux (https://react-redux.js.org/)

W oddzielnej zakładce dodaj 5 checkboxów, 5 pól tekstowych i 5 pól umożliwiających wybór daty. Stan całej zakładki powinien być przechowywany w reduxie, tak, że po powrocie do danej zakładki będzie on taki jak przy wyjściu z niej. Poniżej dodanych pól dodaj przycisk “Reset” który będzie resetować stan wszystkich komponentów w zakładce do domyślnych wartości. Koło przycisku “Reset” dodaj przycisk “Revert” - jeśli stan komponentów został w jakikolwiek sposób zmieniony przycisk “Revert” powinien być aktywny, w innym przypadku powinien być wyłączony. Naciśnięcie “Revert” powinno cofać stan do ostatniej zmiany. W ten sposób powinno móc dać się cofnąć minimum 20 ostatnich zmian.

    Wykorzystywane biblioteki:

yup (https://github.com/jquense/yup),
Formik (https://formik.org),
mui (https://mui.com/material-ui/getting-started/installation)

W oddzielnej zakładce stwórz nowy formularz bazujący na bibliotece Formik i wykorzystujący walidowanie przy pomocy biblioteki yup. Formularz powinien zawierać w sobie 100 pól numerycznych bazujących na komponencie TextField z biblioteki mui, podzielonych na 10 kategorii. Walidacja powinna sprawdzać czy suma wartości w danej kategorii nie przekracza 10 000. Jeśli ta wartość jest przekroczona - pola przynależące do danej kategorii powinny renderować się z czerwonym obramowaniem i tekstem informującym o wystąpieniu błędu pod spodem. Zoptymalizuj formularz tak by pola tekstowe nie lagowały przy wprowadzaniu danych a walidacja odbywała się wraz z wprowadzeniem każdej nowej wartości

W oddzielnej zakładce stwórz nowy formularz bazujący na bibliotece Formik i wykorzystujący walidowanie przy pomocy biblioteki yup. Formularz niech zawiera dwa pola tekstowe - A i B. Jeśli wartość wprowadzona w polu A jest dłuższa niż 10 znaków, walidacja dla pola B powinna zwracać błąd jeśli nie jest ono wypełnione. W innym wypadku walidacja dla pola B nie powinna sprawdzać żadnych wymagań. Wystąpienie błędu powinno być zaznaczone czerwonym obramowaniem pola B i tekstem informującym o wystąpieniu błędu pod spodem. Walidacja musi wykorzystywać bibliotekę yup i tworzyć error bezpośrednio w komponencie formularza Formika.

Wykorzystywane biblioteki:
mui-datatables (https://github.com/gregnb/mui-datatables)

Stwórz oddzielną zakładkę zawierającą w sobie komponent <MUIDataTable/> z biblioteki mui-datatables. Tabela powinna wyświetlać następujące dane - https://pastebin.com/7rdh4ueb. Tabela powinna umożliwiać sortowanie po każdej możliwej kolumnie (fistName i lastName - alfabetycznie, joinDate - chronologicznie, isWorkingRemotely - sortując po wartości true/false, subordinates - według ilości wpisów). Dla wpisów w tabeli, które posiadają subordinates, powinna istnieć możliwość rozwinięcia danego rzędu. Pod danym rzędem powinny wyświetlać się wpisy z wartości subordinates posortowane według aktualnie wybranego sortowania. Komórki z podrzędów powinny odpowiadać wielkością komórkom ich rodzica i powinny wyświetlać się dokładnie w tym samym miejscu, dzięki czemu wszystkie rzędy w tabeli powinny być idealnie symetryczne.

Wykorzystywane biblioteki:
react-dnd (https://react-dnd.github.io/react-dnd/about)

Stwórz oddzielną zakładkę. W środku umieść wyodrębniony obszar wykorzystujący bibliotekę react-dnd. Ponad nią dodaj przycisk “Add element”. Przycisk “Add element” powinien dodawać kartę z losowym, placeholderowym tekstem do layoutu wyodrębnionego obszaru. Elementy dodane do obszaru powinny renderować się w kolejnych rzędach, zawierających w sobie 3 kolumny. Dodane elementy powinny być możliwe do przeciągania na nowe miejsce w layoucie przy pomocy funkcjonalności react-dnd. W przypadku drag’n’dropowania danego elementu powinien on znikać z miejsca które dotychczas zajmował. Gdy użytkownik trzyma wciśnięty przycisk myszy i hoveruje nad miejscem już zajmowanym przez inne elementy, powinny one rozstępować się, tworząc tym samym puste miejsce na które może być upuszczony przenoszony element. W przypadku zwolnienia przycisku myszki nad obszarem wykorzystującym react-dnd przenoszony element powinien przemieszczać się w dane miejsce. Jeśli przycisk myszki zostanie zwolniony poza obszarem - element powinien wracać na miejsce z którego miał zostać przeniesiony.

Koło przycisku “Add element” dodaj przycisk “Add group”. Przycisk “Add group” powinien dodawać kartę z placeholderowym tekstem do layoutu tak jak robi to przycisk “Add element”. Grupa ma wykorzystywać funkcjonalności elementu (możliwość reorganizowania layoutu przy pomocy dragowania i dropowania), powinna posiadać jednak dodatkową funkcjonalność - w środku karty ma znajdować się oddzielny layout wykorzystujący react-dnd. Powinien on duplikować zachowanie głównego layoutu (kolejne rzędy, 3 kolumny, możliwość reorganizowania elementów, trzymanie w sobie zwykłych elementów jak i grup). Podstawowe elementy jak i grupy powinny móc być przenoszone między poszczególnymi layoutami - między grupami, grupą a głównym layoutem itp. Nestowanie grup powinno być teoretycznie nieskończone - tj. możliwe powinno być umieszczenie grupy w grupie w grupie w grupie itd.
