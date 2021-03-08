export const validateMessages = {
  required: '${label} é obrigatório!',
  types: {
    email: '${label} não é válido!',
    number: '${label} não um número válido!',
  },
  number: {
    range: '${label} deve ser entre ${min} e ${max}',
  },
};

export const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 30 },
};
