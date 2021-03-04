in_html = "<h3 id=P";

if (file_name_first === "en") setSubSmallHeader(0);
else if (file_name_first === "an") setSubSmallHeader(1);
else if (file_name_first === "de") setSubSmallHeader(2);
else
  in_html +=
    small_header_counter +
    ">" +
    small_header[file_name_first][file_name_last - 1][small_header_counter - 1];
small_header_counter++;
in_html += "</h3>";

function setSubSmallHeader(file_name_first_cp) {
  in_html +=
    small_header_counter +
    ">" +
    sub_content_header[file_name_first_cp][small_header_counter + 1];
}
in_html = "<h3 id=P1>aaa</h3>";
small_header.innerHTML += in_html;
