from shopping import create_default_list, load_default_list, check_items

def menu():
    print("==== Lista de Compras ====")
    print("1. Criar lista padrão")
    print("2. Conferir itens para próxima compra")
    print("3. Sair")
    return input("Escolha uma opção: ")

if __name__ == "__main__":
    while True:
        choice = menu()
        if choice == "1":
            create_default_list()
        elif choice == "2":
            default_list = load_default_list()
            check_items(default_list)
        elif choice == "3":
            break
        else:
            print("Opção inválida.")
