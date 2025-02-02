import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { WorkshopResolver } from './workshop.resolver';
import { WorkshopService } from './workshop.service';

@Module({
  providers: [WorkshopResolver, WorkshopService, PrismaService],
})
export class WorkshopModule {}
