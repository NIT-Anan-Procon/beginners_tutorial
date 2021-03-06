if (file_name_first === "en")
  in_html = "<h2>" + sub_content_header_box[0][1] + "</h2>";
else if (file_name_first === "an")
  in_html = "<h2>" + sub_content_header_box[1][1] + "</h2>";
else if (file_name_first === "de")
  in_html = "<h2>" + sub_content_header_box[2][1] + "</h2>";
else
  in_html =
    "<h2>" + big_middle_header_box[file_name_first][file_name_last] + "</h2>";

middle_header.innerHTML += in_html;
