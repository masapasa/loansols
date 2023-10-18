import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])
  const createLoan = async () => {
    // Implement your logic to interact with the "create_loan" smart contract method
  };

  const acceptLoan = async () => {
    // Implement your logic to interact with the "accept_loan" smart contract method
  };

  return (

    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <div className='mt-6'>
          <h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4">
            Solana Token Lending
          </h1>
        </div>
        <h4 className="md:w-full text-2x1 md:text-4xl text-center text-slate-300 my-2">
          <p>Unleash the full power of blockchain with Solana</p>
          <p className='text-slate-500 text-2x1 leading-relaxed'>Get any amount of loan for your project</p>
        </h4>
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-500 rounded-lg blur opacity-40 animate-tilt"></div>
        </div>
        <div className="flex flex-col mt-2">
          <RequestAirdrop />
          <button onClick={createLoan}>Create Loan</button>
          <button onClick={acceptLoan}>Accept Loan</button>
          <h4 className="md:w-full text-2xl text-slate-300 my-2">
            {wallet &&
              <div className="flex flex-row justify-center">
                <div className="bg-white p-5 rounded-lg shadow-md mb-5">
                  <h2 className="text-xl text-gray-700 mb-2">About Us</h2>
                  <p className="text-xl text-gray-700 mb-2">Built on the most advanced blockchain technology, our platform ensures that your tokens are in safe hands.</p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md mb-5">
                  <h2 className="text-xl text-gray-700 mb-2">How It Works</h2>
                  <ul className="list-disc list-inside">
                    <li className="text-xl text-gray-700 mb-2">Create an account and complete the KYC process.</li>
                    <li className="text-xl text-gray-700 mb-2">Deposit tokens into your secure wallet.</li>
                    <li className="text-xl text-gray-700 mb-2">Choose a lending scheme that fits your needs.</li>
                    <li className="text-xl text-gray-700 mb-2">Watch your tokens grow.</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md mb-5">
                  <h2 className="text-xl text-gray-700 mb-2">Benefits</h2>
                  <ul className="list-disc list-inside">
                    <li className="text-xl text-gray-700 mb-2">Highly Secure</li>
                    <li className="text-xl text-gray-700 mb-2">Instant Withdrawals</li>
                    <li className="text-xl text-gray-700 mb-2">Competitive Interest Rates</li>
                    <li className="text-xl text-gray-700 mb-2">24/7 Customer Support</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h2 className="text-xl text-gray-700 mb-2">Get Started</h2>
                  <p className="text-xl text-gray-700 mb-2">Ready to take the next step in growing your digital assets? Join us now.</p>
                  <a href="/register" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 mt-4 inline-block">
                    Join Now
                  </a>
                </div>
              </div>
            }
          </h4>
        </div>
      </div>
    </div>
  );
}