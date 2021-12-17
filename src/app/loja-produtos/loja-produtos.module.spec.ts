import { LojaProdutosModule } from './loja-produtos.module';

describe('LojaProdutosModule', () => {
  let lojaProdutosModule: LojaProdutosModule;

  beforeEach(() => {
    lojaProdutosModule = new LojaProdutosModule();
  });

  it('should create an instance', () => {
    expect(lojaProdutosModule).toBeTruthy();
  });
});
