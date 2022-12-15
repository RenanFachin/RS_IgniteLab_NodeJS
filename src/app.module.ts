import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.module';
import { DatabaseModule } from './infra/database/database.module';

@Module({
  imports: [
    // Importando um outro .module
    HttpModule,
    DatabaseModule
  ],

})
export class AppModule { }
