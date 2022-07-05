// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// quando crio um objeto, eu devo colocar o tipo de variável dentro dele.

//abaixo temos algumas formas de corrigir esses erros.

//caso1 - nesse caso eu apenas criei o objeto com as variáveis. Porém, as variáveis sempre serão do tipo que foram criadas. 
let employee1 = {
    code: 11,
    name: "Peter" 
 };


//caso2 - nesse caso eu estou forçando que os tipos de variàveis sejam dos tipos number e string.
let employee2: {code: number, name: string} = {
   code: 12,
   name: "john" 
};

//caso3 - utilizando uma interface, nós criamos um contrato. Ao criar um objeto usando a interface, ele será forçado a tipar as variáveis.

interface employee {
    code: number,
    name: string
}
// ao criar o objeto, eu digo q ele será do tipo employee (interface) e sou obrigado a implementar code e name
let employee3: employee = {
    code: 12,
    name: "Milla"
}


//não temos mais erros
employee1.code = 10;
employee1.name = "Peter Jones";

employee2.code = 11;
employee2.name = "John Bosco";

console.log(employee1.name);
