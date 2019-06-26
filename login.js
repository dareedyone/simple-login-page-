


function add () {
    var arr = [];
    var obj = {Name: named.value, Email: mail.value, Dept: dept.value, Level: level.value};
if (localStorage.evil) {
    arr = JSON.parse(localStorage.getItem('evil'));
    if (arr.every(a => a.Email !== mail.value)) {
    arr.push(obj);
    localStorage.setItem('evil', JSON.stringify(arr) );
}

} else {
   
    arr.push(obj);
    localStorage.setItem('evil', JSON.stringify(arr) );
 
}    
named.value = "";
mail.value = "";
dept.value = "";
level.value ="";
tr.innerHTML = "Registration successful";

   
}

function login () {

    var sv = JSON.parse(localStorage.getItem('evil'));
    // console.log(sv[0].Email)
    for (var i = 0; i < sv.length; i++) {
        if (mail1.value.match(sv[i].Email)) {
            tr.innerHTML = `Your details are <br> <br> Name: ${sv[i].Name}  <br> Email: ${sv[i].Email}  <br> Dept: ${sv[i].Dept}  <br> Level: ${sv[i].Level}`;

            // console.log('yaas');
        }
    }
    mail1.value ="";
}