import React from 'react';

export default function Home() {
  // Sample data for auction items
  const auctionItems = [
    {
      id: 1,
      title: 'Luxury Handbag',
      description: 'A limited edition designer handbag.',
      currentBid: '$1,500',
      endTime: '3 hours left',
    },
    {
      id: 2,
      title: 'Classic Car Model',
      description: 'A detailed scale model of a vintage car.',
      currentBid: '$750',
      endTime: '6 hours left',
    },
    {
      id: 3,
      title: 'Diamond Necklace',
      description: 'A sparkling diamond necklace with a modern design.',
      currentBid: '$10,000',
      endTime: '1 day left',
    },
    {
      id: 4,
      title: 'Signed Baseball',
      description: 'A baseball signed by a legendary player.',
      currentBid: '$500',
      endTime: '12 hours left',
    },
    {
      id: 5,
      title: 'Antique Clock',
      description: 'A rare antique clock in perfect working condition.',
      currentBid: '$3,200',
      endTime: '8 hours left',
    },
    {
      id: 6,
      title: 'Modern Art Sculpture',
      description: 'A contemporary sculpture by a renowned artist.',
      currentBid: '$7,500',
      endTime: '2 days left',
    },
  ];
  
  return (
    <div>
      <header className="bg-gray-900 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to AuctionApp</h1>
        <p className="mt-3 text-lg">Find unique items and bid for your favorites!</p>
      </header>
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4">Current Auctions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {auctionItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-green-600 font-bold mt-2">Current Bid: {item.currentBid}</p>
              <p className="text-gray-500">{item.endTime}</p>
              <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition">
                Place Bid
              </button>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-4 text-center mt-auto">
  <p>&copy; 2024 AuctionApp. All rights reserved.</p>
</footer>
    </div>
  );
}
