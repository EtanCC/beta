function ativarapi(event, form) {
  event.preventDefault();
  const inputApi = form.api;
  if (inputApi) {
    const api = inputApi.value;
    if (api) {
      const URL = `https://dev-oficiancooee.pantheonsite.io/inicio/dados/quizres.php?api=${api}`;
      axios
        .request(URL)
        .then((resposta) => mostrarResposta(resposta.data))
        .catch((erro) => console.error(erro));
    }
  }
}

function ativar() {
  interval = setInterval(function () {
    document.getElementById("resposta");

    // stop timer
    clearInterval(interval);
    // click
    document.getElementById("cl").click();
  }, 2300);
}

function mostrarResposta(api) {
  var topic1 = api.msg.room.topic1;
  if (topic1) {
    topic1 = `Tópico ➜ ${topic1}`;
  }

  var res = api.msg.question.answer;
  if (res === undefined) {
    res = "Aguarde...";
  }

  var rese = api.msg.question.option1;
  if (res === rese) {
    rese = `Opção: A`;
    res = "";
  } else {
    rese = "";
  }
  var rese2 = api.msg.question.option2;
  if (res === rese2) {
    rese2 = `Opção: B`;
    res = "";
  } else {
    rese2 = "";
  }
  var rese3 = api.msg.question.option3;
  if (res === rese3) {
    rese3 = `Opção: C`;
    res = "";
  } else {
    rese3 = "";
  }
  var rese4 = api.msg.question.option4;
  if (res === rese4) {
    rese4 = `Opção: D`;
    res = "";
  } else {
    rese4 = "";
  }

  const mensagem = `
     <center> <div class="id"> ID Atual ${api.msg.room.id}</div>
  <div class="topicos">
      ${topic1}
    <h2>Resposta</h2>
    ➜   ${res}
         ${rese}
         ${rese2}
         ${rese3}
         ${rese4}
      
             
  </div></center>
  <br><br><br>
  <center><a href='cooee://EnterScene(${api.msg.room.id})'>Entrar no Quiz</a></center>
  <br>
         
    `;
  document.getElementById("resposta").innerHTML = mensagem;
}
