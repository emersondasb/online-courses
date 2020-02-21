#include <stdio.h>

int main()
{
    int tabuada;

    printf("Digite um numero inteiro para a tabuada: ");

    scanf("%d", &tabuada);

    for (int i = 1; i <= 10; i++)
    {
        printf("%d x %d = %d\n", tabuada, i, (tabuada * i));
    }
}
