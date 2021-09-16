# Lektion 16 september

## Övningar

Skapa ett projekt med Parcel och Vue, utan att använda Vue CLI. Du ska göra en simpel todo-app. Följande komponenter ska finnas med:

* App.vue
* Todo-list.vue
* Todo-item.vue

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

## Artiklar

## Videor

## Inspelningar
