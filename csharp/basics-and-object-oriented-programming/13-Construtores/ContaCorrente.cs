namespace _13_Construtores
{ 
    public class ContaCorrente
    {
        public Cliente Titular { get; set; }
        public int Agencia { get; set; }
        public int Numero { get; set; }
        public int Conta { get; set; }
        public static int NumDeContas { get; private set; }

        public static int ObterNumDeContas()
        {
            return NumDeContas;
        }

        private double _saldo = 100; // Definindo valor padrão para 100.

        public ContaCorrente (int agencia, int numero)
        {
            Agencia = agencia;
            Numero = numero;
            NumDeContas++;
        }

        public double Saldo // É convenção que nome de propriedade se inicia com letra maiúscula
        {
            get
            {
                return _saldo; // o underline indica que é um campo privado
            }
            set
            {
                if (value < 0) // value só funciona dentro de um set
                {
                    return;
                }
                _saldo = value;
            }
        }

        public bool Sacar(double valor)
        {
            if(_saldo < valor)
            {
                return false;
            }
            else
            {
                _saldo -= valor;
                return true;
            }
        }

        public void Depositar(double valor)
        {
            _saldo += valor;
        }

        public bool Transferir(double valor, ContaCorrente contaDestino)
        {
            if (_saldo < valor)
            {
                return false;
            }
            else
            {
                _saldo -= valor;
                contaDestino.Depositar(valor);
                return true;
            }
        }
    }
}

