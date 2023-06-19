const Shimer = () => {
    return (
        <div className="cardlist">
            {Array(18)
                .fill('')
                .map((e, index) => (
                    <div key={index} className="shimer-card"></div>
                ))}
        </div>
    );
};

export default Shimer;
