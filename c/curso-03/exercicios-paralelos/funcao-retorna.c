#include <stdio.h>

int soma(int *nums, int tamanho)
{
    int total = 0;
    for (int i = 0; i < tamanho; i++)
    {
        total += nums[i];
    }
    return total;
}

int main()
{

    int nums[3];
    nums[0] = 10;
    nums[1] = 20;
    nums[2] = 30;

    int total = soma(nums, 3);

    printf("%d\n", total);

    return 0;
}