import { useState } from 'react';
import './style.css';
import wikiCrepusculo from '../assets/wiki-crepusculo.png';
import catalogoFilmes from '../assets/catalogo-filmes.png';

function Home() {
  const [idioma, setIdioma] = useState('pt');
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });

  const alternarIdioma = () => {
    setIdioma((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.mensagem) {
      alert(idioma === 'pt' ? 'Por favor, preencha todos os campos!' : 'Please fill in all fields!');
      return;
    }
    // Exemplo de envio / integração com EmailJS
    alert(idioma === 'pt' ? 'Mensagem enviada com sucesso!' : 'Message sent successfully!');
    setForm({ nome: '', email: '', mensagem: '' });
  };

  const textos = {
    pt: {
      sobreTitulo: 'Sobre Mim',
      sobreTexto: 'Sou estudante de Engenharia de Software na PUC Minas, apaixonada por tecnologia, criatividade e inovação. Tenho conhecimentos em HTML, CSS, JavaScript, Java e Python, e interesse em desenvolvimento web, análise de dados e automação. Estou sempre buscando aprender, desenvolver projetos e aprimorar minhas habilidades.',
      projetosTitulo: 'Projetos',
      experienciaTitulo: 'Experiências',
      contatoTitulo: 'Contato',
      contatoSub: 'Me mande uma mensagem pelo formulário ou entre em contato por meio das minhas redes sociais!',
      enviar: 'Enviar',
      repositorio: 'Ver Repositório no GitHub',
    },
    en: {
      sobreTitulo: 'About Me',
      sobreTexto: 'I am a Software Engineering student at PUC Minas, passionate about technology, creativity, and innovation. I have knowledge of HTML, CSS, JavaScript, Java, and Python, with an interest in web development, data analysis, and automation. I am always looking to learn, build projects, and improve my skills.',
      projetosTitulo: 'Projects',
      experienciaTitulo: 'Experiences',
      contatoTitulo: 'Contact',
      contatoSub: 'Send me a message through the form or reach out through my social media!',
      enviar: 'Send',
      repositorio: 'View GitHub Repository',
    }
  };

  const t = textos[idioma];

  // Dados dos projetos em linha do tempo (do mais antigo ao mais recente)
  const projetos = [
    {
      id: 1,
      data: 'Abril 2026',
      nome: 'Wiki de Crepúsculo',
      descricao: 'Se trata de uma wiki da saga Crepúsculo, onde é possível encontrar informações e imagens sobre os livros, os filmes e os personagens da obra.',
      tecnologias: ['HTML5', 'CSS3'],
      github: 'https://github.com/RM-Classroom/diw-es-semana6-ofiaaaa',
      midia: wikiCrepusculo
    },
    {
      id: 2,
      data: 'Maio 2026',
      nome: 'Catalogo de Filmes',
      descricao: 'Aplicação web de catálogo de filmes consumindo a API do TMDB em tempo real.',
      tecnologias: ['JavaScript', 'API REST', 'CSS Grid'],
      github: 'https://github.com/RM-Classroom/diw-es-2026-1-semana13-ofiaaaa',
      midia: catalogoFilmes
    }
  ];

  const experiencias = [
    {
      id: 1,
      periodo: '2022 - Presente',
      instituicao: 'Criação de Conteúdo Digital & Redes Sociais',
      cargo: idioma === 'pt' ? 'Criadora de Conteúdo Digital' : 'Digital Content Creator',
      descricao: idioma === 'pt'
        ? 'Atuação na produção de conteúdo relevante e engajador para redes sociais (TikTok e Instagram), com foco em audiência jovem e lifestyle. Gestão de marca pessoal, roteirização, edição de vídeo, análise de métricas e parcerias com marcas.'
        : 'Production of engaging content for social media platforms (TikTok and Instagram), focusing on young audiences and lifestyle. Personal brand management, scripting, video editing, analytics tracking, and brand partnerships.'
    },
    {
      id: 2,
      periodo: '2023 - Presente',
      instituicao: 'Marketing Digital & Social Media (Freelance)',
      cargo: idioma === 'pt' ? 'Social Media & Gestora de Conteúdo' : 'Social Media & Content Manager',
      descricao: idioma === 'pt'
        ? 'Planejamento e criação de conteúdo visual e textual para o Instagram de uma pousada. Responsável pelo design de posts, linha editorial, copy para legendas e estratégias de engajamento para atração e fidelização de clientes.'
        : 'Planning and creation of visual and written content for a hospitality business (inn/pousada) on Instagram. Responsible for post design, content strategy, copywriting, and engagement strategies to attract and retain guests.'
    }
  ];

  return (
    <div className='container'>
      <header className='header'>
        <h1>Sofia Vassallo</h1>
      </header>

      <nav className='nav-bar'>
        <a href="#sobre">{t.sobreTitulo.toUpperCase()}</a>
        <a href="#projetos">{t.projetosTitulo.toUpperCase()}</a>
        <a href="#experiencias">{t.experienciaTitulo.toUpperCase()}</a>
        <a href="#contato">{t.contatoTitulo.toUpperCase()}</a>
        <button type='button' onClick={alternarIdioma} className='btn-idioma'>
          {idioma === 'pt' ? 'EN' : 'PT'}
        </button>
      </nav>

      {/* SEÇÃO SOBRE MIM */}
      <section id='sobre' className='sobre-mim'>
        <h2>{t.sobreTitulo}</h2>
        <div className='sobre-mim-conteudo'>
          <img src="src/assets/sofia.jpg" alt="Foto de perfil de Sofia Vassallo" />
          <p className='texto-sobre-mim'>{t.sobreTexto}</p>
        </div>
      </section>

      {/* SEÇÃO PROJETOS (TIMELINE) */}
      <section id='projetos' className='projetos'>
        <h2>{t.projetosTitulo}</h2>
        <div className='timeline'>
          {projetos.map((p) => (
            <article key={p.id} className='projeto-card'>
              <span className='data'>{p.data}</span>
              <h3 className='titulo-projeto'>{p.nome}</h3>
              <p className='texto-projeto'>{p.descricao}</p>
              <div className='techs'>
                {p.tecnologias.map((tech, idx) => (
                  <span key={idx} className='badge'>{tech}</span>
                ))}
              </div>
              <img src={p.midia} alt={`Demonstração do projeto ${p.nome}`} className='midia-projeto' />
              <a href={p.github} target="_blank" rel="noopener noreferrer" className='link-github'>
                {t.repositorio}
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* SEÇÃO EXPERIÊNCIAS */}
      <section id='experiencias' className='experiencias'>
        <h2>{t.experienciaTitulo}</h2>
        <div className='experiencias-lista'>
          {experiencias.map((exp) => (
            <article key={exp.id} className='experiencia-card'>
              <span className='data'>{exp.periodo}</span>
              <h3>{exp.instituicao}</h3>
              <p className='texto-experiencia'>{exp.descricao}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SEÇÃO CONTATO */}
      <section id='contato' className='contato'>
        <h2>{t.contatoTitulo}</h2>
        <p className='contato-sub'>{t.contatoSub}</p>

        <div className='redes-sociais'>
          <a className='rede-social' href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiVpNTx-7mXAxXNqZUCHQGgIvEQFnoECCAQAQ&url=https%3A%2F%2Fwww.instagram.com%2Fofiappg%2F&usg=AOvVaw2acLfDFlSHHClrqTI-EgwO&opi=89978449" target="_blank" rel="noreferrer">
            <img src="src/assets/instagram-brands-solid.png" alt="Instagram" />
          </a>
          <a className='rede-social' href="www.linkedin.com/in/sofia-vassallo-de-andrade-846687323" target="_blank" rel="noreferrer">
            <img src="src/assets/linkedin-in-brands-solid.png" alt="LinkedIn" />
          </a>
          <a className='rede-social' href="sofiavassallo36@gmail.com">
            <img src="src/assets/envelope-regular.png" alt="E-mail" />
          </a>
          <a className='rede-social' href="https://github.com/ofiaaaa" target="_blank" rel="noreferrer">
            <img src="src/assets/github-brands-solid.png" alt="GitHub" />
          </a>
        </div>

        <form className='formulario' onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            name="nome"
            className='nome'
            type="text"
            value={form.nome}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            className='email'
            type="email"
            value={form.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            name="mensagem"
            className='mensagem'
            rows="4"
            value={form.mensagem}
            onChange={handleInputChange}
            required
          />

          <button type="submit">{t.enviar}</button>
        </form>
      </section>

      <footer>© 2026 SOFIA VASSALLO</footer>
    </div>
  );
}

export default Home;