const student = require('./information');
const cowsay = require('cowsay');

console.log(cowsay.say({
    text: `Je m'appelle ${student.student.name} et j'apprends le JS au campus de ${student.student.campus}`,
    s: true,
}));