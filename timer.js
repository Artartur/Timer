function relogio(){
const relogio = document.querySelector('.relogio')
let segundos = 0
let timer;

function criaHoraDosSegundos(segundos) { 
    const data = new Date(segundos * 1000); // multiplica por 1000 para que consiga ir aumentando o tempo em segundos e não em milesimos.
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

function iniciaRelogio() { 
    timer = setInterval(function() {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

document.addEventListener('click', function(e){
    const el = e.target

    if(el.classList.contains('zerar')){ //Se na lista de classe tiver essa classe, faça isso
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        relogio.classList.remove('pausado') //classe do css
        segundos = 0
    }
    if(el.classList.contains('iniciar')){
        relogio.classList.remove('pausado')
        clearInterval(timer)
        iniciaRelogio()
    }
    if(el.classList.contains('pausar')){
        clearInterval(timer)
        relogio.classList.add('pausado')
    }
})
}
relogio()