in_html = "<h1>もくじ</h1>";
for (let i = 0; i < big_middle_header_box.length; i++) {
  in_html += "<h4>" + big_middle_header_box[i][0] + "</h4><ul>";
  for (let j = 1; j < big_middle_header_box[i].length; j++) {
    in_html += "<li><a href=";
    if (i == 0 && j == 1) in_html += "index";
    else in_html += ("00" + i).slice(-2) + "-" + ("00" + j).slice(-2);
    in_html += ".html>" + big_middle_header_box[i][j] + "</a></li>";
  }
  in_html += "</ul>";
}
table.innerHTML += in_html;
