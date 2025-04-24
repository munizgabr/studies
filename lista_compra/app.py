import tkinter as tk
from tkinter import ttk, messagebox, simpledialog
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
import datetime
import os

# --- Dados ---
categorias = ["Mercado", "Limpeza", "Higiene", "Outros"]
lista_padrao = []
checkbox_vars = []

# Garante pastas de saída
os.makedirs("data", exist_ok=True)
os.makedirs("lists", exist_ok=True)

# --- Funções de lógica ---
def adicionar_item():
    nome = entry_nome.get().strip()
    qtd = entry_qtd.get().strip()
    cat = combo_categoria.get().strip()

    if not (nome and qtd and cat):
        messagebox.showwarning("Campos incompletos", "Preencha todos os campos")
        return

    item = {"nome": nome, "quantidade": qtd, "categoria": cat}
    lista_padrao.append(item)
    entry_nome.delete(0, tk.END)
    entry_qtd.delete(0, tk.END)
    combo_categoria.set('')
    atualizar_lista()

def atualizar_lista():
    # limpa frame e variáveis
    for w in frame_lista.winfo_children():
        w.destroy()
    checkbox_vars.clear()

    # recria checkboxes
    for item in lista_padrao:
        var = tk.BooleanVar()
        texto = f"{item['nome']} ({item['quantidade']}) — {item['categoria']}"
        chk = tk.Checkbutton(frame_lista, text=texto, variable=var)
        chk.pack(anchor="w", padx=5, pady=2)
        checkbox_vars.append((var, item))

def adicionar_categoria():
    nova = simpledialog.askstring("Nova Categoria", "Digite o nome da nova categoria:")
    if nova:
        categorias.append(nova)
        combo_categoria['values'] = categorias

def confirmar_lista():
    selecionados = [item for var, item in checkbox_vars if var.get()]
    if not selecionados:
        messagebox.showinfo("Lista de Compras", "Nenhum item selecionado.")
        return
    texto = "\n".join(f"- {i['nome']} ({i['quantidade']}) [{i['categoria']}]" for i in selecionados)
    messagebox.showinfo("Itens para Comprar", texto)

def exportar_pdf():
    selecionados = [item for var, item in checkbox_vars if var.get()]
    if not selecionados:
        messagebox.showinfo("PDF", "Nenhum item selecionado para exportar.")
        return

    # Nome do arquivo com timestamp
    ts = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    nome_arquivo = f"lists/lista_de_compras_{ts}.pdf"

    c = canvas.Canvas(nome_arquivo, pagesize=A4)
    w, h = A4

    # Cabeçalho
    c.setFont("Helvetica-Bold", 16)
    c.drawString(50, h - 50, "Lista de Compras")
    c.setFont("Helvetica", 12)
    c.drawString(50, h - 70, f"Data: {datetime.date.today().isoformat()}")

    # Corpo agrupado por categoria
    y = h - 100
    agrupado = {}
    for it in selecionados:
        agrupado.setdefault(it['categoria'], []).append(it)

    for cat, items in agrupado.items():
        c.setFont("Helvetica-Bold", 14)
        c.drawString(50, y, f"{cat}:")
        y -= 20
        c.setFont("Helvetica", 12)
        for it in items:
            c.drawString(70, y, f"- {it['nome']} ({it['quantidade']})")
            y -= 15
            if y < 60:
                c.showPage()
                y = h - 50
                c.setFont("Helvetica", 12)
        y -= 10

    c.save()
    messagebox.showinfo("PDF Exportado", f"PDF criado em:\n{nome_arquivo}")

# --- Construção da Interface ---
root = tk.Tk()
root.title("Lista de Compras 🛒")
root.geometry("450x600")

# Frame de entrada
frame = tk.Frame(root)
frame.pack(padx=10, pady=10, fill="x")

tk.Label(frame, text="Nome do item:").grid(row=0, column=0, sticky="e")
entry_nome = tk.Entry(frame)
entry_nome.grid(row=0, column=1, sticky="we", padx=5)

tk.Label(frame, text="Quantidade:").grid(row=1, column=0, sticky="e")
entry_qtd = tk.Entry(frame)
entry_qtd.grid(row=1, column=1, sticky="we", padx=5)

tk.Label(frame, text="Categoria:").grid(row=2, column=0, sticky="e")
combo_categoria = ttk.Combobox(frame, values=categorias, state="readonly")
combo_categoria.grid(row=2, column=1, sticky="we", padx=5)

btn_cat = tk.Button(frame, text="➕ Categoria", command=adicionar_categoria)
btn_cat.grid(row=2, column=2, padx=5)
btn_add = tk.Button(frame, text="➕ Adicionar Item", command=adicionar_item)
btn_add.grid(row=3, columnspan=3, pady=10)

# Frame de lista de checkboxes
frame_lista = tk.Frame(root, bd=1, relief="sunken")
frame_lista.pack(padx=10, pady=5, fill="both", expand=True)

# Botões de ação
btn_confirm = tk.Button(root, text="✔️ Confirmar Seleção", command=confirmar_lista)
btn_confirm.pack(pady=5, fill="x", padx=20)
btn_export = tk.Button(root, text="📄 Exportar para PDF", command=exportar_pdf)
btn_export.pack(pady=5, fill="x", padx=20)

root.mainloop()
