tabela = [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
          ['Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N']]

while True:
    comando = input('Digite 1 para CRIPTOGRAFAR, 2 para DESCRIPTOGRAFAR uma mensagem ou 0 para SAIR: ')

    if comando == '1':

        entrada = input('Digite a mensagem a ser CRIPTOGRAFADA: ').upper()

        for i in entrada:
            if i == ' ':
                print(' ', end='')
            for j in range(13):

                if i == tabela[0][j]:
                    print(tabela[1][j], end='')
                elif i == tabela[1][j]:
                    print(tabela[0][j], end='')

    elif comando == '2':
        
        entrada = input('Digite a mensagem a ser DESCRIPTOGRAFADA: ').upper()

        for i in entrada:
            if i == ' ':
                print(' ', end='')
            for j in range(13):

                if i == tabela[1][j]:
                    print(tabela[0][j], end='')
                elif i == tabela[0][j]:
                    print(tabela[1][j], end='')    
    
    elif comando == '0':
        break
    
    else:
        print('\nComando inválido!')
    
    print()