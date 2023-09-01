import { v4 as uuid } from 'uuid'

export enum ReportType {
    INCOME='income',
    EXPENSE='expense',
}

export interface Data {
    report: {
        id: string,
        source: string,
        amount: number,
        created_at: Date,
        updated_at: Date,
        type: ReportType,
    }[]
}

export interface Report {
    source: string,
    amount: number,
}

export interface UpdateReport {
    source?: string,
    amount?: number,
}

export const data: Data = {
    report: [
        {
            id: uuid(),
            amount: 200,
            created_at: new Date,
            updated_at: new Date,
            source: 'nicke',
            type: ReportType.EXPENSE
        },
        {
            id: uuid(),
            amount: 200,
            created_at: new Date,
            updated_at: new Date,
            source: 'nicke',
            type: ReportType.INCOME
        },
        {
            id: uuid(),
            amount: 200,
            created_at: new Date,
            updated_at: new Date,
            source: 'nicke',
            type: ReportType.EXPENSE
        },
        {
            id: uuid(),
            amount: 200,
            created_at: new Date,
            updated_at: new Date,
            source: 'nicke',
            type: ReportType.INCOME
        }
    ]
}

