const { execFileSync} =  require('node:child_process');
const { cpSync } = require("node:fs");
const { resolve} = require("node:path");

const action = resolve(__dirname, './action.sh')

const sourceFolderPath = resolve(__dirname, '../dist')
const targetFolderPath = resolve(__dirname, '../build/dist')


const branch = () => {
  const args = process.argv.slice(2);
  const myArg = args.find(arg => arg.startsWith('--branch='));

  // 提取自定义变量的值
  return myArg ? myArg.split('=')[1] : 'dev';
}

try {
  cpSync(sourceFolderPath, targetFolderPath,{recursive:true})
  console.log('文件夹复制成功！');
  const output = execFileSync(action, [branch()]);
  console.log('命令执行成功，输出:', output.toString());
} catch (err) {
  console.error('文件夹复制失败:', err);
}



