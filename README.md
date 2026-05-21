# 株式会社MFD コーポレートサイト

## 編集方法（社長・スタッフ向け）

1. ブラウザで `https://（公開URL）/admin/` にアクセス
2. メールアドレスとパスワードでログイン
3. 「会社情報」「商品」「お知らせ」などを編集
4. 「Publish」ボタンで保存 → 数十秒で公開ページに反映

## 開発者向け

```bash
npm install
npm start      # http://localhost:8080 でローカルプレビュー
npm run build  # _site/ に静的サイトを書き出す
```

デプロイは Netlify が GitHub への push を検知して自動実行。
