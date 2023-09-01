import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";
import { ReportResponseDto } from "./dtos/report.dto";

export class CustomInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler) {
        console.log(context)
        return next.handle().pipe(
            map((item) => {
                const response = {
                    ...item,
                    createdAt: item.created_at
                }

                delete response.created_at
                delete response.updated_at

                console.log(response)

                return response
            })
        )
    }
}