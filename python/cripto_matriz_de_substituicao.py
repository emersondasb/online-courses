matriz = [['A', 'B', 'C', 'D', 'E', 'F'],
          ['G', 'H', 'I', 'J', 'K', 'L'],
          ['M', 'N', 'O', 'P', 'Q', 'R'],
          ['S', 'T', 'U', 'V', 'W', 'X'],
          ['Y', 'Z', '0', '1', '2', '3'],
          ['4', '5', '6', '7', '8', '9']]

while True:
    comando = input('Digite 1 para CRIPTOGRAFAR, 2 para DESCRIPTOGRAFAR uma mensagem ou 0 para SAIR: ')

    if comando == '1':
        entrada = input('Digite sua mensagem a ser CRIPTOGRAFADA: ').upper()
        for i in entrada:
            if i == ' ':
                print(' ', end='')
            for j in range(6):
                for k in range(6):
                    if i == matriz[j][k]:
                        if j - 1 < 0:
                            print(matriz[5][k], end='')
                        else:
                            print(matriz[j - 1][k], end='')
    elif comando == '2':
        entrada = input('Digite sua mensagem a ser DESCRIPTOGRAFADA: ').upper()
        for i in entrada:
            if i == ' ':
                print(' ', end='')
            for j in range(6):
                for k in range(6):
                    if i == matriz[j][k]:
                        if j + 1 > 5:
                            print(matriz[0][k], end='')
                        else:
                            print(matriz[j + 1][k], end='')

    elif comando == '0':
        break
    else:
        print('\nComando inválido!')
    print()
