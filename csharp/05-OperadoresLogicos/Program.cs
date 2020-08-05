using System;

namespace _05_OperadoresLogicos
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("05 - Operadores Lógicos");

            int idadeJoao = 16;
            int quantidadePessoas = 2;
            bool acompanhado = quantidadePessoas >= 2;

            if (idadeJoao >= 18 || acompanhado)
            {
                Console.WriteLine("João pode entrar.");
            }
            else
            {
                Console.WriteLine("João não pode entrar.");
            }

            int idade = 68;
            bool ehIdoso = idade >= 65;

            Console.WriteLine(ehIdoso);


            Console.ReadKey();
        }
    }
}
