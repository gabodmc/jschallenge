const { User } = require("../database/models");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

const userController = {
  create: (req, res) => {
    const { username, email, password } = req.body;

    if (username && email && password) {
      const encryptedPassword = bcrypt.hashSync(password, 10);
      const userFormData = {
        ...req.body,
        password: encryptedPassword,
      };
      try {
        User.create(userFormData).then((user) => {
          return res.status(200).json({
            data: `Has creado con exito el usuario ${user.dataValues.username}`,
            status: 200,
          });
        });
      } catch (error) {
        res.json(error);
      }
    } else {
      res.status(400).json({
        errorMessage: "username, email y password son requeridos",
      });
    }
  },

  login: async (req, res) => {
    let errors = validationResult(req);
    const { email, password } = req.body;
    if (errors.isEmpty()) {
      if (email && password) {
        const findUser = await User.findOne({
          where: {
            email,
          },
        });
        const userData = findUser.dataValues;
        const decryptedPassword = bcrypt.compareSync(
          password,
          userData.password
        );
        if (!decryptedPassword) {
          return res.status(401).json({
            errorMessage: "Las credenciles son incorrectas",
          });
        }
        return res.status(200).json({
          data: `usuario ${userData.username} logeado`,
          status: 200,
        });
      } else {
        res.status(400).json({
          errorMessage: "Faltan datos",
        });
      }
    } else {
      //Recorremos las validaciones y solo devolvemos el mensaje de error de cada una
      let errorMessageList = [];
      errors.errors.map((results) => {
        errorMessageList.push(results.msg);
      });
      return res.json({
        errorMessage: errorMessageList.toString().replace(",", "."),
      });
    }
  },
};

module.exports = userController;
