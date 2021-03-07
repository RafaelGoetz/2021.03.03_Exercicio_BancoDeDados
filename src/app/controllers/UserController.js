import User from '../models/User';
import Message from '../models/Message';

import { Op } from 'sequelize';

class UserController {
  async index(request, response) {
  const result = await User.findAll();
  
  return response.json(result);
};

  async show(request, response) {
    const { id } = request.params;
    const user = await User.findByPk(id);

    return response.json(user);
  }

  async store(request, response) {
    const { name, email } = request.body;

    if(name.length > 1 && email.length >1) {

    const user = await User.create({
      name,
      email,
    })

    return response.sendStatus(201);
  }
    else {
      return response.sendStatus(412);
    }
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, email } = request.body;
      
    const user = await User.update(
    {name, email}, 
    {
      where: {
        id,
    },
      returning: true,
    }
    );
      return response.sendStatus(202)
  }

  async delete(request, response) {
    const { id } = request.params;
    const user = await User.findByPk(id);

    await Message.destroy({
      where: {
        user_uid: id,
      },
    });

    await user.destroy();

    response.sendStatus(202);
  }

  async filter(request, response) {
    const { pag, off } = request.query;
    const { name, email } = request.body;
  
    const nameFinder = `%${name}%`
    const emailFinder = `%${email}%`
  
    const result = await User.findAndCountAll({
      where: {
        [Op.and]: [
          {name: {[Op.like]: nameFinder}},
          {email: {[Op.like]: emailFinder}}
        ]},
      offset: off,
      limit: pag
      });
    
    return response.json(result);
  };
}

export default new UserController();
