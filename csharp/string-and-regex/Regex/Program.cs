using System;
using System.Text.RegularExpressions;

namespace ExpressoesRegulares
{
    class Program
    {
        static void Main(string[] args)
        {
            string texto1 = "Me ligue em 97894-4654";
            // string texto2 = "Meu número de telefone é 7894-4654";
            // string texto3 = "O número 7894-4654 é para contato profissional";

            // Os padrões abaixo são equivalentes em código regex
            // string padrao = "[0123456789][0123456789][0123456789][0123456789][-][0123456789][0123456789][0123456789][0123456789]";
            // string padrao = "[0-9][0-9][0-9][0-9][-][0-9][0-9][0-9][0-9]";
            // string padrao = "[0-9]{4,5}[-][0-9]{4}";
            // string padrao = "[0-9]{4,5}[-]{0,1}[0-9]{4}";
            // string padrao = "[0-9]{4,5}-{0,1}[0-9]{4}";

            string padrao = "[0-9]{4,5}-?[0-9]{4}";


            Match resultado = Regex.Match(texto1, padrao);

            Console.WriteLine(resultado.Value);
            


        }
    }
}
