# smallTalk: stare społeczności - nowe znajomości
Nasza aplikacja łączy ludzi, którzy podczas codziennego życia nigdy nie mieli by okazji się spotkać, mimo, że mogą mieć ze sobą wiele wspólnego. Dobierani są ludzie ze wspólnych środowisk (np. szkoła), a następnie dodaje ich do anonimowego chatu, dając możliwość ujawnienia się po udanej rozmowie.

## Z czego składa się nasz projekt?
- [ ] strona internetowa informacyjna
- [ ] profile na mediach społecznościowych
- [ ] strona internetowa aplikacji (funkcjonalna)
- [ ] aplikacja mobilna (funkcjonalna)
- [ ] baza danych znajdująca się na naszym serwerze
- [ ] komponent funkcjonalny odpowiadający za uwierzytelnianie użytkowników czy łączenie osób ze sobą znajdujący się również na naszym serwerze

## Poradnik użytkowania pisany o 04:00:
1. python -m venv venv
2. cd venv
3. git clone https://github.com/Kar0lu/smallTalkBackend.git
4. cd smallTalkBackend
    1. cd frontend
    2. npm install
    3. npm run dev
5. cd ..
 1. python manage.py migrate
 2. python manage.py runserver

## Ścieżki:
/ - App.js

/admin - panel zarządzania, nie wiem czy zostawiłem ze stworzonym użytkownikiem, ale jeżeli nie, to w smallTalkBackend wystarczy wspiać "python manage.py createsuperuser", dać mu jakieś dane i można się logować

/accounts/google/login/?process=login - jakby ktoś chciał zobaczyć logowanie przez google (aktualnie po zalogowaniu nie wyświetla się nić bo nie ma stworzonych profili)

