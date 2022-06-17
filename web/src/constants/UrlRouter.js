const base = '/expense-organizer';
export default {
  home: base,
  usuario: {
    index: `${base}/usuario`,
    edit: `${base}/usuario/editar/:id`,
    new: `${base}/usuario/novo`,
  },
};
