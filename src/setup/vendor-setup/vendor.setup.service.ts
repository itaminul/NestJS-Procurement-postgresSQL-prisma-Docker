import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { VendorCreateDto } from './dto/create-vendor-setup.dto';
import { VendorEditDto } from './dto/edit-vendor-setup.dto';

@Injectable()
export class VendorSetupService {
  constructor(public readonly prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.proVendorSetup.findMany();
  }

  async getVendorById(@Param('id') id: number) {
    return await this.prisma.proVendorSetup.findUnique({
      where: {
        id: Number(id)
      },
      select: {
        id: true,
        vendoerDescription: true,
        vendoerPhone: true,
        vendorCountry: true,
        vendorCountryType: true,
        vendorName: true,
        vendorOfficeLocation: true,
        vendorOfficeName: true,
        vendorStatus: true,
        vendorType: true,
        orgId: true,
      }
    })
  }

  async create(@Body() vendoerCreateDto: VendorCreateDto) {
    const {
      vendorName,
      vendoerDescription,
      vendorCountry,
      vendorCountryType,
      vendorOfficeName,
      vendoerPhone,
      vendorOfficeLocation,
      vendorType,
      orgId,
    } = vendoerCreateDto;
    await this.prisma.proVendorSetup.create({
      data: {
        vendorName,
        vendoerDescription,
        vendorCountry,
        vendorCountryType,
        vendorOfficeName,
        vendoerPhone,
        vendorOfficeLocation,
        vendorType,
        orgId,
        createdBy: 1,
      },
    });
  }

  async update(
    @Param('id') id: number,
    @Body() vendoerEditDto: VendorEditDto,
  ) {
    const {
      vendorName,
      vendoerDescription,
      vendorCountry,
      vendorCountryType,
      vendorOfficeName,
      vendoerPhone,
      vendorOfficeLocation,
      vendorType,
      orgId,
    } = vendoerEditDto;
    await this.prisma.proVendorSetup.update({
      where: {
        id: Number(id),
      },
      data: {
        vendorName,
        vendoerDescription,
        vendorCountry,
        vendorCountryType,
        vendorOfficeName,
        vendoerPhone,
        vendorOfficeLocation,
        vendorType,
        orgId,
        updatedBy: 1,
      },
    });
  }
}
