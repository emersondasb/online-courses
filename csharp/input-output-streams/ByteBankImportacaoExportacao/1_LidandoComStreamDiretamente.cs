using System;
using System.IO;
using System.Text;

namespace ByteBankImportacaoExportacao
{
    partial class Program
    {
        static void LidandoComFileStreamDiretamente()
        {
            var enderecoDoArquivo = "contas.txt";

            using (var fluxoDoArquivo = new FileStream(enderecoDoArquivo, FileMode.Open))
            {
                var buffer = new byte[1024]; // 1kb

                var numDeBytesLidos = -1;

                while (numDeBytesLidos != 0)
                {
                    numDeBytesLidos = fluxoDoArquivo.Read(buffer, 0, 1024);
                    EscreverBuffer(buffer, numDeBytesLidos);
                }
            }
        }

        static void EscreverBuffer(byte[] buffer, int numDeBytesLidos)
        {
            var utf8 = new UTF8Encoding();
            var texto = utf8.GetString(buffer, 0, numDeBytesLidos);
            Console.Write(texto);

            //foreach (var meuByte in buffer)
            //{
            //    Console.Write(meuByte);
            //    Console.Write(" ");
            //}
        }
    }
}