using ByteBank.Funcionarios;
using System;

namespace ByteBank
{
    class Program
    {
        static void Main(string[] args)
        {

            GerenciadorBonificacao gerenciador = new GerenciadorBonificacao();

            Funcionario carlos = new Funcionario();
            carlos.Nome = "Carlos";
            carlos.CPF = "467.696.987-15";
            carlos.Salario = 2000;

            gerenciador.Registrar(carlos);

            // Diretor é um Funcionário, portanto essa instanciação é permitida
            Funcionario pedro = new Diretor();

            Diretor roberta = new Diretor();
            roberta.Nome = "Roberta";
            roberta.CPF = "454.658.148-03";
            roberta.Salario = 5000;

            gerenciador.Registrar(roberta);
                       
            Console.WriteLine(carlos.Nome);
            Console.WriteLine(carlos.GetBonificacao());

            Console.WriteLine(roberta.Nome);
            Console.WriteLine(roberta.GetBonificacao());

            Console.WriteLine("Total de bonificações: " + gerenciador.GetTotalBonificacao());

            Console.ReadKey();
        }
    }
}
