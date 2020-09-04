using System;

namespace Strings
{
    class Program
    {
        static void Main(string[] args)
        {

            string url = "https://www.bytebank.com/cambio?moedaOrigem=real&moedaDestino=dolar&valor=1500";

            ExtratorValorDeArgumentos extrator = new ExtratorValorDeArgumentos(url);
            
            string valorOrigem = extrator.GetValor("moedaOrigem");
            Console.WriteLine("Valor de moedaOrigem: " + valorOrigem);

            string valorDestino = extrator.GetValor("moedaDestino");
            Console.WriteLine("Valor de moedaDestino: " + valorDestino);

            Console.WriteLine(extrator.GetValor("VALOR"));

            // Uma forma de detectar se o site é realmente o do ByteBank
            Console.WriteLine(url.StartsWith("https://www.bytebank.com"));

            // Detectar se a URL contém uma determinada string
            Console.WriteLine(url.Contains("cambio"));


        }
    }
}
