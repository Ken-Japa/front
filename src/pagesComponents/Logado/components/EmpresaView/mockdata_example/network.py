import json
import random
import networkx as nx
from pyvis.network import Network

# Função para converter cor hexadecimal para RGB
def hex_to_rgb(hex_color):
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

# Função para converter RGB para cor hexadecimal
def rgb_to_hex(rgb_color):
    return '#{:02x}{:02x}{:02x}'.format(int(rgb_color[0]), int(rgb_color[1]), int(rgb_color[2]))

# Função para formatar o valor de mercado
def format_valor_mercado(valor, tipo='industria'):
    if tipo == 'empresa':
        return f'R$ {valor / 1e6:,.1f} Mi'.replace('.', ',').replace(',', '.', 1)
    else:
        return f'R$ {valor / 1e9:,.1f} Bi'.replace('.', ',').replace(',', '.', 1)

# Cores para as indústrias
cores_industrias = [
    '#FF5733', '#33FF57', '#5733FF', '#FF33A8', '#A833FF', 
    '#FFA833', '#33A8FF', '#A8FF33', '#FF3357', '#3357FF',
    '#57FF33', '#FF5733', '#33FF57', '#5733FF', '#FF33A8'
]

# Caminho para o arquivo JSON
data_json_path = 'sumario.json'

# Carregar dados do arquivo JSON
with open(data_json_path, 'r', encoding='utf-8') as file:
    data = json.load(file)

# Criar uma rede interativa
net = Network(height='900px', width='100%', bgcolor='#222222', font_color='white')

# Criar o grafo usando NetworkX
G = nx.Graph()

industrias = data['sumario']
# Ordenar indústrias pelo valor de mercado total em ordem decrescente
industrias.sort(key=lambda x: x['valorMercadoTotal'], reverse=True)
total_valor_mercado = sum(industria['valorMercadoTotal'] for industria in industrias)

# Adicionar nó central representando o mercado total
G.add_node('Mercado Total', size=0, color='rgba(0, 0, 0, 0)', valor_mercado=format_valor_mercado(total_valor_mercado, tipo='industria'))

# Ajustes de tamanho mínimo, máximo e escala
tamanho_min_industria = 72
tamanho_max_industria = 112
tamanho_min_segmento = 40
tamanho_max_segmento = 64
tamanho_min_empresa = 8
tamanho_max_empresa = 32


# Encontrar o valor de mercado mínimo e máximo das indústrias
valor_mercado_min_industria = min(industria['valorMercadoTotal'] for industria in industrias)
valor_mercado_max_industria = max(industria['valorMercadoTotal'] for industria in industrias)

def calcular_tamanho_industria(valor_mercado_industria):
    return min(max(tamanho_min_industria, (valor_mercado_industria - valor_mercado_min_industria) / (valor_mercado_max_industria - valor_mercado_min_industria) * (tamanho_max_industria - tamanho_min_industria) + tamanho_min_industria), tamanho_max_industria)

