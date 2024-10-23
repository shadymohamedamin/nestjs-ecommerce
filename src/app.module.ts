import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { VendorModule } from './vendor/vendor.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs-ecommerce'), 
    UserModule, 
    ProductModule, 
    CartModule, 
    VendorModule
  ],
})
export class AppModule {}
