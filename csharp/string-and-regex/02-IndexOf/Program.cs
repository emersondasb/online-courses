using System;

namespace _02_IndexOf
{
    class Program
    {
        static void Main(string[] args)
        {

            string palavra = "moedaOrigem=real&moedaDestino=dolar";
            string nomeArgumento = "moedaDestino=";
            int indice = palavra.IndexOf(nomeArgumento);

            Console.WriteLine(palavra.Substring(indice + nomeArgumento.Length));

        }
    }
}
