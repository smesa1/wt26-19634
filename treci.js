function ispisiTablicuMnozenja() {
    document.write("<table>");

    // Zaglavlje kolona.
    document.write("<tr><th>×</th>");

    for (let j = 1; j <= 10; j++) {
        document.write("<th scope='col'>" + j + "</th>");
    }

    document.write("</tr>");

    // Redovi tablice.
    for (let i = 1; i <= 10; i++) {
        document.write("<tr>");

        // Zaglavlje trenutnog reda.
        document.write("<th scope='row'>" + i + "</th>");

        for (let j = 1; j <= 10; j++) {
            document.write("<td>" + (i * j) + "</td>");
        }

        document.write("</tr>");
    }

    document.write("</table>");
}
 
ispisiTablicuMnozenja();