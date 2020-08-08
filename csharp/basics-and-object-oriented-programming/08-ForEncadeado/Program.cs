using System;

namespace _08_ForEncadeado
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int linha = 0; linha < 5; linha++)
            {
                for (int coluna = 0; coluna < 5; coluna++)
                {
                    if (coluna > linha)
                    {
                        break;
                    }
                    Console.Write(coluna + 1);
                }
                Console.WriteLine();
            }
            Console.ReadKey();
        }
    }
}
