namespace _11_Classes
{ 
    public class ContaCorrente
    {
        public Cliente titular;
        public int agencia;
        public int numero;
        public int conta;
        public double saldo = 100; // Definindo valor padrão para 100.

        public bool Sacar(double valor)
        {
            if(this.saldo < valor)
            {
                return false;
            }
            else
            {
                this.saldo -= valor;
                return true;
            }
        }

        public void Depositar(double valor)
        {
            this.saldo += valor;
        }

        public bool Transferir(double valor, ContaCorrente contaDestino)
        {
            if (this.saldo < valor)
            {
                return false;
            }
            else
            {
                this.saldo -= valor;
                contaDestino.Depositar(valor);
                return true;
            }
        }
    }
}

