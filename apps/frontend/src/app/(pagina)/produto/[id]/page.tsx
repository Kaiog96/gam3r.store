'use client'
import { Produto } from '@gstore/core'
import useProdutos from '@/data/hooks/useProdutos'
import { useEffect, useState } from 'react'
import TituloProduto from '@/components/produto/TituloProduto'
import AvaliacaoEspecializada from '@/components/produto/AvaliacaoEspecializada'
import ProdutoNaoEncontrado from '@/components/produto/ProdutoNaoEncontrado'
import AvaliacoesUsuarios from '@/components/produto/AvaliacoesUsuarios'
import MedidorDePreco from '@/components/produto/MedidorDePreco'
import BannerCompra from '@/components/produto/BannerCompra'
import InformacoesProduto from '@/components/produto/InformacoesProduto'

export default function PaginaProduto(props: any) {
    const { obterProdutoPorId } = useProdutos()
    const [produto, setProduto] = useState<Produto | null>(null)

    useEffect(() => {
        obterProdutoPorId(+props.params.id).then(setProduto)
    }, [props.params.id, obterProdutoPorId])

    return produto ? (
        <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-10">
                <TituloProduto produto={produto} />
                <InformacoesProduto produto={produto} />
                <BannerCompra produto={produto} />
                <MedidorDePreco produto={produto} />
            </div>
            <AvaliacoesUsuarios produto={produto} />
            <AvaliacaoEspecializada produto={produto} />
        </div>
    ) : (
        <ProdutoNaoEncontrado />
    )
}