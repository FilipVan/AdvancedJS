let button = document.getElementById("button");
let url = "https://raw.githubusercontent.com/sedc-codecademy/sedc5-ajs/master/homework-tasks/task-1/";
let result = document.getElementById("result");


button.addEventListener("click", function () {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url + "filelist.json", true);
    xhr.send(null);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            let data = JSON.parse(xhr.responseText);
            let each = data[Math.floor(Math.random() * data.length)];




            let file = new XMLHttpRequest();
            file.open("GET", url + each, true)
            file.send(null);

            file.onreadystatechange = function () {
                if (file.readyState === XMLHttpRequest.DONE) {
                    let dataf = JSON.parse(file.responseText);

                 
      
               
                    let makeArray = function (data, operation) {
                        let result = [];
                        for (var i = 0; i < data.data.length; i++) {
                            var item = data.data[i];
                            result.push(operation(item));
                        }
                        return result
                    }



                    function operations(x) {
                        if (x.operation == "log") {
                            let log = makeArray(dataf, x => Math.log(x));
                            console.log(log);
                        }
                        else if (x.operation == "square") {
                            let square = makeArray(dataf, x => Math.pow(x, 2));
                            console.log(square);
                        }
                        else if (x.operation == "sine") {
                            let sine = makeArray(dataf, x => Math.sin(x));
                            console.log(sine);
                        }
                        else if (x.operation == "sine") {
                            let cos = makeArray(dataf, x => Math.cos(x));
                            console.log(cos);
                        }
                        else if (x.operation == "sine") {
                            let cube = makeArray(dataf, x => Math.pow(x, 3));
                            console.log(cube);
                        }
                    }
                }
            }
        }
    }
});
                    
                    
                    
                    
                    
                    
                    
                    
                    

               //     operations(dataf);

                 //   function operations(x) {
                   //     var rezultat = 0;
                     //   if (x.operation == "log") {
                       //     for (i = 0; i < x.data.length; i++) {
                         //       rezultat += Math.log(x.data[i]);
                           // }
                            //result.innerHTML += "The operation 'log' applied to the array " + x.data +
                              //  " gives a result of " + rezultat + "<br>";
                        //}
                        //else if (x.operation == "sine") {
                          //  var rezultat = 0;
                            //for (i = 0; i < data.length; i++) {
                              //  rezultat += Math.sin(x.data[i]);
                            //}
                            //result.innerHTML += "The operation 'sine' applied to the array " + x.data +
                              //  " gives a result of " + rezultat + "<br>";
                        //}
                        //else if (x.operation == "cosine") {
                          //  var rezultat = 0;
                           // for (i = 0; i < data.length; i++) {
                            //    rezultat += Math.cos(x.data[i]);
                           // }
                            //result.innerHTML += "The operation 'cosine' applied to the array " + x.data +
                             //   " gives a result of " + rezultat + "<br>";
                        //}
                        //else if (x.operation == "square") {
                          //  var rezultat = 0;
                            //for (i = 0; i < data.length; i++) {
                              //  rezultat += Math.pow((x.data[i]), 2);
                            //}
                            //result.innerHTML += "The operation 'square' applied to the array " + x.data +
                              //  " gives a result of " + rezultat + "<br>";
                       // }
                       // else if (x.operation == "cube") {
                         //   var rezultat = 0;
                           // for (i = 0; i < data.length; i++) {
                             //   rezultat += Math.pow((x.data[i]), 3);
                           // }
                            //result.innerHTML += "The operation 'cube' applied to the array " + x.data +
                              //  " gives a result of " + rezultat + "<br>";
                       // }
                   // }
             //   }
           // }
       // }
   // }
//});



