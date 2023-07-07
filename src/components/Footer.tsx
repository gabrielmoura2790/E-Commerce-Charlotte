export function Footer() {
  return (
    <footer className="bg-primary-900 grid grid-cols-4 p-8">
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-xl text-white cursor-default">
          Departamentos
        </h3>

        <a href="" className="text-zinc-50 font-thin">
          Início
        </a>
        <a href="" className="text-zinc-50 font-thin">
          Ofertas
        </a>
        <a href="" className="text-zinc-50 font-thin">
          Produtos
        </a>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-xl text-white cursor-default">
          Institucional
        </h3>

        <a href="" className="text-zinc-50 font-thin">
          Sobre nós
        </a>
        <a href="" className="text-zinc-50 font-thin">
          Contatos
        </a>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-xl text-white cursor-default">
          Atendimento
        </h3>
        <span className="text-zinc-50">
          <strong>Endereço:</strong> Rua das Flores, 123 - 5° andar - Jardim
          Imaginário/CE - CEP: 12345-678
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-xl text-white cursor-default">
          Mídias sociais
        </h3>
        <div className="flex gap-2">
          <a href="">
            <i className="devicon-twitter-original text-zinc-50 text-2xl hover:text-primary-500 ease-in-out duration-200"></i>
          </a>
          <a href="">
            <i className="devicon-facebook-plain text-zinc-50 text-2xl hover:text-primary-500 ease-in-out duration-200"></i>
          </a>
          <a href="">
            <i className="devicon-linkedin-plain text-zinc-50 text-2xl hover:text-primary-500 ease-in-out duration-200"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
