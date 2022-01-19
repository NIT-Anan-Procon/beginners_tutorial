let txt = article.outerHTML;
if (file_name_first === "en") setSubSmallHeader(0);
else if (file_name_first === "an") setSubSmallHeader(1);
else
  for (
    let i = 0;
    i < small_header_box[file_name_first][file_name_last - 1].length;
    i++
  ) {
    in_html = "<section class=section><h3 id=P";
    in_html +=
      small_header_counter +
      ">" +
      small_header_box[file_name_first][file_name_last - 1][
        small_header_counter - 1
      ];
    in_html += "</h3>";

    small_header_counter++;
    txt = txt.replace("<section>", in_html);
  }

function setSubSmallHeader(file_name_first_cp) {
  for (let i = 0; i < sub_content_header_box[file_name_first_cp].length; i++) {
    in_html = "<section class=section><h3 id=P";
    in_html +=
      small_header_counter +
      ">" +
      sub_content_header_box[file_name_first_cp][small_header_counter + 1];
    in_html += "</h3>";

    small_header_counter++;
    txt = txt.replace("<section>", in_html);
  }
}

article.innerHTML = txt.slice(23, txt.length - 11);
