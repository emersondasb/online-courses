using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10_ByteBank
{
    class Program
    {
        static void Main(string[] args)
        {
            ContaCorrente contaDoBruno = new ContaCorrente();
            contaDoBruno.titular = "Bruno";

            Console.WriteLine(contaDoBruno.saldo);
            contaDoBruno.Sacar(50);
            Console.WriteLine(contaDoBruno.saldo);

            contaDoBruno.Depositar(500);

            ContaCorrente contaDaGabriela = new ContaCorrente();
            contaDaGabriela.titular = "Gabriela";

            Console.WriteLine("Saldo de Bruno: " + contaDoBruno.saldo);
            Console.WriteLine("Saldo de Gabriela: " + contaDaGabriela.saldo);

            contaDoBruno.Transferir(25, contaDaGabriela);

            Console.WriteLine("Saldo de Bruno: " + contaDoBruno.saldo);
            Console.WriteLine("Saldo de Gabriela: " + contaDaGabriela.saldo);

            Console.ReadKey();
        }
    }
}
