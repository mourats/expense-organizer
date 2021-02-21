const validContent = (req) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }
};

const validResult = (object, res) => {
  if (!validValue(object)) {
    res.status(404).send({
      message: 'Object not found!',
    });
    return false;
  }
  return true;
};

const treatError = (error, res) => {
  console.log(error);
  res.status(500).send({
    message: error,
  });
};

const validValue = (value) =>
  value !== undefined && value !== '' && value !== null && value !== 0;

module.exports = {
  validContent,
  validResult,
  treatError,
  validValue,
};
