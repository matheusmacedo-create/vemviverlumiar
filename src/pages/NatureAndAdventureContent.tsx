import React from 'react';
import ArticleLayout from '@/components/ArticleLayout';

const NatureAndAdventureContent: React.FC = () => {
  return (
    <ArticleLayout
      kicker="🌿 Natureza & Aventura"
      title="Nova Friburgo: Onde a Serra dos Órgãos encontra sua alma aventureira"
      dek="Guia completo e atualizado para explorar a natureza exuberante de Nova Friburgo com segurança e consciência ambiental. Descubra trilhas, cachoeiras, mirantes e experiências únicas na região serrana mais charmosa do Rio de Janeiro."
    >
      {/* Seção 1 */}
      <section id="cachoeiras-pocos">
        <h2>Cachoeiras & Poços Naturais <a className="article-anchor" href="#cachoeiras-pocos">#</a></h2>
        <p>Nova Friburgo abriga mais de 15 cachoeiras catalogadas, cada uma com características únicas. As águas cristalinas da Serra dos Órgãos oferecem refresco e renovação em meio à Mata Atlântica preservada.</p>
        
        <div className="article-callout">
          <strong>⚠️ Segurança em primeiro lugar:</strong> Sempre use calçado com boa aderência, evite mergulhos onde a profundidade é incerta e nunca frequente cachoeiras sozinho. Em dias de chuva, evite visitas devido ao risco de enxurradas.
        </div>

        <h3>Cachoeiras Principais</h3>
        <ul>
          <li><strong>Cachoeira do Pitu:</strong> <span className="difficulty easy">Fácil</span> - Ideal para famílias, com poço raso e seguro. Acesso por trilha de 15 minutos.</li>
          <li><strong>Cachoeira de São Pedro:</strong> <span className="difficulty moderate">Moderada</span> - Queda de 30m, trilha de 45 minutos. Poço profundo ideal para mergulho.</li>
          <li><strong>Cachoeira Véu de Noiva:</strong> <span className="difficulty moderate">Moderada</span> - Visual espetacular, especialmente no final da tarde. Trilha de 1h.</li>
          <li><strong>Poço Paraíso:</strong> <span className="difficulty easy">Fácil</span> - Piscina natural cristalina, perfeita para relaxar. Acesso de carro + 10 min caminhada.</li>
          <li><strong>Cachoeira dos Cristais:</strong> <span className="difficulty hard">Exigente</span> - Para aventureiros experientes. Trilha técnica de 2h, recompensada por cenário único.</li>
        </ul>

        <div className="article-grid">
          <div className="article-callout">
            <span className="article-tag">Melhor época</span>
            <p>Outono e inverno (maio-setembro) têm águas mais cristalinas e menor movimento. Evite épocas de chuva intensa.</p>
          </div>
          <div className="article-callout">
            <span className="article-tag">Equipamentos</span>
            <p>Tênis de trilha, roupa de banho, protetor solar, água, lanche e saco para lixo. Câmera à prova d'água recomendada.</p>
          </div>
        </div>
      </section>

      {/* Seção 2 */}
      <section id="trilhas-montanhas">
        <h2>Trilhas & Montanhas <a className="article-anchor" href="#trilhas-montanhas">#</a></h2>
        <p>Com mais de 25 trilhas mapeadas, Nova Friburgo oferece opções para todos os níveis. Da caminhada contemplativa ao trekking desafiador, cada trilha revela paisagens únicas da Serra dos Órgãos.</p>

        <div className="highlight-box">
          <h3>🏔️ Pico da Caledônia</h3>
          <p>O ponto mais alto da região (2.000m), oferece vista 360° da serra. Trilha exigente de 6-8h, apenas para experientes com guia obrigatório.</p>
        </div>

        <h3>Trilhas por Nível de Dificuldade</h3>
        
        <h4>🟢 Trilhas Fáceis (Familiares)</h4>
        <ul>
          <li><strong>Trilha do Suspiro:</strong> 2km, 1h, vista panorâmica da cidade</li>
          <li><strong>Caminho das Bromélias:</strong> 1.5km, 45min, ideal para observação da flora</li>
          <li><strong>Trilha da Pedra Bonita:</strong> 3km, 1h30, mirante com vista do vale</li>
        </ul>

        <h4>🟡 Trilhas Moderadas</h4>
        <ul>
          <li><strong>Trilha da Pedra do Cão Sentado:</strong> 5km, 3h, formação rochosa única</li>
          <li><strong>Caminho dos Escravos:</strong> 7km, 4h, trilha histórica com ruínas coloniais</li>
          <li><strong>Trilha do Pico Menor:</strong> 6km, 3h30, preparação para trilhas mais exigentes</li>
        </ul>

        <h4>🔴 Trilhas Exigentes</h4>
        <ul>
          <li><strong>Pico da Caledônia:</strong> 12km, 6-8h, guia obrigatório</li>
          <li><strong>Travessia Petrópolis-Friburgo:</strong> 25km, 2 dias, acampamento selvagem</li>
          <li><strong>Trilha da Pedra Riscada:</strong> 8km, 5h, trechos de escalaminhada</li>
        </ul>

        <div className="article-grid">
          <div className="article-callout">
            <span className="article-tag">Sinalização</span>
            <p>Baixe mapas offline (apps: Wikiloc, AllTrails). GPS essencial em trilhas longas. Placas de sinalização em trilhas principais.</p>
          </div>
          <div className="article-callout">
            <span className="article-tag">Conservação</span>
            <p>Siga sempre as trilhas oficiais. Atalhos causam erosão e perturbam a fauna. Leve todo seu lixo de volta.</p>
          </div>
        </div>
      </section>

      {/* Seção 3 */}
      <section id="mirantes-vistas">
        <h2>Mirantes & Vistas Panorâmicas <a className="article-anchor" href="#mirantes-vistas">#</a></h2>
        <p>Os mirantes de Nova Friburgo oferecem algumas das vistas mais espetaculares do Rio de Janeiro. Do nascer do sol às luzes da cidade ao anoitecer, cada momento revela uma nova perspectiva da serra.</p>

        <h3>Mirantes Imperdíveis</h3>
        <ul>
          <li><strong>Mirante do Pico da Caledônia:</strong> Vista 360° - o melhor da região, trilha exigente</li>
          <li><strong>Mirante da Pedra Bonita:</strong> Acesso fácil de carro, ideal para pôr do sol</li>
          <li><strong>Mirante do Suspiro:</strong> Vista da cidade e vale, trilha leve de 1h</li>
          <li><strong>Pedra do Cão Sentado:</strong> Formação rochosa única com vista espetacular</li>
          <li><strong>Mirante da Granja Comary:</strong> Vista das montanhas e campo de futebol da seleção</li>
        </ul>

        <div className="article-callout">
          <strong>📸 Dica de fotografia:</strong> Nascer do sol (6h-7h) e pôr do sol (17h-18h) oferecem as melhores luzes. Leve tripé para fotos noturnas da cidade iluminada.
        </div>
      </section>

      {/* Seção 4 */}
      <section id="aventura-radical">
        <h2>Aventura Radical <a className="article-anchor" href="#aventura-radical">#</a></h2>
        <p>Para os que buscam adrenalina, Nova Friburgo oferece diversas modalidades de aventura em cenários únicos da Serra dos Órgãos.</p>

        <h3>Modalidades Disponíveis</h3>
        <ul>
          <li><strong>Rapel em Cachoeiras:</strong> Descidas de 15m a 60m com instrutores certificados</li>
          <li><strong>Escalada em Rocha:</strong> Vias de todos os níveis na Pedra do Cão Sentado</li>
          <li><strong>Voo Livre:</strong> Decolagem do Pico da Caledônia com vista espetacular</li>
          <li><strong>Mountain Bike:</strong> Trilhas técnicas e cross-country</li>
          <li><strong>Canyoning:</strong> Descida de rios com rappel e saltos</li>
          <li><strong>Tirolesa:</strong> 800m de extensão sobre o vale</li>
        </ul>

        <div className="article-callout">
          <strong>🏆 Empresas certificadas:</strong> Sempre escolha operadoras com certificação ABETA e instrutores experientes. Segurança não tem preço!
        </div>
      </section>

      {/* Seção 5 */}
      <section id="observacao-natureza">
        <h2>Observação da Natureza <a className="article-anchor" href="#observacao-natureza">#</a></h2>
        <p>A Mata Atlântica preservada de Nova Friburgo abriga mais de 200 espécies de aves e rica fauna e flora. Uma experiência imperdível para amantes da natureza.</p>

        <h3>🦅 Birdwatching</h3>
        <p>Melhores horários: primeiras horas da manhã (6h-9h) e final da tarde (16h-18h).</p>
        <ul>
          <li><strong>Beija-flor-de-fronte-violeta:</strong> Endêmico da região</li>
          <li><strong>Saíra-sete-cores:</strong> Facilmente avistado nas trilhas</li>
          <li><strong>Tucano-de-bico-verde:</strong> Comum nas áreas de mata</li>
          <li><strong>Bem-te-vi:</strong> Abundante em toda região</li>
        </ul>

        <h3>🌿 Flora Nativa</h3>
        <ul>
          <li><strong>Bromélias:</strong> Mais de 50 espécies catalogadas</li>
          <li><strong>Orquídeas:</strong> Floração especial entre julho-setembro</li>
          <li><strong>Quaresmeiras:</strong> Floração roxa espetacular no outono</li>
          <li><strong>Ipês:</strong> Amarelos e roxos embelezam a paisagem</li>
        </ul>

        <div className="article-grid">
          <div className="article-callout">
            <span className="article-tag">Equipamentos</span>
            <p>Binóculo, câmera com zoom, guia de aves, roupa em tons neutros, repelente natural.</p>
          </div>
          <div className="article-callout">
            <span className="article-tag">Época ideal</span>
            <p>Outono e inverno para aves migratórias. Primavera para floração das espécies nativas.</p>
          </div>
        </div>
      </section>

      {/* Seção 6 */}
      <section id="natureza-familia">
        <h2>Natureza em Família <a className="article-anchor" href="#natureza-familia">#</a></h2>
        <p>Atividades seguras e educativas para toda a família curtir a natureza de Nova Friburgo juntos, criando memórias inesquecíveis.</p>

        <h3>Atividades Familiares</h3>
        <ul>
          <li><strong>Trilha Interpretativa:</strong> Guias especializados em educação ambiental</li>
          <li><strong>Piquenique Ecológico:</strong> Áreas reservadas com mesas e banheiros</li>
          <li><strong>Observação de Borboletas:</strong> Jardim das borboletas no centro da cidade</li>
          <li><strong>Oficinas de Fotografia:</strong> Workshops familiares nos fins de semana</li>
          <li><strong>Caça ao Tesouro Natural:</strong> Atividade lúdica para encontrar elementos da natureza</li>
        </ul>

        <div className="article-callout">
          <strong>👨‍👩‍👧‍👦 Dica para pais:</strong> Leve água extra, lanches energéticos, kit de primeiros socorros básico e sempre informe alguém sobre seu roteiro.
        </div>
      </section>

      {/* Seção 7 */}
      <section id="equipamentos-seguranca">
        <h2>Equipamentos & Segurança <a className="article-anchor" href="#equipamentos-seguranca">#</a></h2>
        <p>A preparação adequada é essencial para aproveitar a natureza com segurança. Aqui estão as recomendações para cada tipo de atividade.</p>

        <h3>Kit Básico para Trilhas</h3>
        <ul>
          <li>Calçado apropriado (tênis ou bota de trilha)</li>
          <li>Mochila confortável (20-30L para day use)</li>
          <li>Água (mínimo 2L por pessoa)</li>
          <li>Lanche energético (frutas, barras de cereal)</li>
          <li>Protetor solar e chapéu/boné</li>
          <li>Repelente biodegradável</li>
          <li>Kit de primeiros socorros básico</li>
          <li>Lanterna ou headlamp</li>
          <li>Capa de chuva ou poncho</li>
          <li>Celular com GPS e bateria extra</li>
        </ul>

        <h3>🚨 Normas de Segurança</h3>
        <div className="article-grid">
          <div className="article-callout">
            <span className="article-tag">Antes de sair</span>
            <p>Informe alguém sobre seu destino e horário previsto de retorno. Verifique a previsão do tempo.</p>
          </div>
          <div className="article-callout">
            <span className="article-tag">Durante a trilha</span>
            <p>Mantenha-se hidratado, respeite seus limites, não saia da trilha demarcada.</p>
          </div>
        </div>
      </section>

      {/* Seção 8 */}
      <section id="conservacao-ambiental">
        <h2>Conservação Ambiental <a className="article-anchor" href="#conservacao-ambiental">#</a></h2>
        <p>Nova Friburgo está inserida na Reserva da Biosfera da Mata Atlântica. Nossa responsabilidade é preservar esse patrimônio para as futuras gerações.</p>

        <h3>Princípios do Turismo Sustentável</h3>
        <ul>
          <li><strong>Não deixe rastros:</strong> Leve todo seu lixo de volta, inclusive restos orgânicos</li>
          <li><strong>Respeite a fauna:</strong> Observe à distância, não alimente animais selvagens</li>
          <li><strong>Preserve a flora:</strong> Não colete plantas, flores ou sementes</li>
          <li><strong>Use trilhas oficiais:</strong> Evite criar novos caminhos que causam erosão</li>
          <li><strong>Controle o ruído:</strong> Mantenha o volume baixo para não perturbar a vida selvagem</li>
          <li><strong>Acampe apenas em locais permitidos:</strong> Respeite as áreas de proteção</li>
        </ul>

        <blockquote>
          "Tire apenas fotos, deixe apenas pegadas, mate apenas o tempo e leve apenas memórias." - Filosofia do ecoturismo responsável
        </blockquote>
      </section>

      <hr className="article-hr" />
      <section id="faq">
        <h2>Perguntas Frequentes <a className="article-anchor" href="#faq">#</a></h2>
        
        <p><strong>🗺️ Preciso de guia para as trilhas?</strong><br/>
        Para trilhas fáceis e moderadas bem sinalizadas, não é obrigatório. Para trilhas exigentes como o Pico da Caledônia, guia é obrigatório por segurança.</p>

        <p><strong>🌤️ Qual a melhor época para visitar?</strong><br/>
        Outono e inverno (maio-setembro) têm menos chuvas e temperaturas amenas. Primavera oferece floração espetacular.</p>

        <p><strong>💧 A água das cachoeiras é potável?</strong><br/>
        Embora pareça cristalina, recomendamos sempre levar água tratada. Em caso de necessidade, use pastilhas purificadoras.</p>

        <p><strong>🚗 Como é o acesso de carro?</strong><br/>
        A maioria dos pontos turísticos tem acesso por estradas de terra em bom estado. Veículo comum atende a maioria dos destinos.</p>

        <p><strong>🏕️ É permitido acampar?</strong><br/>
        Camping é permitido apenas em áreas designadas. Consulte a prefeitura ou guias locais sobre locais autorizados.</p>

        <p><strong>📱 Há sinal de celular nas trilhas?</strong><br/>
        Nas trilhas próximas à cidade há sinal. Em trilhas remotas o sinal é intermitente. Sempre leve GPS offline.</p>
      </section>

      <hr className="article-hr" />
      <div className="article-meta">
        <div>Atualizado em <time dateTime="2025-09-26">26 de setembro de 2025</time></div>
        <div className="article-cta">
          <button className="article-btn" onClick={() => alert('Em breve: sistema de criação de roteiros personalizados!')}>Montar Roteiro</button>
          <button className="article-btn alt" onClick={() => alert('App em desenvolvimento para download de mapas offline!')}>Baixar App</button>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default NatureAndAdventureContent;