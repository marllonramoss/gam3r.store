"use client";

import { Moeda, Produto } from "@gstore/core";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NotaReview from "../shared/NotaReview";
import useCarrinho from "@/data/hooks/useCarrinho";

interface ProdutoItemProps {
	produto: Produto;
}

const ProdutoItem = ({ produto }: ProdutoItemProps) => {
	const { adicionarItem } = useCarrinho();

	return (
		<Link
			href={`/produto/${produto.id}`}
			className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px] overflow-hidden"
		>
			<div className="absolute top-2.5 right-2.5 flex justify-end">
				<NotaReview nota={2.5} />
			</div>
			<div className="w-full h-48 relative">
				<Image
					src={produto.imagem}
					fill
					className="object-contain"
					alt="Imagem do produto"
				/>
			</div>
			<div className="flex-1 flex flex-col gap-3 p-5 border border-white/10">
				<span className="text-lg font-semibold">{produto.nome}</span>
				<div className="flex-1"></div>
				<div className="self-start text-sm border-b border-dashed">
					{produto.especificacoes.destaque}
				</div>
				<div className="flex flex-col">
					<span className="text-sm text-gray-400 line-through">
						de {Moeda.formatar(produto.precoBase)}
					</span>
					<span className="text-xl font-semibold text-emerald-400">
						por {Moeda.formatar(produto.precoPromocional)}
					</span>
					{/* <span className="text-zinc-400 text-xs">
                        ate {}
                    </span> */}
				</div>
				<button
					className="
                flex justify-center items-center gap-2 h-8
                bg-violet-700 hover:border-2 border-emerald-500 rounded-full
                "
					onClick={(e) => {
						e.preventDefault();
						adicionarItem(produto);
						console.log("Adicionar ao carrinho");
					}}
				>
					<IconShoppingCartPlus size={20} />
					<span>Adicionar</span>
				</button>
			</div>
		</Link>
	);
};

export default ProdutoItem;
