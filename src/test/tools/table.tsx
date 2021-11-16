import renderer from 'react-test-renderer';

import React from 'react';
import Table from '../../TableBox';

interface TableData {
  caixa: string;
  descricaoProduto: string;
  endereco: string;
  montagem: string;
  produto: string;
  quantidade: number;
  usuario: string;
  palete: string;
}



test('Link test with image hover', () => {
    const component = renderer.create(
        <Table<TableData> 
        exportList
        columns={[
          {
            title: 'Endereço',
            type: 'string',
            orderable: true,
            props: ['endereco'],
            cssTitle: {
              justifyContent: 'flex-start',
              textAlign: 'left',
            },
            cssProps: {
              width: '5%',
              paddingRight: '8px',
              fontFamily: 'sans-serif',
            },
            cssText: {
              paddingLeft: '8px',
            },
          },
          {
            title: 'Caixa',
            type: 'string',
            orderable: true,
            props: ['caixa'],
            cssTitle: {
              justifyContent: 'flex-start',
              textAlign: 'left',
            },
            cssProps: {
              width: '5%',
              paddingRight: '8px',
              fontFamily: 'sans-serif',
            },
            cssText: {
              paddingLeft: '8px',
              textAlign: 'right',
            },
          },
          {
            title: 'Paletes',
            type: 'string',
            orderable: true,
            props: ['palete'],
            cssTitle: {
              justifyContent: 'flex-start',
              textAlign: 'left',
            },
            cssProps: {
              width: '5%',
              paddingRight: '8px',
              fontFamily: 'sans-serif',
            },
            cssText: {
              paddingLeft: '8px',
              textAlign: 'right',
            },
          },
          {
            title: 'Produto',
            type: 'string',
            orderable: true,
            props: ['produto'],
            cssTitle: {
              justifyContent: 'flex-start',
              textAlign: 'left',
            },
            cssProps: {
              width: '5%',
              paddingRight: '8px',
              fontFamily: 'sans-serif',
            },
            cssText: {
              paddingLeft: '8px',
              textAlign: 'right',
            },
          },
          {
            title: 'Descrição',
            type: 'string',
            orderable: true,
            props: ['descricaoProduto'],
            cssTitle: {
              justifyContent: 'flex-start',
              textAlign: 'left',
            },
            cssProps: {
              width: '10%',
              paddingRight: '8px',
              fontFamily: 'sans-serif',
            },
            cssText: {
              paddingLeft: '8px',
            },
          },
          {
            title: 'Quantidade',
            type: 'number',
            orderable: true,
            props: ['quantidade'],
            cssTitle: {
              justifyContent: 'start',
              textAlign: 'left',
            },
            cssProps: {
              width: '2%',
              paddingRight: '8px',
              fontFamily: 'sans-serif',
            },
            cssText: {
              paddingLeft: '8px',
            },
          },
          {
            title: 'Usuário',
            type: 'string',
            orderable: true,
            props: ['usuario'],
            cssTitle: {
              justifyContent: 'start',
              textAlign: 'left',
            },
            cssProps: {
              width: '3%',
              paddingRight: '8px',
              fontFamily: 'sans-serif',
            },
            cssText: {
              paddingLeft: '8px',
            },
          },
          {
            title: 'Montagem',
            type: 'date',
            orderable: true,
            props: ['montagem'],
            cssTitle: {
              justifyContent: 'flex-start',
              textAlign: 'left',
            },
            cssProps: {
              width: '5%',
              paddingRight: '8px',
              fontFamily: 'sans-serif',
            },
            cssText: {
              paddingLeft: '8px',
            },
          },
        ]}
        rows={[
          {
            endereco: '123456789',
            caixa: '1',
            palete: 'OVER',
            produto: '123456',
            descricaoProduto: 'abcde',
            quantidade: 24,
            usuario: 'Bizzi',
            montagem: '12/14/51',
          },
        ]} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})