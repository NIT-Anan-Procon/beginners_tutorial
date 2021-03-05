file_name_first = Number(file_name_first);
if (file_name_first != 0 && file_name_first != "NaN")
  if (file_name_first == 1 && file_name_last == 1)
    in_html = "<a href='index.html' class=bottom_left>← 前に戻る</a>";
  else if (file_name_last == 1)
    in_html =
      "<a href='" +
      ("00" + (file_name_first - 1)).slice(-2) +
      ("00" + (big_middle_header_box[file_name_first - 1].length - 1)).slice(
        -2
      ) +
      ".html' class=bottom_left>← 前に戻る</a>";
  else
    in_html =
      "<a href='" +
      ("00" + file_name_first).slice(-2) +
      "-" +
      ("00" + (file_name_last - 1)).slice(-2) +
      ".html' class=bottom_left>← 前に戻る</a>";
else in_html = "<a class=bottom_left></a>";
in_html += "<a href='#header' class=bottom_center>ページトップへ</a>";
if (
  file_name_first != "NaN" &&
  !(
    big_middle_header_box[file_name_first].length - 1 == file_name_last &&
    big_middle_header_box[file_name_first + 1].length <= 1
  )
)
  if (big_middle_header_box[file_name_first].length - 1 == file_name_last)
    in_html +=
      "<a href='" +
      ("00" + (file_name_first + 1)).slice(-2) +
      "-01.html' class=bottom_right>次へ進む →</a>";
  else
    in_html +=
      "<a href='" +
      ("00" + file_name_first).slice(-2) +
      "-" +
      ("00" + (file_name_last + 1)).slice(-2) +
      ".html' class=bottom_right>次へ進む →</a>";
else in_html += "<a class=bottom_right></a>";

bottom.innerHTML = in_html;
