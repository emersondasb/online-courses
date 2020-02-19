tabela = [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
          ['Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N']]

entrada = input('Digite a mensagem a ser CRIPTOGRAFADA: ').upper()

for i in entrada:
    if i == ' ':
        print(' ', end='')
    for j in range(13):

        if i == tabela[0][j]:
            print(tabela[1][j], end='')
        elif i == tabela[1][j]:
            print(tabela[0][j], end='')