using System;

namespace Strings
{
    class Program
    {
        static void Main(string[] args)
        {

            string url = "pagina?argumento";

            int indiceInterrogacao = url.IndexOf('?');
            
            string argumento = url.Substring(++indiceInterrogacao);

            Console.WriteLine(url);
            Console.WriteLine(argumento);

            Console.ReadLine();
        }
    }
}
