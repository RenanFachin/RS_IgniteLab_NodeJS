import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HttpModule } from './http.module';

import { PrismaService } from './prisma.service';

@Module({
  imports: [
    // Importando um outro .module
    HttpModule
  ],
  controllers: [AppController],
  providers: [
    PrismaService,
  ],
})
export class AppModule {}
