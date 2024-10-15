import Pagina from "@/components/template/Pagina";
import { ProvedorCarrinho } from "@/data/contexts/ContextoCarrinho";
import { ProvedorPagamento } from "@/data/contexts/ContextoPagamento";
import { ProvedorProdutos } from "@/data/contexts/ContextoProdutos";
import React, { ReactNode } from "react";

interface layoutProps {
	children: ReactNode;
}

const layout = ({ children }: layoutProps) => {
	return (
		<ProvedorProdutos>
			<ProvedorCarrinho>
				<ProvedorPagamento>
					<Pagina>{children}</Pagina>;
				</ProvedorPagamento>
			</ProvedorCarrinho>
		</ProvedorProdutos>
	);
};

export default layout;
