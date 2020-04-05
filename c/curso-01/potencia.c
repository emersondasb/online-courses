#include <stdlib.h>

void potencia(int *resultado, int a, int b)
{
    *resultado = 1;
    for (int i = 0; i < b; i++)
    {
        *resultado = *resultado * a;
    }
}

int main()
{

    int resultado;
    potencia(&resultado, 2, 3);

    printf("%d\n", resultado);

    return 0;
}
