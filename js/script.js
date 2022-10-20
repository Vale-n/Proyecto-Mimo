

//Iniciación del contador
function startCountDown(){
    //Horas, minutos y segundos enteros
    var hours = hours$.value
    var minutes = minutes$.value
    var seconds = seconds$.value

    //Intervalo de 1 segundo
    var interval = setInterval(function(){

        //Output del temporizador
        output.childNodes[1].innerHTML = `${hours}:${minutes}:${seconds}`

        //Mecanismo principal del temporizador
        if (seconds == 0) {
            if (minutes == 0) {
                if (hours == 0) {
                    //alert("Te felicito por tomarte un momento para descansar (*°▽°*)")
                    swal("Felicitaciones!", "Te felicito por tomarte un momento para descansar", "success");
                    clearInterval(interval)

                } else {
                    hours -= 1
                    minutes = 59
                    seconds = 59
                }
            } else {
                minutes -= 1
                seconds = 59
            }
        } else {
            seconds -= 1
        }

    }, 1000)

}