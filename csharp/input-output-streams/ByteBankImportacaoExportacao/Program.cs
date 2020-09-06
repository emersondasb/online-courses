using ByteBankImportacaoExportacao.Modelos;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Schema;

namespace ByteBankImportacaoExportacao
{
    partial class Program
    {
        static void Main(string[] args)
        {

            // LerComClasseFile();
            EscreverComClasseFile();

            // UsarStreamDeEntrada();

            //EscritaBinaria();
            //LeituraBinaria();

            Console.WriteLine("Programa finalizado!");
            Console.ReadLine();
        }
      
    }
}
