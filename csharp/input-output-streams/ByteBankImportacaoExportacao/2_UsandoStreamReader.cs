using ByteBankImportacaoExportacao.Modelos;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBankImportacaoExportacao
{
    partial class Program
    {
        static void UsandoStreamReader()
        {
            var enderecoDoArquivo = "contas.txt";

            using (var fluxoDeArquivo = new FileStream(enderecoDoArquivo, FileMode.Open))
            using (var leitor = new StreamReader(fluxoDeArquivo))
            {
                while (!leitor.EndOfStream)
                {
                    var linha = leitor.ReadLine();
                    var contaCorrente = ConverterStringParaContaCorrente(linha);
                    var msg = $"Conta número {contaCorrente.Numero}, Ag.: {contaCorrente.Agencia}, Saldo: {contaCorrente.Saldo}";
                    Console.WriteLine(contaCorrente.Titular.Nome);
                    Console.WriteLine(msg);
                    Console.WriteLine();
                }
            }
            Console.ReadLine();
        }

        static ContaCorrente ConverterStringParaContaCorrente(string linha)
        {
            var campos = linha.Split(',');
            var agencia = int.Parse(campos[0]);
            var numero = int.Parse(campos[1]);
            var saldo = double.Parse(campos[2].Replace('.', ','));
            var nomeTitular = campos[3];

            var resultado = new ContaCorrente(agencia, numero);
            resultado.Depositar(saldo);

            var titular = new Cliente();
            titular.Nome = nomeTitular;

            resultado.Titular = titular;

            return resultado;
        }
    }
}
