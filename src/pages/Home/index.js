import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import { ProductList } from './styles'

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-couro-cano-alto-triton-masculino/06/E15-0763-006/E15-0763-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis Legal</strong>
        <span>R$ 129</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-couro-cano-alto-triton-masculino/06/E15-0763-006/E15-0763-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis Legal</strong>
        <span>R$ 129</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-couro-cano-alto-triton-masculino/06/E15-0763-006/E15-0763-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis Legal</strong>
        <span>R$ 129</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-couro-cano-alto-triton-masculino/06/E15-0763-006/E15-0763-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis Legal</strong>
        <span>R$ 129</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-couro-cano-alto-triton-masculino/06/E15-0763-006/E15-0763-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis Legal</strong>
        <span>R$ 129</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  )
}
