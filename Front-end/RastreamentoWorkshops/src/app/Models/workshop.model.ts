
export class Workshop {
  constructor(
    public id: number,
    public nome: string,
    public dataRealizacao: Date,
    public colaboradoresIds: number[],
    public descricao?: string,
    public colaboradores?: string[]
  ) {}
}
