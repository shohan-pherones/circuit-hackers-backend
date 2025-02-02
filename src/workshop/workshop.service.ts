import { Injectable } from '@nestjs/common';
import { Workshop } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWorkshopInput } from './dto/create-workshop.input';

@Injectable()
export class WorkshopService {
  constructor(private prisma: PrismaService) {}

  async createWorkshop(data: CreateWorkshopInput): Promise<Workshop> {
    return this.prisma.workshop.create({
      data,
    });
  }

  async findAllWorkshops(): Promise<Workshop[]> {
    return this.prisma.workshop.findMany();
  }

  async findWorkshopById(id: string): Promise<Workshop | null> {
    return this.prisma.workshop.findUnique({
      where: { id },
    });
  }
}
