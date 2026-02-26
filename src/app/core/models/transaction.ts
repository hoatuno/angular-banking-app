export interface Transaction {
  id: string;
  accountId: string;
  type: 'deposit' | 'withdraw';
  amount: number;
  createdAt: string;
}
