#!/bin/bash

# 載入 nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# 執行 clean-up.py
echo "執行 Git 清理..."
python3 script/clean-up.py

# 設定 Node.js 版本
echo "設定 Node.js 版本..."
nvm use 22

# 安裝依賴
echo "安裝依賴..."
yarn install

# 要求輸入新的專案名稱
echo "請輸入新的專案名稱："
read NEW_PROJECT_NAME

# 更新 package.json 中的專案名稱
echo "更新 package.json..."
sed -i '' "s/\"name\": \"base_template\"/\"name\": \"$NEW_PROJECT_NAME\"/" package.json

# 更新 angular.json 中的專案名稱和 prefix
echo "更新 angular.json..."
sed -i '' "s/\"base_template\"/\"$NEW_PROJECT_NAME\"/" angular.json
sed -i '' "s/\"prefix\": \"app\"/\"prefix\": \"$NEW_PROJECT_NAME\"/" angular.json

# 更新 app.component.ts 中的 selector
echo "更新 app.component.ts..."
sed -i '' "s/selector: 'app-root'/selector: '$NEW_PROJECT_NAME-root'/" src/app/app.component.ts

# 更新 index.html 中的 title
echo "更新 index.html..."
sed -i '' "s/<title>base_template<\/title>/<title>$NEW_PROJECT_NAME<\/title>/" src/index.html

# 取得當前目錄的完整路徑
CURRENT_DIR=$(pwd)
PARENT_DIR=$(dirname "$CURRENT_DIR")

# 更改資料夾名稱
echo "更改資料夾名稱..."
cd "$PARENT_DIR"
mv "$(basename "$CURRENT_DIR")" "$NEW_PROJECT_NAME"
cd "$NEW_PROJECT_NAME"

echo "專案已重新命名為 $NEW_PROJECT_NAME"

# 重新開啟 Cursor
echo "重新開啟 Cursor..."
# 關閉當前 Cursor 實例
pkill -x "Cursor" || true
sleep 2

# 開啟 Cursor 並打開新專案
echo "開啟新專案..."
open -a Cursor "$(pwd)"

