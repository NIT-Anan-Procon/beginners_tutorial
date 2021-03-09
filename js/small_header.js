in_html = "<h3 id=P";
if (file_name_first === "en") setSubSmallHeader(0);
else if (file_name_first === "an") setSubSmallHeader(1);
else
  in_html +=
    small_header_counter +
    ">" +
    small_header_box[file_name_first][file_name_last - 1][
      small_header_counter - 1
    ];

in_html += "</h3>";

function setSubSmallHeader(file_name_first_cp) {
  in_html +=
    small_header_counter +
    ">" +
    sub_content_header_box[file_name_first_cp][small_header_counter + 1];
}

eval("small_header" + small_header_counter + ".innerHTML += in_html;");
small_header_counter++;
