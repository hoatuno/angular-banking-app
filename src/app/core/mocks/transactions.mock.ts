import { Transaction } from '../models/transaction';

export const MOCK_TRANSACTIONS: Transaction[] = [
	{
		id: '1',
		title: 'Salary',
		amount: 15000000,
		date: '2026-02-24',
		type: 'credit'
	},
	{
		id: '2',
		title: 'Coffee',
		amount: -50000,
		date: '2026-02-24',
		type: 'debit'
	}
];