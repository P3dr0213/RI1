const herois =[
{
    nome:"Steve Rogers",
    codinome:"Capitão América",
    armaPrincipal:"Escudo americano",
    armaSecundaria:"",
    velocidade: 85,
    forca: 75,
    resistencia: 80,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " +this.codinome+ "\n"
        +"Arma principal: " +this.armaPrincipal+ "\n"
        +"Arma secundária: " +this.armaSecundaria+ "\n"
        +"Nível da força: " +this.forca+ "\n"
        +"Nível velocidade: "+this.velocidade+ "\n"
        +"Nível Resistência: "+this.resistencia+ "\n"
    }
},

{
    nome:"Tony Stark",
    codinome:"Homem de Ferro",
    armaPrincipal:"Propulsores de energia",
    armaSecundaria:"",
    velocidade: 90,
    forca: 60,
    resistencia: 75,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " +this.codinome+ "\n"
        +"Arma principal: " +this.armaPrincipal+ "\n"
        +"Arma secundária: " +this.armaSecundaria+ "\n"
        +"Nível da força: " +this.forca+ "\n"
        +"Nível velocidade: "+this.velocidade+ "\n"
        +"Nível Resistência: "+this.resistencia+ "\n"
    }
},
 
{
    nome:"Bruce Banner",
    codinome:"Hulk",
    armaPrincipal:"Punhos",
    armaSecundaria:"",
    velocidade: 50,
    forca: 100,
    resistencia: 100,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " +this.codinome+ "\n"
        +"Arma principal: " +this.armaPrincipal+ "\n"
        +"Arma secundária: " +this.armaSecundaria+ "\n"
        +"Nível da força: " +this.forca+ "\n"
        +"Nível velocidade: "+this.velocidade+ "\n"
        +"Nível Resistência: "+this.resistencia+ "\n"
    }
},
 
{
    nome:"Peter parker",
    codinome:"homem aranha",
    armaPrincipal:"lançadores de teia",
    armaSecundaria:"",
    velocidade: 80,
    forca: 75,
    resistencia: 50,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " +this.codinome+ "\n"
        +"Arma principal: " +this.armaPrincipal+ "\n"
        +"Arma secundária: " +this.armaSecundaria+ "\n"
        +"Nível da força: " +this.forca+ "\n"
        +"Nível velocidade: "+this.velocidade+ "\n"
        +"Nível Resistência: "+this.resistencia+ "\n"
    }
},

{
    nome:"Peter parker",
    codinome:"homem aranha",
    armaPrincipal:"lançadores de teia",
    armaSecundaria:"",
    velocidade: 80,
    forca: 75,
    resistencia: 50,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " +this.codinome+ "\n"
        +"Arma principal: " +this.armaPrincipal+ "\n"
        +"Arma secundária: " +this.armaSecundaria+ "\n"
        +"Nível da força: " +this.forca+ "\n"
        +"Nível velocidade: "+this.velocidade+ "\n"
        +"Nível Resistência: "+this.resistencia+ "\n"
    }
},
 
{
    nome:"Natasha",
    codinome:"Viúva negra",
    armaPrincipal:"bastões de energia",
    armaSecundaria:"",
    velocidade: 80,
    forca: 50,
    resistencia: 50,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " +this.codinome+ "\n"
        +"Arma principal: " +this.armaPrincipal+ "\n"
        +"Arma secundária: " +this.armaSecundaria+ "\n"
        +"Nível da força: " +this.forca+ "\n"
        +"Nível velocidade: "+this.velocidade+ "\n"
        +"Nível Resistência: "+this.resistencia+ "\n"
    }
},
 
{
    nome:"Thanos",
    codinome:"Thanos",
    armaPrincipal:"Manopla",
    armaSecundaria:"Soco",
    velocidade: 50,
    forca: 55,
    resistencia: 50,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " +this.codinome+ "\n"
        +"Arma principal: " +this.armaPrincipal+ "\n"
        +"Arma secundária: " +this.armaSecundaria+ "\n"
        +"Nível da força: " +this.forca+ "\n"
        +"Nível velocidade: "+this.velocidade+ "\n"
        +"Nível Resistência: "+this.resistencia+ "\n"
    }
},
 
{
    nome:"Steven Grant",
    codinome:"Cavaleiro da Lua",
    armaPrincipal:"Soco",
    armaSecundaria:"pequenas luas perfurantes",
    velocidade: 60,
    forca: 70,
    resistencia: 45,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " +this.codinome+ "\n"
        +"Arma principal: " +this.armaPrincipal+ "\n"
        +"Arma secundária: " +this.armaSecundaria+ "\n"
        +"Nível da força: " +this.forca+ "\n"
        +"Nível velocidade: "+this.velocidade+ "\n"
        +"Nível Resistência: "+this.resistencia+ "\n"
    }
}];

function compararHerois(){
    console.log("--Comparação de heróis--\n")

    for (let i = 0; i < herois.length; i++) {
        const heroi1 = herois[i];
        console.log('\n Comparações com ' + heroi1.codinome)
        console.log(heroi1.descricao());

        for (let j = 0; j < herois.length; j++) {
            
            if(i != j){
                const heroi2 = herois[j];

                console.log('\n VERSUS: '+ heroi2.codinome);
                console.log(heroi2.descricao());

                console.log('Resultados da batalha: ');

                if (heroi1.forca > heroi2.forca) {
                    console.log('- Força: ' + heroi1.codinome + ' VENCEU com ' + heroi1.forca + ' contra '  + heroi2.forca);
                } else if (heroi1.forca < heroi2.forca) {
                    console.log('- Força: ' + heroi1.codinome + ' PERDEU com ' + heroi1.forca + ' contra '  + heroi2.forca);
                } else {
                    console.log('- Força: Empate com ' + heroi1.forca);
                }

                if (heroi1.velocidade > heroi2.velocidade) {
                    console.log('- Velocidade: ' + heroi1.codinome + ' VENCEU com ' + heroi1.velocidade + ' contra '  + heroi2.velocidade);
                } else if (heroi1.velocidade < heroi2.velocidade) {
                    console.log('- Velocidade: ' + heroi1.codinome + ' PERDEU com ' + heroi1.velocidade + ' contra '  + heroi2.velocidade);
                } else {
                    console.log('- Velocidade: Empate com ' + heroi1.velocidade);
                }

                if (heroi1.resistencia > heroi2.resistencia) {
                    console.log('- Resistência: ' + heroi1.codinome + ' VENCEU com ' + heroi1.resistencia + ' contra '  + heroi2.resistencia);
                } else if (heroi1.resistencia < heroi2.resistencia) {
                    console.log('- Resistência: ' + heroi1.codinome + ' PERDEU com ' + heroi1.resistencia + ' contra '  + heroi2.resistencia);
                } else {
                    console.log('- Resistência: Empate com ' + heroi1.resistencia);
                }

            }
            
        }

        
    }
}

compararHerois();