# Adicionar nós e arestas para as indústrias
for i, industria in enumerate(industrias):
    nome_industria = industria['industria']
    valor_mercado_industria = industria['valorMercadoTotal']
    tamanho_industria = calcular_tamanho_industria(valor_mercado_industria)
    cor_industria = cores_industrias[i % len(cores_industrias)]
    
    G.add_node(nome_industria, size=tamanho_industria, color=cor_industria, valor_mercado=format_valor_mercado(valor_mercado_industria))
    # G.add_edge('Mercado Total', nome_industria)  # Remover a conexão com o nó central

    segmentos = industria['segmentos']
    if segmentos:
        # Encontrar o valor de mercado mínimo e máximo dos segmentos
        valor_mercado_segmento = [segmento['valorMercado'] for segmento in segmentos]
        valor_mercado_min_segmento = min(valor_mercado_segmento) if valor_mercado_segmento else 0
        valor_mercado_max_segmento = max(valor_mercado_segmento) if valor_mercado_segmento else 1

        def calcular_tamanho_segmento(valor_mercado_segmento):
            if valor_mercado_max_segmento == valor_mercado_min_segmento:
                return tamanho_min_segmento
            return min(max(tamanho_min_segmento, (valor_mercado_segmento - valor_mercado_min_segmento) / (valor_mercado_max_segmento - valor_mercado_min_segmento) * (tamanho_max_segmento - tamanho_min_segmento) + tamanho_min_segmento), tamanho_max_segmento)

        for segmento in segmentos:
            nome_segmento = segmento['segmento']
            valor_mercado_segmento = segmento['valorMercado']
            tamanho_segmento = calcular_tamanho_segmento(valor_mercado_segmento)
            cor_segmento = cor_industria

            G.add_node(nome_segmento, size=tamanho_segmento, color=cor_segmento, valor_mercado=format_valor_mercado(valor_mercado_segmento))
            G.add_edge(nome_industria, nome_segmento)

            empresas = segmento['empresasDetalhes']
            if empresas:
                # Encontrar o valor de mercado mínimo e máximo das empresas
                valor_mercado_empresa = [empresa['valorMercado'] for empresa in empresas]
                valor_mercado_min_empresa = min(valor_mercado_empresa) if valor_mercado_empresa else 0
                valor_mercado_max_empresa = max(valor_mercado_empresa) if valor_mercado_empresa else 1

                def calcular_tamanho_empresa(valor_mercado_empresa):
                    if valor_mercado_max_empresa == valor_mercado_min_empresa:
                        return tamanho_min_empresa
                    return min(max(tamanho_min_empresa, (valor_mercado_empresa - valor_mercado_min_empresa) / (valor_mercado_max_empresa - valor_mercado_min_empresa) * (tamanho_max_empresa - tamanho_min_empresa) + tamanho_min_empresa), tamanho_max_empresa)

                for empresa in empresas:
                    nome_empresa = empresa['empresa']
                    valor_mercado_empresa = empresa['valorMercado']
                    tamanho_empresa = calcular_tamanho_empresa(valor_mercado_empresa)
                    tom_cor_empresa = tuple(random.uniform(0.5, 0.9) * c for c in hex_to_rgb(cor_segmento))
                    cor_empresa = rgb_to_hex(tom_cor_empresa)

                    G.add_node(nome_empresa, size=tamanho_empresa, color=cor_empresa, valor_mercado=format_valor_mercado(valor_mercado_empresa, tipo='empresa'))
                    G.add_edge(nome_segmento, nome_empresa)

# Melhorar a lógica de distribuição dos nós
posicoes = nx.spring_layout(G, k=0.3, iterations=1000, seed=42)

# Adicionar os nós e arestas ao grafo interativo PyVis
for node, pos in posicoes.items():
    if G.nodes[node]['size'] == 0:
        net.add_node(node, label=f"{node}: {G.nodes[node]['valor_mercado']}", color=G.nodes[node]['color'], size=G.nodes[node]['size'], x=pos[0]*1000, y=pos[1]*1000, font={'size': 30})
    elif 'empresa' in G.nodes[node]:
        net.add_node(node, title=f"{node}\n{G.nodes[node]['valor_mercado']}", color=G.nodes[node]['color'], size=G.nodes[node]['size'], x=pos[0]*1000, y=pos[1]*1000)
    else:
        net.add_node(node, label=f"{node}\n{G.nodes[node]['valor_mercado']}", color=G.nodes[node]['color'], size=G.nodes[node]['size'], x=pos[0]*1000, y=pos[1]*1000)

for source, target in G.edges():
    net.add_edge(source, target)
    

# Configuração de layout e física
net.set_options("""
  var options = {
    "nodes": {
      "shape": "dot",
      "font": {
        "size": 20
      },
      "borderWidth": 2
    },
    "edges": {
      "color": "#ffffff",
      "smooth": {
        "enabled": true
      }
    },
  "physics": {
    "enabled": true,
    "barnesHut": {
      "gravitationalConstant": -13000,
      "springLength": 300,
      "springConstant": 0.6,
      "damping": 0.8
    },
    "minVelocity": 2
    }
  }
""")  


# Gerar e abrir a visualização
html_path = 'networkEmpresas.html'
net.save_graph(html_path)
print(f"Grafico salvo em {html_path}")
