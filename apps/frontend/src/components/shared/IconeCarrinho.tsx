import { IconShoppingCart } from "@tabler/icons-react";
import React from "react";

interface IconeCarrinhoProps {
	qtdeItens: number;
}

const IconeCarrinho = ({ qtdeItens }: IconeCarrinhoProps) => {
	return (
		<div className="flex justify-center items-center rounded-full w-14 h-14 bg-violet-dark relative">
			<IconShoppingCart size={30} stroke={1.3} />
			<div className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
				{qtdeItens ?? 0}
			</div>
		</div>
	);
};

export default IconeCarrinho;
