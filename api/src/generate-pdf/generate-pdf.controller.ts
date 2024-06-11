import { Controller, Get, Res } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';  // Import path module
import { GeneratePdfService } from './generate-pdf.service';
import { Response } from 'express';

@Controller('api/pdf')
export class GeneratePdfController {
    constructor(private pdfService: GeneratePdfService) { }

    // Route for generate the pdf
    @Get('generate')
    async generatePDF(@Res() res: Response) {
        const filePath = await this.pdfService.generatePDF();
        
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename="${path.basename(filePath)}"`,
        });

        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
    }
}
