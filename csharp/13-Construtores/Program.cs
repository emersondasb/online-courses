using System;

namespace _13_Construtores
{
    class Program
    {
        static void Main(string[] args)
        {
            ContaCorrente conta1 = new ContaCorrente(867, 86712540);
            ContaCorrente conta2 = new ContaCorrente(867, 12312540);

            Console.WriteLine(conta1.Agencia);
            Console.WriteLine(conta1.Numero);
            Console.WriteLine(ContaCorrente.NumDeContas);

            Console.ReadKey();
        }
    }
}
