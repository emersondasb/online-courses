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
            nomeParametro = nomeParametro.ToUpper();
            string argumentoEmCaixaAlta = _argumentos.ToUpper();

            string termo = nomeParametro + "=";
            int indiceTermo = argumentoEmCaixaAlta.IndexOf(termo);
            string resultado = _argumentos.Substring(indiceTermo + termo.Length);

            int indiceEComercial = resultado.IndexOf('&');

            if(indiceEComercial == -1)
            {
                return resultado;
            }

            return resultado.Remove(indiceEComercial);

        }
    }
}
