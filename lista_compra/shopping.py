import json
import os
from datetime import date

DATA_PATH = "data/default_list.json"

def create_default_list():
    items = []
    print("Digite os itens da lista padrão (digite 'fim' para encerrar):")
    while True:
        item = input("- ")
        if item.lower() == "fim":
            break
        items.append(item)
    os.makedirs("data", exist_ok=True)
    with open(DATA_PATH, "w") as f:
        json.dump(items, f, indent=4)
    print("✅ Lista padrão salva com sucesso!")

def load_default_list():
    try:
        with open(DATA_PATH, "r") as f:
            return json.load(f)
    except FileNotFoundError:
        print("⚠️ Lista padrão não encontrada. Crie uma primeiro.")
        return []

def check_items(items):
    final_list = []
    print("Responda com S para SIM ou N para NÃO.")
    for item in items:
        resp = input(f"Você precisa comprar '{item}'? (S/N): ").strip().upper()
        if resp == "S":
            final_list.append(item)

    os.makedirs("lists", exist_ok=True)
    filename = f"lists/shopping_list_{date.today()}.json"
    with open(filename, "w") as f:
        json.dump(final_list, f, indent=4)
    print(f"🛒 Lista de compras salva em {filename}")
