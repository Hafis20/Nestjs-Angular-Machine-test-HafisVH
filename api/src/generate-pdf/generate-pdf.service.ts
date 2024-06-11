import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as fs from 'fs';
import mongoose from 'mongoose';
import * as path from 'path';
import * as PdfPrinter from 'pdfmake';
import { User } from 'src/schemas/user.schema';
import { UserObj } from 'src/user/user.dto';

@Injectable()
export class GeneratePdfService {
    constructor(
        @InjectModel(User.name) private userModel: mongoose.Model<User>
    ) { }

    async generatePDF(): Promise<string> {
        const usersList: UserObj[] = await this.userModel.find();
        // Prepare table body with headers
        const body = [
            ['Name', 'Email', 'Phone', 'Address'], // Table headers
            ...usersList.map(user => [
                user.name,
                user.email,
                user.phoneNumber,
                user.address
            ])
        ];

        const fonts = {
            Helvetica: {
                normal: 'Helvetica',
                bold: 'Helvetica-Bold',
                italics: 'Helvetica-Oblique',
                bolditalics: 'Helvetica-BoldOblique'
            }
        };
        const printer = new PdfPrinter(fonts);

        const docDefinition = {
            content: [
                { text: 'Users List', fontSize: 25 },
                {
                    layout: 'lightHorizontalLines',
                    table: {
                        headerRows: 1,
                        widths: ['*', 'auto', 100, '*'],
                        body: body
                    },
                },
            ],
            defaultStyle: {
                font: 'Helvetica'
            }
        };

        const options = {};
        const fileName = `PDF_${Date.now()}.pdf`;
        const filePath = path.join(__dirname, '../pdfs', fileName); // Ensure this directory exists

        const pdfDoc = printer.createPdfKitDocument(docDefinition, options);
        pdfDoc.pipe(fs.createWriteStream(filePath));
        pdfDoc.end();

        return filePath;
    }
}
