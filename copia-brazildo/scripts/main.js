let CADASTRO = document.querySelector(".cadastro");




CADASTRO.onclick = () => {

        const cadastro_input_e_mail = prompt("digite seu e-mail");
        const cadastro_input_senha = prompt("digite sua senha");
        const seu_nome = prompt("qual é o seu nome?");
        const perfil = document.querySelector(".perfil");

        perfil.textContent = ("seja bem vindo " + seu_nome);

        if (seu_nome === "tonhao"){
                perfil.textContent = ("seja bem vindo vossa alteza");
        };


        if (seu_nome === ""){
                perfil.textContent = ("sem nome");
        };
        
        if (seu_nome === "klipel"){
                perfil.textContent = ("saia daqui seu ceboso imundo, parece um mendigo *cuspo em sua cara e você começa a gritar de vergonha*");
        };



        

};




let ENTRAR = document.querySelector(".entrar");




ENTRAR.onclick = () => {

        const entrar_input_email = prompt("digite seu nome");

        perfil.textContent = ("seja bem vindo " + seu_nome);

        if (seu_nome === "tonhao"){
                perfil.textContent = ("seja bem vindo vossa alteza ");
        };

        
        if (seu_nome === ""){
                perfil.textContent = ("sem nome");
        };

};