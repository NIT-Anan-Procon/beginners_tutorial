$(".code").each(function () {
  let txt = $(this).text();
  let color = [
    /* ============================================================================================

    ソースコード内の特定の単語に色を付与できます
    <pre class=code><pre>で囲ってください
    [*][0]に付与したい色のカラーネーム,またはカラーコード、[*][1~]に色を変えたい単語
    コメントアウトは複数行(/ * コメント * /)で統一してください。

    -------------------------------------------------------------------------------------------- */

    [
      "#4169e1",
      "import",
      "abstract",
      "class",
      "extends",
      "public",
      "private",
      "protected",
      "static",
      "final",
      "interface",
      "implements",
      "package",
      "\\n",
    ],
    /* 修飾子など⇒青 */

    [
      "#f0e68c",
      "System.",
      "out.",
      "println(",
      "printf(",
      "print(",
      "case",
      "super.",
      "this.",
    ],
    /* メソッド名など⇒黄 */

    [
      "#9932cc",
      "if(",
      "else",
      "for(",
      "while(",
      "do{",
      "switch(",
      "continue;",
      "break;",
      "default:",
      "return",
      "try{",
      "catch(",
      "finally{",
      "new",
    ],
    /* 制御文など⇒紫 */

    [
      "#66cdaa",
      "byte\x20",
      "short\x20",
      "int\x20",
      "long\x20",
      "float\x20",
      "double\x20",
      "char\x20",
      "String\x20",
      "boolean\x20",
      "void\x20",
    ],
    /* 型など⇒緑 */

    ["#00bfff", "null"],
    /* 変数名など⇒水

    ============================================================================================ */
  ];
  function pushArray(word) {
    for (let i = 0; i < (txt.match(new RegExp(word, "g")) || []).length; i++) {
      let txt_cp = txt
        .slice(txt.indexOf(word) + word.length, txt.length)
        .split("\x20");
      if (txt_cp[0].indexOf("(") != -1)
        color[1].push(txt_cp[0].slice(0, txt_cp[0].indexOf("(") + 1));
      else if (txt_cp[0].indexOf(";") != -1)
        color[4].push(txt_cp[0].slice(0, txt_cp[0].indexOf(";")));
      else if (txt_cp[0].indexOf(",") != -1)
        color[4].push(txt_cp[0].slice(0, txt_cp[0].indexOf(",")));
      else if (txt_cp[0].indexOf("[") != -1)
        color[4].push(txt_cp[0].slice(0, txt_cp[0].indexOf("[")));
      else color[4].push(txt_cp[0]);
    }
  }
  for (let i = 1; i < color[3].length; i++) pushArray(color[3][i]);
  for (let i = 0; i < (txt.match(/class/g) || []).length; i++) {
    let txt_cp = txt.slice(txt.indexOf("class") + 6, txt.length).split("\x20");
    color[3].push(txt_cp[0]);
  }
  in_html = "$(this).html(txt";
  for (let i = 0; i < color.length; i++)
    for (let j = 1; j < color[i].length; j++) {
      let last_word = color[i][j].slice(color[i][j].length - 1);
      if (
        last_word === "." ||
        last_word === "(" ||
        last_word === "{" ||
        last_word === ":" ||
        last_word === ";"
      )
        in_html +=
          ".replace(/" +
          color[i][j].slice(0, color[i][j].length - 1) +
          "\\" +
          last_word +
          "/g,'<span style=\"color:" +
          color[i][0] +
          '">' +
          color[i][j].slice(0, color[i][j].length - 1) +
          "</span>" +
          last_word +
          "')";
      else
        in_html +=
          ".replace(/" +
          color[i][j] +
          "/g,'<span style=\"color:" +
          color[i][0] +
          '">' +
          color[i][j] +
          "</span>')";
    }
  in_html +=
    ".replace(/\\(\\" + "\"/g,'" + '\\(<span style="color:#f08080">\\' + "\"')";
  in_html +=
    ".replace(/\\x20\\" +
    '"/g,' +
    '\'<span style="color:#f08080">\\x20\\' +
    "\"')";
  in_html += ".replace(/\\\"\\)/g,'\\\"</span>\\)')";
  in_html += ".replace(/\\\"\\x20/g,'\\\"\\x20</span>')";
  in_html += ".replace(/\\/\\" + "*/g,'<span style=\"color:#a0c238\">/*')";
  in_html += ".replace(/\\" + "*\\//g,'*\\/</span>')";
  in_html += ");";

  eval(in_html);
});
