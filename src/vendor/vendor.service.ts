
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vendor } from '../schemas/vendor.schema';  // Assuming you have a Vendor schema.
import { CreateVendorDto } from './dto/create-vendor.dto';

@Injectable()
export class VendorService {
  constructor(@InjectModel(Vendor.name) private readonly vendorModel: Model<Vendor>) {}

  async create(createVendorDto: CreateVendorDto): Promise<Vendor> {
    const createdVendor = new this.vendorModel(createVendorDto);
    return await createdVendor.save();
  }

  async findOne(id: string): Promise<Vendor> {
    return await this.vendorModel.findById(id).exec();
  }

  async remove(id: string): Promise<Vendor> {
    return await this.vendorModel.findByIdAndDelete(id).exec();
  }
}
