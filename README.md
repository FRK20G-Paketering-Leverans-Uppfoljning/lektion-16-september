# Lektion 16 september

## Övningar

### Övning 1
Skapa ett projekt med Parcel och Vue, utan att använda Vue CLI. Du ska göra en simpel todo-app. Följande komponenter ska finnas med:

* App.vue
* Todo-list.vue
* Todo-item.vue

### Övning 2

Fortsätt på ovan projekt och skapa en .env-fil med en miljövariabel som heter NODE_ENV med värdet "development".

Lägg till skript i package.json för att starta parcel med NODE_ENV=development eller NODE_ENV=production. Kom ihåg att installera cross-env om du använder Windows (https://www.npmjs.com/package/cross-env).

I din Todo-list.vue så lägg till så den kommer göra olika saker baserat på värdet i NODE_ENV. Om värdet är "development" så ska du loopa ut en array med fyra todos som du lägger in direkt i en lokal egenskap (i `data()`) som heter `todos`.

Om värdet i NODE_ENV är "production" ska du istället hämta alla todos med ett `fetch`-anrop till detta API https://awesome-todo-api.herokuapp.com/tasks.

Exempel request:
```
const url = https://awesome-todo-api.herokuapp.com/tasks;
const response = await fetch(url, { method: 'GET' });
const data = await response.json();
```

### Övningar med unit tests

Skriv testfall för följande funktionalitet och implementera sedan i Vue enligt kravspecifikation: https://gist.github.com/zocom-christoffer-wallenberg/0098cbec3ffb19887780759b5260f2b2

Skriv testfall för följande funktionalitet och implementera sedan i Vue enligt kravspecifikation (gör den utan Vue router): https://gist.github.com/zocom-christoffer-wallenberg/d827e540a749c7c7ad99d27ac8b80b19

**Level up:** Testa att göra ovanstående övning med Vue router och unit test på det för mer information om att testa med Vue router: https://vue-test-utils.vuejs.org/guides/using-with-vue-router.html

## Artiklar

Bra artikel om Javascript Transpilers: https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them

## Videor

## Inspelningar

https://drive.google.com/drive/folders/1Dn4JoA4ohmi6tMXOYr0Y8iM2VmystjbY?usp=sharing