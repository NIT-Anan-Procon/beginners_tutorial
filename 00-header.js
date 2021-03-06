let big_middle_header_box = [
  /* ==============================================================================================

  ページジャンプと目次を自動生成するために必要なので追加していってください
  [*][0]：大見出し、[*][1~]：中見出し

  ---------------------------------------------------------------------------------------------- */

  ["イントロダクション", "このサイトについて"],
  ["1話:同好会へようこそ", "プログラミングの勉強方法", "Javaについて"],
  ["2話:プログラムの実行", "VSCodeの使い方", "Javaの基本", "実行方法"],
  ["3話:変数の宣言と代入", "変数とは", "変数の種類"],
  ["4話:", "～鋭意製作中～"],
  ["5話:", "～鋭意製作中～"],
  ["6話:", "～鋭意製作中～"],
  ["7話:", "～鋭意製作中～"],
  ["8話:", "～鋭意製作中～"],
  ["9話:", "～鋭意製作中～"],
  ["10話:", "～鋭意製作中～"],
  ["11話:", "～鋭意製作中～"],
  ["12話:", "～鋭意製作中～"],
];
let small_header_box = [
  /* ==============================================================================================

  1ページごとに分けて追加していってください
  [*][*][0~]：小見出し

  ---------------------------------------------------------------------------------------------- */

  [
    // ↓イントロ
    ["サイトの使い方"],
  ],

  [
    // ↓1話
    ["インプット・アウトプット", "分からないことは調べる＆人に聞く"],
    ["プログラミング言語", "Javaの説明", "なぜJavaを勉強するのか"],
  ],

  [
    // ↓2話
    ["～鋭意製作中～"],
  ],

  [
    // ↓3話
    ["変数という箱", "変数の宣言と代入"][
      ("データ型", "数値を入れる型", "文字を入れる型")
    ],
  ],
  /* =========================================================================================== */
];
let sub_content_header_box = [
  ["環境構築編", "JDKとVSCode", "JDK", "VSCode"],
  ["番外編", "別言語,GitHub,プレゼン資料", "別言語", "GitHub", "プレゼン資料"],
  [
    "編集者へ",
    "編集指南書",
    "ページの作り方",
    "タグの使い方",
    "ソースコードの色設定",
  ],
];
let in_html =
  "<a href='index.html' class=logo><img src='img/logo.png' alt='ロゴ'></a>" +
  "<a href ='environment.html' class=environment>MyPCを持っている子は<br>こちら(環境構築編)</a>" +
  "<a href='another.html' class=another>別のことがしたい子は<br>こちら(番外編)</a>" +
  "<a href='developer.html' class=developer>デベロッパーへ</a>";
let small_header_counter = 1;

header.innerHTML = in_html;
