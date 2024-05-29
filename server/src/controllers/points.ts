import { Request, Response } from 'express';

import knex from '../database/connection';
import { URL, PORT } from '../config/constants';

class PointsController {
  async index(request: Request, response: Response) {
    const { city, uf, items } = request.query;

    const itemsArray = String(items)
      .split(',')
      .map(item => Number(item.trim()));

    const points = await knex('points')
      .join('point_items', 'points.id', '=', 'point_items.point_id')
      .whereIn('point_items.item_id', itemsArray)
      .where('city', String(city))
      .where('uf', String(uf))
      .distinct()
      .select('points.*');

    const serializedPoints = points.map(point => {
      return {
        ...point,
        image_url: `http://${URL}:${PORT}/uploads/${point.image}`,
      };
    });

    return response.status(200).json(serializedPoints);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const point = await knex('points').where('id', id).first();

    if (!point) {
      return response.status(404).json({ message: 'Point not found' });
    }

    /**
     * SELECT title FROM items
     *  JOIN point_items ON items.id = point_items.item_id
     *  WHERE point_items.point_id = {id}
     */
    const items = await knex('items')
      .join('point_items', 'items.id', '=', 'point_items.item_id')
      .where('point_items.point_id', id)
      .select('items.title');

    const serializedPoint = {
      ...point,
      image_url: `http://${URL}:${PORT}/uploads/${point.image}`,
    };

    return response.status(200).json({ point: serializedPoint, items });
  }

  async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = request.body;

    const point = {
      image: request.file.filename,
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    };

    const trx = await knex.transaction();

    const insertedIds = await trx('points').insert(point);

    const pointId = insertedIds[0];

    const pointItems = items
      .split(',')
      .map((item: string) => Number(item.trim()))
      .map((itemId: number) => {
        return {
          item_id: itemId,
          point_id: pointId,
        };
      });

    await trx('point_items').insert(pointItems);

    await trx.commit();

    return response.json({
      id: pointId,
      ...point,
    });
  }
}

export default PointsController;
