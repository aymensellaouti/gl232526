var scope = "globale";
function f() {
	console.log(scope); 
    // contexte locale dans la fonction f	
	var scope = "locale"; 
	
	console.log(scope); 	
}
const x = 5;
const user = {
    name: 'aymen',
    age: 43,
    'sayHello please': () => {}
}

user.name = `je suis 
    né le 
    ${x} juin 1980
`
f();