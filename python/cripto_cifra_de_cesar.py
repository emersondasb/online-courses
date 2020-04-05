alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

while True:
    comando = input('Digite 1 para CRIPTOGRAFAR, 2 para DESCRIPTOGRAFAR uma mensagem ou 0 para SAIR: ')

    if comando == '1':

        entrada = input('Digite a mensagem a ser CRIPTOGRAFADA: ').upper()

        avanco = 1
        for i in entrada:
            if i == ' ':
                print(' ', end='')
            for j in range(26):
                if i == alfabeto[j]:
                    if j >= 25:
                        if avanco == 1:
                            print(alfabeto[25 - j], end='')
                            avanco += 1
                        elif avanco == 2:
                            print(alfabeto[25 - j+1], end='')
                            avanco += 1
                        elif avanco == 3:
                            print(alfabeto[25 - j+2], end='')
                            avanco = 1

                    elif j < 25:
                        print(alfabeto[j+avanco], end='')
                        if avanco == 3:
                            avanco = 1
                        else:
                            avanco += 1

    elif comando == '2':
        
        entrada = input('Digite a mensagem a ser DESCRIPTOGRAFADA: ').upper()
    
        avanco = 1
        for i in entrada:
            if i == ' ':
                print(' ', end='')
            for j in range(26):
                if i == alfabeto[j]:
                    if j <= 0:
                        if avanco == 1:
                            print(alfabeto[25], end='')
                            avanco += 1
                        elif avanco == 2:
                            print(alfabeto[25 - 1], end='')
                            avanco += 1
                        elif avanco == 3:
                            print(alfabeto[25 - 2], end='')
                            avanco = 1

                    elif j > 0:
                        print(alfabeto[j-avanco], end='')
                        if avanco == 3:
                            avanco = 1
                        else:
                            avanco += 1
    
    elif comando == '0':
        break
    
    else:
        print('\nComando inválido!')
    
    print()