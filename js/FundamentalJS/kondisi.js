// Pengkondisian

//Percabangan If
        var totalBelanja = prompt("Total belanja?", 0);

        if(totalBelanja > 100000){
            document.write("<h2>Selamat Anda dapat hadiah</h2>");
        }

        document.write("<p>Terimakasih sudah berbelanja di toko kami</p>");


// Percabangan If Else
        var password = prompt("Password:");

        if(password == "kopi"){
            document.write("<h2>Selamat datang bos!</h2>");
        } else {
            document.write("<p>Password salah, coba lagi!</p>");
        }

        document.write("<p>Terima kasih sudah menggunakan aplikasi ini!</p>");


//  Percabanan If/Else/If
        var nilai = prompt("Inputkan nilai akhir:");
        var grade = "";

        if(nilai >= 90) grade = "A"
        else if(nilai >= 80) grade = "B+"
        else if(nilai >= 70) grade = "B"
        else if(nilai >= 60) grade = "C+"
        else if(nilai >= 50) grade = "C"
        else if(nilai >= 40) grade = "D"
        else if(nilai >= 30) grade = "E"
        else grade = "F";
        
        document.write(`<p>Grade anda: ${grade}</p>`);


//  Percabanan Switch Case

        var nilai = prompt("input nilai");
        var grade = "";

        switch(true){
            case nilai < 90:
                grade = "A";
                break;
            case nilai < 80:
                grade = "B+";
                break;
            case nilai < 70:
                grade = "B";
                break;
            case nilai < 60:
                grade = "C+";
                break;
            case nilai < 50:
                grade = "C";
                break;
            case nilai < 40:
                grade = "D";
                break;
            case nilai < 30:
                grade = "E";
                break;
            default:
                grade = "F";
        }