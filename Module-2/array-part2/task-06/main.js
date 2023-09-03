// Elektron növbəni idarə etmək üçün proqram tərtib edin.
// İstifadəçidən məlumat tələb edən və növbəni yeniləyən proqram tərtib edin.
// - İstifadəçidən növbəni yeniləmək üçün məlumat tələb edin.
// - Əgər istifadəçi yeni müştərinin ad və soyadını daxil edibsə, proqram müştərini növbənin sonuna əlavə edir.
// - İstifadəçi boş bir dəyər daxil edərsə, proqram növbədə birincinin adını və soyadını göstərir və onu növbədən çıxarır.
// - İstifadəçi «=» işarəsini daxil edərsə, proqram dayanır və növbə massivini konsola çıxarır.

let users = ["Ali", "Elmira", "Aysel", "Togrul", "Nihad"];
let newUser = prompt('Enter the new user:'.trim())
if (newUser === '') {
    let removedUser = users.shift()
    alert("Goodbye ",removedUser)
}else if (!users.includes(newUser)) {
    users.push(newUser.trim())
    alert(users)
}