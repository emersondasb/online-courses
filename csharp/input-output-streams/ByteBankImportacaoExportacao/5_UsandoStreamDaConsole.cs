using System;
using System.IO;

namespace ByteBankImportacaoExportacao
{
    partial class Program
    {
        static void UsarStreamDeEntrada()
        {

            using (var fluxoDeEntrada = Console.OpenStandardInput())
            using (var fs = new FileStream("entradaConsole.txt", FileMode.Create))
            {
                var buffer = new byte[1024];

                while (true)
                {
                    var bytesLidos = fluxoDeEntrada.Read(buffer, 0, 1024);

                    fs.Write(buffer, 0, bytesLidos);

                    fs.Flush(); // Método usado para despejar no arquivo de destino a cada laço

                    Console.WriteLine($"Bytes lidos da console: {bytesLidos}");
                }
            }
        }
    }
}