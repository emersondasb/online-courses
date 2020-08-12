using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ByteBank.Modelos;
using ByteBank.Modelos.Funcionarios;
using Humanizer;

namespace ByteBank.SistemaAgencia
{
    class Program
    {
        static void Main(string[] args)
        {
            DateTime dataFimPagamento = new DateTime(2020, 10, 17);
            DateTime dataCorrente = DateTime.Now;

            TimeSpan diferenca = dataFimPagamento - dataCorrente;

            string mensagem = TimeSpanHumanizeExtensions.Humanize(diferenca);

            Console.WriteLine(dataCorrente);
            Console.WriteLine(dataFimPagamento);
            Console.WriteLine($"Vencimento em {mensagem}.");


            Console.ReadLine();
        }

        
    }
}
