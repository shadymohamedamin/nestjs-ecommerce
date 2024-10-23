
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Vendor extends Document {
  @Prop({ required: true })
  businessName: string;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: Types.ObjectId; 
}

export const VendorSchema = SchemaFactory.createForClass(Vendor);
