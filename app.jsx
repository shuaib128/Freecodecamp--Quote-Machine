const { useState, useEffect } = React

function App() {
    const [Quote, setQuote] = useState('');
    const [Author, setAuthor] = useState('');

    /**Genarate quote */
    const generateQuote = () => {
        fetch('https://dummyjson.com/quotes/random')
            .then(res => res.json())
            .then(data => {
                setQuote(data.quote)
                setAuthor(data.author)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    /**Generate quote when first mount */
    useEffect(() => {
        generateQuote()
    }, [])

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                backgroundColor: "rgb(119, 177, 169)"
            }}
        >
            <div
                id="quote-box"
                style={{
                    position: "absolute",
                    backgroundColor: "white",
                    padding: "35px 60px",
                    borderRadius: "5px",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                }}
            >
                <h2
                    id="text"
                    style={{
                        color: "green"
                    }}
                >
                    <i
                        class="fa fa-solid fa-quote-left"
                        style={{
                            marginRight: "10px"
                        }}></i>
                    {Quote}
                </h2>

                <p
                    id="author"
                    style={{
                        textAlign: "right"
                    }}
                >
                    - {Author}
                </p>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <div>
                        <button
                            style={{
                                fontSize: "25px",
                                padding: "5px 10px",
                                borderRadius: "5px",
                                backgroundColor: "green"
                            }}
                        >
                            <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text="${Quote}" ${Author} #quotes`}
                                target="_blank" rel="noopener noreferrer">
                                <i style={{ color: "white" }} class="fa fab fa-twitter"></i>
                            </a>
                        </button>
                    </div>

                    <div>
                        <button
                            onClick={generateQuote}
                            id="new-quote"
                            style={{
                                color: "white",
                                padding: "5px 10px",
                                borderRadius: "5px",
                                backgroundColor: "green"
                            }}
                        >
                            New quote
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />)