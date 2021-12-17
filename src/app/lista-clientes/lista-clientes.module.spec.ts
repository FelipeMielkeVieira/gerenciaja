import { ListaClientesModule } from './lista-clientes.module';

describe('ListaClientesModule', () => {
  let listaClientesModule: ListaClientesModule;

  beforeEach(() => {
    listaClientesModule = new ListaClientesModule();
  });

  it('should create an instance', () => {
    expect(listaClientesModule).toBeTruthy();
  });
});
