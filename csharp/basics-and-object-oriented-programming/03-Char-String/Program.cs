using System;

namespace _03_Char_String
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("03 - Caracteres e textos");

            char primeiraLetra = 'E';

            Console.WriteLine(primeiraLetra);

            char segundaLetra = (char)65;
            Console.WriteLine(segundaLetra);

            segundaLetra = (char)(segundaLetra + 1);
            Console.WriteLine(segundaLetra);

            string nomeSobrenome = "Emerson Bezerra";
            Console.WriteLine(nomeSobrenome);

            Console.ReadKey();

        }
    }
}
