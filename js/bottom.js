if (file_name_first !== "en" && file_name_first !== "an")
  file_name_first = Number(file_name_first);
let $win = $(window);
$win.on("load resize", function () {
  let windowWidth = window.innerWidth;
  if (windowWidth > 1000) {
    bottom_txt("← 前に戻る", "ページトップへ", "次へ進む →");
  } else {
    bottom_txt("← 前へ", "トップへ", "次へ →");
  }

  bottom.innerHTML = in_html;
});

function bottom_txt(left_txt, center_txt, right_txt) {
  if (
    file_name_first != 0 &&
    file_name_first !== "en" &&
    file_name_first !== "an"
  )
    if (file_name_first == 1 && file_name_last == 1)
      in_html = "<a href='index.html' class=bottom_left>" + left_txt + "</a>";
    else if (file_name_last == 1)
      in_html =
        "<a href='" +
        ("00" + (file_name_first - 1)).slice(-2) +
        ("00" + (big_middle_header_box[file_name_first - 1].length - 1)).slice(
          -2
        ) +
        ".html' class=bottom_left>" +
        left_txt +
        "</a>";
    else
      in_html =
        "<a href='" +
        ("00" + file_name_first).slice(-2) +
        "-" +
        ("00" + (file_name_last - 1)).slice(-2) +
        ".html' class=bottom_left>" +
        left_txt +
        "</a>";
  else in_html = "<a class=bottom_left></a>";
  in_html += "<a href='#header' class=bottom_center>" + center_txt + "</a>";
  if (
    file_name_first !== "en" &&
    file_name_first !== "an" &&
    !(
      big_middle_header_box[file_name_first].length - 1 == file_name_last &&
      big_middle_header_box[file_name_first + 1].length <= 1
    )
  )
    if (big_middle_header_box[file_name_first].length - 1 == file_name_last)
      in_html +=
        "<a href='" +
        ("00" + (file_name_first + 1)).slice(-2) +
        "-01.html' class=bottom_right>" +
        right_txt +
        "</a>";
    else
      in_html +=
        "<a href='" +
        ("00" + file_name_first).slice(-2) +
        "-" +
        ("00" + (file_name_last + 1)).slice(-2) +
        ".html' class=bottom_right>" +
        right_txt +
        "</a>";
  else in_html += "<a class=bottom_right></a>";
}
