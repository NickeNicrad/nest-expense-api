import { Injectable } from '@nestjs/common';

import { v4 as uuid } from 'uuid';

import { ReportType, data, Report, UpdateReport } from 'src/data';

import { ReportResponseDto } from 'src/dtos/report.dto';

@Injectable()
export class ReportService {
    createReport (type: ReportType, body: Report) {
        if (!body.amount || !body.source)
          return {
            message: 'please provide all information before to continue!'
          }
    
        const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    
        const newReport = {
          id: uuid(),
          type: reportType,
          source: body.source,
          amount: body.amount,
          created_at: new Date,
          updated_at: new Date
        }
    
        data.report.push(newReport)
    
        return {
          message: 'report successfully created!'
        }
      }
    
      getReports(type: ReportType): ReportResponseDto[] {
        return data.report.filter(item => item.type === type).map(item => new ReportResponseDto(item))
      }
    
      getReportById(type: ReportType, id: string): ReportResponseDto {
        const reportIndex = getReportIndex(id, type)
    
        if (reportIndex !== -1)
          return new ReportResponseDto(data.report[reportIndex])
    
        return
      }
    
      updateReport(type: ReportType, id: string, body: UpdateReport) {
        const reportIndex = getReportIndex(id, type)
    
        if (reportIndex !== -1) {
          data.report[reportIndex] = {
            ...data.report[reportIndex],
            amount: body.amount,
            source: body.source
          }
    
          return {
            data: data.report[reportIndex],
            message: 'successfully updated'
          }
        } else
          return {
            message: 'not found!'
          }
      }
    
      deleteReport(type: ReportType, id: string) {
        const reportIndex = getReportIndex(id, type)
    
        if (reportIndex !== -1) {
          data.report.splice(reportIndex, 1)
    
          return {message: `${type} with id ${id} is successfully deleted!`}
        } else
          return {message: `${type} with id ${id} is not found!`}
      }
}

const getReportIndex = (id: string, type: ReportType) => {
    const index: number = data.report.findIndex(item => item.id === id && item.type === type)
  
    return index
  }
