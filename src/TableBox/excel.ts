/* eslint-disable default-case */
import XLSX, { Column } from 'exceljs';
import { saveAs } from 'file-saver';
import { IColumn } from './types';

function exportData<T>(rows: T[], columns: IColumn<T>[]): void {
  const workbook = new XLSX.Workbook();
  const worksheet = workbook.addWorksheet('WorkSheet');

  worksheet.columns = columns.map(column => ({
    header: column.title,
    key: column.props[0],
  })) as Partial<Column>[];

  worksheet.addRows(rows);

  workbook.xlsx.writeBuffer().then(data => {
    const blob = new Blob([data], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    saveAs(blob, 'spreadsheet.xlsx');
  });
}

export default exportData;
