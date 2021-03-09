for (let i = 0; i < code_counter; i++) {
  $("#code" + code_counter).each(function () {
    let txt = $(this).text();
    let color = [
      /* ============================================================================================

    ソースコード内の特定の単語に色を付与できます
    <pre id=code*><pre>で囲ってください
    ↑の*の部分はそのHTMLファイル内のpreタグを1から数えた順番を入れてください（例：2個目のpreタグ⇒id=code2）
    [*][0]に付与したい色のカラーネーム,またはカラーコード、[*][1~]に色を変えたい単語
    intとpr"int"などその単語が含まれる別の単語が存在する場合、前に@を付けるようにしてください
    文字列に対しては「s@」と「@s」で囲ってください（例：s@"文字列"@s）
    コメントアウトに対しては「c@」と「@c」で囲ってください（例：c@"文字列"@c）
    独自のメソッド名に対してはm@」と「@m」で囲ってください（例：m@"文字列"@m）

    -------------------------------------------------------------------------------------------- */

      ["#4169e1", "class", "public", "private", "static", "\\n"],
      /* 修飾子など⇒青 */

      ["#f0e68c", "main", "System", "out", "println", "printf", "print"],
      /* メソッド名など⇒黄 */

      ["#9932cc", "if", "for", "while", "@do", "switch"],
      /* 制御文など⇒紫(@:do) */

      [
        "#66cdaa",
        "@int",
        "float",
        "double",
        "char",
        "String",
        "boolean",
        "void",
      ],
      /* 型など⇒緑(@:int)

    ============================================================================================ */
    ];
    in_html = "$(this).html(txt";
    for (let i = 0; i < color.length; i++)
      for (let j = 1; j < color[i].length; j++)
        if (color[i][j].slice(0, 1) === "@")
          in_html +=
            ".replace(/" +
            color[i][j] +
            "/g,'<span style=\" color:" +
            color[i][0] +
            '">' +
            color[i][j].slice(1) +
            "</span>')";
        else
          in_html +=
            ".replace(/" +
            color[i][j] +
            "/g,'<span style=\"color:" +
            color[i][0] +
            '">' +
            color[i][j] +
            "</span>')";
    in_html += ".replace(/s@/g,'<span style=\"color:#f08080\">')";
    in_html += ".replace(/@s/g,'</span>')";
    in_html += ".replace(/c@/g,'<span style=\"color:#a0c238\">')";
    in_html += ".replace(/@c/g,'</span>')";
    in_html += ".replace(/m@/g,'<span style=\"color:#f0e68c\">')";
    in_html += ".replace(/@m/g,'</span>')";
    in_html += ");";

    eval(in_html);
    code_counter++;
  });
}
