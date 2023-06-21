https://trials-a56d6.web.app/ - live

ROZWIĄZANIA:

1a
-projekt początkowo zainicjowany z prettier i eslint, później eslint wyłączony - info niżej
-zadania rozwiązywane jedno po drugim w osobnych komponentach, proste zastosowanie githuba bez branchy
-nawigacja onMouseOver i nawigacja onMouseClick dla mobile
-routes lazy loading i error page
-tytuł strony przy użyciu biblioteki react-helmet-async

2a
-pola hardcoded
-revert przy pomocy biblioteki undoable
-obecnie undo cofa pola tekstowe o jedną literę (do naprawienia)

3a
-optymalizacja przy pomocy FastField z formik

4a
-working remotely boolean przekształcony i wyświetlany jako string
-problemy przy customSorting, niezależnie od użytych sposobów i konwertowania daty, data nadal sortuje się jak string
-problem z usunięciem znaczka gdy wpis nie posiada subordinates i nie można go rozwinąć
-problem przy sortowaniu tabeli gdzie subordinates jest rozwinięte - wartości znikają

5a
-w fazie nauki i testowania

PROBLEMY:
Napotkane problemy, które kosztowały dużo czasu

2a
-typescript, mając mniejsze doświadczenie z ts i nieznanymi bibliotekami postanowiłem w trakcie projektu przejść spowrotem na js i wyłączyć eslint
-inny syntax reducerów, banalny problem z owinięciem reducerów w funkcję undoable

3a
-brak takiego rodzaju przykładów
-yup - problem z walidacją innych pól, problem ze znalezieniem this.parent
-lagi - próby zmiany walidacji całego formularza onChange/onBlur, próby debouncowania i throttlowania funkcji walidacyjnej yup

4a
-duża frustracja wynikająca z niemożności wykonania najprostszych czynności takich jak sortowanie daty czy nawet zmiana stylów poszczególnych elementów, zadanie pozostawione na później i ostatecznie nie skończone

5a
-zaczęcie od prostych zagadnień i próba zrozumienia biblioteki, niezmieszczenie się w wyznaczonym czasie

ODCZUCIA:
Pierwsze dwa zadania udało mi się rozwiązać bez większych problemów. Jednak trzecie zadanie, które polegało na łączeniu trzech bibliotek, sprawiło mi dużo trudności. Do tej pory miałem do czynienia tylko z biblioteką Formik. Dokumentacje tych trzech bibliotek były dość długie, a żaden z przykładów nie pasował idealnie do mojego zadania. Spędziłem sporo czasu, próbując osiągnąć oczekiwany efekt. Pierwsza próba polegała na używaniu 10 osobnych formularzy. Chcąc postępować zgodnie z wytycznymi podszedłem do zadania jeszcze raz.
Najmniej czasu poświęciłem na ostatnie 2 zadania. Jeśli miałbym pracować codziennie z tymi bibliotekami i nie miałbym ograniczeń czasowych, zacząłbym od prostszych przykładów i stopniowo wprowadzałbym coraz trudniejsze rozwiązania, aby w pełni zrozumieć, jak działają te biblioteki. W obecnym przypadku pominąłem wiele podstawowych informacji i od razu zabrałem się za trudniejsze zagadnienia.
Przypominając sobie, że oceniany będzie nie tylko efekt końcowy przy ostatnim zadaniu zacząłem więc studiować bibliotekę react-dnd, zaczynając od tworzenia prostych przykładów.
