
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart } from '../schemas/cart.schema';  
import { CreateCartDto } from './dto/create-cart.dto';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart.name) private readonly cartModel: Model<Cart>) {}

  async create(createCartDto: CreateCartDto): Promise<Cart> {
    const createdCart = new this.cartModel(createCartDto);
    return await createdCart.save();
  }

  async findOne(id: string): Promise<Cart> {
    return await this.cartModel.findById(id).exec();
  }

  async remove(id: string): Promise<Cart> {
    return await this.cartModel.findByIdAndDelete(id).exec();
  }
}
