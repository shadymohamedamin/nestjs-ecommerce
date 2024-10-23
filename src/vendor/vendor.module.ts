
import { Module } from '@nestjs/common';
import { VendorController } from './vendor.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { VendorSchema } from '../schemas/vendor.schema'; 
import { VendorService } from './vendor.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Vendor', schema: VendorSchema }])],
  controllers: [VendorController],
  providers: [VendorService],
})
export class VendorModule {}
