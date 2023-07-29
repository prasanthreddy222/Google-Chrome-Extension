async function fetchData() {
    const data = [
            {
                "fullName": "Emmanuel Macron",
                "first_name": "Emmanuel",
                "last_name": "Macron",
                "public_identifier": "emmanuelmacron",
                "background_cover_image_url": "https://media.licdn.com/dms/image/D4E16AQHoI5rDUbA7Ww/profile-displaybackgroundimage-shrink_200_800/0/1678266289706?e=2147483647&v=beta&t=qVmI07toCXxXLBowAW87kfq128pTb7jipCBxSmfhGzM",
                "profile_photo": "https://media.licdn.com/dms/image/D4E03AQGbTdwOdlURyg/profile-displayphoto-shrink_800_800/0/1678377684180?e=2147483647&v=beta&t=f6W63jFYRFTmJefM5-FpQmRq-gW_NlpD9TKj6wU4rOE",
                "headline": "President of the French Republic.",
                "location": "Paris, Île-de-France, France",
                "followers": "3M followers"
            }
    ]
    document.getElementById("name").innerHTML = data[0].fullName;
    document.getElementById("profile-url").innerHTML = data[0].public_identifier;
    document.getElementById("headline").innerHTML = data[0].headline;
    document.getElementById("location").innerHTML = data[0].location;
    document.getElementById("followers").innerHTML = data[0].followers;
    document.getElementById("contact").innerHTML = data[0].first_name;
}
fetchData();

function ExportToExcel(type, fn, dl) {
    var elt = document.getElementById('tbl_exporttable_to_xls');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('MySheetName.' + (type || 'xlsx')));
 }