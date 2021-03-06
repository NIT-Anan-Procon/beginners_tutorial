# 阿南高専 プログラミング同好会 1 年生向けチュートリアルサイト

[GitHub Pages](https://nit-anan-procon.github.io/beginners_tutorial/)

## GitHub Flow について

本リポジトリは、[GitHub Flow](https://www.atmarkit.co.jp/ait/articles/1708/01/news015.html#02)を用いて運用しています。

- `main` ブランチは常にデプロイ可能である必要があります。

- 記事の追加や機能追加をする場合は `main` ブランチからブランチを切るようにしてください。

## ブランチ名の命名規則について

記事関係 ⇒ `article/記事番号_記事名`
機能関係 ⇒ `feature/機能名`
修正関係 ⇒ `fix/修正箇所`

例. `article/0102_Javaについて`

## コミットメッセージについて

無理に英語を使う必要はありません。

追加した機能や記事について短く、わかりやすく書きましょう。

## [gitmoji](https://gitmoji.dev/) について

このリポジトリでは、コミットメッセージのはじめに下の英文字列を入れると勝手に絵文字に置き換わります。

例. `:bug: バグを修正` ⇒ 🐛 バグを修正

コミットする際に絵文字をつけて分かりやすくしてみましょう！

```
- Main Emoji
  🚧 :construction: 作業中
  ✨ :sparkles: 新機能を追加
  🔨 :hammer: 機能を変更
  🩹 :adhesive_bandage: 軽微なバグを修正
  🚑 :ambulance: 重大なバグを修正
  ✏️  :pencil2: タイプミスを修正
  📝 :memo: ドキュメントを追加、更新
  🎨 :art: デザイン、UI を更新
  ♻️  :recycle: ソースコードを整理
  💬 :speech_balloon: コメントアウトの追加、更新
  🔥  :fire: コード、ファイルを削除
  🚚 :truck: ファイルを移動、名前変更

- Sub Emoji
  ⏪ :rewind: 変更を元に戻す
  ♿️ :wheelchair: 使いやすさの向上
  ⚗  :alembic: プログラムをテスト
  📱  :iphone: スマホ対応デザインを更新
  🔀 :twisted_rightwards_arrows: ブランチをマージ
  💩 :poop: 酷いコードを追加
```

## 記事の作成について

簡単な説明は書いておきますが、分からない場合はインターネットで調べてみましょう。

質問や疑問点は、Slack チャンネルにメッセージを投稿してください。

### セットアップ

1. まずは、 `00-header.js` に行って作成する話数の配列のところへ大見出し、中見出し、小見出しを追加してください。大見出しと中見出しは `big_middle_header_box` へ、小見出しは `small_header_box` へ入れてください。詳しくはコメントアウトを読んでください。

2. 次に、 `00-model.html` をコピーして `2桁の話数-2桁のページ数(中見出しごと).html` という名前のファイルを作成してください。例: 1 話の 1 ページ目 ⇒ `01-01.html`

3. 最後に、作成したファイルの中身を編集してください。詳しくはコメントアウトを読んでください。HTML ファイル内のコメントアウトは後で必ず消してください。

### 必須のタグ

`section` と `hr` は**必須**です。

`section`: 節
記事ごとにこのタグで囲ってください。小見出しもこの中に入れてください。

`hr`: 水平罫線
記事の一番下、section 閉じタグの上に必ず入れてください。閉じタグはいりません。それ以外で自由に使ってもらっても構いません。

### オススメのタグ

ページ作成におすすめのタグは、以下の通りです。

`p`: 段落
文章は基本的にこのタグで囲ってください。空白行はできるだけ br タグを使わず、上下の文章をどちらもこのタグで囲ってください。

`b`: 太文字
文字を太くしたいときに囲ってください。

`red`: 赤文字
文字を赤くしたいときに囲ってください。これは独自のタグです。

`u_black`,`u_red`:アンダーバー
文字に下線を引きたいときに囲ってください。黒と赤を用意してあります。これは独自のタグです。

`br`: 改行
改行したいときに入れてください。空白行を入れるときはできるだけ p タグを使ってください。閉じタグはいりません。

`ul,ol,li`: 箇条書き
箇条書きを入れたいときに囲ってください。まず ul タグまたは ol タグで外の囲いを作り、箇条書きにしたい要素を li タグで囲います。箇条書きにするときは文章が体言止めになるよう心がけましょう。ul タグと違い ol タグは番号付きです。詳しくは調べてみてください。

`pre`: ソースコード
インデントや記号をそのまま表示したいときに囲ってください。インデントは 4 半角スペースでお願いします。属性に `class=code` を入れるとソースコードの一部の単語に自動で色が付きます。コメントアウトは`/* コメント */`で統一してください。新しく単語を追加したいときは 00-code.js へ行って、コメントアウトを読んでください。変数は 1 つ 1 つ宣言しないと色が変わらないので注意してください。
例：`<pre class=code>int a;<pre>`

`img`: 画像
画像を入れたいときに使ってください。属性に src="URL,パス"で使用できます。

`span`: 文字デザイン
部分的な文字の装飾をしたいときに囲ってください。詳しくは調べてみてください。

`a`: リンク
リンクを入れたいときに囲ってください。属性に `href="URL,パス"` で使用できます。

`table`, `th`, `tr`, `td`：表
表を入れたいときに `table` タグで囲ってください。詳しくは調べてみてください。

### ソースコードの色設定

ソースコード内の単語に自動で色を付けるように設定してあります。

記事の中にソースコードを入れたいときや、新しく色を付けたい単語を増やすときは `00-code.js` を編集してください。詳しくはコメントアウトを読んでください。
