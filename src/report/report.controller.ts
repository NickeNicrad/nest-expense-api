import { Controller, Post, Put, Body, Get, Param, HttpCode, Delete, ParseEnumPipe, ParseUUIDPipe } from '@nestjs/common';
import { UpdateReportDto, CreateReportDto, ReportResponseDto } from './../dtos/report.dto';

import { ReportType } from 'src/data';

import { ReportService } from './report.service';

@Controller('report:type')
export class ReportController {
    constructor(private readonly reportService: ReportService) {

    }
  
    @Post()
    createReport(
      @Param('type') type: ReportType,
      @Body() {amount, source}: CreateReportDto
    ) {
      return this.reportService.createReport(type, {amount, source})
    }
  
    @Get()
    getReports(@Param('type', new ParseEnumPipe(ReportType)) type: ReportType): ReportResponseDto[] {
      return this.reportService.getReports(type)
    }
  
    @Get(':id')
    getReportById(
      @Param('id', ParseUUIDPipe) id: string,
      @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
    ): ReportResponseDto {
      return this.reportService.getReportById(type, id)
    }
  
    @Put(':id')
    updateReport(
      @Param('id') id: string,
      @Param('type') type: ReportType,
      @Body() {amount, source}: UpdateReportDto
    ) {
      this.reportService.updateReport(type, id, {amount, source})
    }
  
    @HttpCode(204)
    @Delete(':id')
    deleteReport(
      @Param('id') id: string,
      @Param('type') type: ReportType
    ) {
      return this.reportService.deleteReport(type, id)
    }
}
