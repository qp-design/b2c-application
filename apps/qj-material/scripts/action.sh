#!/bin/bash

# 从命令行参数中获取变量值
branch="$1"
# 进入到 Git 仓库目录
cd build
git init
git remote add origin git@gitlab.qianjiangcloud.com:avengers/qj-material.git
git checkout -b $branch
# 添加所有修改的文件
git add .

# 提交并添加提交消息
git commit -m "feat: $branch"

# 推送到远程仓库
git push -f origin $branch
