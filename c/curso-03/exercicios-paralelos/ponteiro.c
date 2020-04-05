#include <stdio.h>

void soma(int *num, int a, int b)
{
    *num = a + b;
}

int main()
{
    int a = 2, b = 3, num = 0;

    printf("%d\n", num);

    soma(&num, a, b);

    printf("%d\n", num);
}