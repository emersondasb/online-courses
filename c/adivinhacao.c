#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
#include <time.h>

int main()
{
    setlocale(LC_ALL, "Portuguese");

    printf("******************************************\n");
    printf("* Bem-vindo ao nosso jogo de adivinhação *\n");
    printf("******************************************\n");

    int segundos = time(0);
    srand(segundos);
    int numero_grande = rand();
    int numerosecreto = numero_grande % 100;
    
    int chute;
    int tentativas = 1;
    float pontos = 1000;

    while(1)
    {

        printf("Tentativa número %d\n", tentativas);
        printf("Qual é o seu chute? ");

        scanf("%d", &chute);
        printf("Seu chute foi %d\n", chute);

        int acertou = (chute == numerosecreto);
        int maior = chute > numerosecreto;

        if (chute < 0)
        {
            printf("Você não pode inserir números negativos.\n");
            continue;
        }

        if (acertou)
        {
            printf("Parabéns! Você acertou!\n");
            printf("Jogue de novo, você é um bom jogador!\n");
            break;
        }
        else if (maior)
        {
            printf("Seu chute foi maior que o número secreto\n");
        }
        else
        {
            printf("Seu chute foi menor que o número secreto\n");
        }

        tentativas++;

        float pontos_perdidos = abs(chute - numerosecreto) / (double) 2;

        pontos -= pontos_perdidos;
    }
    printf("Você acertou em %d tentativas.\n", tentativas);
    printf("Você fez %.1f pontos.\n", pontos);
}
