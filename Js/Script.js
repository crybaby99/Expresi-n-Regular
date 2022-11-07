var n1;
var sum;
var descuento10;
var descuento20;
var descuento30;
var realizar = document.querySelector("#realizar");
function maxLengthCheck(object) {
    if (object.value.length > object.maxLength)
        object.value = object.value.slice(0, object.maxLength)
    }
    function mostrar_calculo(){
        if(sum<1000){
            document.getElementById("summary").innerHTML=
            `<ul>
                <li>Subtotal<span>$ ` + sum + `</span></li>
                <li>Descuento<span>No aplica</span></li>
                <li class="total">Total<span>$ `+sum+`</span></li>
            </ul>`
        }
        if(sum > 999){
            if(sum < 2000){
                document.getElementById("summary").innerHTML=
                `<ul>
                    <li>Subtotal<span>$ ` + sum + `</span></li>
                    <li>Descuento<span>$ ` + descuento10 + `</span></li>
                    <li class="total">Total<span>$ `+ (Math.round(sum-descuento10)) +`</span></li>
                </ul>`
            }
        }
        if(sum > 1999){
            if(sum < 2500){
                document.getElementById("summary").innerHTML=
                `<ul>
                    <li>Subtotal<span>$ ` + sum + `</span></li>
                    <li>Descuento<span>$ ` + descuento20 + `</span></li>
                    <li class="total">Total<span>$ `+ (Math.round(sum-descuento20)) +`</span></li>
                </ul>`
            }
        }
        if(sum > 2499){
            document.getElementById("summary").innerHTML=
            `<ul>
                <li>Subtotal<span>$ ` + sum + `</span></li>
                <li>Descuento<span>$ ` + descuento30 + `</span></li>
                <li class="total">Total<span>$ `+ (Math.round(sum-descuento30)) +`</span></li>
            </ul>`
        }
    }
    function calcular(){
        n1 = document.getElementById("prueba").value;
        sum = Math.round(n1);
        descuento10 = Math.floor(sum*10)/100;
        descuento20 = Math.floor(sum*20)/100;
        descuento30 = Math.floor(sum*30)/100;
        mostrar_calculo();
    }
    // * EVENTO CLIC PARA EL BOTON
    realizar.addEventListener("click", () => {
        var p = document.getElementById("prueba").value;
        var expresionRegular= /^[0-9]{1,4}\.[0-9]{1,2}$/;
        if(expresionRegular.test(p) && p.length<8){
            let etiquetaAudio = document.createElement("audio")
            etiquetaAudio.setAttribute("src", "./Sonido/sonido.mp3")
            etiquetaAudio.play()
            return calcular();
        }if(document.getElementById("prueba").value.length==0){
            let etiquetaAudio2 = document.createElement("audio")
            etiquetaAudio2.setAttribute("src", "./Sonido/sonido2.mp3")
            etiquetaAudio2.play()
            return alert("NO HAY DATOS");
        }else{
            let etiquetaAudio2 = document.createElement("audio")
            etiquetaAudio2.setAttribute("src", "./Sonido/sonido2.mp3")
            etiquetaAudio2.play()
            return alert("DATO INVALIDO");
        }
    });
    // ! ALERTA CADENA VACIA
    function alerta(){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'NO HAY DATOS',
        });
    }
    // ! ALERTA DATO INVALIDO
    function alerta2(){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'DATO INVALIDO',
        });
    }