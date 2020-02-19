alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

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
