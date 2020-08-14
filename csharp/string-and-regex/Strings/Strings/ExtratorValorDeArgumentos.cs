using System;
using System.Collections.Generic;
using System.Text;

namespace Strings
{
    public class ExtratorValorDeArgumentos
    {
        private readonly string _argumentos;
        public string URL { get; }
        public ExtratorValorDeArgumentos(string url)
        {
            if (String.IsNullOrEmpty(url))
            {
                throw new ArgumentException("O argumento url não pode ser vazio nem nulo.", nameof(url));
            }
            
            int indiceInterrogacao = url.IndexOf('?');
            _argumentos = url.Substring(indiceInterrogacao + 1);

            URL = url;
        }

        public string GetValor(string nomeParametro)
        {
            int indiceParametro = _argumentos.IndexOf();
            return _argumentos;
        }
    }
}
