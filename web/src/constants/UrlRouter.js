const base = '/expense-organizer';
export default {
  home: base,
  usuario: {
    index: `${base}/usuario`,
    edit: `${base}/usuario/editar/:id`,
    new: `${base}/usuario/novo`,
  },
  tipoPagamento: {
    index: `${base}/tipo-pagamento`,
    edit: `${base}/tipo-pagamento/editar/:id`,
    new: `${base}/tipo-pagamento/novo`,
  },
  despesa: {
    index: `${base}/despesa`,
    edit: `${base}/despesa/editar/:id`,
    new: `${base}/despesa/novo`,
  },
  renda: {
    index: `${base}/renda`,
    edit: `${base}/renda/editar/:id`,
    new: `${base}/renda/novo`,
  },
};
