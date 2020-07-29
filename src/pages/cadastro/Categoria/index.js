import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

const CadastroCategoria = () => {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form>
        <label htmlFor="">Nome da Categoria:
          <input type="text" name="" id="" />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <Link to="/">
        ir para a Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;
