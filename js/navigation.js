in_html = "<nav><ul>";
if (file_name_first != 0) {
  if (file_name_first === "en") setSubNavigation(0);
  else if (file_name_first === "an") setSubNavigation(1);
  else if (file_name_first === "de") setSubNavigation(2);
  else
    for (
      let i = 0;
      i < small_header_box[file_name_first][file_name_last - 1].length;
      i++
    ) {
      in_html +=
        "<li><a href='#P" +
        (i + 1) +
        "'>" +
        small_header_box[file_name_first][file_name_last - 1][i] +
        "</a></li>";
    }
  in_html += "</ul></nav>";

  navigation.innerHTML += in_html;
}

function setSubNavigation(file_name_first_cp) {
  for (let i = 2; i < sub_content_header_box[file_name_first_cp].length; i++) {
    in_html +=
      "<li><a href='#P" +
      (i - 1) +
      "'>" +
      sub_content_header_box[file_name_first_cp][i] +
      "</a></li>";
  }
}
