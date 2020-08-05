using System;

namespace _07_For
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("06 - For\n");

            double valorInvestido = 1000;

            for (int numMeses = 1; numMeses <= 12; numMeses++)
            {
                valorInvestido *= 1.0036;
                Console.WriteLine("Após " + numMeses + " meses você terá: R$ " +
                                       valorInvestido);
            }
            Console.ReadKey();
        }
    }
}
