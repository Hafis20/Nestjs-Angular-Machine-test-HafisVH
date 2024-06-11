import { Module } from '@nestjs/common';
import { GeneratePdfController } from './generate-pdf.controller';
import { GeneratePdfService } from './generate-pdf.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema }
    ])
  ],
  controllers: [GeneratePdfController],
  providers: [GeneratePdfService]
})
export class GeneratePdfModule { }
