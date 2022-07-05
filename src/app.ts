

// Como podemos melhorar o esse código usando TS? 

 interface pessoa {
    nome: String,
    idade: Number,
    profissao: profissão // a profissão será do tipo enum. isso melhora a padronização
}

//An enum type is a special data type that enables for a variable to be a set of predefined constants. 
enum profissão {
    Atriz,
    Engenheiro,
    Pintor,
    Padeiro
}

let pessoa1: pessoa  = {//pessoa1 criada como um objeto e implementando a interface Pessoa
    nome: "maria",
    idade: 29,
    profissao: profissão.Atriz
}

let pessoa2: pessoa = {//pessoa2 criada como um objeto e implementando a interface Pessoa
    nome: "roberto",
    idade: 19,
    profissao: profissão.Padeiro
}

let pessoa3: pessoa = {//pessoa3 implementando a interface Pessoa
    nome: "laura",
    idade: 32, //a idade era uma string. Ao implementar a interface, ficou fácil localizar o erro
    profissao: profissão.Atriz
};

let pessoa4: pessoa = {//pessoa4 implementando a interface Pessoa
    nome: "carlos",
    idade: 19,
    profissao: profissão.Padeiro
}
console.log(`${pessoa1.nome} tem ${pessoa1.idade} e trabalha como ${pessoa1.profissao}`);
console.log(`${pessoa2.nome} tem ${pessoa2.idade} e trabalha como ${pessoa2.profissao}`);
console.log(`${pessoa3.nome} tem ${pessoa3.idade} e trabalha como ${pessoa3.profissao}`);
console.log(`${pessoa4.nome} tem ${pessoa4.idade} e trabalha como ${pessoa4.profissao}`);