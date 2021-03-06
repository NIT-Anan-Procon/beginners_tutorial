let big_middle_header_box = [
  /* ==============================================================================================

  ページジャンプと目次を自動生成するために必要なので追加していってください
  [*][0]：大見出し、[*][1~]：中見出し
  最後に余談ページを必ず設けてください

  ---------------------------------------------------------------------------------------------- */

  ["プロコン部1年生チュートリアル", "このサイトについて"],
  [
    "1話:同好会へようこそ",
    "プログラミングの勉強方法",
    "Javaについて",
    "余談：大事なこと",
  ],
  [
    "2話:プログラムの実行",
    "文字列の出力",
    "エラーメッセージ",
    "余談：エスケープシーケンス",
  ],
  ["3話:変数の宣言と代入", "変数とは", "変数の種類", "余談：色々な型"],
  [
    "4話:数値の計算",
    "演算子とは",
    "演算とデータ型",
    "文字列と演算子",
    "余談：肆",
  ],
  ["5話:入力機能", "Scannerクラス", "余談：伍"],
  ["6話:条件分岐", "if文", "複数の条件", "余談：陸"],
  ["7話:", "～鋭意製作中～", "余談：漆"],
  ["8話:", "～鋭意製作中～", "余談：捌"],
  ["9話:", "～鋭意製作中～", "余談：玖"],
  ["10話:", "～鋭意製作中～", "余談：拾"],
  ["11話:", "～鋭意製作中～", "余談：拾壱"],
  ["12話:", "～鋭意製作中～", "余談：拾弐"],
];
let small_header_box = [
  /* ==============================================================================================

  1ページごとに分けて追加していってください
  [*][*][0~]：小見出し

  ---------------------------------------------------------------------------------------------- */
  [
    // ↓イントロ
    ["使い方"],
  ],

  [
    // ↓1話
    ["インプット・アウトプット", "分からないことは調べる＆人に聞く"],
    ["プログラミング言語", "Javaの説明", "なぜJavaを勉強するのか"],
    ["別の言語が学びたい？", "社会に出たら"],
  ],

  [
    // ↓2話
    [
      "ファイル作成",
      "VSCodeの使い方",
      "Javaの基本",
      "print",
      "\\n",
      "インデント",
    ],
    ["エラーとは", "対処法"],
    ["エスケープシーケンスとは"],
  ],

  [
    // ↓3話
    ["変数という箱", "変数の宣言", "変数の代入"],
    ["データ型", "数値を入れる型", "文字を入れる型"],
    ["型の種類"],
  ],

  [
    // ↓4話
    ["計算の演算子", "代入演算子"],
    ["実数の計算", "データ型の性質"],
    ["文字列の結合"],
    ["未定"],
  ],

  [
    // ↓5話
    ["入力機能の追加"],
    ["未定"],
  ],

  [
    // ↓6話
    ["ifとelse", "比較演算子", "複数処理"],
    ["else if", "入れ子", "論理演算子"],
    ["未定"],
  ],
  /* =========================================================================================== */
];
let sub_content_header_box = [
  ["環境構築編", "JDKとVSCode", "JDK", "VSCode"],
  ["番外編", "GitHub,別言語,プレゼン資料", "GitHub", "別言語", "プレゼン資料"],
];
let in_html =
  "<a href='index.html'><img src='img/logo.png' alt='ロゴ'></a>" +
  "<a href ='environment.html' class=environment>MyPCを持っている子は<br>こちら(環境構築編)</a>" +
  "<a href='another.html' class=another>別のことがしたい子は<br>こちら(番外編)</a>";
let small_header_counter = 1;

header.innerHTML = in_html;
