import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import PieChart from '../components/PieChart';

export default function clientsPDF(clients) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  
  

  const reportTitle = [
    {
      text: 'Clientes',
      fontSize: 15,
      bold: true,
      margin: [15, 20, 0, 45]
    }
  ];

  const clientData = clients.map((client) => {
    return [
      {text: client.id, fontSize: 10, margin: [0, 2, 0, 2]},
      {text: client.name, fontSize: 10, margin: [0, 2, 0, 2]},
      {text: client.email, fontSize: 10, margin: [0, 2, 0, 2]},
      {text: client.contact, fontSize: 10, margin: [0, 2, 0, 2]},
      {text: client.location, fontSize: 10, margin: [0, 2, 0, 2]}
    ]
  })

  const details = [
    {
      table: {
        headerRows: 1,
        widths: ['*', '*', '*', '*', '*'],
        body: [
          [
            {text: 'Código', style: 'tableHeader', fontSize: 12},
            {text: 'Nome', style: 'tableHeader', fontSize: 12},
            {text: 'E-mail', style: 'tableHeader', fontSize: 12},
            {text: 'Telefone', style: 'tableHeader', fontSize: 12},
            {text: 'Cidade', style: 'tableHeader', fontSize: 12}
          ],
          ...clientData
        ]
      },
      layout: 'headerLineOnly',
      content: [
        {image}
      ]
    }
  ];

  function Footer(currentPage, pageCount){
    return [
      {
        text: currentPage + '/' + pageCount,
        alignment: 'right',
        fontSize: 10,
        margin: [0, 10, 20, 0]
      }
    ]
  };

  const docDefinitions = {
    pageSize: 'A4',
    pageMargins: [15, 50, 15, 40],
    pageOrientation: 'landscape',

    header: [reportTitle],
    content: [details],
    footer: Footer
  }

  pdfMake.createPdf(docDefinitions).download();

}