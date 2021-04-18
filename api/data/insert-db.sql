DELETE  FROM usuarios;
DELETE  FROM tipoPagamentos;
DELETE  FROM despesas;
DELETE  FROM rendas;

INSERT INTO `usuarios` (`id`, `nome`, `sobrenome`, `email`, `createdAt`, `updatedAt`) VALUES
(5,	'Thiago',	'Moura',	'thiago.moura@ccc.ufcg.edu.br',	'2021-04-09 12:29:47',	'2021-04-18 16:49:06'),
(6,	'Maria',	'José',	'maria.jose@gmail.com',	'2021-04-09 18:38:56',	'2021-04-18 16:49:20');

INSERT INTO `tipoPagamentos` (`id`, `nome`, `diaVencimentoPadrao`, `createdAt`, `updatedAt`) VALUES
(11,	'Cartão Nubank',	1,	'2021-04-09 18:39:26',	'2021-04-09 18:39:26'),
(12,	'Dinheiro',	10,	'2021-04-09 18:39:26',	'2021-04-09 18:39:26'),
(17,	'Cartão Banco do Brasil',	3,	'2021-04-18 16:49:47',	'2021-04-18 16:49:47');

INSERT INTO `despesas` (`id`, `nome`, `descricao`, `valor`, `parcelas`, `periodo`, `createdAt`, `updatedAt`, `tipoPagamentoId`, `usuarioId`) VALUES
(7,	'Ração do peixe',	'Compra da ração no pet shop',	16.25,	1,	'2021-01-09 18:39:47',	'2021-04-09 18:39:49',	'2021-04-09 18:39:49',	11,	5),
(8,	'Livro Senhor dos Aneis',	'Compra do livro senhor dos aneis na saraiva',	36.89,	2,	'2021-01-09 18:40:22',	'2021-04-09 18:40:24',	'2021-04-09 18:40:24',	11,	5),
(14,	'Água Mineral',	'3 Garrafões',	15.00,	1,	'2021-01-18 16:50:33',	'2021-04-18 16:50:35',	'2021-04-18 16:50:35',	12,	5),
(15,	'Conta de Energia',	'Conta de Energia de Fevereiro',	100.00,	1,	'2021-02-18 16:51:21',	'2021-04-18 16:51:27',	'2021-04-18 16:51:27',	17,	5),
(16,	'Conta de Internet',	'Conta de Internet de Fevereiro',	100.00,	1,	'2021-02-18 16:52:04',	'2021-04-18 16:52:05',	'2021-04-18 16:52:05',	11,	5);


INSERT INTO `rendas` (`id`, `nome`, `descricao`, `valor`, `periodo`, `createdAt`, `updatedAt`, `usuarioId`) VALUES
(14,	'Bolsa',	'Pagamento projeto',	400.00,	'2021-01-09',	'2021-04-09 18:40:41',	'2021-04-09 18:40:41',	5),
(15,	'Bolsa',	'Pagamento projeto',	400.00,	'2021-02-09',	'2021-04-09 18:40:41',	'2021-04-09 18:40:41',	5),
(20,	'Bolsa',	'Pagamento projeto',	400.00,	'2021-03-18',	'2021-04-18 16:52:24',	'2021-04-18 16:52:24',	5),
(21,	'Bolsa',	'Pagamento projeto',	400.00,	'2021-04-18',	'2021-04-18 16:52:44',	'2021-04-18 16:52:44',	5);
