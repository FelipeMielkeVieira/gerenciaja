import { GerenciarPedidoModule } from './gerenciar-pedido.module';

describe('GerenciarPedidoModule', () => {
  let gerenciarPedidoModule: GerenciarPedidoModule;

  beforeEach(() => {
    gerenciarPedidoModule = new GerenciarPedidoModule();
  });

  it('should create an instance', () => {
    expect(gerenciarPedidoModule).toBeTruthy();
  });
});
