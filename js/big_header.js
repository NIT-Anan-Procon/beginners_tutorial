let file_name = window.location.href.split("/").pop();
let file_name_first = file_name.slice(0, 2);
let file_name_last = Number(file_name.slice(3, 5));

if (file_name_first === "in" || file_name_first === "") {
  file_name_first = 0;
  file_name_last = 1;
}
if (file_name_first === "en")
  in_html = "<h1>" + sub_content_header_box[0][0] + "</h1>";
else if (file_name_first === "an")
  in_html = "<h1>" + sub_content_header_box[1][0] + "</h1>";
else {
  file_name_first = Number(file_name_first);
  in_html = "<h1>" + big_middle_header_box[file_name_first][0] + "</h1>";
}

big_header.innerHTML += in_html;
