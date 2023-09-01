import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';
import { ReportType } from 'src/data';

export class CreateReportDto {
    @IsOptional()
    @IsNumber()
    @IsPositive()
    amount: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    source: string;
}

export class UpdateReportDto {
    @IsOptional()
    @IsNumber()
    @IsPositive()
    amount: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    source: string;
}

export class ReportResponseDto {
    id: string;
    source: string;
    amount: number;
    @Expose({name: 'createdAt'})
    transformCreatedAt() {
        return this.created_at
    }
    created_at: Date;
    @Exclude()
    updated_at: Date;
    type: ReportType;

    constructor(partial: Partial<ReportResponseDto>) {
        Object.assign(this, partial);
    }
}