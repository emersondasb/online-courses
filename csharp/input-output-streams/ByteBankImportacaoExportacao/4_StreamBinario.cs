using System.IO;

namespace ByteBankImportacaoExportacao
{
    partial class Program
    {
        static void EscritaBinaria()
        {
            using (var fs = new FileStream("arquivoBinario.txt", FileMode.Create))
            using(var escritor = new BinaryWriter(fs))
            {
                escritor.Write(987); // Agência
                escritor.Write(56468646); // Conta
                escritor.Write("Emerson Bezerra"); // Nome
            }
        }

        static void LeituraBinaria()
        {
            using (var fs = new FileStream("arquivoBinario.txt", FileMode.Open))
            using (var leitor = new BinaryReader(fs))
            {
                var agencia = leitor.ReadInt32();
                var conta = leitor.ReadInt32();
                var nome = leitor.ReadString();

                System.Console.WriteLine($"{nome} / {agencia} / {conta}");
            }

        
        }
    }
}