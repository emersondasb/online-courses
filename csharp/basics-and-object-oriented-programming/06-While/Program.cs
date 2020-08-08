using System;

namespace _06_While
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("06 - While");

            double valorInvestido = 1000;
            int numMeses = 1;

            while(numMeses <= 12)
            {
                valorInvestido += valorInvestido * 0.0036;
                Console.WriteLine("Após N meses você terá: R$ " + valorInvestido);
                numMeses++;
            }
            Console.ReadKey();
        }
    }
}
