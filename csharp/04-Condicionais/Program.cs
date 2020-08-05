using System;

namespace _04_Condicionais
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("04 - Condicionais");

            int idade = 16;

            if (idade >= 18)
            {
                Console.WriteLine("A idade é maior ou igual a 18.");
            }
            else
            {
                Console.WriteLine("A idade é menor que 18");
            }

            Console.ReadKey();

        }
    }
}
