using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11_Classes
{
    class Program
    {
        static void Main(string[] args)
        {
            // Cliente gabriela = new Cliente();
            // gabriela.nome = "Gabriela";
            // gabriela.cpf = "123.456.789-01";
            // gabriela.profissao = "Desenvolvedora C#";

            ContaCorrente conta = new ContaCorrente();

            // conta.titular = gabriela;

            conta.titular = new Cliente();
            conta.titular.nome = "Gabriela Costa";
            conta.titular.cpf = "123.456.789-01";
            conta.titular.profissao = "Desenvolvedora C#";

            conta.saldo = 500;
            conta.agencia = 563;
            conta.numero = 5634527;

            // Console.WriteLine(gabriela.nome);
            Console.WriteLine(conta.titular.nome);
            Console.WriteLine(conta.titular.cpf);
            Console.WriteLine(conta.titular.profissao);


            Console.ReadKey();
        }
    }
}
