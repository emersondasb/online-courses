using System;

namespace _09_Classes
{
    class Program
    {
        static void Main(string[] args)
        {
            ContaCorrente contaDaGabriela = new ContaCorrente();
            int _num = 1;

            contaDaGabriela.titular = "Gabriela";
            contaDaGabriela.agencia = 876;
            contaDaGabriela.conta = 876001;
            contaDaGabriela.saldo = 1000;

            Console.WriteLine("Titular: " + contaDaGabriela.titular);
            Console.WriteLine("Agência: " + contaDaGabriela.agencia);
            Console.WriteLine("Conta: " + contaDaGabriela.conta);
            Console.WriteLine("Saldo: " + contaDaGabriela.saldo);



            Console.ReadKey();
        }
    }
}
