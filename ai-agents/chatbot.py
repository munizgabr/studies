from dotenv import load_dotenv
import os
import openai
from colorama import Fore, Style, init


load_dotenv()  # Carrega variáveis do .env

#Initializing colorama
init(autoreset=True)


openai.api_key = os.getenv("OPENAI_API_KEY")

def text_generate(prompt):
    response = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=prompt,
        temperature=0,
        max_tokens=1000,
        stream=True
    )
    print(f"{Fore.CYAN}Bot:", end="")
    full_text = ""
    for response_stream in response:
        text = response_stream.choices[0].delta.content if response_stream.choices[0].delta.content else ""
        print(text, end="")
        full_text += text
    print()
    prompt.append({"role": "assistant", "content": full_text})
    return prompt

if __name__ == "__main__":
    print(f"{Fore.YELLOW}Hello, I'm your Support bot. How can I help you today?🤖")
    prompt = []
    while True:
        input_user = input(f"{Fore.GREEN}User: {Style.RESET_ALL}")
        prompt.append({"role": "user", "content": input_user})
        prompt = text_generate(prompt)
