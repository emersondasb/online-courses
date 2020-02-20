alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

while True:
    comando = input('Digite 1 para CRIPTOGRAFAR, 2 para DESCRIPTOGRAFAR uma mensagem ou 0 para SAIR: ')

    if comando == '1':

        entrada = input('Digite a mensagem a ser CRIPTOGRAFADA: ').upper()

        for i in entrada:
            if i == ' ':
                print(' ', end='')
            for j in range(26):
                if i == alfabeto[j]:
                    if j >= 25:
                        print(alfabeto[25-j], end='')
                    elif j < 25:
                        print(alfabeto[j+1], end='')
    
    elif comando == '2':
        
        entrada = input('Digite a mensagem a ser DESCRIPTOGRAFADA: ').upper()

        for i in entrada:
            if i == ' ':
                print(' ', end='')
            for j in range(26):
                if i == alfabeto[j]:
                    if j <= 0:
                        print(alfabeto[25], end='')
                    elif j > 0:
                        print(alfabeto[j-1], end='')
    
    elif comando == '0':
        break
    
    else:
        print('\nComando inválido!')
    
    print()