# Sistemas-digitais-Drink-Misterio
🥤 Drink Mistério — Máquina Automática com Sensores Ultrassônicos

Dispenser automático com sensores — Projeto de Sistemas Digitais (Cesar School)

Este projeto apresenta um dispenser automatizado de líquidos, inspirado nos dispensers do McDonald’s, mas com uma proposta gamificada: o usuário tenta descobrir qual é o drink secreto enquanto o sistema libera um líquido automaticamente ao detectar um copo.

O protótipo foi desenvolvido utilizando Arduino, sensores e atuadores, explorando conceitos de eletrônica digital, automação e sistemas embarcados.

🚀 Visão Geral

O sistema funciona por meio de um sensor de presença (ultrassônico ou IR) que detecta quando um copo é colocado na área de dispensing.
Quando isso ocorre, o Arduino ativa duas saídas independentes, controlando válvulas ou bombas responsáveis pelos “drinks”.

A lógica do jogo pode alternar entre as saídas, criando um efeito surpresa — o usuário nunca sabe qual drink vai sair!

🧠 Objetivos do Projeto

Desenvolver um dispenser automático baseado em sensores.

Integrar entradas (sensores) e saídas (atuadores) usando Arduino.

Criar uma experiência interativa e lúdica.

Aplicar conceitos de eletrônica digital e sistemas embarcados.

Construir um protótipo funcional e apresentável.

🔧 Tecnologias Utilizadas

Arduino Uno

Sensor Ultrassônico HC-SR04 ou Sensor IR

Válvulas/Bombas de Líquido

Display LCD (opcional)

Jumpers, protoboard, fonte 5V

Arduino IDE

HTML/CSS/JS para a página de apresentação

⚙️ Como Funciona

O sensor verifica continuamente se há um copo próximo.

Quando detectado:

O sistema ativa uma das saídas (válvula/bomba).

Pode selecionar um lado diferente a cada rodada (modo secreto).

Após o tempo de dispensing, a saída é desligada automaticamente.

O display (opcional) mostra mensagens como:

“Bem-vindo ao Drink Secreto!”

“Liberando bebida...”
