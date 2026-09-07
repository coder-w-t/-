const fs = require('fs');
const html = fs.readFileSync('D:/小学期（一）/小游戏/snake-game.html', 'utf8');
const re = /<script>([\s\S]*?)<\/script>/g;
const scripts = [];
let m;
while ((m = re.exec(html)) !== null) scripts.push(m[1]);
const all = scripts.join('\n');
try {
  new Function(all);
  console.log('JS 语法检查通过，共 ' + all.split('\n').length + ' 行');
} catch (e) {
  console.log('语法错误: ' + e.message);
}