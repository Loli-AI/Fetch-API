//Ambil Data
fetch("https://jsonplaceholder.typicode.com/todos")

//Akan Jalan Setelah Fungsi Fetch() Dijalankan
.then((data) =>  data.json())

//Ambil Data Di Dalam Array
.then(
        (datas) => {
            let indexArray = 0;
            
            datas.forEach(() => {
                //Membuat Elemen Div Baru Di HTML
                let div = document.createElement("div");

                //Menambahkan Class 'card' Ke Dalam Div Yang Baru Dibuat
                div.setAttribute("class", "card");

                //Menambahkan Text Ke Dalam Div Yang Baru Dibuat
                div.innerText = datas[indexArray].title;

                //Masukkan Div Yang Dibuat Ke Dalam Web
                document.getElementById("list").appendChild(div);

                indexArray++;
            });
        }
    )

//Akan Jalan Jika Ada Error
.catch(
    (err) => {
        alert(err)
    });