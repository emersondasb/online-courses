using System;
using System.IO;
using System.Runtime.InteropServices;

namespace ByteBankImportacaoExportacao
{
    partial class Program
    {
        static void LerComClasseFile()
        {
            var linhas = File.ReadAllLines("contas.txt");
            Console.WriteLine(linhas.Length);

            foreach (var linha in linhas)
            {
                Console.WriteLine(linha);
            }
        }

        static void EscreverComClasseFile()
        {
            File.WriteAllText("escrevendoComClasseFile.txt", "Conteúdo a ser escrito no arquivo.");
        }

    }
}