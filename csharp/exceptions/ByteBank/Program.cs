using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBank
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                ContaCorrente conta = new ContaCorrente(465, 15650);
                conta.Depositar(50);
                Console.WriteLine(conta.Saldo);
                conta.Sacar(-500);
                Console.WriteLine(conta.Saldo);

            }
            catch (SaldoInsuficienteException e)
            {
                Console.WriteLine(e.Message);
            }
            catch (ArgumentException e)
            {
                Console.WriteLine("Houve um erro de argumento: " + e.ParamName);
                Console.WriteLine(e.Message);

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

            try
            {
                //Metodo();
            }
            catch (DivideByZeroException)
            {
                Console.WriteLine("Não é possível dividir por zero.");
            }
            catch (NullReferenceException e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine(e.StackTrace);
                Console.WriteLine("Exceção tratada.");
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine(e.StackTrace);
                Console.WriteLine("Exceção tratada.");
            }

            Console.WriteLine("\nExecução finalizada. Tecle ENTER para sair.");
            Console.ReadLine();
        }

        //static void Metodo()
        //{
        //    TestaDivisao(0);
        //}

        //static void TestaDivisao(int divisor)
        //{
        //    Dividir(10, divisor);
        //}

        //public static int Dividir(int numero, int divisor)
        //{
        //    ContaCorrente conta = null;
        //    Console.WriteLine(conta.Saldo);
        //    return numero / divisor;            
        //}
    }
}
