if(window.SimpleSlide){
    new SimpleSlide({
        slide: "quote", // nome do atributo data-slide="principal"
        time: 5000, // tempo de transição dos slides
    })
    
    new SimpleSlide({
        slide: "portfolio", // nome do atributo data-slide="principal"
        nav: true, // se deve ou não mostrar a navegação
        time: 5000, // tempo de transição dos slides
    })
}

if(window.SimpleAnime){
    new SimpleAnime();
}

if(window.SimpleForm){
    new SimpleForm({
        form: ".formphp", // seletor do formulário
        button: "#send-btn", // seletor do botão
        erro: "<div id='form-error'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o email caiofreela@gmail.com.</p></div>", // mensagem de erro
        sucesso: "<div id='form-success'><h2>Formulário enviado com sucesso</h2><p>Em breve entraremos em contato com você.</p></div>", // mensagem de sucesso
    });
}