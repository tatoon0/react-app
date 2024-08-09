import React, { useEffect, useState } from 'react';

function CoinTracker() {
    const [Loading, setLoading] = useState(true);
    const [Coins, setCoins] = useState([]);
    const [SelctedCoin, setSelectedCoin] = useState(0);
    const [Amount, setAmount] = useState("");
    const inputAmount = (e) => setAmount(e.target.value);
    const selectCoin = (e) => {
        setSelectedCoin(e.target.selectedIndex);;
    }
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
            .then((res) => res.json())
            .then((json) => {
                setCoins(json)
                setLoading(false)
            })
    }, []);
    return (
        <div>
            <h1>Coin Tracker</h1>
            <hr />
            {Loading ? "Loading..." :
                <>
                    <select onChange={selectCoin}>
                        {Coins.map((coin) => (
                            <option key={coin.id}>
                                {coin.name}({coin.symbol})
                            </option>
                        ))}
                    </select>
                    <p>
                        {Coins[SelctedCoin].quotes.USD.price} USD
                    </p>
                    <div>
                        <input 
                            style={{
                                marginTop: "10px",
                            }}
                            value={Amount}
                            onChange={inputAmount}
                            type="number" 
                            placeholder="Amount">
                        </input>
                        <p>
                            {Amount/Coins[SelctedCoin].quotes.USD.price} {Coins[SelctedCoin].symbol}
                        </p>
                    </div>
                </>
            }
        </div>
    )
}

export default CoinTracker;