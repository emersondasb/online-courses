alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

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