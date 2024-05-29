import { Request, Response } from 'express';

import knex from '../database/connection';
import { URL, PORT } from '../config/constants';

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://${URL}:${PORT}/uploads/${item.image}`,
      };
    });
    return response.json(serializedItems);
  }
}

export default ItemsController;
