import Message from '../models/Message';
import { Op } from 'sequelize';

class MessageController {
  async index(request, response) {
    const result = await Message.findAll();
    
    return response.json(result);
  };

  async show(request, response){
    const { id } = request.params;
    const message = await Message.findByPk(id);

    return response.json(message)
  }

  async store(request, response) {
  const { content, userUid } = request.body; 

  const user = Message.create({
    content,
    user_uid: userUid 
  });

  return response.sendStatus(201);
  }

  
  async update(request, response) {
    const { id } = request.params;
    const { content, userUid } = request.body; 

    const idTester = await Message.findByPk(id)


    if(content.length > 1 && userUid.length >1 && idTester.length>1){
    const message = await Message.update(
      {
        content,
        user_uid: userUid 
      },
      { 
        where: {
        id,
      },
      returning: true,
    });

    response.sendStatus(202);}
    else {
      return response.sendStatus(412);
    }
  }
  
  async delete(request, response) {
    const { id } = request.params;

    await Message.destroy({
      where: {
        id,
      }
    })

    return response.sendStatus(202);
  }

  async filter(request, response) {
    const { pag, off, user } = request.query;
    const { content } = request.body;

    const finder = `%${content}%`

    const result = await Message.findAndCountAll({
      where: {
        [Op.and]: [
          {content: {[Op.like]: finder}},
          {user_uid: user}
        ]},
      offset: off,
      limit: pag
      });
    
    return response.json(result);
  };

  
} 

export default new MessageController();