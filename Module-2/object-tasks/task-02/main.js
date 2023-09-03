// İstifadəçi məlumatları olan bir obyekt verilib. 
// Bu obyektə yaş (age) əlavə edin və doğum tarixini silin. 
// Alınmış obyekti konsola çıxarın.

let user = {
    name: 'Elmira',
    gender: 'female',
    birthday: '22.04.2003'
}
user.age = '20';
delete user.birthday;
console.log(user);