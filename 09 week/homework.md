## TO DO App

Se foloseste servarul de la curs - 09 week/todo-server
1. Se aduce lista de todos de pe http://localhost:3000/todos GET
2. Pentru a crea se face POST pe http://localhost:3000/todos
3. Pentru update se face PUT pe http://localhost:3000/todos
4. Pentru stergere se face DELETE pe http://localhost:3000/todos

Un Todo item are trei proprietati:
id - string
text - string (aici vine textul , gen faceti temele)
checked - boolean

Cerinte:

1. Afisarea listei de TODO ( GET )
2. User poate sa adauge un todo item ( POST )
3. User poate sa sterga un todo item ( DELETE )
4. User poate sa poata bifa un todo, ( se face update la checked din false in true) ( PUT )

Asemanator cu Blog workshop

Un exemplu de implementare, https://codepen.io/wilstaley/pen/KKwypJW , asemanator cu ce este aici doar mai avem o bifa, iar daca dam click pe text se pune checked

De folosit es6: async/wait
