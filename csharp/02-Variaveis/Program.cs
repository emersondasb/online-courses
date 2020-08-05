using System;

namespace _02_Tipos
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("02 - Tipos");

            // Inteiros e decimais.
            int idade;
            idade = 31;
            Console.WriteLine("\nMinha idade é de " + idade + " anos.");

            double altuta;
            altuta = 1.69;
            Console.WriteLine("\nMinha altura é de " + altuta + "m.");

            // Conversão de tipos (casting).
            double salario;
            salario = 1200.50;

            int salarioEmInteiro; // int suporta 32 bits.
            salarioEmInteiro = (int)salario;
            Console.WriteLine("\nSalário em inteiro: " + salarioEmInteiro);

            // Outros tipos.
            long idadeDoUniverso = 13000000000; // long suporta 64 bits.
            Console.WriteLine(idadeDoUniverso);
            short numPlanetasDoSistemaSolar = 8; // short suporta 16 bits.
            Console.WriteLine(numPlanetasDoSistemaSolar);
            float peso = 57.5f; // float tem menor precisão que um double.
            Console.WriteLine(peso);

            Console.ReadKey();
        }
    }
}
